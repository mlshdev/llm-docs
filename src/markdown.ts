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
  readonly value?: string;
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
  const match = normalized.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*\n/);
  if (!match) {
    return { attributes: {}, body: normalized };
  }
  const parsed: unknown = parseYaml(match[1] ?? "");
  return {
    attributes: isRecord(parsed) ? parsed : {},
    body: normalized.slice(match[0].length),
  };
}

export function cleanMarkdown(source: string): string {
  const { body } = parseFrontmatter(source);
  const withoutComments = body
    .replace(/<!--(?:.|\n)*?-->/g, "")
    .replace(/<\/a>(?:\s*<\/a>)+/gi, "</a>");
  const withoutAnchors = withoutComments
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
    );
  const lines = withoutAnchors.split("\n");
  const output: string[] = [];
  let inFence = false;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (inFence) {
      output.push(line.replace(/[ \t]+$/g, ""));
      if (/^\s*(?:>\s*)*(?:```|~~~)\s*$/.test(line)) {
        inFence = false;
      }
      continue;
    }
    const fence = line.match(
      /^(\s*(?:>\s*)*)```([^\s]+)\s+tab=(?:"([^"]+)"|'([^']+)')\s*$/,
    );
    if (fence) {
      const prefix = fence[1] ?? "";
      const label = fence[3] ?? fence[4] ?? "Example";
      output.push(
        `${prefix}**${label}**`,
        prefix.trimEnd(),
        `${prefix}\`\`\`${fence[2] ?? ""}`,
      );
      inFence = true;
      continue;
    }
    if (/^\s*(?:>\s*)*(?:```|~~~)/.test(line)) {
      output.push(line.replace(/[ \t]+$/g, ""));
      inFence = true;
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
    return [node];
  }
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
  return `${normalizeNewlines(value)
    .replace(/\n{3,}/g, "\n\n")
    .trim()}\n`;
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
