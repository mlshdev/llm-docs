import path from "node:path";
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
import { isRecord } from "../config.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

const docsSite = "https://docs.victoriametrics.com";

interface Page {
  readonly sourcePath: string;
  readonly attributes: Record<string, unknown>;
  readonly body: string;
}

interface NavEntry {
  readonly page: Page;
  readonly identifier: string;
  readonly parent?: string;
  readonly weight: number;
  readonly label: string;
}

export async function buildVictoriametrics(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const pages = new Map<string, Page>();
      for (const sourcePath of (await listFiles(root)).filter((file) =>
        /^docs\/.*\.md$/.test(file),
      )) {
        const frontmatter = parseFrontmatter(await readUtf8(root, sourcePath));
        pages.set(sourcePath, {
          sourcePath,
          attributes: frontmatter.attributes,
          body: frontmatter.body,
        });
      }
      const fragments = collectFragments(pages);
      const rendered = [...pages.values()].filter(
        (page) => !fragments.has(page.sourcePath),
      );
      const navigation = buildNavigation(rendered);
      const siteUrls = new Map(
        [...pages.keys()].map((sourcePath) => [
          sourcePath,
          `${docsSite}${sitePath(sourcePath)}`,
        ]),
      );
      const documents: Document[] = [];
      for (const { page, section } of orderPages(rendered, navigation)) {
        const expanded = expandShortcodes(
          expandContentIncludes(page, pages, new Set([page.sourcePath])),
          page.sourcePath,
          navigation,
          siteUrls,
        );
        const body = rewriteMarkdownLinks(
          cleanMarkdown(dropPresentationMarkup(expanded)),
          (url, kind) =>
            resolveVictoriametricsLink(
              url,
              kind,
              page.sourcePath,
              project.repository,
              lock.sourceCommit,
              archiveFiles,
              siteUrls,
            ),
        );
        assertResolvedReferences(page.sourcePath, body);
        documents.push({
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
        });
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "Pages follow the Hugo `menu.docs` navigation declared in docs/ at the immutable release tag.",
          "Fragments pulled in by `{{% content %}}` are inlined into the page that renders them and are not published separately.",
          "Hugo shortcodes are expanded to plain Markdown; presentation-only attribute lists are dropped.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" || /^docs\/.*\.md$/.test(sourcePath),
  );
}

function collectFragments(
  pages: ReadonlyMap<string, Page>,
): ReadonlySet<string> {
  const fragments = new Set<string>();
  for (const page of pages.values()) {
    if (rendersNever(page)) {
      fragments.add(page.sourcePath);
    }
    for (const target of includeTargets(page)) {
      if (!pages.has(target)) {
        throw new Error(
          `VictoriaMetrics ${page.sourcePath} includes missing fragment ${target}`,
        );
      }
      fragments.add(target);
    }
  }
  return fragments;
}

function rendersNever(page: Page): boolean {
  const build = page.attributes.build;
  return isRecord(build) && build.render === "never";
}

function includeTargets(page: Page): string[] {
  return [...page.body.matchAll(/\{\{%\s*content\s+"([^"]+)"\s*%\}\}/g)].map(
    (match) =>
      path.posix.normalize(
        path.posix.join(path.posix.dirname(page.sourcePath), match[1] ?? ""),
      ),
  );
}

function expandContentIncludes(
  page: Page,
  pages: ReadonlyMap<string, Page>,
  stack: ReadonlySet<string>,
): string {
  const pattern = /\{\{%\s*content\s+"([^"]+)"\s*%\}\}/g;
  let cursor = 0;
  let result = "";
  for (const match of page.body.matchAll(pattern)) {
    const target = path.posix.normalize(
      path.posix.join(path.posix.dirname(page.sourcePath), match[1] ?? ""),
    );
    const fragment = pages.get(target);
    if (!fragment) {
      throw new Error(
        `VictoriaMetrics ${page.sourcePath} includes missing fragment ${target}`,
      );
    }
    if (stack.has(target)) {
      throw new Error(`Circular VictoriaMetrics include detected: ${target}`);
    }
    assertPortableFragment(page.sourcePath, fragment);
    result += page.body.slice(cursor, match.index);
    cursor = match.index + match[0].length;
    result += `\n\n${expandContentIncludes(
      fragment,
      pages,
      new Set([...stack, target]),
    )}\n\n`;
  }
  return normalizeSpacing(result + page.body.slice(cursor));
}

// Included fragments keep the link base of the page that renders them, so a
// fragment from another directory may only use absolute references.
function assertPortableFragment(sourcePath: string, fragment: Page): void {
  if (
    path.posix.dirname(sourcePath) === path.posix.dirname(fragment.sourcePath)
  ) {
    return;
  }
  const references = [
    ...fragment.body.matchAll(/!?\[[^\]]*\]\(([^)\s]+)/g),
    ...fragment.body.matchAll(/\bsrc=(?:"([^"]*)"|'([^']*)')/gi),
  ]
    .map((match) => match[1] ?? match[2] ?? "")
    .filter(
      (url) => url !== "" && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(url),
    );
  if (references.length > 0) {
    throw new Error(
      `VictoriaMetrics fragment ${fragment.sourcePath} uses directory-relative references (${references.join(", ")}) but is included from ${sourcePath}`,
    );
  }
}

