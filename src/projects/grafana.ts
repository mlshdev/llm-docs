import path from "node:path";
import { isRecord } from "../config.ts";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  parseFrontmatter,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import {
  assertResolvedReferences,
  dropPresentationMarkup,
} from "./hugo-docs.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

const docsRoot = "docs/sources";
const sharedRoot = `${docsRoot}/shared`;
const site = "https://grafana.com";
const label = "Grafana";

interface Page {
  readonly sourcePath: string;
  readonly attributes: Record<string, unknown>;
  readonly body: string;
}

interface DocumentationTree {
  readonly root: Page;
  readonly children: ReadonlyMap<string, readonly Page[]>;
}

interface RenderContext {
  readonly pages: ReadonlyMap<string, Page>;
  readonly tree: DocumentationTree;
  readonly version: string;
  readonly page: Page;
  readonly stack: ReadonlySet<string>;
}

export async function buildGrafana(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  const version = docsVersion(lock.tag);
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const pages = new Map<string, Page>();
      for (const sourcePath of (await listFiles(root)).filter(
        (file) => file.startsWith(`${docsRoot}/`) && file.endsWith(".md"),
      )) {
        const frontmatter = parseFrontmatter(await readUtf8(root, sourcePath));
        pages.set(sourcePath, {
          sourcePath,
          attributes: frontmatter.attributes,
          body: frontmatter.body,
        });
      }
      const tree = buildTree(pages);
      const versions = productVersions(tree.root, version);
      const documents = new DocumentCollector(project.id);
      for (const { page, section } of orderPages(tree)) {
        await documents.collect(page.sourcePath, async () => {
          const expanded = substituteVersions(
            expandPage({
              pages,
              tree,
              version,
              page,
              stack: new Set([page.sourcePath]),
            }),
            versions,
          );
          const body = rewriteMarkdownLinks(
            cleanMarkdown(dropPresentationMarkup(expanded)),
            (url, kind) =>
              resolveGrafanaLink(
                url,
                kind,
                page,
                version,
                pages,
                project.repository,
                lock.sourceCommit,
                archiveFiles,
              ),
          );
          assertResolvedReferences(label, page.sourcePath, body);
          return {
            sourcePath: page.sourcePath,
            outputPath: outputPath(page.sourcePath),
            title: documentTitle(body, page.attributes, page.sourcePath),
            body,
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              page.sourcePath,
            ),
            section,
          };
        });
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          `Page order, sections, and cross-references follow the Hugo weights of docs/sources at the release tag, resolved against ${site}/docs/grafana/${version}/.`,
          "Shared fragments referenced by `docs/shared` and `shared-snippet` are inlined into the pages that render them and are not published separately.",
          "Hugo shortcodes are expanded to plain Markdown; version placeholders are replaced with the pinned release version.",
          "Content that only exists as a website widget is omitted: `docs/ignore` blocks, the `docs/whats-new` release feed, and shared fragments owned by other Grafana products.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      (sourcePath.startsWith(`${docsRoot}/`) && sourcePath.endsWith(".md")),
  );
}

// Grafana publishes documentation per minor release, so v13.2.0 is documented
// at /docs/grafana/v13.2/.
function docsVersion(tag: string): string {
  const match = tag.match(/^v(\d+)\.(\d+)\.\d+$/);
  if (!match) {
    throw new Error(`Unexpected Grafana release tag: ${tag}`);
  }
  return `v${match[1]}.${match[2]}`;
}

function productVersions(
  root: Page,
  version: string,
): ReadonlyMap<string, string> {
  const versions = new Map([
    ["GRAFANA_VERSION", version],
    ["GRAFANA VERSION", version],
  ]);
  const cascade = root.attributes.cascade;
  if (isRecord(cascade)) {
    for (const [key, value] of Object.entries(cascade)) {
      if (key.endsWith("_VERSION") && typeof value === "string") {
        versions.set(key, value);
      }
    }
  }
  return versions;
}

