import path from "node:path";
import type { Root } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { parse as parseYaml } from "yaml";
import { isRecord } from "./config.ts";

interface MarkdownNode {
  readonly type: string;
  url?: string;
  readonly alt?: string;
  value?: string;
  children?: MarkdownNode[];
  readonly [key: string]: unknown;
}

const markdownParser = unified().use(remarkParse).use(remarkGfm);
const markdownWriter = unified().use(remarkGfm).use(remarkStringify, {
  bullet: "-",
  fences: true,
  listItemIndent: "one",
});

export interface FrontmatterResult {
  readonly attributes: Record<string, unknown>;
  readonly body: string;
}

export function parseFrontmatter(source: string): FrontmatterResult {
  const normalized = normalizeNewlines(source).replace(/^\uFEFF/, "");
  // A page whose whole content is frontmatter ends at the closing fence, so the
  // fence is allowed to end the file rather than be followed by a body.
  const match = normalized.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*(?:\n|$)/);
  if (!match) {
    return { attributes: {}, body: normalized };
  }
  // Hugo's YAML decoder accepts duplicate frontmatter keys and keeps the last
  // value; upstream pages rely on that, so strict parsing would reject them.
  const parsed: unknown = parseYaml(match[1] ?? "", { uniqueKeys: false });
  return {
    attributes: isRecord(parsed) ? parsed : {},
    body: normalized.slice(match[0].length),
  };
}

export function cleanMarkdown(source: string): string {
  const { body } = parseFrontmatter(source);
  const withoutAnchors = transformOutsideFencedCode(body, (markdown) =>
    markdown
      .replace(/<!--(?:.|\n)*?-->/g, "")
      .replace(/<\/a>(?:\s*<\/a>)+/gi, "</a>")
      .replace(
        /<a\b([^>]*)>([\s\S]*?)<\/a>/gi,
        (tag, attributes: string, content: string) => {
          const id = attributes.match(/\bid=(?:"([^"]*)"|'([^']*)')/i);
          return id ? `<a id="${id[1] ?? id[2] ?? ""}"></a>${content}` : tag;
        },
      )
      .replace(
        /<a\b([^>]*\bid=(?:"[^"]*"|'[^']*')[^>]*)>(?!<\/a>)/gi,
        (_tag, attributes: string) => {
          const id = attributes.match(/\bid=(?:"([^"]*)"|'([^']*)')/i);
          return `<a id="${id?.[1] ?? id?.[2] ?? ""}"></a>`;
        },
      ),
  );
  const lines = withoutAnchors.split("\n");
  const output: string[] = [];
  let fence: MarkdownFence | undefined;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (fence) {
      output.push(line);
      if (isClosingFence(line, fence)) {
        fence = undefined;
      }
      continue;
    }
    const tabFence = line.match(
      /^(\s*(?:>\s*)*)```([^\s]+)\s+tab=(?:"([^"]+)"|'([^']+)')\s*$/,
    );
    if (tabFence) {
      const prefix = tabFence[1] ?? "";
      const label = tabFence[3] ?? tabFence[4] ?? "Example";
      output.push(
        `${prefix}**${label}**`,
        prefix.trimEnd(),
        `${prefix}\`\`\`${tabFence[2] ?? ""}`,
      );
      fence = openingFence(output.at(-1) ?? "");
      continue;
    }
    const opened = openingFence(line);
    if (opened) {
      output.push(line);
      fence = opened;
      continue;
    }
    const admonition = line.match(
      /^(\s*(?:>\s*)*)(?:!!!|\?\?\?\+?)\s*([\w-]+)(?:\s+(?:"([^"]*)"|'([^']*)'|(.+)))?\s*$/,
    );
    if (admonition) {
      const prefix = admonition[1] ?? "";
      const title =
        admonition[3]?.trim() ||
        admonition[4]?.trim() ||
        admonition[5]?.trim() ||
        titleCase(admonition[2] ?? "note");
      output.push(`${prefix}> **${title}**`);
      const bodyLines: string[] = [];
      while (index + 1 < lines.length) {
        const next = lines[index + 1] ?? "";
        if (next.trim() === "") {
          bodyLines.push("");
          index += 1;
          continue;
        }
        const contentPrefix = `${prefix}    `;
        if (!next.startsWith(contentPrefix)) {
          break;
        }
        bodyLines.push(next.slice(contentPrefix.length));
        index += 1;
      }
      const normalizedBody = cleanMarkdown(bodyLines.join("\n")).trimEnd();
      if (normalizedBody) {
        for (const bodyLine of normalizedBody.split("\n")) {
          output.push(bodyLine ? `${prefix}> ${bodyLine}` : `${prefix}>`);
        }
      }
      continue;
    }
    if (/^\s*\{:[^{}]+\}\s*$/.test(line)) {
      continue;
    }
    const withoutAttributes = line.replace(/\s*\{:[^{}]+\}\s*$/, "");
    if (!withoutAttributes.trim()) {
      output.push("");
      continue;
    }
    if (/^\s*<\/?figure\b[^>]*>\s*$/i.test(withoutAttributes)) {
      continue;
    }
    const caption = withoutAttributes.match(
      /^\s*<figcaption>(.*?)<\/figcaption>\s*$/i,
    );
    if (caption) {
      output.push(`*${caption[1] ?? ""}*`);
      continue;
    }
    const withImages = replaceHtmlImages(withoutAttributes);
    output.push(
      (withImages.trimStart().startsWith("![")
        ? withImages.trimStart()
        : withImages
      ).replace(/[ \t]+$/g, ""),
    );
  }
  return normalizeSpacing(output.join("\n"));
}

