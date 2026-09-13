import path from "node:path";
import { exists, readUtf8, withRepositoryArchive } from "../files.ts";
import { normalizeSpacing } from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import { collectEntities, parseDocbook } from "./docbook.ts";
import type { DocbookElement, DocbookNode, DocbookSource } from "./docbook.ts";
import {
  generateErrcodesTable,
  generateFeatureTable,
  generateKeywordsTable,
  generateTargetsMeson,
  generateWaitEventTypes,
} from "./postgres-tables.ts";
import type {
  Document,
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";

const sgmlRoot = "doc/src/sgml";
const bookPath = `${sgmlRoot}/postgres.sgml`;

// Elements that become their own page, mirroring how the manual is published:
// one page per part, chapter preamble, top-level section, and reference entry.
const pageElements = new Set([
  "part",
  "chapter",
  "appendix",
  "preface",
  "sect1",
  "refentry",
  "glossary",
  "bibliography",
]);

// Containers that hold pages rather than becoming one.
const containerElements = new Set(["book", "reference", "article"]);

export async function buildPostgres(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  const major = majorVersion(project.id);
  const release = releaseVersion(lock.tag, major);
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root) => {
      const source = await createSource(root);
      const entities = await collectEntities(
        source,
        bookPath,
        new Map([
          ["version", release],
          ["majorversion", major],
        ]),
      );
      const nodes = await parseDocbook(source, bookPath, entities);
      const book = nodes.find(
        (node): node is DocbookElement =>
          node.type === "element" && node.name === "book",
      );
      if (!book) {
        throw new Error("postgres.sgml does not contain a <book> element");
      }
      const documents = new DocumentCollector(project.id);
      for (const page of planPostgresPages(book, major)) {
        await documents.collect(page.sourcePath, page.render);
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          `PostgreSQL ${major} tracks the highest \`REL_${major}_<minor>\` maintenance-release tag; betas and release candidates are ignored.`,
          "DocBook XML sources are assembled from their declared entities and converted without executing the upstream Make, Meson, Perl, or XSLT toolchain.",
          "Error-code, wait-event, SQL-conformance, key-word, and Meson-target tables the upstream build generates are reproduced from the same checked-in data files.",
        ],
        licenseText: await readUtf8(root, "COPYRIGHT"),
      };
    },
    (sourcePath) =>
      sourcePath === "COPYRIGHT" ||
      sourcePath.startsWith(`${sgmlRoot}/`) ||
      generatedInputs.has(sourcePath),
  );
}

// Data files the upstream build turns into documentation tables.
const generatedInputs = new Set([
  "src/backend/utils/errcodes.txt",
  "src/backend/utils/activity/wait_event_names.txt",
  "src/backend/catalog/sql_features.txt",
  "src/backend/catalog/sql_feature_packages.txt",
  "src/include/parser/kwlist.h",
]);

async function createSource(root: string): Promise<DocbookSource> {
  const inputs = {
    read: (relativePath: string) => readUtf8(root, relativePath),
  };
  const generated = new Map<string, () => Promise<string>>([
    [`${sgmlRoot}/errcodes-table.sgml`, () => generateErrcodesTable(inputs)],
    [`${sgmlRoot}/wait_event_types.sgml`, () => generateWaitEventTypes(inputs)],
    [
      `${sgmlRoot}/features-supported.sgml`,
      () => generateFeatureTable(inputs, true),
    ],
    [
      `${sgmlRoot}/features-unsupported.sgml`,
      () => generateFeatureTable(inputs, false),
    ],
    [`${sgmlRoot}/keywords-table.sgml`, () => generateKeywordsTable(inputs)],
    [`${sgmlRoot}/targets-meson.sgml`, () => generateTargetsMeson(inputs)],
  ]);
  const cache = new Map<string, string>();
  return {
    async read(relativePath: string): Promise<string> {
      const cached = cache.get(relativePath);
      if (cached !== undefined) {
        return cached;
      }
      const generator = generated.get(relativePath);
      const content = generator
        ? await generator()
        : await readUtf8(root, relativePath);
      cache.set(relativePath, content);
      return content;
    },
    async exists(relativePath: string): Promise<boolean> {
      return (
        generated.has(relativePath) || exists(path.join(root, relativePath))
      );
    },
  };
}