// Every other product placeholder points at documentation this release does not
// pin, so it resolves to the same moving version the Hugo site renders.
function substituteVersions(
  source: string,
  versions: ReadonlyMap<string, string>,
): string {
  return source.replace(/<([A-Z][A-Z0-9_ ]*)>/g, (placeholder, name: string) =>
    /(?:^|[_ ])VERSION$/.test(name)
      ? (versions.get(name) ?? "latest")
      : placeholder,
  );
}

function buildTree(pages: ReadonlyMap<string, Page>): DocumentationTree {
  const root = pages.get(`${docsRoot}/_index.md`);
  if (!root) {
    throw new Error(
      `Missing ${label} documentation root ${docsRoot}/_index.md`,
    );
  }
  const branches = new Set<string>();
  for (const page of pages.values()) {
    const directory = branchDirectory(page.sourcePath);
    if (directory !== undefined && (page === root || isPublished(page))) {
      branches.add(directory);
    }
  }
  const children = new Map<string, Page[]>();
  for (const page of pages.values()) {
    if (page === root || !isPublished(page)) {
      continue;
    }
    const directory = attachmentDirectory(page.sourcePath, branches);
    children.set(directory, [...(children.get(directory) ?? []), page]);
  }
  for (const group of children.values()) {
    group.sort(
      (left, right) =>
        pageWeight(left) - pageWeight(right) ||
        compareCodePoints(pageTitle(left), pageTitle(right)) ||
        compareCodePoints(left.sourcePath, right.sourcePath),
    );
  }
  return { root, children };
}

function isPublished(page: Page): boolean {
  const build = page.attributes._build;
  return (
    !page.sourcePath.startsWith(`${sharedRoot}/`) &&
    page.attributes.draft !== true &&
    page.attributes.headless !== true &&
    !(isRecord(build) && build.render === "never")
  );
}

// A branch page owns the directory it sits in; every other page belongs to the
// directory that contains it.
function containerDirectory(sourcePath: string): string {
  const directory = path.posix.dirname(sourcePath);
  return isBundle(sourcePath) ? path.posix.dirname(directory) : directory;
}

// A directory without an `_index.md` is still a section, but nothing links to
// it, so its pages hang off the closest ancestor that does publish an index.
function attachmentDirectory(
  sourcePath: string,
  branches: ReadonlySet<string>,
): string {
  let directory = containerDirectory(sourcePath);
  while (directory !== docsRoot && !branches.has(directory)) {
    directory = path.posix.dirname(directory);
  }
  return directory;
}

function branchDirectory(sourcePath: string): string | undefined {
  return path.posix.basename(sourcePath) === "_index.md"
    ? path.posix.dirname(sourcePath)
    : undefined;
}

function isBundle(sourcePath: string): boolean {
  return ["_index.md", "index.md"].includes(path.posix.basename(sourcePath));
}

function pageWeight(page: Page): number {
  const weight = page.attributes.weight;
  return typeof weight === "number" && Number.isFinite(weight) ? weight : 0;
}

function pageTitle(page: Page): string {
  for (const candidate of [page.attributes.title, page.attributes.menuTitle]) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }
  return path.posix.basename(page.sourcePath, ".md");
}

function childrenOf(
  tree: DocumentationTree,
  page: Page,
): readonly Page[] | undefined {
  const directory = branchDirectory(page.sourcePath);
  return directory === undefined ? undefined : tree.children.get(directory);
}

function orderPages(
  tree: DocumentationTree,
): readonly { readonly page: Page; readonly section: string }[] {
  const ordered: { page: Page; section: string }[] = [
    { page: tree.root, section: pageTitle(tree.root) },
  ];
  for (const top of childrenOf(tree, tree.root) ?? []) {
    visit(top, pageTitle(top));
  }
  const placed = new Set(ordered.map((entry) => entry.page.sourcePath));
  const unreachable = [...tree.children.values()]
    .flat()
    .filter((page) => !placed.has(page.sourcePath));
  if (unreachable.length > 0) {
    throw new Error(
      `${label} pages are outside the documentation tree: ${unreachable
        .map((page) => page.sourcePath)
        .join(", ")}`,
    );
  }
  return ordered;

  function visit(page: Page, section: string): void {
    ordered.push({ page, section });
    for (const child of childrenOf(tree, page) ?? []) {
      visit(child, section);
    }
  }
}