function replaceHtmlImages(line: string): string {
  return line.replace(/<img\b([^>]*)\/?\s*>/gi, (tag, attributes: string) => {
    const source = attributes.match(/\bsrc=(?:"([^"]+)"|'([^']+)')/i);
    if (!source) {
      return tag;
    }
    const alt = attributes.match(/\balt=(?:"([^"]*)"|'([^']*)')/i);
    return `![${alt?.[1] ?? alt?.[2] ?? ""}](${source[1] ?? source[2] ?? ""})`;
  });
}

export function convertRst(source: string): string {
  const lines = normalizeNewlines(source).split("\n");
  const references = new Map<string, string>();
  for (const line of lines) {
    const reference = line.match(/^\s*\.\.\s+_([^:]+):\s+(\S+)\s*$/);
    if (reference?.[1] && reference[2]) {
      references.set(reference[1].trim(), reference[2]);
    }
  }
  const output: string[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    const underline = lines[index + 1] ?? "";
    if (line.trim() && /^([=\-~^"'`:+*#])\1{2,}$/.test(underline.trim())) {
      const marker = underline.trim()[0];
      const level = marker === "=" ? "#" : marker === "-" ? "##" : "###";
      output.push(`${level} ${line.trim()}`);
      index += 1;
      continue;
    }
    const image = line.match(/^\s*\.\.\s+image::\s+(.+)$/);
    if (image) {
      output.push(`![](${image[1]?.trim() ?? ""})`);
      continue;
    }
    if (/^\s*\.\.\s+_[^:]+:\s+\S+\s*$/.test(line)) {
      continue;
    }
    if (/^\s*\.\.\s+(?:toctree|include|contents|highlight)::/.test(line)) {
      while (
        index + 1 < lines.length &&
        /^(?:\s{3,}|\s*$)/.test(lines[index + 1] ?? "")
      ) {
        index += 1;
      }
      continue;
    }
    let converted = line
      .replace(/:doc:`([^`<]+?)\s*<([^>]+)>`/g, "[$1]($2.md)")
      .replace(/:doc:`([^`]+)`/g, "[$1]($1.md)")
      .replace(/:ref:`([^`<]+?)\s*<([^>]+)>`/g, "[$1](#$2)")
      .replace(/:ref:`([^`]+)`/g, "[$1](#$1)")
      .replace(/`([^`<]+?)\s*<([^>]+)>`_/g, "[$1]($2)")
      .replace(/`([^`]+)`_/g, (_match, label: string) => {
        const target = references.get(label.trim());
        return target ? `[${label}](${target})` : label;
      })
      .replace(/\b([A-Za-z][A-Za-z0-9 -]+)_\b/g, (_match, label: string) => {
        const target = references.get(label.trim());
        return target ? `[${label}](${target})` : label;
      })
      .replace(/``([^`]+)``/g, "`$1`");
    if (converted.trimEnd().endsWith("::")) {
      converted = converted.trimEnd().slice(0, -1);
      output.push(converted);
      const literal: string[] = [];
      let cursor = index + 1;
      while (cursor < lines.length && (lines[cursor]?.trim() ?? "") === "") {
        cursor += 1;
      }
      while (cursor < lines.length) {
        const literalLine = lines[cursor] ?? "";
        if (!/^\s{2,}/.test(literalLine) && literalLine.trim()) {
          break;
        }
        literal.push(literalLine.replace(/^\s{2,4}/, ""));
        cursor += 1;
      }
      if (literal.length > 0) {
        output.push("", "```text", ...literal, "```");
        index = cursor - 1;
      }
      continue;
    }
    output.push(converted);
  }
  return normalizeSpacing(output.join("\n"));
}

export function documentTitle(
  source: string,
  attributes: Readonly<Record<string, unknown>>,
  sourcePath: string,
): string {
  if (typeof attributes.title === "string" && attributes.title.trim()) {
    return attributes.title.trim();
  }
  const heading = source.match(/^#\s+(.+)$/m);
  if (heading?.[1]) {
    return plainText(heading[1]);
  }
  return titleCase(
    path.basename(sourcePath).replace(/\.(?:md|mdx|rst)(?:\.in)?$/i, ""),
  );
}

export function rewriteMarkdownLinks(
  source: string,
  resolver: (url: string, kind: "link" | "image") => string | undefined,
): string {
  const tree = markdownParser.parse(source) as Root;
  const root = tree as unknown as MarkdownNode;
  const fragments = collectFragments(root);
  root.children = rewriteChildren(root.children ?? []);
  return normalizeSpacing(markdownWriter.stringify(tree));

  function rewriteChildren(children: readonly MarkdownNode[]): MarkdownNode[] {
    return children.flatMap(rewriteNode);
  }

  function rewriteNode(node: MarkdownNode): MarkdownNode[] {
    if (node.children) {
      node.children = rewriteChildren(node.children);
    }
    if ((node.type === "link" || node.type === "image") && node.url) {
      const resolved = node.url.startsWith("#")
        ? resolveFragment(node.url, fragments)
        : resolver(node.url, node.type);
      if (!resolved) {
        if (node.type === "link") {
          return node.children ?? [];
        }
        return node.alt
          ? [{ type: "text", value: `[Image unavailable: ${node.alt}]` }]
          : [];
      }
      if (!/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(resolved)) {
        throw new Error(`Link resolver returned a relative URL: ${resolved}`);
      }
      node.url = resolved;
    }
    if (node.type === "html" && node.value) {
      node.value = transformOutsideCode(node.value, (html) =>
        html.replace(
          /<(a|img|source|video)\b[^>]*>/gi,
          (tag: string, tagName: string) => {
            const attribute = tagName.toLowerCase() === "a" ? "href" : "src";
            const expression = new RegExp(
              `\\s${attribute}=(?:"([^"]+)"|'([^']+)')`,
              "i",
            );
            const match = tag.match(expression);
            const url = match?.[1] ?? match?.[2];
            if (!url) return tag;
            const kind = attribute === "href" ? "link" : "image";
            const resolved = resolver(url.replaceAll("&amp;", "&"), kind);
            if (!resolved) {
              return kind === "link" ? tag.replace(expression, "") : "";
            }
            if (!/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(resolved)) {
              throw new Error(
                `Link resolver returned a relative URL: ${resolved}`,
              );
            }
            const quote = match?.[1] !== undefined ? '"' : "'";
            return tag.replace(
              expression,
              ` ${attribute}=${quote}${resolved.replaceAll("&", "&amp;")}${quote}`,
            );
          },
        ),
      );
    }
    return [node];
  }
}

