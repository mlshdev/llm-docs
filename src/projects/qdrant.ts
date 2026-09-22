import path from "node:path";
import { parse as parseYaml } from "yaml";
import { isRecord } from "../config.ts";
import { listFiles, readUtf8, withSparseGithubCheckout } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  parseFrontmatter,
  rewriteMarkdownLinks,
  titleCase,
  transformOutsideFencedCode,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  Document,
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";
import { compareCodePoints } from "../compare.ts";

const repositoryRoot = "qdrant-landing";
const contentRoot = `${repositoryRoot}/content/documentation`;
const staticRoot = `${repositoryRoot}/static`;
const siteBase = "https://qdrant.tech";

interface QdrantPage {
  readonly sourcePath: string;
  readonly relativePath: string;
  readonly attributes: Record<string, unknown>;
  readonly body: string;
}

interface RenderContext {
  readonly project: GithubSourceProject;
  readonly lock: GithubLockedSource;
  readonly sources: ReadonlyMap<string, string>;
  readonly pages: ReadonlyMap<string, QdrantPage>;
  readonly archiveFiles: ReadonlySet<string>;
  readonly siteUrls: ReadonlyMap<string, string>;
}

export async function buildQdrant(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  return withSparseGithubCheckout(
    project.repository,
    lock.sourceCommit,
    [contentRoot],
    (root, archiveFiles) =>
      buildQdrantFromDirectory(project, lock, root, archiveFiles),
  );
}

export async function buildQdrantFromDirectory(
  project: GithubSourceProject,
  lock: GithubLockedSource,
  root: string,
  knownFiles?: ReadonlySet<string>,
): Promise<ProjectBuild> {
  const archiveFiles = knownFiles ?? new Set(await listFiles(root));
  const sourcePaths = [...archiveFiles]
    .filter(
      (sourcePath) =>
        sourcePath.startsWith(`${contentRoot}/`) && sourcePath.endsWith(".md"),
    )
    .sort(compareCodePoints);
  const sources = new Map<string, string>();
  const pages = new Map<string, QdrantPage>();
  for (const sourcePath of sourcePaths) {
    const source = await readUtf8(root, sourcePath);
    sources.set(sourcePath, source);
    const frontmatter = parseFrontmatter(source);
    pages.set(sourcePath, {
      sourcePath,
      relativePath: sourcePath.slice(`${contentRoot}/`.length),
      attributes: frontmatter.attributes,
      body: frontmatter.body,
    });
  }

  const published = [...pages.values()]
    .filter(isPublishedPage)
    .sort(
      (left, right) =>
        weightOf(left) - weightOf(right) ||
        compareCodePoints(left.relativePath, right.relativePath),
    );
  const siteUrls = new Map(
    published.map((page) => [page.sourcePath, canonicalUrl(page)]),
  );
  const context: RenderContext = {
    project,
    lock,
    sources,
    pages,
    archiveFiles,
    siteUrls,
  };
  const documents = new DocumentCollector(project.id);
  for (const page of published) {
    await documents.collect(page.sourcePath, () => renderPage(page, context));
  }
  return {
    project,
    lock,
    documents: documents.documents,
    quarantined: documents.quarantined,
    notes: [
      "Pages are selected from qdrant-landing/content/documentation at the pinned master commit; drafts, navigation delimiters, external-link placeholders, non-rendered pages, and headless fragments are excluded.",
      "Hugo code-snippet and include shortcodes are expanded from pinned headless Markdown, while figures, accordions, and interactive islands are reduced to their authored static Markdown content without executing Hugo or JavaScript.",
      "Published documentation links resolve to https://qdrant.tech; repository assets resolve to immutable raw URLs at the pinned commit.",
      "The upstream documentation repository declares no license, so LICENSE.upstream records a copyright notice rather than a license grant.",
    ],
    licenseText: upstreamNotice,
  };
}

function isPublishedPage(page: QdrantPage): boolean {
  if (page.relativePath.startsWith("headless/")) return false;
  if (page.attributes.draft === true) return false;
  if (
    page.attributes.type === "delimiter" ||
    page.attributes.type === "external-link"
  ) {
    return false;
  }
  const build = page.attributes.build;
  return !(
    isRecord(build) &&
    (build.render === "never" || build.render === "link")
  );
}

function weightOf(page: QdrantPage): number {
  const weight = page.attributes.weight;
  return typeof weight === "number" && Number.isFinite(weight) ? weight : 0;
}