// Cross references and footnotes resolve against the whole book, so every page
// is planned before any is rendered. Rendering stays per page, which is what
// confines an unconvertible construct to the one page that carries it.
export interface PlannedPage {
  readonly sourcePath: string;
  render(): Document;
}

export function planPostgresPages(
  book: DocbookElement,
  major: string,
): readonly PlannedPage[] {
  const pages = collectPages(book);
  const context: RenderContext = {
    index: buildIndex(book, pages),
    footnotes: collectFootnotes(book),
    major,
  };
  return pages.map((page) => ({
    sourcePath: sourcePathOf(page),
    render: () => renderPage(page, context, major),
  }));
}

interface Page {
  readonly id: string;
  readonly element: DocbookElement;
  // Content that belongs to the page itself rather than to a nested page.
  readonly content: readonly DocbookNode[];
  readonly title: string;
  readonly section: string;
}

interface RenderContext {
  readonly index: ReadonlyMap<string, PageAnchor>;
  readonly footnotes: ReadonlyMap<string, DocbookElement>;
  readonly major: string;
}

interface PageAnchor {
  readonly page: string;
  readonly anchor?: string;
  readonly title: string;
}

function collectPages(book: DocbookElement): readonly Page[] {
  const pages: Page[] = [];
  walk(book, sectionTitle(book) || "PostgreSQL");
  return pages;

  function walk(element: DocbookElement, section: string): void {
    const nested: DocbookElement[] = [];
    const own: DocbookNode[] = [];
    for (const child of element.children) {
      if (
        child.type === "element" &&
        (pageElements.has(child.name) || containerElements.has(child.name))
      ) {
        nested.push(child);
        continue;
      }
      own.push(child);
    }
    if (pageElements.has(element.name)) {
      const id = element.attributes.id;
      if (id) {
        pages.push({
          id,
          element,
          content: own,
          title: sectionTitle(element),
          section,
        });
      }
    }
    const childSection = pageElements.has(element.name)
      ? sectionTitle(element) || section
      : section;
    for (const child of nested) {
      walk(child, element.name === "book" ? sectionTitle(child) : childSection);
    }
  }
}

// Every `id` in the book resolves to the page that carries it, so a cross
// reference becomes a link inside the corpus rather than a dangling anchor.
function buildIndex(
  book: DocbookElement,
  pages: readonly Page[],
): ReadonlyMap<string, PageAnchor> {
  const index = new Map<string, PageAnchor>();
  const pageIds = new Set(pages.map((page) => page.id));
  const titles = new Map(pages.map((page) => [page.id, page.title]));
  // An id declared above any page — the book itself, or a part that carries no
  // page of its own — resolves to the first page underneath it.
  const pending: { id: string; title: string }[] = [];
  walk(book, undefined);
  const first = pages[0];
  if (first) {
    for (const entry of pending) {
      index.set(entry.id, {
        page: first.id,
        title: entry.title || first.title,
      });
    }
  }
  return index;

  function walk(
    element: DocbookElement,
    currentPage: string | undefined,
  ): void {
    const id = element.attributes.id;
    const page = id && pageIds.has(id) ? id : currentPage;
    if (id && !index.has(id)) {
      const title = sectionTitle(element);
      if (page === undefined) {
        pending.push({ id, title });
      } else if (id === page) {
        index.set(id, { page, title: titles.get(page) ?? title });
      } else {
        index.set(id, {
          page,
          anchor: headingAnchor(title) || id,
          title: title || titles.get(page) || id,
        });
      }
    }
    for (const child of element.children) {
      if (child.type === "element") {
        walk(child, page);
      }
    }
  }
}

// A `<footnoteref>` repeats a footnote written elsewhere, most often once per
// row of a table. The corpus has no footnote apparatus, so every reference
// re-emits the note's own text.
function collectFootnotes(
  book: DocbookElement,
): ReadonlyMap<string, DocbookElement> {
  const footnotes = new Map<string, DocbookElement>();
  walk(book);
  return footnotes;

  function walk(element: DocbookElement): void {
    const id = element.attributes.id;
    if (element.name === "footnote" && id && !footnotes.has(id)) {
      footnotes.set(id, element);
    }
    for (const child of element.children) {
      if (child.type === "element") {
        walk(child);
      }
    }
  }
}