function buildNavigation(
  rendered: readonly Page[],
): ReadonlyMap<string, readonly NavEntry[]> {
  const entries: NavEntry[] = [];
  const identifiers = new Set<string>();
  for (const page of rendered) {
    const menu = isRecord(page.attributes.menu)
      ? page.attributes.menu.docs
      : undefined;
    if (!isRecord(menu)) {
      continue;
    }
    const label =
      typeof page.attributes.title === "string" ? page.attributes.title : "";
    const identifier =
      typeof menu.identifier === "string" ? menu.identifier : label;
    if (!identifier) {
      throw new Error(
        `VictoriaMetrics ${page.sourcePath} has a menu entry without an identifier or title`,
      );
    }
    if (identifiers.has(identifier)) {
      throw new Error(
        `Duplicate VictoriaMetrics menu identifier ${identifier} at ${page.sourcePath}`,
      );
    }
    identifiers.add(identifier);
    entries.push({
      page,
      identifier,
      ...(typeof menu.parent === "string" ? { parent: menu.parent } : {}),
      weight: menuWeight(menu, page),
      label,
    });
  }
  const children = new Map<string, NavEntry[]>();
  for (const entry of entries) {
    if (entry.parent !== undefined && !identifiers.has(entry.parent)) {
      throw new Error(
        `VictoriaMetrics ${entry.page.sourcePath} references unknown menu parent ${entry.parent}`,
      );
    }
    const key = entry.parent ?? "";
    children.set(key, [...(children.get(key) ?? []), entry]);
  }
  for (const group of children.values()) {
    group.sort(
      (left, right) =>
        left.weight - right.weight ||
        compareCodePoints(left.label, right.label) ||
        compareCodePoints(left.page.sourcePath, right.page.sourcePath),
    );
  }
  return children;
}

function menuWeight(menu: Record<string, unknown>, page: Page): number {
  for (const candidate of [menu.weight, page.attributes.weight]) {
    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      return candidate;
    }
  }
  return 0;
}

function orderPages(
  rendered: readonly Page[],
  navigation: ReadonlyMap<string, readonly NavEntry[]>,
): readonly { readonly page: Page; readonly section: string }[] {
  const inNavigation = new Set(
    [...navigation.values()].flatMap((group) =>
      group.map((entry) => entry.page.sourcePath),
    ),
  );
  const remaining = rendered
    .filter((page) => !inNavigation.has(page.sourcePath))
    .sort((left, right) =>
      compareCodePoints(left.sourcePath, right.sourcePath),
    );
  const ordered: { page: Page; section: string }[] = [];
  for (const root of navigation.get("") ?? []) {
    const section = root.label || documentTitle("", {}, root.page.sourcePath);
    visit(root, section);
    const directory = sectionDirectory(root.page.sourcePath);
    if (directory === undefined) {
      continue;
    }
    for (const page of remaining.filter(
      (candidate) => topDirectory(candidate.sourcePath) === directory,
    )) {
      ordered.push({ page, section });
    }
  }
  const placed = new Set(ordered.map((entry) => entry.page.sourcePath));
  for (const page of remaining.filter(
    (candidate) => !placed.has(candidate.sourcePath),
  )) {
    ordered.push({ page, section: "Documentation" });
  }
  if (ordered.length !== rendered.length) {
    throw new Error(
      `VictoriaMetrics ordered ${ordered.length} pages but ${rendered.length} render`,
    );
  }
  return ordered;

  function visit(entry: NavEntry, section: string): void {
    ordered.push({ page: entry.page, section });
    for (const child of navigation.get(entry.identifier) ?? []) {
      visit(child, section);
    }
  }
}

