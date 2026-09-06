import { readUtf8, withRepositoryArchive } from "../files.ts";
import { documentTitle, githubBlobUrl, normalizeSpacing } from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

const documentationFiles = [
  {
    sourcePath: "README.rst",
    outputPath: "pages/README.md",
    section: "Project guide",
  },
  {
    sourcePath: "doc/manual-src/en/aria2c.rst",
    outputPath: "pages/aria2c.md",
    section: "Manual",
  },
  {
    sourcePath: "doc/manual-src/en/libaria2.rst",
    outputPath: "pages/libaria2.md",
    section: "Library",
  },
  {
    sourcePath: "doc/manual-src/en/technical-notes.rst",
    outputPath: "pages/technical-notes.md",
    section: "Technical reference",
  },
] as const;

const apiHeaderPath = "src/includes/aria2/aria2.h";
const generatedApiInclude = /^\.\. include:: libaria2api$/m;
const aria2cReferenceTargets = new Set([
  "exit-status",
  "input-file",
  "rpc-auth",
  "rpc-options",
]);

interface IndentedBlock {
  readonly lines: readonly string[];
  readonly next: number;
}

type ApiKind = "macro" | "enum" | "type" | "class" | "function";

interface ApiMember {
  readonly signature: string;
  readonly description: readonly string[];
}

interface ApiItem {
  readonly kind: ApiKind;
  readonly signature: string;
  readonly description: readonly string[];
  readonly members: readonly ApiMember[];
}

interface ApiComment {
  readonly marker: string | undefined;
  readonly description: readonly string[];
  readonly next: number;
}

interface ParsedApiItem {
  readonly item: ApiItem;
  readonly next: number;
}