function renderPage(page: QdrantPage, context: RenderContext): Document {
  const expanded = expandShortcodes(
    page.body,
    page.sourcePath,
    context,
    new Set([page.sourcePath]),
  );
  const prose = cleanMarkdown(normalizeHtml(expanded));
  const title = documentTitle(prose, page.attributes, page.sourcePath);
  const titled = /^#\s+/m.test(prose)
    ? prose
    : normalizeSpacing(`# ${title}\n\n${prose}`);
  const body = rewriteMarkdownLinks(titled, (url, kind) =>
    resolveLink(url, kind, page, context),
  );
  const description = descriptionOf(page.attributes);
  return {
    sourcePath: page.sourcePath,
    outputPath: outputPath(page.relativePath),
    title,
    body,
    canonicalUrl: canonicalUrl(page),
    section: sectionFor(page, context.pages),
    ...(description ? { description } : {}),
  };
}

function expandShortcodes(
  source: string,
  sourcePath: string,
  context: RenderContext,
  includeStack: ReadonlySet<string>,
): string {
  return transformOutsideFencedCode(source, (markdown) => {
    let rendered = markdown.replace(
      /\{\{<\s*island\b([\s\S]*?)>\}\}([\s\S]*?)\{\{<\s*\/island\s*>\}\}/g,
      (_shortcode, rawAttributes: string, fallback: string) => {
        const attributes = shortcodeAttributes(rawAttributes);
        const title = attributes.get("title")?.trim();
        return normalizeSpacing(
          [fallback.trim(), title ? `*${title}*` : ""]
            .filter(Boolean)
            .join("\n\n"),
        );
      },
    );
    rendered = rendered.replace(
      /\{\{<\s*accordion\s*>\}\}([\s\S]*?)\{\{<\s*\/accordion\s*>\}\}/g,
      (_shortcode, payload: string) => renderAccordion(payload, sourcePath),
    );
    rendered = rendered.replace(
      /\{\{[%<]\s*include\s+(?:"([^"]+)"|'([^']+)')\s*[>%]\}\}/g,
      (_shortcode, doubleQuoted: string, singleQuoted: string) => {
        const target = repositoryPath(doubleQuoted || singleQuoted);
        if (includeStack.has(target)) {
          throw new Error(`Circular Qdrant include ${target}`);
        }
        const included = context.sources.get(target);
        if (included === undefined) {
          throw new Error(`Missing Qdrant include ${target} in ${sourcePath}`);
        }
        return expandShortcodes(
          parseFrontmatter(included).body,
          target,
          context,
          new Set([...includeStack, target]),
        );
      },
    );
    rendered = rendered.replace(
      /\{\{<\s*code-snippet\b([\s\S]*?)>\}\}/g,
      (_shortcode, rawAttributes: string) =>
        renderCodeSnippet(
          shortcodeAttributes(rawAttributes),
          sourcePath,
          context,
        ),
    );
    rendered = rendered.replace(
      /\{\{<\s*figure\b([\s\S]*?)>\}\}/g,
      (_shortcode, rawAttributes: string) => {
        const attributes = shortcodeAttributes(rawAttributes);
        const source = attributes.get("src");
        if (!source) {
          throw new Error(`Qdrant figure has no src in ${sourcePath}`);
        }
        const caption = attributes.get("caption")?.trim();
        const alt = attributes.get("alt")?.trim() || caption || "";
        return normalizeSpacing(
          [`![${alt}](${source})`, caption ? `*${caption}*` : ""]
            .filter(Boolean)
            .join("\n\n"),
        );
      },
    );
    return rendered;
  });
}

function renderAccordion(payload: string, sourcePath: string): string {
  const parsed: unknown = parseYaml(payload);
  if (!Array.isArray(parsed)) {
    throw new Error(`Invalid Qdrant accordion in ${sourcePath}`);
  }
  const sections = parsed.map((item, index) => {
    if (
      !isRecord(item) ||
      typeof item.title !== "string" ||
      typeof item.content !== "string"
    ) {
      throw new Error(
        `Invalid Qdrant accordion item ${index + 1} in ${sourcePath}`,
      );
    }
    return `### ${item.title.trim()}\n\n${item.content.trim()}`;
  });
  return normalizeSpacing(sections.join("\n\n"));
}

function renderCodeSnippet(
  attributes: ReadonlyMap<string, string>,
  sourcePath: string,
  context: RenderContext,
): string {
  const requestedPath = attributes.get("path");
  if (!requestedPath) {
    throw new Error(`Qdrant code-snippet has no path in ${sourcePath}`);
  }
  const directory = repositoryPath(requestedPath).replace(/\/$/, "");
  const block = attributes.get("block")?.trim();
  const directories = [
    directory,
    `${directory}/generated${block ? `/${block}` : ""}`,
  ];
  const snippets = new Map<string, string>();
  for (const candidate of directories) {
    for (const [snippetPath, snippetSource] of context.sources) {
      if (
        path.posix.dirname(snippetPath) !== candidate ||
        path.posix.basename(snippetPath).startsWith("_") ||
        !snippetPath.endsWith(".md")
      ) {
        continue;
      }
      const name = path.posix.basename(snippetPath, ".md");
      if (!snippets.has(name)) {
        snippets.set(name, parseFrontmatter(snippetSource).body.trim());
      }
    }
  }
  if (snippets.size === 0) {
    throw new Error(
      `Qdrant code-snippet path ${requestedPath} has no Markdown snippets in ${sourcePath}`,
    );
  }
  const explicitOrder = attributes.get("order")?.split(/\s+/).filter(Boolean);
  const order = explicitOrder?.length
    ? explicitOrder
    : inheritedSnippetOrder(directory, context.pages);
  const names = [
    ...order.filter((name) => snippets.has(name)),
    ...[...snippets.keys()]
      .filter((name) => !order.includes(name))
      .sort(compareCodePoints),
  ];
  return normalizeSpacing(
    names
      .map((name) => `**${titleCase(name)}**\n\n${snippets.get(name) ?? ""}`)
      .join("\n\n"),
  );
}

function inheritedSnippetOrder(
  directory: string,
  pages: ReadonlyMap<string, QdrantPage>,
): readonly string[] {
  let current = directory;
  while (current.startsWith(`${contentRoot}/`) || current === contentRoot) {
    const page = pages.get(`${current}/_index.md`);
    const order = page?.attributes.snippetsOrder;
    if (
      Array.isArray(order) &&
      order.every((item) => typeof item === "string")
    ) {
      return order;
    }
    if (current === contentRoot) break;
    current = path.posix.dirname(current);
  }
  return [];
}

function shortcodeAttributes(source: string): ReadonlyMap<string, string> {
  const attributes = new Map<string, string>();
  const pattern = /([A-Za-z][\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/g;
  for (const match of source.matchAll(pattern)) {
    const name = match[1];
    const value = match[2] ?? match[3] ?? match[4];
    if (name && value !== undefined) attributes.set(name, value);
  }
  return attributes;
}

function repositoryPath(value: string): string {
  const withoutLeadingSlash = value.replace(/^\/+/, "");
  const candidate = withoutLeadingSlash.startsWith(`${repositoryRoot}/`)
    ? withoutLeadingSlash
    : withoutLeadingSlash.startsWith("content/")
      ? `${repositoryRoot}/${withoutLeadingSlash}`
      : withoutLeadingSlash.startsWith("documentation/")
        ? `${repositoryRoot}/content/${withoutLeadingSlash}`
        : `${repositoryRoot}/${withoutLeadingSlash}`;
  const normalized = path.posix.normalize(candidate);
  if (
    normalized === repositoryRoot ||
    !normalized.startsWith(`${repositoryRoot}/`)
  ) {
    throw new Error(`Unsafe Qdrant repository path ${value}`);
  }
  return normalized;
}

function normalizeHtml(source: string): string {
  return transformOutsideFencedCode(source, (markdown) =>
    markdown
      .replace(/<aside\b[^>]*>([\s\S]*?)<\/aside>/gi, (_tag, content: string) =>
        normalizeSpacing(
          `> **Note**\n>\n${content
            .trim()
            .split("\n")
            .map((line) => (line ? `> ${line}` : ">"))
            .join("\n")}`,
        ),
      )
      .replace(
        /<a\b([^>]*)>\s*<img\b([^>]*)>\s*<\/a>/gi,
        (tag, anchorAttributes: string, imageAttributes: string) => {
          const href = htmlAttribute(anchorAttributes, "href");
          const imageSource = htmlAttribute(imageAttributes, "src");
          if (!href || !imageSource) return tag;
          const alt = htmlAttribute(imageAttributes, "alt") ?? "";
          return `[![${alt}](${imageSource})](${href})`;
        },
      )
      .replace(
        /<iframe\b[^>]*\bsrc=(?:"([^"]+)"|'([^']+)')[^>]*>(?:<\/iframe>)?/gi,
        (_tag, doubleQuoted: string, singleQuoted: string) =>
          `[Embedded content](${doubleQuoted || singleQuoted})`,
      )
      .replace(/<summary\b[^>]*>([\s\S]*?)<\/summary>/gi, "**$1**")
      .replace(/<\/?details\b[^>]*>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/?(?:div|p|span|u)\b[^>]*>/gi, ""),
  );
}

function htmlAttribute(source: string, name: string): string | undefined {
  const match = source.match(
    new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, "i"),
  );
  return match?.[1] ?? match?.[2];
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  page: QdrantPage,
  context: RenderContext,
): string | undefined {
  if (url.startsWith("//") || url.startsWith("#")) return url;
  const scheme = url.match(/^([a-z][a-z0-9+.-]*):/i)?.[1]?.toLowerCase();
  if (scheme) {
    return scheme === "http" ||
      scheme === "https" ||
      (kind === "link" && (scheme === "mailto" || scheme === "tel")) ||
      (kind === "image" && scheme === "data")
      ? url
      : undefined;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (!pathname) return url;

  if (pathname.startsWith("/")) {
    if (kind === "image") {
      const asset = assetPath(pathname, context.archiveFiles);
      return asset
        ? `${githubRawUrl(
            context.project.repository,
            context.lock.sourceCommit,
            asset,
          )}${suffix}`
        : `${siteBase}${pathname}${suffix}`;
    }
    return `${siteBase}${pathname}${suffix}`;
  }

  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(page.sourcePath), pathname),
  );
  const siteUrl = siteUrlFor(resolved, context.siteUrls);
  if (kind === "link" && siteUrl) return `${siteUrl}${suffix}`;
  if (context.archiveFiles.has(resolved)) {
    const sourceUrl =
      kind === "image"
        ? githubRawUrl(
            context.project.repository,
            context.lock.sourceCommit,
            resolved,
          )
        : githubBlobUrl(
            context.project.repository,
            context.lock.sourceCommit,
            resolved,
          );
    return `${sourceUrl}${suffix}`;
  }
  try {
    return new URL(url, canonicalUrl(page)).href;
  } catch {
    throw new Error(
      `Unresolvable relative qdrant URL ${JSON.stringify(url)} against ${canonicalUrl(page)}`,
    );
  }
}