function renderPage(
  page: Page,
  context: RenderContext,
  major: string,
): Document {
  const body = normalizeSpacing(
    [`# ${page.title}`, renderBlocks(page.content, context, 2)]
      .filter((part) => part.trim() !== "")
      .join("\n\n"),
  );
  return {
    sourcePath: sourcePathOf(page),
    outputPath: `pages/${page.id}.md`,
    title: page.title,
    body,
    canonicalUrl: `https://www.postgresql.org/docs/${major}/${page.id}.html`,
    section: page.section,
  };
}

function sourcePathOf(page: Page): string {
  return `${page.element.sourcePath}#${page.id}`;
}

function sectionTitle(element: DocbookElement): string {
  const title = element.children.find(
    (child): child is DocbookElement =>
      child.type === "element" &&
      (child.name === "title" || child.name === "refentrytitle"),
  );
  if (title) {
    return plainText(title.children).trim();
  }
  const refmeta = element.children.find(
    (child): child is DocbookElement =>
      child.type === "element" && child.name === "refnamediv",
  );
  if (refmeta) {
    const name = refmeta.children.find(
      (child): child is DocbookElement =>
        child.type === "element" && child.name === "refname",
    );
    if (name) {
      return plainText(name.children).trim();
    }
  }
  return "";
}

function plainText(nodes: readonly DocbookNode[]): string {
  return nodes
    .map((node) =>
      node.type === "text" ? node.value : plainText(node.children),
    )
    .join("")
    .replace(/\s+/g, " ");
}

// Inline elements rendered by wrapping their text.
const inlineWrappers: ReadonlyMap<string, readonly [string, string]> = new Map([
  ["literal", ["`", "`"]],
  ["command", ["`", "`"]],
  ["function", ["`", "`"]],
  ["type", ["`", "`"]],
  ["varname", ["`", "`"]],
  ["option", ["`", "`"]],
  ["parameter", ["`", "`"]],
  ["structname", ["`", "`"]],
  ["structfield", ["`", "`"]],
  ["symbol", ["`", "`"]],
  ["token", ["`", "`"]],
  ["envar", ["`", "`"]],
  ["filename", ["`", "`"]],
  ["application", ["`", "`"]],
  ["classname", ["`", "`"]],
  ["errorname", ["`", "`"]],
  ["interfacename", ["`", "`"]],
  ["methodname", ["`", "`"]],
  ["constant", ["`", "`"]],
  ["userinput", ["`", "`"]],
  ["computeroutput", ["`", "`"]],
  ["systemitem", ["`", "`"]],
  ["database", ["`", "`"]],
  ["property", ["`", "`"]],
  ["markup", ["`", "`"]],
  ["sgmltag", ["`", "`"]],
  ["code", ["`", "`"]],
  ["uri", ["`", "`"]],
  ["package", ["`", "`"]],
  ["keycap", ["`", "`"]],
  ["guilabel", ["`", "`"]],
  ["guimenu", ["`", "`"]],
  ["guimenuitem", ["`", "`"]],
  ["guibutton", ["`", "`"]],
  ["mousebutton", ["`", "`"]],
  ["accel", ["`", "`"]],
  ["prompt", ["`", "`"]],
  ["replaceable", ["`", "`"]],
  ["firstterm", ["*", "*"]],
  ["foreignphrase", ["*", "*"]],
  ["citetitle", ["*", "*"]],
  ["wordasword", ["*", "*"]],
  ["glossterm", ["*", "*"]],
  ["termdef", ["*", "*"]],
  ["title", ["*", "*"]],
  ["subtitle", ["*", "*"]],
  ["quote", ["“", "”"]],
  ["optional", ["[", "]"]],
]);

// Inline elements whose text passes through unchanged.
const inlinePassthrough = new Set([
  "phrase",
  "acronym",
  "abbrev",
  "productname",
  "productnumber",
  "trademark",
  "orgname",
  "personname",
  "firstname",
  "surname",
  "author",
  "corpauthor",
  "date",
  "year",
  "holder",
  "copyright",
  "primary",
  "secondary",
  "tertiary",
  "see",
  "seealso",
  "titleabbrev",
  "comment",
  "remark",
  "anchor",
  "indexterm",
  "contrib",
  "affiliation",
  "othercredit",
  "releaseinfo",
  "pubdate",
  "revhistory",
  // Bibliography metadata, rendered as part of the entry's running text.
  "authorgroup",
  "biblioset",
  "honorific",
  "edition",
  "address",
  "publisher",
  "publishername",
  "isbn",
  "pubsnumber",
  "volumenum",
  "issuenum",
  "pagenums",
  "confgroup",
  "conftitle",
  "confdates",
  "bibliomisc",
]);