export async function buildAria2(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root) => {
      const apiReference = renderAria2ApiReference(
        await readUtf8(root, apiHeaderPath),
      );
      const documents = new DocumentCollector(project.id);
      for (const page of documentationFiles) {
        await documents.collect(page.sourcePath, async () => {
          const raw = await readUtf8(root, page.sourcePath);
          const source = page.sourcePath.endsWith("libaria2.rst")
            ? replaceGeneratedApiInclude(raw, apiReference)
            : raw;
          const body = convertAria2Rst(source, page.sourcePath);
          return {
            sourcePath: page.sourcePath,
            outputPath: page.outputPath,
            title: documentTitle(body, {}, page.sourcePath),
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
      if (documents.quarantined.length > 0) {
        throw new Error(
          `aria2 requires every selected document; ${documents.quarantined.map((entry) => `${entry.sourcePath}: ${entry.reason}`).join("; ")}`,
        );
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "The release-pinned English Sphinx sources are converted without executing Sphinx or upstream Python.",
          "The libaria2 API reference is generated deterministically from the release-pinned public C++ header without executing its Python generator.",
          "Translations, generated man pages, shell completions, and vendored documentation are omitted.",
        ],
        licenseText: await readUtf8(root, "COPYING"),
      };
    },
    (sourcePath) =>
      sourcePath === "COPYING" ||
      sourcePath === apiHeaderPath ||
      documentationFiles.some((page) => page.sourcePath === sourcePath),
  );
}

function replaceGeneratedApiInclude(
  source: string,
  apiReference: string,
): string {
  if (!generatedApiInclude.test(source)) {
    throw new Error("aria2 libaria2.rst has no libaria2api include");
  }
  return source.replace(generatedApiInclude, () => apiReference.trimEnd());
}

export function renderAria2ApiReference(source: string): string {
  const items = parseAria2ApiHeader(source);
  const sections: readonly {
    readonly title: string;
    readonly kinds: readonly ApiKind[];
  }[] = [
    { title: "Macros", kinds: ["macro"] },
    { title: "Enums", kinds: ["enum"] },
    { title: "Types", kinds: ["type", "class"] },
    { title: "Functions", kinds: ["function"] },
  ];
  const output: string[] = [];
  for (const section of sections) {
    const entries = items.filter((item) => section.kinds.includes(item.kind));
    if (entries.length === 0) {
      continue;
    }
    output.push(`### ${section.title}`, "");
    for (const entry of entries) {
      output.push(
        `<a id="api-${anchor(entry.signature)}"></a>`,
        `#### \`${escapeCode(entry.signature)}\``,
        "",
      );
      const description = renderBlocks(
        transformDoxygenContent(entry.description),
        "doc/manual-src/en/libaria2.rst",
      ).trim();
      if (description) {
        output.push(description, "");
      }
      for (const member of entry.members) {
        output.push(
          `<a id="api-${anchor(entry.signature)}-${anchor(member.signature)}"></a>`,
          `##### \`${escapeCode(member.signature)}\``,
          "",
        );
        const memberDescription = renderBlocks(
          transformDoxygenContent(member.description),
          "doc/manual-src/en/libaria2.rst",
        ).trim();
        if (memberDescription) {
          output.push(memberDescription, "");
        }
      }
    }
  }
  return normalizeSpacing(output.join("\n"));
}

function parseAria2ApiHeader(source: string): readonly ApiItem[] {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const items: ApiItem[] = [];
  let documentedDeclarations = 0;
  for (let index = 0; index < lines.length; index += 1) {
    if ((lines[index] ?? "").trim() !== "/**") {
      continue;
    }
    const comment = readApiComment(lines, index);
    if (!comment.marker) {
      throw new Error(
        `Unattributed top-level aria2 API comment at line ${index + 1}`,
      );
    }
    documentedDeclarations += 1;
    const parsed = parseApiItem(lines, comment);
    items.push(parsed.item);
    index = parsed.next - 1;
  }
  if (items.length === 0 || items.length !== documentedDeclarations) {
    throw new Error(
      `aria2 API header yielded ${items.length} of ${documentedDeclarations} documented declarations`,
    );
  }
  return items;
}

function parseApiItem(
  lines: readonly string[],
  comment: ApiComment,
): ParsedApiItem {
  const marker = comment.marker;
  if (marker === "@function" || marker === "@functypedef") {
    const declaration = readApiDeclaration(lines, comment.next);
    return {
      item: {
        kind: marker === "@function" ? "function" : "type",
        signature: normalizeApiDeclaration(declaration.lines),
        description: comment.description,
        members: [],
      },
      next: declaration.next,
    };
  }
  if (marker === "@typedef") {
    const declaration = readApiDeclaration(lines, comment.next);
    return {
      item: {
        kind: "type",
        signature: normalizeApiDeclaration(declaration.lines),
        description: comment.description,
        members: [],
      },
      next: declaration.next,
    };
  }
  if (
    marker === "@enum" ||
    marker === "@struct" ||
    marker === "@class" ||
    marker === "@union"
  ) {
    return parseApiAggregate(lines, comment);
  }
  if (marker === "@macro") {
    const declaration = nextNonBlankLine(lines, comment.next);
    const signature = (lines[declaration] ?? "").trim();
    if (!signature.startsWith("#define ")) {
      throw new Error(
        `Invalid documented aria2 macro at line ${declaration + 1}`,
      );
    }
    return {
      item: {
        kind: "macro",
        signature,
        description: comment.description,
        members: [],
      },
      next: declaration + 1,
    };
  }
  throw new Error(`Unsupported aria2 API marker ${marker}`);
}

function parseApiAggregate(
  lines: readonly string[],
  comment: ApiComment,
): ParsedApiItem {
  const start = nextNonBlankLine(lines, comment.next);
  const declaration = lines[start]?.trim() ?? "";
  const match = declaration.match(/^(enum|struct|class|union)\s+([^\s{;]+)/);
  if (!match?.[1] || !match[2]) {
    throw new Error(`Invalid documented aria2 aggregate at line ${start + 1}`);
  }
  const kind =
    match[1] === "enum" ? "enum" : match[1] === "class" ? "class" : "type";
  const signature = `${match[1]} ${match[2]}`;
  if (declaration.endsWith(";")) {
    return {
      item: {
        kind,
        signature,
        description: comment.description,
        members: [],
      },
      next: start + 1,
    };
  }
  if (!declaration.includes("{")) {
    throw new Error(`aria2 aggregate has no body at line ${start + 1}`);
  }

  const members: ApiMember[] = [];
  let cursor = start + 1;
  for (; cursor < lines.length; cursor += 1) {
    const line = lines[cursor] ?? "";
    if (/^\s*};?\s*$/.test(line)) {
      break;
    }
    if (line.trim() !== "/**") {
      continue;
    }
    const memberComment = readApiComment(lines, cursor);
    if (memberComment.marker) {
      throw new Error(
        `Unexpected aria2 API marker ${memberComment.marker} inside ${signature}`,
      );
    }
    if (kind === "enum") {
      const memberLine = nextNonBlankLine(lines, memberComment.next);
      const memberSignature = (lines[memberLine] ?? "")
        .trim()
        .replace(/,\s*$/, "");
      if (!memberSignature) {
        throw new Error(`Missing aria2 enum member after line ${cursor + 1}`);
      }
      members.push({
        signature: memberSignature,
        description: memberComment.description,
      });
      cursor = memberLine;
      continue;
    }
    const memberDeclaration = readApiDeclaration(lines, memberComment.next);
    members.push({
      signature: normalizeApiDeclaration(memberDeclaration.lines)
        .replace(/^virtual\s+/, "")
        .replace(/\s*=\s*0$/, ""),
      description: memberComment.description,
    });
    cursor = memberDeclaration.next - 1;
  }
  if (cursor >= lines.length) {
    throw new Error(`Unterminated aria2 API aggregate ${signature}`);
  }
  return {
    item: {
      kind,
      signature,
      description: comment.description,
      members,
    },
    next: cursor + 1,
  };
}

function readApiComment(lines: readonly string[], start: number): ApiComment {
  const content: string[] = [];
  let cursor = start + 1;
  for (; cursor < lines.length; cursor += 1) {
    const line = lines[cursor] ?? "";
    if (/^\s*\*\/\s*$/.test(line)) {
      break;
    }
    content.push(line.replace(/^\s*\*\s?/, ""));
  }
  if (cursor >= lines.length) {
    throw new Error(`Unterminated aria2 API comment at line ${start + 1}`);
  }
  const trimmed = trimBlankLines(content);
  const marker = trimmed[0]?.match(/^@(\w+)\s*$/)?.[0];
  return {
    marker,
    description: trimBlankLines(marker ? trimmed.slice(1) : trimmed),
    next: cursor + 1,
  };
}

function readApiDeclaration(
  lines: readonly string[],
  start: number,
): { readonly lines: readonly string[]; readonly next: number } {
  const first = nextNonBlankLine(lines, start);
  const declaration: string[] = [];
  for (let cursor = first; cursor < lines.length; cursor += 1) {
    const line = lines[cursor] ?? "";
    declaration.push(line);
    if (/;\s*$/.test(line)) {
      return { lines: declaration, next: cursor + 1 };
    }
    if (line.trim() === "/**" || /^\s*}\s*$/.test(line)) {
      break;
    }
  }
  throw new Error(`Unterminated aria2 API declaration at line ${first + 1}`);
}

