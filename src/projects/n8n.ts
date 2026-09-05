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
  titleCase,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

interface N8nPage {
  readonly label: string;
  readonly sourcePath: string;
  readonly section: string;
}

interface N8nContext {
  readonly root: string;
  readonly files: ReadonlySet<string>;
  readonly project: SourceProject;
  readonly lock: LockedSource;
  readonly spaceFolders: ReadonlyMap<string, string>;
  readonly reusableBlocks: ReadonlyMap<string, string>;
}

interface Fence {
  readonly marker: "`" | "~";
  readonly length: number;
}

interface FileBlock {
  readonly source: string;
  readonly label: string[];
}

const docsSite = "https://docs.n8n.io";
const spaceTablePath = "docs/contribute/style-guide-for-n8n-docs.md";

export async function buildN8n(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  if (!lock.branch) {
    throw new Error("n8n documentation must be pinned to a branch commit");
  }
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = new Set(await listFiles(root));
      const spaceFolders = loadSpaceFolders(
        await readUtf8(root, spaceTablePath),
        files,
      );
      const reusableBlocks = await loadReusableBlocks(root, files);
      const context: N8nContext = {
        root,
        files: archiveFiles,
        project,
        lock,
        spaceFolders,
        reusableBlocks,
      };
      const pages = await loadNavigation(root, spaceFolders, files);
      const documents = new DocumentCollector(project.id);
      for (const page of pages) {
        await documents.collect(page.sourcePath, async () => {
          const raw = await readUtf8(root, page.sourcePath);
          const frontmatter = parseFrontmatter(raw);
          let body = await renderN8nMarkdown(
            frontmatter.body,
            page.sourcePath,
            context,
            new Set([page.sourcePath]),
          );
          const title = documentTitle(
            body,
            frontmatter.attributes,
            page.sourcePath,
          );
          if (!/^#\s+/m.test(body)) {
            body = normalizeSpacing(`# ${title || page.label}\n\n${body}`);
          }
          return {
            sourcePath: page.sourcePath,
            outputPath: `pages/${page.sourcePath.slice("docs/".length)}`,
            title: title || page.label,
            body,
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              page.sourcePath,
            ),
            section: page.section,
          };
        });
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "n8n tracks the latest main-branch commit because n8n-docs does not publish releases or tags.",
          "Pages follow each GitBook space's SUMMARY.md navigation; unpublished pages, utility spaces, and reusable fragments are omitted as standalone documents.",
          "Reusable blocks are expanded from their commit-pinned Markdown sources, and GitBook hints, tabs, files, embeds, columns, and steppers are normalized to plain Markdown.",
        ],
        licenseText: await readUtf8(root, "LICENSE.md"),
      };
    },
    includeN8nPath,
  );
}

function includeN8nPath(sourcePath: string): boolean {
  return (
    sourcePath === "LICENSE.md" ||
    sourcePath === "REUSABLE_CONTENT_INDEX.md" ||
    /^docs\/.*\.md$/.test(sourcePath)
  );
}

export function loadSpaceFolders(
  source: string,
  files: ReadonlySet<string>,
): ReadonlyMap<string, string> {
  const result = new Map<string, string>();
  const folders = new Set<string>();
  const row = /^\|\s*`([a-z0-9-]+)`\s*\|\s*`([A-Za-z0-9]+)`\s*\|/gm;
  for (const match of source.matchAll(row)) {
    const folder = match[1];
    const id = match[2];
    if (!folder || !id || !files.has(`docs/${folder}/SUMMARY.md`)) {
      continue;
    }
    if (result.has(id) || folders.has(folder)) {
      throw new Error(`Duplicate n8n GitBook space mapping for ${folder}`);
    }
    result.set(id, folder);
    folders.add(folder);
  }
  if (result.size === 0) {
    throw new Error("n8n GitBook space table contains no published spaces");
  }
  return result;
}