function route(sourcePath: string): string {
  const relative = sourcePath.slice(`${docsRoot}/`.length).replace(/\.md$/, "");
  const trimmed = relative.replace(/(^|\/)(?:_index|index)$/, "$1");
  return `/${trimmed}${trimmed === "" || trimmed.endsWith("/") ? "" : "/"}`.toLowerCase();
}

function pageUrl(page: Page, version: string): string {
  return `${site}/docs/grafana/${version}${route(page.sourcePath)}`;
}

function outputPath(sourcePath: string): string {
  return `pages/${sourcePath
    .slice(`${docsRoot}/`.length)
    .replace(/(^|\/)_index\.md$/, "$1index.md")}`;
}

interface Shortcode {
  readonly name: string;
  readonly closing: boolean;
  readonly named: ReadonlyMap<string, string>;
  readonly positional: readonly string[];
  readonly start: number;
  readonly end: number;
}

// Shortcodes wrapping page content, rendered by keeping their body.
const pairedShortcodes = new Set([
  "admonition",
  "class",
  "code",
  "collapse",
  "column-list",
  "docs/ignore",
  "docs/list",
  "qa",
  "qa-list",
  "responsive-table",
  "shared",
  "tab-content",
  "tabs",
  "term",
]);

const selfClosingShortcodes = new Set([
  "card-grid",
  "docs/experimental",
  "docs/hero-simple",
  "docs/learning-journeys",
  "docs/play",
  "docs/private-preview",
  "docs/public-preview",
  "docs/shared",
  "docs/whats-new",
  "figure",
  "guide",
  "image-map",
  "ref",
  "relref",
  "section",
  "shared-snippet",
  "video-embed",
  "vimeo",
  "youtube",
]);

const admonitionTitles = new Map([
  ["note", "Note"],
  ["tip", "Tip"],
  ["caution", "Caution"],
  ["warning", "Warning"],
  ["important", "Important"],
]);

function expandPage(context: RenderContext): string {
  return normalizeSpacing(
    renderRegion(resolveReferenceLinks(context.page, context), context),
  );
}

function scanShortcodes(source: string, sourcePath: string): Shortcode[] {
  const found: Shortcode[] = [];
  for (let index = 0; index < source.length; ) {
    const open = source.indexOf("{{", index);
    if (open < 0) {
      break;
    }
    const marker = source[open + 2];
    if ((marker !== "<" && marker !== "%") || source[open - 1] === "\\") {
      index = open + 2;
      continue;
    }
    const close = marker === "<" ? ">}}" : "%}}";
    let cursor = open + 3;
    let quoted = false;
    while (cursor < source.length) {
      if (source[cursor] === '"') {
        quoted = !quoted;
      } else if (!quoted && source.startsWith(close, cursor)) {
        break;
      }
      cursor += 1;
    }
    if (cursor >= source.length) {
      throw new Error(`Unterminated ${label} shortcode in ${sourcePath}`);
    }
    const inner = source
      .slice(open + 3, cursor)
      .replace(/^-|-$/g, "")
      .trim();
    const closing = inner.startsWith("/");
    const body = closing ? inner.slice(1).trim() : inner;
    const name = body.match(/^[A-Za-z0-9_/.-]+/)?.[0];
    if (!name) {
      throw new Error(`Unnamed ${label} shortcode in ${sourcePath}`);
    }
    const { named, positional } = parseArguments(
      body.slice(name.length),
      sourcePath,
    );
    found.push({
      name,
      closing,
      named,
      positional,
      start: open,
      end: cursor + close.length,
    });
    index = cursor + close.length;
  }
  return found;
}