function normalizeApiDeclaration(lines: readonly string[]): string {
  return lines
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^typedef\s+/, "")
    .replace(/;$/, "");
}

function transformDoxygenContent(lines: readonly string[]): readonly string[] {
  return lines.map((line) =>
    line
      .replace(
        /\|([^\s|]+)\|/g,
        (_match, argument: string) => `*${argument.replace(/\*/g, "\\*")}*`,
      )
      .replace(/:enum:/g, ":c:macro:"),
  );
}

function nextNonBlankLine(lines: readonly string[], start: number): number {
  let index = start;
  while (index < lines.length && !(lines[index] ?? "").trim()) {
    index += 1;
  }
  if (index >= lines.length) {
    throw new Error(`Expected aria2 API declaration after line ${start}`);
  }
  return index;
}

export function convertAria2Rst(source: string, sourcePath: string): string {
  const normalized = normalizeMultilineMarkup(
    source
      .replace(/\r\n?/g, "\n")
      .replace(/:func:'aria2\.shutdown`/g, ":func:`aria2.shutdown`")
      .replace(/```--ca-certificate``/g, "``--ca-certificate``"),
  );
  const rendered = normalizeSpacing(
    renderBlocks(normalized.split("\n"), sourcePath),
  );
  const unresolved = rendered.match(
    /^\s*\.\.\s+\S+::|:[a-zA-Z][\w:-]*:`|`[^`\n]+`_|^\s*=+(?:\s+=+)+\s*$/m,
  );
  if (unresolved) {
    throw new Error(
      `Unsupported aria2 RST syntax ${JSON.stringify(unresolved[0].trim())} in ${sourcePath}`,
    );
  }
  return rendered;
}

function renderBlocks(lines: readonly string[], sourcePath: string): string {
  const output: string[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (!line.trim()) {
      output.push("");
      continue;
    }

    const table = readSimpleTable(lines, index);
    if (table) {
      output.push(...table.rendered);
      index = table.next - 1;
      continue;
    }

    const underline = lines[index + 1]?.trim() ?? "";
    const heading = underline.match(/^([=\-~^"'`:+*#])\1{2,}$/);
    if (heading) {
      const levels: Readonly<Record<string, string>> = {
        "=": "#",
        "-": "##",
        "~": "###",
        "^": "####",
      };
      output.push(
        `${levels[heading[1] ?? ""] ?? "#####"} ${renderInline(line.trim(), sourcePath)}`,
      );
      index += 1;
      continue;
    }

    const target = line.match(/^\s*\.\.\s+_([^:]+):\s*$/);
    if (target?.[1]) {
      output.push(`<a id="${anchor(target[1])}"></a>`);
      continue;
    }

    const directive = line.match(/^(\s*)\.\.\s+([a-zA-Z][\w:-]*)::\s*(.*)$/);
    if (directive?.[2] !== undefined) {
      const name = directive[2].toLowerCase();
      const argument = directive[3]?.trim() ?? "";
      const block = readIndentedBlock(
        lines,
        index + 1,
        indentation(directive[1] ?? ""),
      );
      if (name === "default-domain" || name === "highlight") {
        index = block.next - 1;
        continue;
      }
      if (name === "include") {
        throw new Error(
          `Unsupported aria2 include ${argument} in ${sourcePath}`,
        );
      }
      if (name === "option" || name === "function") {
        output.push(
          `<a id="${name}-${anchor(argument)}"></a>`,
          `#### \`${escapeCode(argument)}\``,
        );
        const body = renderBlocks(block.lines, sourcePath).trim();
        if (body) {
          output.push("", body);
        }
        output.push("");
        index = block.next - 1;
        continue;
      }
      if (name === "note" || name === "warning") {
        const body = renderBlocks(block.lines, sourcePath).trim();
        output.push(`> **${name === "note" ? "Note" : "Warning"}**`);
        if (body) {
          output.push(
            ...body
              .split("\n")
              .map((bodyLine) => (bodyLine ? `> ${bodyLine}` : ">")),
          );
        }
        output.push("");
        index = block.next - 1;
        continue;
      }
      if (name === "code-block") {
        const code = trimBlankLines(withoutDirectiveOptions(block.lines));
        output.push(`\`\`\`${argument || "text"}`, ...code, "```", "");
        index = block.next - 1;
        continue;
      }
      if (name === "hlist") {
        const body = withoutDirectiveOptions(block.lines);
        output.push(renderBlocks(body, sourcePath).trim(), "");
        index = block.next - 1;
        continue;
      }
      throw new Error(
        `Unsupported aria2 RST directive ${name} in ${sourcePath}`,
      );
    }

    if (/^\s*\.\.\s+/.test(line)) {
      throw new Error(
        `Unsupported aria2 RST construct ${JSON.stringify(line.trim())} in ${sourcePath}`,
      );
    }

    if (line.trimEnd().endsWith("::")) {
      const block = readIndentedBlock(lines, index + 1, indentation(line));
      const introduction = line.trimEnd().slice(0, -1).trim();
      if (introduction && introduction !== ":") {
        output.push(renderInline(introduction, sourcePath), "");
      }
      if (block.lines.length > 0) {
        const language = sourcePath.endsWith("libaria2.rst") ? "cpp" : "text";
        output.push(
          `\`\`\`${language}`,
          ...trimBlankLines(block.lines),
          "```",
          "",
        );
      }
      index = block.next - 1;
      continue;
    }

    const definition = readDefinition(lines, index);
    if (definition) {
      output.push(
        `**${renderInline(line.trim(), sourcePath)}**`,
        "",
        renderBlocks(definition.lines, sourcePath).trim(),
        "",
      );
      index = definition.next - 1;
      continue;
    }

    output.push(renderInline(line, sourcePath));
  }
  return output.join("\n");
}

function renderInline(value: string, sourcePath: string): string {
  return value
    .replace(
      /`([^`<]+?)\s*<([^>]+)>`_/g,
      (_match, label: string, url: string) =>
        `[${label.trim()}](${url.trim()})`,
    )
    .replace(
      /:([a-zA-Z][\w:-]*):`([^`]+)`/g,
      (_match, role: string, content: string) =>
        renderRole(role.toLowerCase(), content, sourcePath),
    )
    .replace(/`([^`]+)`_/g, (_match, label: string) => {
      const target = anchor(label);
      return `[${label}](${manualUrl(sourcePath, target)})`;
    })
    .replace(/``([^`]+)``/g, "`$1`")
    .replace(
      /<((?:OPTIONS?|URI|MAGNET|TORRENT_FILE|METALINK_FILE|[A-Z][A-Z0-9_]+)(?:\|[A-Z][A-Z0-9_]+)*)>/g,
      "&lt;$1&gt;",
    )
    .replace(/\\([=])/g, "$1");
}