async function loadNavigation(
  root: string,
  spaceFolders: ReadonlyMap<string, string>,
  files: ReadonlySet<string>,
): Promise<readonly N8nPage[]> {
  const pages: N8nPage[] = [];
  const seen = new Set<string>();
  for (const folder of spaceFolders.values()) {
    const summaryPath = `docs/${folder}/SUMMARY.md`;
    const summary = await readUtf8(root, summaryPath);
    for (const entry of parseSummary(summary, summaryPath)) {
      if (!files.has(entry.sourcePath)) {
        throw new Error(
          `n8n navigation ${summaryPath} references missing page ${entry.sourcePath}`,
        );
      }
      if (seen.has(entry.sourcePath)) {
        throw new Error(`Duplicate n8n navigation page ${entry.sourcePath}`);
      }
      seen.add(entry.sourcePath);
      pages.push({ ...entry, section: titleCase(folder) });
    }
  }
  if (pages.length === 0) {
    throw new Error("n8n GitBook navigation contains no pages");
  }
  return pages;
}

export function parseSummary(
  source: string,
  summaryPath: string,
): readonly Pick<N8nPage, "label" | "sourcePath">[] {
  const entries: Pick<N8nPage, "label" | "sourcePath">[] = [];
  const link =
    /^\s*[*-]\s+\[([^\]]+)]\(\s*(<[^>]+>|(?:[^()\s]+|\([^()]*\))+)\s*\)/gm;
  for (const match of source.matchAll(link)) {
    const label = match[1]?.trim();
    const rawTarget = match[2]?.replace(/^<|>$/g, "");
    if (!label || !rawTarget) {
      continue;
    }
    const pathname = rawTarget.split(/[?#]/, 1)[0];
    if (!pathname?.endsWith(".md")) {
      throw new Error(
        `n8n navigation ${summaryPath} has a non-Markdown target ${rawTarget}`,
      );
    }
    entries.push({
      label,
      sourcePath: path.posix.normalize(
        path.posix.join(path.posix.dirname(summaryPath), decodePath(pathname)),
      ),
    });
  }
  return entries;
}

async function loadReusableBlocks(
  root: string,
  files: ReadonlySet<string>,
): Promise<ReadonlyMap<string, string>> {
  const prefix = "docs/reusable-content/.gitbook/includes/";
  const includeFiles = [...files]
    .filter((file) => file.startsWith(prefix) && file.endsWith(".md"))
    .sort(compareCodePoints);
  const byStem = new Map<string, string>();
  const byNormalizedName = new Map<string, string>();
  for (const sourcePath of includeFiles) {
    const raw = await readUtf8(root, sourcePath);
    const frontmatter = parseFrontmatter(raw);
    const stem = path.posix.basename(sourcePath, ".md");
    setFirst(byStem, stem, sourcePath);
    setFirst(byNormalizedName, normalizeName(stem), sourcePath);
    const heading = frontmatter.body.match(/^#{1,6}\s+(.+)$/m)?.[1];
    if (heading) {
      setFirst(
        byNormalizedName,
        normalizeName(heading.replace(/<[^>]+>/g, "")),
        sourcePath,
      );
    }
    if (typeof frontmatter.attributes.title === "string") {
      setFirst(
        byNormalizedName,
        normalizeName(frontmatter.attributes.title),
        sourcePath,
      );
    }
  }
  const index = await readUtf8(root, "REUSABLE_CONTENT_INDEX.md");
  const blocks = new Map<string, string>();
  const row = /^\|\s*`([A-Za-z0-9]+)`\s*\|\s*([^|]+?)\s*\|/gm;
  for (const match of index.matchAll(row)) {
    const id = match[1];
    const name = match[2]?.trim();
    if (!id || !name) {
      continue;
    }
    const sourcePath =
      byStem.get(name) ?? byNormalizedName.get(normalizeName(name));
    if (sourcePath) {
      blocks.set(id, sourcePath);
    }
  }
  return blocks;
}

async function renderN8nMarkdown(
  source: string,
  sourcePath: string,
  context: N8nContext,
  stack: ReadonlySet<string>,
): Promise<string> {
  const expanded = await expandIncludes(source, sourcePath, context, stack);
  const transformed = normalizeGitBookHtml(
    transformGitBook(expanded, sourcePath),
  );
  const resolver = (url: string, kind: "link" | "image") =>
    resolveN8nLink(url, kind, sourcePath, context);
  let body = rewriteMarkdownLinks(cleanMarkdown(transformed), resolver);
  body = rewriteHtmlReferences(body, resolver);
  body = normalizeLeadingTabs(body);
  assertN8nMarkdownResolved(sourcePath, body);
  return body;
}

export function normalizeLeadingTabs(source: string): string {
  return source
    .split("\n")
    .map((line) => {
      const indentation = line.match(/^[ \t]+/)?.[0];
      return indentation?.includes("\t")
        ? `${indentation.replaceAll("\t", "    ")}${line.slice(indentation.length)}`
        : line;
    })
    .join("\n");
}

async function expandIncludes(
  source: string,
  sourcePath: string,
  context: N8nContext,
  stack: ReadonlySet<string>,
): Promise<string> {
  const output: string[] = [];
  let fence: Fence | undefined;
  for (const line of source.split("\n")) {
    const marker = fenceFor(line);
    if (fence) {
      output.push(line);
      if (marker?.marker === fence.marker && marker.length >= fence.length) {
        fence = undefined;
      }
      continue;
    }
    if (marker) {
      if (!isSingleLineFence(line, marker)) {
        fence = marker;
      }
      output.push(line);
      continue;
    }
    const include = line
      .trim()
      .match(/^\{%\s*include\s+["']([^"']+)["']\s*%\}$/);
    if (!include?.[1]) {
      output.push(line);
      continue;
    }
    const includePath = resolveIncludePath(
      include[1],
      sourcePath,
      context.reusableBlocks,
    );
    if (!includePath || !context.files.has(includePath)) {
      throw new Error(
        `Unable to resolve n8n include ${include[1]} from ${sourcePath}`,
      );
    }
    if (stack.has(includePath)) {
      throw new Error(`Circular n8n include detected: ${includePath}`);
    }
    const fragment = parseFrontmatter(
      await readUtf8(context.root, includePath),
    ).body;
    output.push(
      await renderN8nMarkdown(
        fragment,
        includePath,
        context,
        new Set([...stack, includePath]),
      ),
    );
  }
  return normalizeSpacing(output.join("\n"));
}

function resolveIncludePath(
  target: string,
  sourcePath: string,
  reusableBlocks: ReadonlyMap<string, string>,
): string | undefined {
  const reusable = target.match(
    /^https?:\/\/app\.gitbook\.com\/s\/[^/]+\/~\/reusable\/([A-Za-z0-9]+)\/?$/i,
  );
  if (reusable?.[1]) {
    return reusableBlocks.get(reusable[1]);
  }
  if (target.startsWith(".gitbook/includes/")) {
    const space = sourcePath.split("/")[1];
    return space ? path.posix.join("docs", space, target) : undefined;
  }
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|\/)/i.test(target)) {
    return undefined;
  }
  return path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), target),
  );
}