function parseArguments(
  source: string,
  sourcePath: string,
): { named: Map<string, string>; positional: string[] } {
  const named = new Map<string, string>();
  const positional: string[] = [];
  const pattern = /([A-Za-z][\w-]*)=(?:"([^"]*)"|(\S+))|"([^"]*)"|(\S+)/g;
  for (const match of source.matchAll(pattern)) {
    if (match[1] !== undefined) {
      named.set(match[1], match[2] ?? match[3] ?? "");
      continue;
    }
    const value = match[4] ?? match[5];
    if (value !== undefined) {
      positional.push(value);
    }
  }
  if (named.size === 0 && positional.length === 0 && source.trim()) {
    throw new Error(
      `Unparsable ${label} shortcode arguments "${source.trim()}" in ${sourcePath}`,
    );
  }
  return { named, positional };
}

function renderRegion(source: string, context: RenderContext): string {
  const shortcodes = scanShortcodes(source, context.page.sourcePath);
  return renderNodes(source, shortcodes, 0, shortcodes.length, 0, context).text;
}

interface RenderedRegion {
  readonly text: string;
  readonly next: number;
}

function renderNodes(
  source: string,
  shortcodes: readonly Shortcode[],
  from: number,
  until: number,
  offset: number,
  context: RenderContext,
): RenderedRegion {
  let result = "";
  let cursor = offset;
  let index = from;
  while (index < until) {
    const shortcode = shortcodes[index];
    if (!shortcode) {
      break;
    }
    if (shortcode.closing) {
      return {
        text: result + source.slice(cursor, shortcode.start),
        next: index,
      };
    }
    result += source.slice(cursor, shortcode.start);
    cursor = shortcode.end;
    index += 1;
    let inner = "";
    if (pairedShortcodes.has(shortcode.name)) {
      const region = renderNodes(
        source,
        shortcodes,
        index,
        until,
        shortcode.end,
        context,
      );
      const closing = shortcodes[region.next];
      if (!closing || !closing.closing || closing.name !== shortcode.name) {
        throw new Error(
          `Unclosed ${label} shortcode ${shortcode.name} in ${context.page.sourcePath}`,
        );
      }
      inner = region.text;
      index = region.next + 1;
      cursor = closing.end;
    } else if (!selfClosingShortcodes.has(shortcode.name)) {
      throw new Error(
        `Unsupported ${label} shortcode ${shortcode.name} in ${context.page.sourcePath}`,
      );
    }
    result += indentBlock(
      renderShortcode(shortcode, inner, context),
      lineIndent(result),
    );
  }
  return { text: result + source.slice(cursor), next: index };
}

function lineIndent(rendered: string): string {
  const line = rendered.slice(rendered.lastIndexOf("\n") + 1);
  return /^[ \t]*$/.test(line) ? line : "";
}

// Hugo keeps a shortcode's indentation, so a block rendered inside a list item
// has to stay inside that list item.
function indentBlock(rendered: string, indent: string): string {
  if (!indent) {
    return rendered;
  }
  return rendered
    .split("\n")
    .map((line, position) =>
      position === 0 || line === "" ? line : `${indent}${line}`,
    )
    .join("\n");
}

function renderShortcode(
  shortcode: Shortcode,
  inner: string,
  context: RenderContext,
): string {
  const argument = (name: string): string | undefined =>
    shortcode.named.get(name);
  const required = (name: string): string => {
    const value = argument(name);
    if (value === undefined || value === "") {
      throw new Error(
        `${label} ${shortcode.name} shortcode without ${name} in ${context.page.sourcePath}`,
      );
    }
    return value;
  };
  // Video shortcodes take the identifier either named or as the first argument.
  const videoIdentifier = (): string => {
    const id = shortcode.positional[0] ?? argument("id");
    if (id === undefined || id === "") {
      throw new Error(
        `${label} ${shortcode.name} shortcode without an identifier in ${context.page.sourcePath}`,
      );
    }
    return id;
  };
  switch (shortcode.name) {
    case "admonition": {
      const type = argument("type") ?? "note";
      const title = admonitionTitles.get(type);
      if (!title) {
        throw new Error(
          `Unsupported ${label} admonition type "${type}" in ${context.page.sourcePath}`,
        );
      }
      return blockquote(title, inner);
    }
    case "collapse":
      return block(`**${required("title")}**`, inner);
    case "tab-content":
      return block(`**${required("name")}**`, inner);
    case "qa":
      return block(`**${required("question")}**`, inner);
    case "term":
      return inner.trim();
    case "class":
    case "code":
    case "column-list":
    case "docs/list":
    case "qa-list":
    case "responsive-table":
    case "shared":
    case "tabs":
      return `\n\n${inner.trim()}\n\n`;
    // Interactive website content that duplicates the surrounding page.
    case "docs/ignore":
      return "\n\n";
    // A release feed rendered from grafana.com data outside this repository.
    case "docs/whats-new":
      return "\n\n";
    case "figure": {
      const image = `![${argument("alt") ?? ""}](${required("src")})`;
      const caption = argument("caption");
      return block(image, caption ? `_${caption}_` : "");
    }
    case "video-embed":
      return block(
        `[${argument("caption") ?? argument("alt") ?? "Video"}](${required("src")})`,
        "",
      );
    case "youtube": {
      const id = videoIdentifier();
      const start = argument("start");
      return block(
        `[Watch the video on YouTube](https://www.youtube.com/watch?v=${id}${start ? `&t=${start}` : ""})`,
        "",
      );
    }
    case "vimeo":
      return block(
        `[Watch the video on Vimeo](https://vimeo.com/${videoIdentifier()})`,
        "",
      );
    case "docs/play":
      return block(
        `[${required("title")} in Grafana Play](${required("url")})`,
        "",
      );
    case "docs/learning-journeys":
      return block(`[${required("title")}](${required("url")})`, "");
    case "guide":
      return blockquote(required("title"), argument("text") ?? "");
    case "docs/public-preview":
    case "docs/private-preview":
    case "docs/experimental":
      return blockquote(
        previewTitles.get(shortcode.name) ?? "",
        [
          `${required("product")} is ${previewStates.get(shortcode.name) ?? ""}.`,
          ...(argument("featureFlag")
            ? [`Enable it with the ${argument("featureFlag")} feature toggle.`]
            : []),
        ].join(" "),
      );
    case "docs/hero-simple":
      return renderHero(required("key"), context);
    case "card-grid":
      return renderCardGrid(required("key"), context);
    case "image-map":
      return renderImageMap(required("key"), context);
    case "section":
      return renderSection(shortcode, context);
    case "ref":
    case "relref":
      return resolveReference(
        shortcode.positional[0] ?? argument("path") ?? "",
        context,
      );
    case "docs/shared":
      return renderSharedLookup(shortcode, context);
    case "shared-snippet":
      return renderSharedSnippet(shortcode, context);
    default:
      throw new Error(
        `Unsupported ${label} shortcode ${shortcode.name} in ${context.page.sourcePath}`,
      );
  }
}

const previewTitles = new Map([
  ["docs/public-preview", "Public preview"],
  ["docs/private-preview", "Private preview"],
  ["docs/experimental", "Experimental"],
]);

const previewStates = new Map([
  ["docs/public-preview", "in public preview"],
  ["docs/private-preview", "in private preview"],
  ["docs/experimental", "an experimental feature"],
]);

function block(heading: string, body: string): string {
  return `\n\n${[heading, body.trim()].filter(Boolean).join("\n\n")}\n\n`;
}

function blockquote(title: string, body: string): string {
  const lines = [`> **${title}**`];
  const content = normalizeSpacing(body).trim();
  if (content) {
    lines.push(
      ">",
      ...content.split("\n").map((line) => (line ? `> ${line}` : ">")),
    );
  }
  return `\n\n${lines.join("\n")}\n\n`;
}

function renderHero(key: string, context: RenderContext): string {
  const hero = context.page.attributes[key];
  if (!isRecord(hero) || typeof hero.title !== "string") {
    throw new Error(
      `${label} hero "${key}" is missing in ${context.page.sourcePath}`,
    );
  }
  const description =
    typeof hero.description === "string" ? hero.description : "";
  return block(`# ${hero.title}`, description);
}

function renderCardGrid(key: string, context: RenderContext): string {
  const grid = context.page.attributes[key];
  const items = isRecord(grid) ? grid.items : undefined;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(
      `${label} card grid "${key}" is missing in ${context.page.sourcePath}`,
    );
  }
  const lines = items.map((item) => {
    if (!isRecord(item) || typeof item.title !== "string") {
      throw new Error(
        `${label} card grid "${key}" has an untitled card in ${context.page.sourcePath}`,
      );
    }
    const target = typeof item.href === "string" ? item.href : "";
    const description =
      typeof item.description === "string" ? `: ${item.description}` : "";
    return target
      ? `- [${item.title}](${target})${description}`
      : `- **${item.title}**${description}`;
  });
  return `\n\n${lines.join("\n")}\n\n`;
}