// Elements carrying no corpus content.
const droppedElements = new Set([
  "indexterm",
  "anchor",
  "comment",
  "remark",
  "titleabbrev",
  "colspec",
  "spanspec",
  "refmeta",
  "refmiscinfo",
  "manvolnum",
  "bookinfo",
  "articleinfo",
  "printhistory",
  "revhistory",
]);

// DocBook allows block constructs inside a paragraph. Inline runs become
// paragraphs of their own and nested blocks keep their position in the flow.
const blockElements = new Set([
  "para",
  "simpara",
  "formalpara",
  "itemizedlist",
  "orderedlist",
  "variablelist",
  "simplelist",
  "glosslist",
  "procedure",
  "calloutlist",
  "programlisting",
  "screen",
  "synopsis",
  "literallayout",
  "cmdsynopsis",
  "table",
  "informaltable",
  "note",
  "tip",
  "warning",
  "caution",
  "important",
  "sidebar",
  "example",
  "informalexample",
  "figure",
  "informalfigure",
  "blockquote",
  "epigraph",
  "mediaobject",
  "bibliodiv",
  "biblioentry",
  "bibliomixed",
  "abstract",
  "sect1",
  "sect2",
  "sect3",
  "sect4",
  "sect5",
  "refsect1",
  "refsect2",
  "refsect3",
]);

function renderMixed(
  nodes: readonly DocbookNode[],
  context: RenderContext,
  depth: number,
): string {
  const blocks: string[] = [];
  let inline: DocbookNode[] = [];
  const flush = (): void => {
    if (inline.length === 0) {
      return;
    }
    const text = renderInline(inline, context).trim();
    inline = [];
    if (text !== "") {
      blocks.push(text);
    }
  };
  for (const node of nodes) {
    if (node.type === "element" && blockElements.has(node.name)) {
      flush();
      const block = renderBlockElement(node, context, depth);
      if (block.trim() !== "") {
        blocks.push(block);
      }
      continue;
    }
    inline.push(node);
  }
  flush();
  return blocks.join("\n\n");
}

function renderBlocks(
  nodes: readonly DocbookNode[],
  context: RenderContext,
  depth: number,
): string {
  const blocks: string[] = [];
  for (const node of nodes) {
    if (node.type === "text") {
      const text = node.value.replace(/\s+/g, " ").trim();
      if (text !== "") {
        blocks.push(escapeText(text));
      }
      continue;
    }
    const block = renderBlockElement(node, context, depth);
    if (block.trim() !== "") {
      blocks.push(block);
    }
  }
  return blocks.join("\n\n");
}