function renderRole(role: string, content: string, sourcePath: string): string {
  const explicit = content.match(/^(.+?)\s*<([^>]+)>$/);
  const label = (explicit?.[1] ?? content).trim();
  const target = (explicit?.[2] ?? content).trim();
  if (role === "ref") {
    return `[${label}](${manualUrl(sourcePath, anchor(target))})`;
  }
  if (role === "rfc") {
    return `[RFC ${label}](https://datatracker.ietf.org/doc/html/rfc${target})`;
  }
  const codeRoles = new Set([
    "option",
    "func",
    "kbd",
    "manpage",
    "type",
    "member",
    "class",
    "c:macro",
  ]);
  if (codeRoles.has(role)) {
    return `\`${escapeCode(label)}\``;
  }
  throw new Error(`Unsupported aria2 RST role ${role} in ${sourcePath}`);
}

function normalizeMultilineMarkup(source: string): string {
  let normalized = source;
  let previous: string;
  do {
    previous = normalized;
    normalized = normalized
      .replace(/:([a-zA-Z][\w:-]*):`([^`\n]*)\n\s*([^`\n]*)`/g, ":$1:`$2 $3`")
      .replace(/`([^`\n]*)\n\s*([^`\n]*<[^>]+>)`_/g, "`$1 $2`_");
  } while (normalized !== previous);
  return joinMultilineLiterals(normalized);
}