function assetPath(
  pathname: string,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  const relative = pathname.replace(/^\/+/, "");
  const candidates = [
    `${staticRoot}/${relative}`,
    `${repositoryRoot}/content/${relative}`,
  ];
  return candidates.find((candidate) => archiveFiles.has(candidate));
}

function siteUrlFor(
  sourcePath: string,
  siteUrls: ReadonlyMap<string, string>,
): string | undefined {
  for (const candidate of [
    sourcePath,
    `${sourcePath}.md`,
    `${sourcePath}/_index.md`,
  ]) {
    const url = siteUrls.get(candidate);
    if (url) return url;
  }
  return undefined;
}

function outputPath(relativePath: string): string {
  return `pages/${relativePath.replace(/(^|\/)_index\.md$/, "$1index.md")}`;
}

function canonicalUrl(page: QdrantPage): string {
  const directory = path.posix.dirname(page.relativePath);
  const baseName = path.posix.basename(page.relativePath, ".md");
  const slug =
    typeof page.attributes.slug === "string" && page.attributes.slug.trim()
      ? page.attributes.slug.trim()
      : baseName;
  const route =
    baseName === "_index"
      ? directory === "."
        ? ""
        : directory
      : path.posix.join(directory === "." ? "" : directory, slug);
  return `${siteBase}/documentation/${route ? `${route}/` : ""}`;
}