export interface MarkdownLink {
  readonly url: string;
  readonly kind: "link" | "image";
  readonly syntax?: "markdown" | "html";
}

export function markdownLinks(source: string): readonly MarkdownLink[] {
  const tree = markdownParser.parse(source) as Root;
  const links: MarkdownLink[] = [];
  walk(tree as unknown as MarkdownNode);
  return links;

  function walk(node: MarkdownNode): void {
    if ((node.type === "link" || node.type === "image") && node.url) {
      links.push({ url: node.url, kind: node.type, syntax: "markdown" });
    }
    if (node.type === "html" && node.value) {
      const html = withoutCode(node.value);
      for (const match of html.matchAll(
        /<(a|img|source|video)\b[^>]*?\s(href|src)=(?:"([^"]+)"|'([^']+)')[^>]*>/gi,
      )) {
        const tag = match[1]?.toLowerCase();
        const attribute = match[2]?.toLowerCase();
        const url = match[3] ?? match[4];
        if (!url) continue;
        links.push({
          url: url.replaceAll("&amp;", "&"),
          kind: tag === "a" && attribute === "href" ? "link" : "image",
          syntax: "html",
        });
      }
      // CommonMark treats a block-level HTML container and everything inside
      // it as one HTML node. Markdown-looking links in that node are still
      // published verbatim, so the final output contract must inspect them.
      const nested = markdownParser.parse(
        stripHtmlContainerLines(html),
      ) as Root;
      collectMarkdownAstLinks(nested as unknown as MarkdownNode, links);
    }
    for (const child of node.children ?? []) {
      walk(child);
    }
  }
}