function renderImageMap(key: string, context: RenderContext): string {
  const maps = context.page.attributes.image_maps;
  const entry = Array.isArray(maps)
    ? maps.find((candidate) => isRecord(candidate) && candidate.key === key)
    : undefined;
  if (!isRecord(entry) || typeof entry.src !== "string") {
    throw new Error(
      `${label} image map "${key}" is missing in ${context.page.sourcePath}`,
    );
  }
  const points = Array.isArray(entry.points) ? entry.points : [];
  const described = points
    .map((point) =>
      isRecord(point) && typeof point.content === "string"
        ? normalizeSpacing(point.content).trim()
        : "",
    )
    .filter(Boolean);
  return block(
    `![${typeof entry.alt === "string" ? entry.alt : ""}](${entry.src})`,
    described.join("\n\n"),
  );
}

function renderSection(shortcode: Shortcode, context: RenderContext): string {
  const depth = Number.parseInt(shortcode.named.get("depth") ?? "1", 10);
  if (!Number.isFinite(depth) || depth < 1) {
    throw new Error(
      `${label} section depth "${shortcode.named.get("depth") ?? ""}" is invalid in ${context.page.sourcePath}`,
    );
  }
  const withDescriptions = shortcode.named.get("withDescriptions") === "true";
  const useMenuTitle = shortcode.named.get("menuTitle") === "true";
  const lines = list(context.page, depth, "");
  if (lines.length === 0) {
    // A leaf bundle can never hold child pages, so Hugo renders the listing
    // empty; a branch without children means the tree lost a page instead.
    if (branchDirectory(context.page.sourcePath) !== undefined) {
      throw new Error(
        `${label} ${context.page.sourcePath} lists a section without child pages`,
      );
    }
    return "\n\n";
  }
  return `\n\n${lines.join("\n")}\n\n`;

  function list(page: Page, remaining: number, indent: string): string[] {
    if (remaining === 0) {
      return [];
    }
    return (childrenOf(context.tree, page) ?? []).flatMap((child) => {
      const title =
        useMenuTitle && typeof child.attributes.menuTitle === "string"
          ? child.attributes.menuTitle
          : pageTitle(child);
      const description =
        withDescriptions && typeof child.attributes.description === "string"
          ? `: ${child.attributes.description}`
          : "";
      return [
        `${indent}- [${title}](${pageUrl(child, context.version)})${description}`,
        ...list(child, remaining - 1, `${indent}  `),
      ];
    });
  }
}