function renderBlockElement(
  element: DocbookElement,
  context: RenderContext,
  depth: number,
): string {
  const { name } = element;
  if (droppedElements.has(name)) {
    return "";
  }
  switch (name) {
    case "title":
      return "";
    case "para":
    case "simpara":
      return renderMixed(element.children, context, depth);
    case "formalpara": {
      const title = sectionTitle(element);
      const body = renderBlocks(withoutTitle(element), context, depth);
      return title ? `**${title}** ${body}`.trim() : body;
    }
    case "sect2":
    case "sect3":
    case "sect4":
    case "sect5":
    case "refsect1":
    case "refsect2":
    case "refsect3":
    case "simplesect":
    case "refsynopsisdiv":
    case "partintro":
    case "abstract":
    case "highlights": {
      const title = sectionTitle(element) || defaultSectionTitle(name);
      const body = renderBlocks(withoutTitle(element), context, depth + 1);
      const heading = title ? `${"#".repeat(Math.min(depth, 6))} ${title}` : "";
      return [heading, body].filter((part) => part.trim() !== "").join("\n\n");
    }
    case "refnamediv": {
      const purpose = element.children.find(
        (child): child is DocbookElement =>
          child.type === "element" && child.name === "refpurpose",
      );
      return purpose ? `${renderInline(purpose.children, context).trim()}` : "";
    }
    case "refname":
    case "refpurpose":
      return renderInline(element.children, context).trim();
    case "programlisting":
    case "screen":
    case "synopsis":
    case "literallayout":
      return fence(literalText(element.children), codeLanguage(element));
    case "cmdsynopsis":
      return fence(plainText(element.children).trim(), "");
    case "itemizedlist":
    case "simplelist":
      return renderList(element, context, depth, () => "-");
    case "orderedlist":
    case "procedure":
      return renderList(element, context, depth, (position) => `${position}.`);
    case "variablelist":
    case "glosslist":
      return renderVariableList(element, context, depth);
    case "listitem":
    case "step":
    case "member":
    case "glossdef":
      return renderBlocks(element.children, context, depth);
    case "substeps":
      return renderList(element, context, depth, (position) => `${position}.`);
    case "attribution":
      return `— ${renderInline(element.children, context).trim()}`;
    case "table":
    case "informaltable":
      return renderTable(element, context, depth);
    case "note":
    case "tip":
    case "warning":
    case "caution":
    case "important":
    case "sidebar":
      return renderAdmonition(element, context, depth);
    case "example":
    case "informalexample":
    case "figure":
    case "informalfigure": {
      const title = sectionTitle(element);
      const body = renderBlocks(withoutTitle(element), context, depth);
      return title ? `**${title}**\n\n${body}` : body;
    }
    case "blockquote":
    case "epigraph":
      return quoteBlock(renderBlocks(withoutTitle(element), context, depth));
    case "footnote":
      return renderBlocks(element.children, context, depth);
    case "glossentry": {
      const term = element.children.find(
        (child): child is DocbookElement =>
          child.type === "element" && child.name === "glossterm",
      );
      const definition = renderBlocks(
        element.children.filter(
          (child) => child.type !== "element" || child.name !== "glossterm",
        ),
        context,
        depth,
      );
      const label = term ? renderInline(term.children, context).trim() : "";
      return label ? `**${label}**\n\n${indent(definition)}` : definition;
    }
    case "glossseealso":
    case "glosssee":
      return `See also: ${renderInline(element.children, context).trim()}`;
    case "bibliomixed":
    case "biblioentry":
      return renderMixed(element.children, context, depth);
    case "bibliodiv": {
      const title = sectionTitle(element);
      const body = renderBlocks(withoutTitle(element), context, depth + 1);
      return [title ? `${"#".repeat(Math.min(depth, 6))} ${title}` : "", body]
        .filter((part) => part.trim() !== "")
        .join("\n\n");
    }
    case "calloutlist":
      return renderList(element, context, depth, () => "-");
    case "callout":
      return renderBlocks(element.children, context, depth);
    case "legalnotice":
      return renderBlocks(withoutTitle(element), context, depth);
    case "tgroup":
    case "tbody":
    case "thead":
    case "tfoot":
    case "entry":
    case "row":
      return renderBlocks(element.children, context, depth);
    case "mediaobject":
    case "inlinemediaobject":
    case "imageobject":
    case "textobject":
      return renderBlocks(element.children, context, depth);
    case "imagedata":
      return "";
    case "caption":
      return renderBlocks(element.children, context, depth);
    default:
      // An inline element — most often a cross reference — can stand alone
      // where a block is expected. The inline renderer rejects anything it
      // does not handle either, so nothing passes through unconverted.
      return renderInline([element], context).trim();
  }
}

function defaultSectionTitle(name: string): string {
  return name === "refsynopsisdiv"
    ? "Synopsis"
    : name === "abstract"
      ? "Abstract"
      : "";
}

function withoutTitle(element: DocbookElement): readonly DocbookNode[] {
  return element.children.filter(
    (child) =>
      child.type !== "element" ||
      (child.name !== "title" && child.name !== "titleabbrev"),
  );
}

function renderList(
  element: DocbookElement,
  context: RenderContext,
  depth: number,
  marker: (position: number) => string,
): string {
  const title = sectionTitle(element);
  const items: string[] = [];
  let position = 1;
  for (const child of element.children) {
    if (child.type !== "element") {
      continue;
    }
    if (child.name === "title") {
      continue;
    }
    if (
      child.name === "listitem" ||
      child.name === "member" ||
      child.name === "step" ||
      child.name === "callout"
    ) {
      const body = renderBlocks(child.children, context, depth).trim();
      if (body === "") {
        continue;
      }
      const bullet = marker(position);
      position += 1;
      items.push(`${bullet} ${indentContinuation(body, bullet.length + 1)}`);
    }
  }
  const list = items.join("\n");
  return title ? `**${title}**\n\n${list}` : list;
}