export function transformGitBook(source: string, sourcePath: string): string {
  const output: string[] = [];
  let fence: Fence | undefined;
  let hint: string | undefined;
  let file: FileBlock | undefined;

  const emit = (line: string): void => {
    output.push(hint ? (line ? `> ${line}` : ">") : line);
  };

  for (const line of source.split("\n")) {
    const marker = fenceFor(line);
    if (fence) {
      if (file) {
        file.label.push(line);
      } else {
        emit(line);
      }
      if (marker?.marker === fence.marker && marker.length >= fence.length) {
        fence = undefined;
      }
      continue;
    }
    if (marker) {
      if (!isSingleLineFence(line, marker)) {
        fence = marker;
      }
      if (file) {
        file.label.push(line);
      } else {
        emit(line);
      }
      continue;
    }

    const tag = line.trim();
    if (file) {
      if (/^\{%\s*endfile\s*%\}$/.test(tag)) {
        const label = file.label.join(" ").trim() || path.basename(file.source);
        emit(`[${label}](${file.source})`);
        file = undefined;
      } else {
        file.label.push(line);
      }
      continue;
    }

    const inlineHint = tag.match(
      /^\{%\s*hint\s+style=["']([^"']+)["']\s*%\}\s*(.*?)\s*\{%\s*endhint\s*%\}$/,
    );
    if (inlineHint?.[1]) {
      if (hint) {
        throw new Error(`Nested n8n hint in ${sourcePath}`);
      }
      output.push(`> **${titleCase(inlineHint[1])}**`);
      if (inlineHint[2]) {
        output.push(`> ${inlineHint[2]}`);
      }
      output.push("");
      continue;
    }
    const hintStart = tag.match(
      /^\{%\s*hint\s+style=["']([^"']+)["']\s*%\}(?:\s*(.*))?$/,
    );
    if (hintStart?.[1]) {
      if (hint) {
        throw new Error(`Nested n8n hint in ${sourcePath}`);
      }
      hint = hintStart[1];
      emit(`**${titleCase(hint)}**`);
      if (hintStart[2]) {
        emit(hintStart[2]);
      }
      continue;
    }
    if (/^\{%\s*endhint\s*%\}$/.test(tag)) {
      if (!hint) {
        throw new Error(`Unbalanced n8n hint in ${sourcePath}`);
      }
      hint = undefined;
      output.push("");
      continue;
    }

    const fileStart = tag.match(/^\{%\s*file\s+([^%]+)%\}$/);
    if (fileStart?.[1]) {
      const fileSource = attribute(fileStart[1], "src");
      if (!fileSource) {
        throw new Error(`n8n file block without a source in ${sourcePath}`);
      }
      file = { source: fileSource, label: [] };
      continue;
    }

    const tab = tag.match(/^\{%\s*tab\s+([^%]+)%\}$/);
    if (tab?.[1]) {
      const label = attribute(tab[1], "title");
      if (!label) {
        throw new Error(`n8n tab without a title in ${sourcePath}`);
      }
      emit(`**${label}**`);
      emit("");
      continue;
    }

    const code = tag.match(/^\{%\s*code(?:\s+([^%]+))?%\}$/);
    if (code) {
      const label = code[1] ? attribute(code[1], "title") : undefined;
      if (label) {
        emit(`**${label}**`);
      }
      continue;
    }

    const embed = tag.match(/^\{%\s*embed\s+([^%]+)%\}$/);
    if (embed?.[1]) {
      const url = attribute(embed[1], "url");
      if (!url) {
        throw new Error(`n8n embed without a URL in ${sourcePath}`);
      }
      emit(`[Embedded media](${url})`);
      continue;
    }

    const workflowDemo = tag.match(
      /^\{%\s*@n8n-blocks\/n8n-workflow-demo\s+(.+)\s*%\}$/,
    );
    if (workflowDemo?.[1]) {
      const content = attribute(workflowDemo[1], "content");
      const url = attribute(workflowDemo[1], "url");
      if (content) {
        emit("**Workflow example**");
        emit("");
        emit("```json");
        for (const workflowLine of decodeWorkflow(content, sourcePath).split(
          "\n",
        )) {
          emit(workflowLine);
        }
        emit("```");
      } else if (url) {
        emit(`[Workflow example](${url})`);
      } else {
        throw new Error(
          `n8n workflow demo without content or a URL in ${sourcePath}`,
        );
      }
      continue;
    }

    if (
      /^\{%\s*(?:tabs|endtabs|endtab|endcode|endembed|columns|endcolumns|column|endcolumn|stepper|endstepper|step|endstep|content-ref\b[^%]*|endcontent-ref)\s*%\}$/.test(
        tag,
      )
    ) {
      continue;
    }
    // GitBook custom blocks (`{% @namespace/block %}`) render an interactive
    // widget whose payload lives in GitBook's own store rather than in the
    // Markdown. Keep the reference when the block carries a URL; otherwise the
    // block has no textual content to preserve.
    const customBlock = tag.match(
      /^\{%\s*@[\w.-]+\/[\w.-]+(?:\s+([^%]*?))?\s*%\}$/,
    );
    if (customBlock) {
      const url = customBlock[1] ? attribute(customBlock[1], "url") : undefined;
      if (url) {
        emit(`[Embedded content](${url})`);
      }
      continue;
    }
    if (/^\{%/.test(tag)) {
      throw new Error(`Unsupported n8n GitBook block in ${sourcePath}: ${tag}`);
    }
    emit(line);
  }

  if (fence) {
    throw new Error(`Unbalanced Markdown fence in ${sourcePath}`);
  }
  if (hint) {
    throw new Error(`Unbalanced n8n hint in ${sourcePath}`);
  }
  if (file) {
    throw new Error(`Unbalanced n8n file block in ${sourcePath}`);
  }
  return normalizeSpacing(output.join("\n"));
}

export function normalizeGitBookHtml(source: string): string {
  return normalizeSpacing(
    source.replace(
      /^([ \t]*)<div\b([^>]*\bdata-gb-custom-block\b[^>]*)>(.*?)<\/div>[ \t]*$/gim,
      (_match, indentation: string, attributes: string, content: string) => {
        const style =
          attributes.match(/\bdata-style=["']([^"']+)["']/i)?.[1] ?? "info";
        const markdown = htmlFragmentToMarkdown(content);
        return [
          `${indentation}> **${titleCase(style)}**`,
          ...markdown
            .split("\n")
            .map((line) =>
              line ? `${indentation}> ${line}` : `${indentation}>`,
            ),
        ].join("\n");
      },
    ),
  );
}

function htmlFragmentToMarkdown(source: string): string {
  return source
    .replace(
      /<a\b([^>]*)>(.*?)<\/a>/gi,
      (_match, attributes: string, content: string) => {
        const href = attribute(attributes, "href");
        return href ? `[${content}](${href})` : content;
      },
    )
    .replace(/<strong>/gi, "**")
    .replace(/<\/strong>/gi, "**")
    .replace(/<code>/gi, "`")
    .replace(/<\/code>/gi, "`")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<p>/gi, "")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<ul>/gi, "\n")
    .replace(/<\/ul>/gi, "\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function resolveN8nLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  context: N8nContext,
): string | undefined {
  const gitbook = url.match(
    /^https?:\/\/app\.gitbook\.com\/s\/([A-Za-z0-9]+)(?:\/([^?#]*))?([?#].*)?$/i,
  );
  if (gitbook?.[1]) {
    const folder = context.spaceFolders.get(gitbook[1]);
    if (!folder) {
      if (gitbook[2]?.startsWith("~/reusable/")) {
        throw new Error(
          `Unexpanded n8n reusable link in ${sourcePath}: ${url}`,
        );
      }
      return url;
    }
    const route = [folder, gitbook[2]?.replace(/^\/+|\/+$/g, "")]
      .filter(Boolean)
      .join("/");
    return `${docsSite}/${route}${gitbook[3] ?? ""}`;
  }
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  if (url.startsWith("/")) {
    return `${docsSite}${url}`;
  }

  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  if (!pathname) {
    return url;
  }
  const decoded = decodePath(pathname);
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), decoded),
  );
  if (resolved === "docs" || resolved.startsWith("docs/")) {
    const markdownTarget = resolved.endsWith(".md")
      ? resolved
      : pathname.endsWith("/") || pathname === "."
        ? path.posix.join(resolved, "README.md")
        : undefined;
    if (kind === "link" && markdownTarget) {
      if (!context.files.has(markdownTarget)) {
        if (sourcePath === spaceTablePath) {
          return undefined;
        }
        throw new Error(
          `Missing n8n documentation target ${markdownTarget} from ${sourcePath}`,
        );
      }
      return `${siteUrl(markdownTarget)}${suffix}`;
    }
    if (context.files.has(resolved)) {
      return `${githubRawUrl(
        context.project.repository,
        context.lock.sourceCommit,
        resolved,
      )}${suffix}`;
    }
  }
  throw new Error(`Unable to resolve n8n ${kind} ${url} from ${sourcePath}`);
}