function renderSharedLookup(
  shortcode: Shortcode,
  context: RenderContext,
): string {
  const lookup = shortcode.named.get("lookup");
  const source = shortcode.named.get("source");
  if (!lookup || !source) {
    throw new Error(
      `${label} docs/shared shortcode without a lookup or source in ${context.page.sourcePath}`,
    );
  }
  // Fragments owned by another product are not part of this repository.
  if (source !== "grafana") {
    return "\n\n";
  }
  return `\n\n${includePage(path.posix.join(sharedRoot, lookup), context).trim()}\n\n`;
}

function renderSharedSnippet(
  shortcode: Shortcode,
  context: RenderContext,
): string {
  const target = shortcode.named.get("path");
  const id = shortcode.named.get("id");
  if (!target || !id) {
    throw new Error(
      `${label} shared-snippet shortcode without a path or id in ${context.page.sourcePath}`,
    );
  }
  const match = target.match(/^\/docs\/grafana\/[^/]+\/(.+)$/);
  if (!match?.[1]) {
    throw new Error(
      `${label} shared-snippet path "${target}" is outside this repository in ${context.page.sourcePath}`,
    );
  }
  // The path names the rendered page, so it stays valid when a page moves
  // between a bundle and a plain file.
  const sourcePath = pageKey(path.posix.join(docsRoot, match[1]));
  const page = pageAt(sourcePath, context.pages);
  if (!page) {
    throw new Error(
      `${label} shared-snippet path "${target}" has no page in ${context.page.sourcePath}`,
    );
  }
  const region = sharedRegion(page, id);
  if (region === undefined) {
    throw new Error(
      `${label} shared-snippet "${id}" is missing from ${page.sourcePath}`,
    );
  }
  const nested = nestedContext(page, context);
  return `\n\n${renderRegion(resolveReferenceLinks(page, nested), nested).trim()}\n\n`;

  function sharedRegion(target: Page, name: string): string | undefined {
    const shortcodes = scanShortcodes(target.body, target.sourcePath);
    for (let index = 0; index < shortcodes.length; index += 1) {
      const open = shortcodes[index];
      if (!open || open.closing || open.name !== "shared") {
        continue;
      }
      if (open.named.get("id") !== name) {
        continue;
      }
      const close = shortcodes
        .slice(index + 1)
        .find((candidate) => candidate.closing && candidate.name === "shared");
      if (!close) {
        throw new Error(
          `Unclosed ${label} shared region "${name}" in ${target.sourcePath}`,
        );
      }
      return target.body.slice(open.end, close.start);
    }
    return undefined;
  }
}