function renderVariableList(
  element: DocbookElement,
  context: RenderContext,
  depth: number,
): string {
  const title = sectionTitle(element);
  const entries: string[] = [];
  for (const child of element.children) {
    if (child.type !== "element" || child.name !== "varlistentry") {
      continue;
    }
    const terms = child.children
      .filter(
        (node): node is DocbookElement =>
          node.type === "element" && node.name === "term",
      )
      .map((term) => renderInline(term.children, context).trim())
      .filter((term) => term !== "");
    const body = renderBlocks(
      child.children.filter(
        (node) => node.type !== "element" || node.name !== "term",
      ),
      context,
      depth,
    ).trim();
    if (terms.length === 0 && body === "") {
      continue;
    }
    entries.push(
      [
        terms.length > 0 ? `**${terms.join(", ")}**` : "",
        body === "" ? "" : indent(body),
      ]
        .filter((part) => part !== "")
        .join("\n\n"),
    );
  }
  const list = entries.join("\n\n");
  return title ? `**${title}**\n\n${list}` : list;
}

function renderAdmonition(
  element: DocbookElement,
  context: RenderContext,
  depth: number,
): string {
  const label = sectionTitle(element) || titleFor(element.name);
  const body = renderBlocks(withoutTitle(element), context, depth);
  return quoteBlock([`**${label}**`, body].filter(Boolean).join("\n\n"));
}