function sectionFor(
  page: QdrantPage,
  pages: ReadonlyMap<string, QdrantPage>,
): string {
  const first = page.relativePath.split("/")[0];
  if (!first || !page.relativePath.includes("/")) return "Documentation";
  const section = pages.get(`${contentRoot}/${first}/_index.md`);
  const title = section?.attributes.title;
  return typeof title === "string" && title.trim()
    ? title.trim()
    : titleCase(first);
}

function descriptionOf(
  attributes: Readonly<Record<string, unknown>>,
): string | undefined {
  for (const value of [attributes.short_description, attributes.description]) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return undefined;
}

const upstreamNotice = `Qdrant documentation snapshot

The pages in this directory are a normalized rendering of the documentation
Qdrant publishes at https://qdrant.tech/documentation/ from the public
repository https://github.com/qdrant/landing_page.

Qdrant has not released that repository under an open-source license: it
carries no repository-level LICENSE file or GitHub license declaration, and the
documentation remains Qdrant's copyrighted material, reproduced here as a
machine-readable reference only.

Terms and conditions: https://qdrant.tech/legal/terms_and_conditions/
Privacy policy: https://qdrant.tech/legal/privacy-policy/

Qdrant is a trademark of Qdrant Solutions GmbH. This snapshot is not affiliated
with or endorsed by Qdrant Solutions GmbH.
`;