function includePage(sourcePath: string, context: RenderContext): string {
  const page = context.pages.get(sourcePath);
  if (!page) {
    throw new Error(
      `${label} ${context.page.sourcePath} includes missing fragment ${sourcePath}`,
    );
  }
  const nested = nestedContext(page, context);
  return renderRegion(resolveReferenceLinks(page, nested), nested);
}

function nestedContext(page: Page, context: RenderContext): RenderContext {
  if (context.stack.has(page.sourcePath)) {
    throw new Error(`Circular ${label} include detected: ${page.sourcePath}`);
  }
  assertPortableFragment(page, context.page.sourcePath);
  return {
    ...context,
    page,
    stack: new Set([...context.stack, page.sourcePath]),
  };
}

// An inlined fragment keeps the link base of the page that renders it, so it may
// only use references that resolve without one.
function assertPortableFragment(fragment: Page, sourcePath: string): void {
  const references = [
    ...fragment.body.matchAll(/!?\[[^\]]*\]\(([^)\s]+)/g),
    ...fragment.body.matchAll(/\bsrc=(?:"([^"]*)"|'([^']*)')/gi),
  ]
    .map((match) => match[1] ?? match[2] ?? "")
    .filter(
      (url) =>
        url !== "" &&
        !url.startsWith("ref:") &&
        !/^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#|\{\{)/i.test(url),
    );
  if (references.length > 0) {
    throw new Error(
      `${label} fragment ${fragment.sourcePath} uses directory-relative references (${references.join(", ")}) but is included from ${sourcePath}`,
    );
  }
}

// Grafana declares cross-product link targets in frontmatter and refers to them
// as ](ref:name), picking the destination that matches the rendered product.
function resolveReferenceLinks(page: Page, context: RenderContext): string {
  return page.body.replace(
    /\[([^\]]*)\]\(ref:([A-Za-z0-9_-]+)\)/g,
    (_match, text: string, name: string) => {
      const destination = referenceDestination(page, name, context);
      return destination === undefined ? text : `[${text}](${destination})`;
    },
  );
}