function titleFor(name: string): string {
  return `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
}

interface TableCell {
  readonly text: string;
  readonly spans: boolean;
}

// CALS tables become Markdown tables when every cell is inline content. A table
// whose cells carry paragraphs, lists, or code — as the function reference does
// — becomes a definition list instead, which survives the round trip intact.
function renderTable(
  element: DocbookElement,
  context: RenderContext,
  depth: number,
): string {
  const title = sectionTitle(element);
  const group = findDescendant(element, "tgroup");
  if (!group) {
    return renderBlocks(withoutTitle(element), context, depth);
  }
  const head = findChild(group, "thead");
  const body = findChild(group, "tbody");
  const headRows = head ? rowsOf(head) : [];
  const bodyRows = body ? rowsOf(body) : [];
  const complex = [...headRows, ...bodyRows].some((row) =>
    entriesOf(row).some((entry) => hasBlockContent(entry)),
  );
  const heading = title ? `**${title}**` : "";
  if (complex) {
    const headers = headRows[0]
      ? entriesOf(headRows[0]).map((entry) => renderCell(entry, context, depth))
      : [];
    const blocks = bodyRows.map((row) => {
      const cells = entriesOf(row);
      return cells
        .map((cell, position) => {
          const rendered = renderBlocks(cell.children, context, depth).trim();
          if (rendered === "") {
            return "";
          }
          const label = headers[position];
          return cells.length > 1 && label
            ? `**${label}**\n\n${indent(rendered)}`
            : rendered;
        })
        .filter((part) => part !== "")
        .join("\n\n");
    });
    return [heading, blocks.filter((block) => block !== "").join("\n\n---\n\n")]
      .filter((part) => part !== "")
      .join("\n\n");
  }
  const toCells = (row: DocbookElement): readonly TableCell[] =>
    entriesOf(row).map((entry) => ({
      text: renderCell(entry, context, depth),
      spans: entry.attributes.spanname !== undefined,
    }));
  const headCells = headRows.map(toCells);
  const bodyCells = bodyRows.map(toCells);
  const columns = Math.max(
    1,
    ...[...headCells, ...bodyCells].map((row) => row.length),
  );
  const line = (cells: readonly TableCell[]): string => {
    const padded = [...cells.map((cell) => cell.text)];
    while (padded.length < columns) {
      padded.push("");
    }
    return `| ${padded.map(escapeCell).join(" | ")} |`;
  };
  const header = headCells[0] ?? [];
  const rows = [
    line(header),
    `| ${Array.from({ length: columns }, () => "---").join(" | ")} |`,
    ...headCells.slice(1).map(line),
    ...bodyCells.map(line),
  ];
  return [heading, rows.join("\n")].filter((part) => part !== "").join("\n\n");
}

// A Markdown table cell holds one line, so a cell whose source wraps its text
// in a paragraph is flattened rather than rejected.
function renderCell(
  entry: DocbookElement,
  context: RenderContext,
  depth: number,
): string {
  return renderMixed(entry.children, context, depth)
    .replace(/\s*\n+\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function rowsOf(element: DocbookElement): readonly DocbookElement[] {
  return element.children.filter(
    (child): child is DocbookElement =>
      child.type === "element" && child.name === "row",
  );
}

function entriesOf(row: DocbookElement): readonly DocbookElement[] {
  return row.children.filter(
    (child): child is DocbookElement =>
      child.type === "element" &&
      (child.name === "entry" || child.name === "entrytbl"),
  );
}

function hasBlockContent(element: DocbookElement): boolean {
  let paragraphs = 0;
  for (const child of element.children) {
    if (child.type !== "element") {
      continue;
    }
    if (
      child.name === "programlisting" ||
      child.name === "screen" ||
      child.name === "synopsis" ||
      child.name === "itemizedlist" ||
      child.name === "orderedlist" ||
      child.name === "variablelist" ||
      child.name === "table" ||
      child.name === "informaltable" ||
      child.name === "note" ||
      child.name === "literallayout"
    ) {
      return true;
    }
    if (child.name === "para" || child.name === "simpara") {
      paragraphs += 1;
    }
  }
  return paragraphs > 1;
}

function findChild(
  element: DocbookElement,
  name: string,
): DocbookElement | undefined {
  return element.children.find(
    (child): child is DocbookElement =>
      child.type === "element" && child.name === name,
  );
}

function findDescendant(
  element: DocbookElement,
  name: string,
): DocbookElement | undefined {
  for (const child of element.children) {
    if (child.type !== "element") {
      continue;
    }
    if (child.name === name) {
      return child;
    }
    const found = findDescendant(child, name);
    if (found) {
      return found;
    }
  }
  return undefined;
}

function renderInline(
  nodes: readonly DocbookNode[],
  context: RenderContext,
): string {
  let result = "";
  for (const node of nodes) {
    if (node.type === "text") {
      result += escapeText(node.value.replace(/\s+/g, " "));
      continue;
    }
    result += renderInlineElement(node, context);
  }
  return collapseSpaces(result);
}

function renderInlineElement(
  element: DocbookElement,
  context: RenderContext,
): string {
  const { name } = element;
  if (droppedElements.has(name)) {
    return "";
  }
  switch (name) {
    case "xref": {
      const target = element.attributes.linkend ?? "";
      const anchor = context.index.get(target);
      if (!anchor) {
        throw new Error(`Unresolved cross reference to "${target}"`);
      }
      return `[${anchor.title || target}](${linkTo(anchor)})`;
    }
    case "citerefentry": {
      const title = element.children.find(
        (child): child is DocbookElement =>
          child.type === "element" && child.name === "refentrytitle",
      );
      const volume = element.children.find(
        (child): child is DocbookElement =>
          child.type === "element" && child.name === "manvolnum",
      );
      const entry = title ? plainText(title.children).trim() : "";
      return volume
        ? `\`${entry}\`(${plainText(volume.children).trim()})`
        : `\`${entry}\``;
    }
    case "refentrytitle":
      return `\`${plainText(element.children).trim()}\``;
    case "link": {
      const target = element.attributes.linkend;
      const text = renderInline(element.children, context).trim();
      if (!target) {
        return text;
      }
      const anchor = context.index.get(target);
      if (!anchor) {
        throw new Error(`Unresolved link to "${target}"`);
      }
      return `[${text || anchor.title || target}](${linkTo(anchor)})`;
    }
    case "ulink": {
      const url = element.attributes.url ?? "";
      const text = renderInline(element.children, context).trim();
      return text ? `[${text}](${url})` : url;
    }
    case "email": {
      const text = renderInline(element.children, context).trim();
      return `[${text}](mailto:${text})`;
    }
    case "emphasis":
      return element.attributes.role === "bold" ||
        element.attributes.role === "strong"
        ? `**${renderInline(element.children, context).trim()}**`
        : `*${renderInline(element.children, context).trim()}*`;
    case "subscript":
      return `_${renderInline(element.children, context).trim()}`;
    case "superscript":
      return `^${renderInline(element.children, context).trim()}`;
    case "lineannotation":
      return `(${renderInline(element.children, context).trim()})`;
    case "footnote":
      return ` (${plainText(element.children).trim()})`;
    case "footnoteref": {
      const target = element.attributes.linkend ?? "";
      const footnote = context.footnotes.get(target);
      if (!footnote) {
        throw new Error(`Unresolved footnote reference to "${target}"`);
      }
      return ` (${plainText(footnote.children).trim()})`;
    }
    // The manual writes a function's example and its result as adjacent
    // elements, relying on the stylesheet to insert the arrow between them.
    case "returnvalue": {
      const value = stripMarkup(renderInline(element.children, context).trim());
      return value === "" ? "→" : `→ \`${value}\``;
    }
    case "keycombo":
      return element.children
        .filter((child): child is DocbookElement => child.type === "element")
        .map((child) => renderInlineElement(child, context))
        .join(element.attributes.action === "seq" ? " " : "+");
    case "sbr":
    case "br":
      return " ";
    case "void":
      return "";
    case "arg": {
      const text = renderInline(element.children, context).trim();
      return element.attributes.choice === "opt" ? `[${text}]` : text;
    }
    case "group": {
      const text = renderInline(element.children, context).trim();
      return element.attributes.choice === "opt" ? `[${text}]` : text;
    }
    case "programlisting":
    case "screen":
    case "synopsis":
    case "literallayout":
      return `\`${literalText(element.children).replace(/\s+/g, " ").trim()}\``;
    default: {
      const wrapper = inlineWrappers.get(name);
      if (wrapper) {
        const text = renderInline(element.children, context).trim();
        if (text === "") {
          return "";
        }
        // A code span cannot nest, so inner formatting is stripped rather
        // than emitted as literal backticks.
        return wrapper[0] === "`"
          ? `\`${stripMarkup(text)}\``
          : `${wrapper[0]}${text}${wrapper[1]}`;
      }
      if (inlinePassthrough.has(name)) {
        return renderInline(element.children, context);
      }
      throw new Error(`Unhandled inline DocBook element <${name}>`);
    }
  }
}