function joinMultilineLiterals(source: string): string {
  const lines = source.split("\n");
  const output: string[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    let line = lines[index] ?? "";
    let delimiters = line.match(/``/g)?.length ?? 0;
    while (delimiters % 2 === 1 && index + 1 < lines.length) {
      index += 1;
      const next = lines[index] ?? "";
      line = `${line.trimEnd()} ${next.trimStart()}`;
      delimiters += next.match(/``/g)?.length ?? 0;
    }
    output.push(line);
  }
  return output.join("\n");
}

function readIndentedBlock(
  lines: readonly string[],
  start: number,
  parentIndent: number,
): IndentedBlock {
  let first = start;
  while (first < lines.length && !(lines[first] ?? "").trim()) {
    first += 1;
  }
  if (
    first >= lines.length ||
    indentation(lines[first] ?? "") <= parentIndent
  ) {
    return { lines: [], next: start };
  }
  let end = first;
  while (end < lines.length) {
    const candidate = lines[end] ?? "";
    if (candidate.trim() && indentation(candidate) <= parentIndent) {
      break;
    }
    end += 1;
  }
  return {
    lines: dedent(lines.slice(first, end)),
    next: end,
  };
}

function readDefinition(
  lines: readonly string[],
  index: number,
): IndentedBlock | undefined {
  const current = lines[index] ?? "";
  if (/^\s*(?:[-*+] |\d+\. )/.test(current) || /\.\s*$/.test(current)) {
    return undefined;
  }
  let first = index + 1;
  while (first < lines.length && !(lines[first] ?? "").trim()) {
    first += 1;
  }
  if (
    first >= lines.length ||
    indentation(lines[first] ?? "") <= indentation(current) ||
    /^\s*(?:[-*+] |(?:\d+|[a-z])\) )/i.test(lines[first] ?? "")
  ) {
    return undefined;
  }
  return readIndentedBlock(lines, index + 1, indentation(current));
}