function siteUrl(sourcePath: string): string {
  const route = sourcePath
    .replace(/^docs\//, "")
    .replace(/\.md$/, "")
    .replace(/(^|\/)README$/, "$1")
    .replace(/\/$/, "");
  return `${docsSite}/${route}`;
}

function rewriteHtmlReferences(
  source: string,
  resolver: (url: string, kind: "link" | "image") => string | undefined,
): string {
  return mapOutsideFences(source, (line) =>
    line.replace(
      /\b(href|src)=(?:"([^"]+)"|'([^']+)')/gi,
      (_original, name: string, double: string, single: string) => {
        const url = double ?? single;
        const resolved = resolver(
          url,
          name.toLowerCase() === "src" ? "image" : "link",
        );
        if (!resolved) {
          throw new Error(`Unable to resolve n8n HTML reference ${url}`);
        }
        return `${name}="${resolved.replaceAll('"', "&quot;")}"`;
      },
    ),
  );
}

function assertN8nMarkdownResolved(sourcePath: string, source: string): void {
  const visible = withoutFencedCode(source);
  const block = visible.match(/\{%\s*([A-Za-z-]+)/)?.[1];
  if (block) {
    throw new Error(`Unresolved n8n GitBook block ${block} in ${sourcePath}`);
  }
  if (/\bdata-gb-custom-block\b/i.test(visible)) {
    throw new Error(`Unresolved n8n GitBook HTML block in ${sourcePath}`);
  }
  const relativeHtml = visible.match(
    /\b(?:href|src)=["'](?![a-z][a-z0-9+.-]*:|\/\/|#)([^"']+)["']/i,
  )?.[1];
  if (relativeHtml) {
    throw new Error(
      `Unresolved n8n HTML reference ${relativeHtml} in ${sourcePath}`,
    );
  }
}

function withoutFencedCode(source: string): string {
  const output: string[] = [];
  let fence: Fence | undefined;
  for (const line of source.split("\n")) {
    const marker = fenceFor(line);
    if (fence) {
      output.push("");
      if (marker?.marker === fence.marker && marker.length >= fence.length) {
        fence = undefined;
      }
      continue;
    }
    if (marker) {
      output.push("");
      if (!isSingleLineFence(line, marker)) {
        fence = marker;
      }
      continue;
    }
    output.push(line);
  }
  return output.join("\n");
}

function mapOutsideFences(
  source: string,
  transform: (line: string) => string,
): string {
  const output: string[] = [];
  let fence: Fence | undefined;
  for (const line of source.split("\n")) {
    const marker = fenceFor(line);
    output.push(fence ? line : transform(line));
    if (!marker) {
      continue;
    }
    if (!fence) {
      if (!isSingleLineFence(line, marker)) {
        fence = marker;
      }
    } else if (
      marker.marker === fence.marker &&
      marker.length >= fence.length
    ) {
      fence = undefined;
    }
  }
  return output.join("\n");
}

function fenceFor(line: string): Fence | undefined {
  const match = line.match(/^\s*(`{3,}|~{3,})/);
  if (!match?.[1]) {
    return undefined;
  }
  return {
    marker: match[1][0] as "`" | "~",
    length: match[1].length,
  };
}

function isSingleLineFence(line: string, fence: Fence): boolean {
  const trimmed = line.trim();
  const marker = fence.marker.repeat(fence.length);
  return trimmed.length > marker.length * 2 && trimmed.endsWith(marker);
}

function attribute(source: string, name: string): string | undefined {
  const match = source.match(
    new RegExp(`(?:^|\\s)${name}=(?:"([^"]*)"|'([^']*)')`),
  );
  return match?.[1] ?? match?.[2];
}

function normalizeName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function setFirst(
  target: Map<string, string>,
  key: string,
  value: string,
): void {
  if (key && !target.has(key)) {
    target.set(key, value);
  }
}

function decodePath(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    throw new Error(`Invalid URL-encoded n8n path: ${value}`);
  }
}

function decodeWorkflow(value: string, sourcePath: string): string {
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(value));
    return JSON.stringify(parsed, null, 2);
  } catch {
    throw new Error(`Invalid embedded n8n workflow in ${sourcePath}`);
  }
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