// A page that never declares the reference holds no destination to render, so
// the wording stays as prose rather than becoming a dangling link.
function referenceDestination(
  page: Page,
  name: string,
  context: RenderContext,
): string | undefined {
  const refs = page.attributes.refs;
  const entries = isRecord(refs) ? refs[name] : undefined;
  if (!Array.isArray(entries)) {
    return undefined;
  }
  const destinations = entries
    .filter(
      (entry): entry is Record<string, unknown> =>
        isRecord(entry) && typeof entry.destination === "string",
    )
    .sort(
      (left, right) =>
        Number(right.pattern === "/docs/grafana/") -
        Number(left.pattern === "/docs/grafana/"),
    );
  const destination = destinations[0]?.destination;
  if (typeof destination !== "string") {
    throw new Error(
      `${label} ${page.sourcePath} declares reference "${name}" without a destination`,
    );
  }
  return destination.startsWith("/")
    ? `${site}${destination}`
    : new URL(destination, pageUrl(page, context.version)).toString();
}

function resolveReference(target: string, context: RenderContext): string {
  if (!target) {
    throw new Error(
      `${label} reference shortcode without a target in ${context.page.sourcePath}`,
    );
  }
  if (target.startsWith("#")) {
    return target;
  }
  const [pathname = "", anchor = ""] = splitAnchor(target);
  const trimmed = pathname.replace(/\/$/, "");
  const bases = trimmed.startsWith("/")
    ? [docsRoot]
    : [path.posix.dirname(context.page.sourcePath), docsRoot];
  for (const base of bases) {
    const page = pageAt(
      path.posix.normalize(path.posix.join(base, trimmed)),
      context.pages,
    );
    if (page) {
      return `${pageUrl(page, context.version)}${anchor}`;
    }
  }
  // Some references are anchored at the wrong directory upstream. A single page
  // whose path ends with the reference is the unambiguous page it meant.
  const suffix = `/${trimmed.replace(/^[./]+/, "")}`;
  const matches = [...context.pages.values()].filter((page) =>
    pageKey(page.sourcePath).endsWith(suffix),
  );
  const matched = matches[0];
  if (matches.length === 1 && matched) {
    return `${pageUrl(matched, context.version)}${anchor}`;
  }
  throw new Error(
    `${label} reference "${target}" in ${context.page.sourcePath} has no page`,
  );
}

function pageAt(
  resolved: string,
  pages: ReadonlyMap<string, Page>,
): Page | undefined {
  for (const candidate of [
    `${resolved}.md`,
    `${resolved}/_index.md`,
    `${resolved}/index.md`,
  ]) {
    const page = pages.get(candidate);
    if (page) {
      return page;
    }
  }
  return undefined;
}

function pageKey(sourcePath: string): string {
  return sourcePath.replace(/\.md$/, "").replace(/\/(?:_index|index)$/, "");
}

function splitAnchor(url: string): [string, string] {
  const index = url.indexOf("#");
  return index < 0 ? [url, ""] : [url.slice(0, index), url.slice(index)];
}

function resolveGrafanaLink(
  url: string,
  kind: "link" | "image",
  page: Page,
  version: string,
  pages: ReadonlyMap<string, Page>,
  repository: string,
  ref: string,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (!pathname) {
    return url;
  }
  if (pathname.startsWith("/")) {
    return `${site}${pathname}${suffix}`;
  }
  const resolved = path.posix.normalize(
    path.posix.join(
      path.posix.dirname(page.sourcePath),
      pathname.replace(/\/$/, ""),
    ),
  );
  for (const candidate of [
    resolved,
    `${resolved}.md`,
    `${resolved}/_index.md`,
    `${resolved}/index.md`,
  ]) {
    const target = pages.get(candidate);
    if (target) {
      return `${pageUrl(target, version)}${suffix}`;
    }
  }
  if (archiveFiles.has(resolved)) {
    const sourceUrl =
      kind === "image"
        ? githubRawUrl(repository, ref, resolved)
        : githubBlobUrl(repository, ref, resolved);
    return `${sourceUrl}${suffix}`;
  }
  // Directory-style links address sibling routes rather than repository files.
  return `${new URL(pathname, pageUrl(page, version)).toString()}${suffix}`;
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