// A top-level menu entry backed by docs/<directory>/_index.md owns every other
// page under that directory, including the ones Hugo keeps out of the menu.
function sectionDirectory(sourcePath: string): string | undefined {
  return path.posix.basename(sourcePath) === "_index.md"
    ? topDirectory(sourcePath)
    : undefined;
}

function topDirectory(sourcePath: string): string {
  return sourcePath.split("/")[1] ?? "";
}

export function expandShortcodes(
  source: string,
  sourcePath: string,
  navigation: ReadonlyMap<string, readonly NavEntry[]>,
  siteUrls: ReadonlyMap<string, string>,
): string {
  return normalizeSpacing(
    expandVersionShortcodes(
      expandCollapseShortcodes(
        expandSectionShortcode(source, sourcePath, navigation, siteUrls),
        sourcePath,
      ),
      sourcePath,
    ),
  );
}

function expandSectionShortcode(
  source: string,
  sourcePath: string,
  navigation: ReadonlyMap<string, readonly NavEntry[]>,
  siteUrls: ReadonlyMap<string, string>,
): string {
  if (!/\{\{%\s*section\s*%\}\}/.test(source)) {
    return source;
  }
  const entry = [...navigation.values()]
    .flat()
    .find((candidate) => candidate.page.sourcePath === sourcePath);
  const children = entry ? (navigation.get(entry.identifier) ?? []) : [];
  if (children.length === 0) {
    throw new Error(
      `VictoriaMetrics ${sourcePath} lists a section without navigation children`,
    );
  }
  const listing = children
    .map((child) => {
      const url = siteUrls.get(child.page.sourcePath);
      if (!url) {
        throw new Error(
          `VictoriaMetrics ${child.page.sourcePath} has no documentation URL`,
        );
      }
      return `- [${child.label || child.identifier}](${url})`;
    })
    .join("\n");
  return source.replace(/\{\{%\s*section\s*%\}\}/g, `\n\n${listing}\n\n`);
}

function expandCollapseShortcodes(source: string, sourcePath: string): string {
  const pattern = /\{\{%\s*(\/)?collapse\b([^%]*)%\}\}/g;
  const stack: { readonly name: string; readonly parts: string[] }[] = [
    { name: "", parts: [] },
  ];
  let cursor = 0;
  for (const match of source.matchAll(pattern)) {
    const current = stack[stack.length - 1];
    if (!current) {
      throw new Error(`Unbalanced VictoriaMetrics collapse in ${sourcePath}`);
    }
    current.parts.push(source.slice(cursor, match.index));
    cursor = match.index + match[0].length;
    if (match[1]) {
      const closed = stack.pop();
      const parent = stack[stack.length - 1];
      if (!closed || !parent) {
        throw new Error(`Unbalanced VictoriaMetrics collapse in ${sourcePath}`);
      }
      parent.parts.push(
        `\n\n**${closed.name}**\n\n${closed.parts.join("").trim()}\n\n`,
      );
      continue;
    }
    const name = (match[2] ?? "").match(/\bname="([^"]*)"/)?.[1];
    if (!name) {
      throw new Error(
        `VictoriaMetrics collapse without a name in ${sourcePath}`,
      );
    }
    stack.push({ name, parts: [] });
  }
  const root = stack[0];
  if (stack.length !== 1 || !root) {
    throw new Error(`Unbalanced VictoriaMetrics collapse in ${sourcePath}`);
  }
  root.parts.push(source.slice(cursor));
  return root.parts.join("");
}