function readSimpleTable(
  lines: readonly string[],
  index: number,
): { readonly rendered: readonly string[]; readonly next: number } | undefined {
  const separator = lines[index] ?? "";
  if (!/^\s*=+(?:\s+=+)+\s*$/.test(separator)) {
    return undefined;
  }
  const columns = [...separator.matchAll(/=+/g)].map((match) => ({
    start: match.index,
    end: (match.index ?? 0) + match[0].length,
  }));
  const rows: string[][] = [];
  let divider: number | undefined;
  let cursor = index + 1;
  for (; cursor < lines.length; cursor += 1) {
    const line = lines[cursor] ?? "";
    if (/^\s*=+(?:\s+=+)+\s*$/.test(line)) {
      if (divider === undefined) {
        divider = rows.length;
        continue;
      }
      break;
    }
    const cells = columns.map(({ start, end }, columnIndex) =>
      line
        .slice(start, columnIndex === columns.length - 1 ? undefined : end)
        .trim(),
    );
    if (!cells.some(Boolean)) {
      continue;
    }
    if (!cells[0] && rows.length > 0) {
      const previous = rows[rows.length - 1];
      for (let column = 1; column < cells.length; column += 1) {
        if (cells[column]) {
          previous![column] =
            `${previous?.[column] ?? ""} ${cells[column]}`.trim();
        }
      }
      continue;
    }
    rows.push(cells);
  }
  if (
    cursor >= lines.length ||
    rows.length === 0 ||
    divider === undefined ||
    divider === 0
  ) {
    throw new Error("Unterminated aria2 RST simple table");
  }
  const renderedRows = rows.map(
    (row) =>
      `| ${row.map((cell) => renderInline(cell, "README.rst").replace(/\|/g, "\\|")).join(" | ")} |`,
  );
  return {
    rendered: [
      renderedRows[0] ?? "",
      `| ${columns.map(() => "---").join(" | ")} |`,
      ...renderedRows.slice(divider),
    ],
    next: cursor + 1,
  };
}

function withoutDirectiveOptions(lines: readonly string[]): readonly string[] {
  let index = 0;
  while (index < lines.length && /^\s*:[\w-]+:/.test(lines[index] ?? "")) {
    index += 1;
  }
  while (index < lines.length && !(lines[index] ?? "").trim()) {
    index += 1;
  }
  return lines.slice(index);
}

function trimBlankLines(lines: readonly string[]): readonly string[] {
  let start = 0;
  let end = lines.length;
  while (start < end && !(lines[start] ?? "").trim()) {
    start += 1;
  }
  while (end > start && !(lines[end - 1] ?? "").trim()) {
    end -= 1;
  }
  return lines.slice(start, end);
}

function dedent(lines: readonly string[]): readonly string[] {
  const nonBlank = lines.filter((line) => line.trim());
  const width = Math.min(...nonBlank.map(indentation));
  return lines.map((line) => stripIndent(line, width));
}

function indentation(value: string): number {
  let width = 0;
  for (const character of value.match(/^\s*/)?.[0] ?? "") {
    width += character === "\t" ? 8 - (width % 8) : 1;
  }
  return width;
}

function stripIndent(value: string, width: number): string {
  let consumed = 0;
  let index = 0;
  while (index < value.length && consumed < width) {
    const character = value[index];
    if (character !== " " && character !== "\t") {
      break;
    }
    const characterWidth = character === "\t" ? 8 - (consumed % 8) : 1;
    if (consumed + characterWidth > width) {
      return `${" ".repeat(consumed + characterWidth - width)}${value.slice(index + 1)}`;
    }
    consumed += characterWidth;
    index += 1;
  }
  return value.slice(index);
}

function manualUrl(sourcePath: string, target: string): string {
  const page =
    sourcePath === "README.rst"
      ? "README"
      : sourcePath.endsWith("libaria2.rst") &&
          aria2cReferenceTargets.has(target)
        ? "aria2c"
        : (sourcePath
            .split("/")
            .at(-1)
            ?.replace(/\.rst$/, "") ?? "aria2c");
  return `https://aria2.github.io/manual/en/html/${page}.html#${target}`;
}

function anchor(value: string): string {
  return value
    .toLowerCase()
    .replace(/^--?/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeCode(value: string): string {
  return value.replace(/`/g, "\\`");
}