function stripHtmlContainerLines(value: string): string {
  return value.replace(/^\s*<\/?[A-Za-z][^>]*>\s*$/gm, "");
}

function collectMarkdownAstLinks(
  node: MarkdownNode,
  links: MarkdownLink[],
): void {
  if ((node.type === "link" || node.type === "image") && node.url) {
    links.push({ url: node.url, kind: node.type, syntax: "markdown" });
  }
  for (const child of node.children ?? []) {
    collectMarkdownAstLinks(child, links);
  }
}

export function documentLinks(source: string): readonly MarkdownLink[] {
  return markdownLinks(source);
}

function collectFragments(root: MarkdownNode): ReadonlyMap<string, string> {
  const result = new Map<string, string>();
  const slugCounts = new Map<string, number>();
  walk(root);
  return result;

  function walk(node: MarkdownNode): void {
    if (node.type === "heading") {
      const base = markdownSlug(nodeText(node));
      const count = slugCounts.get(base) ?? 0;
      slugCounts.set(base, count + 1);
      add(count === 0 ? base : `${base}-${count}`);
    }
    if (node.type === "html" && node.value) {
      for (const match of node.value.matchAll(/<a\s+id="([^"]+)"\s*><\/a>/gi)) {
        if (match[1]) {
          add(match[1]);
        }
      }
    }
    for (const child of node.children ?? []) {
      walk(child);
    }
  }

  function add(fragment: string): void {
    result.set(fragment.toLowerCase(), fragment);
    result.set(fragmentKey(fragment), fragment);
  }
}

function resolveFragment(
  url: string,
  fragments: ReadonlyMap<string, string>,
): string | undefined {
  const fragment = decodeURIComponent(url.slice(1));
  const exact =
    fragments.get(fragment.toLowerCase()) ??
    fragments.get(fragmentKey(fragment));
  if (exact) {
    return `#${exact}`;
  }
  const key = fragmentKey(fragment);
  const candidates = [...new Set(fragments.values())].filter((candidate) => {
    const candidateKey = fragmentKey(candidate);
    return candidateKey.startsWith(key) || key.startsWith(candidateKey);
  });
  return candidates.length === 1 ? `#${candidates[0]}` : undefined;
}

function markdownSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function fragmentKey(value: string): string {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

function nodeText(node: MarkdownNode): string {
  if (node.type === "text" || node.type === "inlineCode") {
    return node.value ?? "";
  }
  return (node.children ?? []).map(nodeText).join("");
}

export function titleCase(value: string): string {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .trim();
}

export function normalizeSpacing(value: string): string {
  return `${transformOutsideFencedCode(normalizeNewlines(value), (markdown) =>
    markdown.replace(/\n{3,}/g, "\n\n"),
  ).trim()}\n`;
}

interface MarkdownFence {
  readonly marker: "`" | "~";
  readonly length: number;
}

function openingFence(line: string): MarkdownFence | undefined {
  const match = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})/);
  const run = match?.[1];
  if (!run) {
    return undefined;
  }
  return { marker: run[0] as "`" | "~", length: run.length };
}

function isClosingFence(line: string, fence: MarkdownFence): boolean {
  const match = line.match(/^\s*(?:>\s*)*(`{3,}|~{3,})\s*$/);
  const run = match?.[1];
  return (
    run !== undefined && run[0] === fence.marker && run.length >= fence.length
  );
}

export function transformOutsideFencedCode(
  source: string,
  transform: (markdown: string) => string,
): string {
  return mapMarkdownSegments(source, transform, (code) => code);
}

function transformOutsideCode(
  source: string,
  transform: (markdown: string) => string,
): string {
  return mapMarkdownSegments(
    source,
    (markdown) => mapOutsideInlineCode(markdown, transform),
    (code) => code,
  );
}

function withoutCode(source: string): string {
  return mapMarkdownSegments(
    source,
    (markdown) => markdown.replace(/(`+)[\s\S]*?\1/g, ""),
    () => "",
  );
}

function mapOutsideInlineCode(
  source: string,
  transform: (markdown: string) => string,
): string {
  const pattern = /(`+)[\s\S]*?\1/g;
  let cursor = 0;
  let output = "";
  for (const match of source.matchAll(pattern)) {
    const index = match.index ?? 0;
    output += transform(source.slice(cursor, index));
    output += match[0];
    cursor = index + match[0].length;
  }
  return output + transform(source.slice(cursor));
}

export function withoutFencedCode(source: string): string {
  return mapMarkdownSegments(
    source,
    (markdown) => markdown,
    () => "",
  );
}

function mapMarkdownSegments(
  source: string,
  outside: (markdown: string) => string,
  inside: (code: string) => string,
): string {
  const lines = source.split("\n");
  const segments: string[] = [];
  let pending: string[] = [];
  let fence: MarkdownFence | undefined;
  let pendingIsFence = false;

  const flush = (): void => {
    if (pending.length === 0) {
      return;
    }
    segments.push(
      pendingIsFence ? inside(pending.join("\n")) : outside(pending.join("\n")),
    );
    pending = [];
  };

  for (const line of lines) {
    if (!fence) {
      const opened = openingFence(line);
      if (opened) {
        flush();
        pendingIsFence = true;
        fence = opened;
      }
      pending.push(line);
      continue;
    }
    pending.push(line);
    if (isClosingFence(line, fence)) {
      flush();
      pendingIsFence = false;
      fence = undefined;
    }
  }
  flush();
  return segments.join("\n");
}

export function normalizeNewlines(value: string): string {
  return value.replace(/\r\n?/g, "\n");
}

export function githubBlobUrl(
  repository: string,
  ref: string,
  sourcePath: string,
): string {
  return `https://github.com/${repository}/blob/${encodeURIComponent(ref)}/${sourcePath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

export function githubRawUrl(
  repository: string,
  ref: string,
  sourcePath: string,
): string {
  return `https://raw.githubusercontent.com/${repository}/${encodeURIComponent(ref)}/${sourcePath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

function plainText(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`~]/g, "")
    .trim();
}