function expandVersionShortcodes(source: string, sourcePath: string): string {
  const pattern =
    /\{\{%\s*(available_from|deprecated_from)\s+"([^"]*)"((?:\s+[\w-]+)*)\s*%\}\}/g;
  let cursor = 0;
  let result = "";
  for (const match of source.matchAll(pattern)) {
    const [name, version, scope] = [match[1], match[2] ?? "", match[3] ?? ""];
    if (!version) {
      throw new Error(
        `VictoriaMetrics ${name} shortcode without a version in ${sourcePath}`,
      );
    }
    const product = scope.trim();
    if (product !== "" && product !== "anomaly") {
      throw new Error(
        `Unsupported VictoriaMetrics ${name} scope "${product}" in ${sourcePath}`,
      );
    }
    const component = product === "anomaly" ? "vmanomaly " : "";
    const label =
      name === "available_from"
        ? `available from ${component}${version}`
        : `deprecated since ${component}${version}`;
    const before = source.slice(cursor, match.index);
    result += before;
    cursor = match.index + match[0].length;
    result += `${/\s$/.test(before) || before === "" ? "" : " "}_(${label})_`;
  }
  return result + source.slice(cursor);
}

// Goldmark attribute lists such as {width="700"} carry only presentation, and
// layout wrappers such as <p align="center"> would otherwise turn the images
// they surround into a raw HTML block whose references cannot be rewritten.
export function dropPresentationMarkup(source: string): string {
  const attribute = /(?:width|height|class|style|id|align)="[^"]*"/;
  const attributeLine = new RegExp(
    `^\\{${attribute.source}(?:\\s+${attribute.source})*\\}$`,
  );
  const wrapperLine = /^<\/?(?:p|div|center)\b[^>]*>$/;
  // A link whose only content is the image it wraps opens that same image in a
  // lightbox, so it carries nothing the image does not already state.
  const imageLink = /<a\b[^>]*>\s*(<img\b[^>]*?>)\s*<\/a>/gi;
  const output: string[] = [];
  let inFence = false;
  for (const line of source.split("\n")) {
    if (/^\s*(?:```|~~~)/.test(line)) {
      inFence = !inFence;
      output.push(line);
      continue;
    }
    if (inFence) {
      output.push(line);
      continue;
    }
    if (attributeLine.test(line.trim()) || wrapperLine.test(line.trim())) {
      continue;
    }
    output.push(line.replace(imageLink, "$1"));
  }
  return output.join("\n");
}

// Raw HTML survives the Markdown round-trip untouched, so a reference left
// inside it would still point at the Hugo site layout rather than a resolvable
// location.
export function assertResolvedReferences(
  sourcePath: string,
  body: string,
): void {
  const references = [
    ...body.matchAll(/\b(?:src|href)=(?:"([^"]*)"|'([^']*)')/gi),
  ]
    .map((match) => match[1] ?? match[2] ?? "")
    .filter(
      (url) => url !== "" && !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url),
    );
  if (references.length > 0) {
    throw new Error(
      `VictoriaMetrics ${sourcePath} keeps unresolved references (${references.join(", ")}) in raw HTML`,
    );
  }
}

// docs/victoriametrics/vmctl/_index.md renders as /victoriametrics/vmctl/ and
// docs/victoriametrics/Quick-Start.md as /victoriametrics/quick-start/.
function sitePath(sourcePath: string): string {
  const relative = sourcePath.replace(/^docs\//, "").replace(/\.md$/, "");
  const route = relative.replace(/(^|\/)_index$/, "$1");
  return `/${route}${route.endsWith("/") || route === "" ? "" : "/"}`.toLowerCase();
}

function outputPath(sourcePath: string): string {
  return `pages/${sourcePath.replace(/^docs\//, "").replace(/(^|\/)_index\.md$/, "$1index.md")}`;
}

function resolveVictoriametricsLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  ref: string,
  archiveFiles: ReadonlySet<string>,
  siteUrls: ReadonlyMap<string, string>,
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
    const asset = `docs${pathname}`;
    if (archiveFiles.has(asset)) {
      return `${githubRawUrl(repository, ref, asset)}${suffix}`;
    }
    // Site routes are extensionless; anything else would be a missing asset.
    return path.posix.extname(pathname)
      ? undefined
      : `${docsSite}${pathname}${suffix}`;
  }
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  const siteUrl = siteUrls.get(resolved);
  if (siteUrl) {
    return `${siteUrl}${suffix}`;
  }
  if (!archiveFiles.has(resolved)) {
    return undefined;
  }
  const sourceUrl =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${sourceUrl}${suffix}`;
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