function linkTo(anchor: PageAnchor): string {
  return anchor.anchor
    ? `./${anchor.page}.md#${anchor.anchor}`
    : `./${anchor.page}.md`;
}

function literalText(nodes: readonly DocbookNode[]): string {
  return nodes
    .map((node) =>
      node.type === "text" ? node.value : literalText(node.children),
    )
    .join("");
}

function codeLanguage(element: DocbookElement): string {
  return element.name === "programlisting" ? "sql" : "";
}

function fence(body: string, language: string): string {
  const trimmed = body.replace(/^\n+|\s+$/g, "");
  if (trimmed === "") {
    return "";
  }
  const ticks = "`".repeat(Math.max(3, longestBacktickRun(trimmed) + 1));
  return `${ticks}${language}\n${trimmed}\n${ticks}`;
}

function longestBacktickRun(value: string): number {
  let longest = 0;
  for (const match of value.matchAll(/`+/g)) {
    longest = Math.max(longest, match[0].length);
  }
  return longest;
}

function quoteBlock(body: string): string {
  return body
    .split("\n")
    .map((line) => (line === "" ? ">" : `> ${line}`))
    .join("\n");
}

function indent(body: string): string {
  return body
    .split("\n")
    .map((line) => (line === "" ? "" : `  ${line}`))
    .join("\n");
}

function indentContinuation(body: string, width: number): string {
  const padding = " ".repeat(width);
  return body
    .split("\n")
    .map((line, position) =>
      position === 0 || line === "" ? line : `${padding}${line}`,
    )
    .join("\n");
}

function headingAnchor(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function escapeText(value: string): string {
  return value.replace(/([\\`*_[\]<>])/g, "\\$1");
}

function stripMarkup(value: string): string {
  return value.replace(/\\([\\`*_[\]<>])/g, "$1").replace(/[`*]/g, "");
}

function escapeCell(value: string): string {
  return value.replace(/\|/g, "\\|");
}

function collapseSpaces(value: string): string {
  return value.replace(/[ \t]{2,}/g, " ");
}

function majorVersion(projectId: string): string {
  const major = /^postgres-(\d+)$/.exec(projectId)?.[1];
  if (!major) {
    throw new Error(
      `Project ${projectId} does not name a PostgreSQL major version`,
    );
  }
  return major;
}

function releaseVersion(tag: string, major: string): string {
  const minor = new RegExp(`^REL_${major}_(\\d+)$`).exec(tag)?.[1];
  if (minor === undefined) {
    throw new Error(
      `Tag ${tag} is not a PostgreSQL ${major} maintenance release`,
    );
  }
  return `${major}.${minor}`;
}
