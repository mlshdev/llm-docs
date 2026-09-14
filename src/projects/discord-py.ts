import path from "node:path";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";

type SymbolKind = "class" | "function" | "method" | "attribute";

export interface PythonSymbol {
  readonly name: string;
  readonly qualifiedName: string;
  readonly kind: SymbolKind;
  readonly signature: string;
  readonly docstring: string;
  readonly children: readonly PythonSymbol[];
}

interface RstContext {
  readonly sourcePath: string;
  readonly homepage: string;
  readonly repository: string;
  readonly ref: string;
  readonly files: ReadonlySet<string>;
  readonly labels: ReadonlyMap<string, { sourcePath: string; anchor: string }>;
  readonly symbols: SymbolIndex;
  currentModule: string;
  currentClass?: PythonSymbol;
}

interface SymbolIndex {
  readonly exact: ReadonlyMap<string, PythonSymbol>;
  readonly suffix: ReadonlyMap<string, readonly PythonSymbol[]>;
}

interface IndentedBlock {
  readonly lines: readonly string[];
  readonly next: number;
}

interface GridTable {
  readonly lines: readonly string[];
  readonly next: number;
}

const rootDocuments = ["README.rst"] as const;

export async function buildDiscordPy(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    (root, archiveFiles) =>
      buildDiscordPyFromDirectory(project, lock, root, archiveFiles),
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      rootDocuments.includes(sourcePath as (typeof rootDocuments)[number]) ||
      /^docs\/(?!locale\/).*\.rst$/.test(sourcePath) ||
      /^docs\/images\/.*\.(?:png|svg|ico)$/.test(sourcePath) ||
      /^discord\/.*\.py$/.test(sourcePath),
  );
}

export async function buildDiscordPyFromDirectory(
  project: GithubSourceProject,
  lock: GithubLockedSource,
  root: string,
  archiveFiles?: ReadonlySet<string>,
): Promise<ProjectBuild> {
  const files = await listFiles(root);
  const allFiles = archiveFiles ?? new Set(files);
  const sourcePaths = files
    .filter(
      (sourcePath) =>
        rootDocuments.includes(sourcePath as (typeof rootDocuments)[number]) ||
        /^docs\/(?!locale\/).*\.rst$/.test(sourcePath),
    )
    .sort(compareCodePoints);
  const pythonPaths = files
    .filter((sourcePath) => /^discord\/.*\.py$/.test(sourcePath))
    .sort(compareCodePoints);
  const symbols = indexPythonSymbols(
    (
      await Promise.all(
        pythonPaths.map(async (sourcePath) => {
          try {
            return extractPythonSymbols(
              await readUtf8(root, sourcePath),
              pythonModule(sourcePath),
            );
          } catch (error) {
            throw new Error(`Unable to parse ${sourcePath}`, {
              cause: error,
            });
          }
        }),
      )
    ).flat(),
  );
  const sourceByPath = new Map(
    await Promise.all(
      sourcePaths.map(
        async (sourcePath) =>
          [sourcePath, await readUtf8(root, sourcePath)] as const,
      ),
    ),
  );
  const labels = collectLabels(sourceByPath);
  const documents = new DocumentCollector(project.id);
  for (const sourcePath of sourcePaths) {
    await documents.collect(sourcePath, async () => {
      const source = sourceByPath.get(sourcePath);
      if (source === undefined) {
        throw new Error(`Missing loaded source ${sourcePath}`);
      }
      const body = rewriteMarkdownLinks(
        convertDiscordRst(source, {
          sourcePath,
          homepage: project.homepage,
          repository: project.repository,
          ref: lock.sourceCommit,
          files: allFiles,
          labels,
          symbols,
          currentModule: "",
        }),
        (url, kind) =>
          resolveMarkdownLink(url, kind, sourcePath, allFiles, project, lock),
      );
      return {
        sourcePath,
        outputPath: `pages/${sourcePath.replace(/^(?:docs\/)?/, "").replace(/\.rst$/, ".md")}`,
        title: documentTitle(body, {}, sourcePath),
        body,
        canonicalUrl: githubBlobUrl(
          project.repository,
          lock.sourceCommit,
          sourcePath,
        ),
        section: sectionFor(sourcePath),
      };
    });
  }
  return {
    project,
    lock,
    documents: documents.documents,
    quarantined: documents.quarantined,
    notes: [
      "Release-pinned Sphinx RST is converted without executing Sphinx or importing upstream Python modules.",
      "Autodoc class, function, exception, and member descriptions are reproduced from statically extracted Python docstrings.",
      "Translations, theme assets, generated indexes, and non-documentation source are omitted.",
    ],
    licenseText: await readUtf8(root, "LICENSE"),
  };
}

export function convertDiscordRst(source: string, context: RstContext): string {
  const normalized = source
    .replace(/\r\n?/g, "\n")
    .replace(/\|coro\|/g, "*coroutine*")
    .replace(/\|maybecoro\|/g, "*possibly a coroutine*")
    .replace(/\|coroutine_link\|/g, "*coroutine*");
  const rendered = normalizeSpacing(
    renderBlocks(normalized.split("\n"), context),
  );
  const unresolved = rendered.match(
    /^\s*\.\.\s+\S+::|(?:^|[^`\\]):[a-zA-Z][\w:-]*:`|`[^`\n]+`_|\|(?:coro|maybecoro|coroutine_link)\|/m,
  );
  if (unresolved) {
    throw new Error(
      `Unsupported discord.py RST syntax ${JSON.stringify(unresolved[0].trim())} in ${context.sourcePath}`,
    );
  }
  return rendered;
}

function renderBlocks(lines: readonly string[], context: RstContext): string {
  const output: string[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (!line.trim()) {
      output.push("");
      continue;
    }

    const gridTable = readGridTable(lines, index, context);
    if (gridTable) {
      output.push(...gridTable.lines, "");
      index = gridTable.next - 1;
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
        `${levels[heading[1] ?? ""] ?? "#####"} ${renderInline(line.trim(), context)}`,
      );
      index += 1;
      continue;
    }

    const target = line.match(/^\s*\.\.\s+_([^:]+):(?:\s+\S+)?\s*$/);
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
      index = block.next - 1;

      if (name === "currentmodule") {
        context.currentModule = argument;
        continue;
      }
      if (
        name === "toctree" ||
        name === "contents" ||
        name === "attributetable" ||
        name === "highlight"
      ) {
        continue;
      }
      if (name === "image") {
        const options = directiveOptions(block.lines);
        output.push(`![${options.get("alt") ?? ""}](${argument})`, "");
        continue;
      }
      if (name === "code" || name === "code-block") {
        output.push(
          `\`\`\`${argument || "text"}`,
          ...trimBlankLines(withoutDirectiveOptions(block.lines)),
          "```",
          "",
        );
        continue;
      }
      if (
        name === "note" ||
        name === "warning" ||
        name === "danger" ||
        name === "important" ||
        name === "seealso" ||
        name === "admonition"
      ) {
        const title =
          name === "admonition" ? argument || "Note" : titleCase(name);
        output.push(...renderQuote(title, block.lines, context), "");
        continue;
      }
      if (
        name === "versionadded" ||
        name === "versionchanged" ||
        name === "deprecated"
      ) {
        const titles: Readonly<Record<string, string>> = {
          versionadded: "Added",
          versionchanged: "Changed",
          deprecated: "Deprecated",
        };
        output.push(
          ...renderQuote(
            `${titles[name]} in version ${argument}`,
            block.lines,
            context,
          ),
          "",
        );
        continue;
      }
      if (name === "container" || name === "exception_hierarchy") {
        const body = renderBlocks(block.lines, context).trim();
        if (body) output.push(body, "");
        continue;
      }
      if (name === "colour") {
        output.push(`Color: \`${argument}\``, "");
        continue;
      }
      if (name.startsWith("auto")) {
        output.push(...renderAutodoc(name, argument, block.lines, context), "");
        continue;
      }
      if (
        name === "function" ||
        name === "class" ||
        name === "method" ||
        name === "attribute" ||
        name === "data" ||
        name === "describe"
      ) {
        const marker = name === "attribute" ? "#####" : "####";
        output.push(
          `<a id="${name}-${anchor(argument)}"></a>`,
          `${marker} \`${escapeCode(argument)}\``,
        );
        const body = renderBlocks(
          withoutDirectiveOptions(block.lines),
          context,
        ).trim();
        if (body) output.push("", body);
        output.push("");
        continue;
      }
      throw new Error(
        `Unsupported discord.py RST directive ${name} in ${context.sourcePath}`,
      );
    }

    if (/^\s*\.\.\s+/.test(line)) {
      // Ordinary RST comments contain no published content.
      if (/^\s*\.\.\s*(?:$|[^_|[A-Za-z])/.test(line)) continue;
      throw new Error(
        `Unsupported discord.py RST construct ${JSON.stringify(line.trim())} in ${context.sourcePath}`,
      );
    }

    if (line.trimEnd().endsWith("::")) {
      const block = readIndentedBlock(lines, index + 1, indentation(line));
      const introduction = line.trimEnd().slice(0, -1).trim();
      if (introduction && introduction !== ":") {
        output.push(renderInline(introduction, context), "");
      }
      if (block.lines.length > 0) {
        output.push("```python", ...trimBlankLines(block.lines), "```", "");
      }
      index = block.next - 1;
      continue;
    }

    const definition = readDefinition(lines, index);
    if (definition) {
      output.push(
        `**${renderInline(line.trim(), context)}**`,
        "",
        renderBlocks(definition.lines, context).trim(),
        "",
      );
      index = definition.next - 1;
      continue;
    }

    const field = line.match(/^\s*:([\w ]+)(?:\s+([^:]+))?:\s*(.*)$/);
    if (field) {
      const label = [field[1], field[2]].filter(Boolean).join(" ");
      output.push(
        `- **${titleCase(label)}:** ${renderInline(field[3] ?? "", context)}`,
      );
      continue;
    }

    output.push(renderInline(line, context));
  }
  return output.join("\n");
}

function renderAutodoc(
  directive: string,
  argument: string,
  lines: readonly string[],
  context: RstContext,
): readonly string[] {
  const symbol = findSymbol(
    argument,
    context.currentModule,
    context.symbols,
    context.currentClass,
  );
  if (!symbol) {
    throw new Error(
      `Unable to resolve ${directive} target ${argument} in ${context.sourcePath}`,
    );
  }
  const options = directiveOptions(lines);
  const output = [
    `<a id="api-${anchor(argument)}"></a>`,
    `#### \`${escapeCode(symbol.signature)}\``,
  ];
  if (symbol.docstring.trim()) {
    output.push("", renderBlocks(symbol.docstring.split("\n"), context).trim());
  }
  if (options.has("members") && symbol.kind === "class") {
    const excluded = new Set(
      (options.get("exclude-members") ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
    );
    for (const child of symbol.children) {
      if (
        child.name.startsWith("_") ||
        excluded.has(child.name) ||
        !child.docstring.trim()
      ) {
        continue;
      }
      output.push(
        "",
        `<a id="api-${anchor(argument)}-${anchor(child.name)}"></a>`,
        `##### \`${escapeCode(child.signature)}\``,
        "",
        renderBlocks(child.docstring.split("\n"), context).trim(),
      );
    }
  }
  const nested = withoutDirectiveOptions(lines);
  if (nested.some((line) => line.trim())) {
    const previousClass = context.currentClass;
    if (symbol.kind === "class") context.currentClass = symbol;
    output.push("", renderBlocks(nested, context).trim());
    if (previousClass) context.currentClass = previousClass;
    else delete context.currentClass;
  }
  return output;
}

function renderQuote(
  title: string,
  lines: readonly string[],
  context: RstContext,
): readonly string[] {
  const body = renderBlocks(lines, context).trim();
  return [
    `> **${title}**`,
    ...(body ? body.split("\n").map((line) => (line ? `> ${line}` : ">")) : []),
  ];
}

function renderInline(value: string, context: RstContext): string {
  return value
    .replace(/\|coro\|/g, "*coroutine*")
    .replace(/\|maybecoro\|/g, "*possibly a coroutine*")
    .replace(/\|coroutine_link\|/g, "*coroutine*")
    .replace(
      /`([^`<]+?)\s*<([^>]+)>`__/g,
      (_match, label: string, url: string) =>
        `[${label.trim()}](${url.trim()})`,
    )
    .replace(
      /`([^`<]+?)\s*<([^>]+)>`_/g,
      (_match, label: string, target: string) =>
        `[${label.trim()}](${resolveRstTarget(target.trim(), context)})`,
    )
    .replace(
      /:([a-zA-Z][\w:-]*):`([^`]+)`/g,
      (_match, role: string, content: string) =>
        renderRole(role.toLowerCase(), content, context),
    )
    .replace(/``([^`]+)``/g, "`$1`")
    .replace(/`([^`]+)`_/g, (_match, label: string) => {
      const target = context.labels.get(label.trim());
      return target
        ? `[${label}](${documentationUrl(context.homepage, target.sourcePath, target.anchor)})`
        : label;
    })
    .replace(/\*\*([^*]+)\*\*/g, "**$1**");
}

function renderRole(
  role: string,
  content: string,
  context: RstContext,
): string {
  const explicit = content.match(/^(.+?)\s*<([^>]+)>$/);
  const label = (explicit?.[1] ?? content).trim().replace(/^~/, "");
  const target = (explicit?.[2] ?? content).trim().replace(/^~/, "");
  if (role === "doc") {
    return `[${label}](${documentationUrl(context.homepage, `docs/${target}.rst`)})`;
  }
  if (role === "ref") {
    const reference = context.labels.get(target);
    return reference
      ? `[${label}](${documentationUrl(context.homepage, reference.sourcePath, reference.anchor)})`
      : label;
  }
  if (role === "issue") {
    return `[GH-${label}](https://github.com/${context.repository}/issues/${encodeURIComponent(target)})`;
  }
  if (role === "ddocs") {
    return `[${label}](https://discord.com/developers/docs/${target})`;
  }
  if (role === "pep") {
    return `[PEP ${label}](https://peps.python.org/pep-${target.padStart(4, "0")}/)`;
  }
  if (role === "rfc") {
    return `[RFC ${label}](https://datatracker.ietf.org/doc/html/rfc${target})`;
  }
  if (role === "resource") {
    const resources: Readonly<Record<string, string>> = {
      discord: "https://discord.gg/r3sSKJJ",
      issues: `https://github.com/${context.repository}/issues`,
      discussions: `https://github.com/${context.repository}/discussions`,
      examples: `https://github.com/${context.repository}/tree/${context.ref}/examples`,
    };
    return resources[target] ? `[${label}](${resources[target]})` : label;
  }
  const codeRoles = new Set([
    "class",
    "attr",
    "meth",
    "func",
    "exc",
    "obj",
    "mod",
    "data",
    "term",
    "python3",
    "custom_emoji",
  ]);
  if (codeRoles.has(role)) {
    return `\`${escapeCode(label)}\``;
  }
  throw new Error(
    `Unsupported discord.py RST role ${role} in ${context.sourcePath}`,
  );
}

function resolveRstTarget(target: string, context: RstContext): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target)) return target;
  const reference = context.labels.get(target);
  return reference
    ? documentationUrl(context.homepage, reference.sourcePath, reference.anchor)
    : target;
}

function collectLabels(
  sources: ReadonlyMap<string, string>,
): ReadonlyMap<string, { sourcePath: string; anchor: string }> {
  const labels = new Map<string, { sourcePath: string; anchor: string }>();
  for (const [sourcePath, source] of sources) {
    for (const match of source.matchAll(
      /^\s*\.\.\s+_([^:]+):(?:\s+\S+)?\s*$/gm,
    )) {
      const label = match[1]?.trim();
      if (label) labels.set(label, { sourcePath, anchor: anchor(label) });
    }
  }
  return labels;
}

function documentationUrl(
  homepage: string,
  sourcePath: string,
  fragment?: string,
): string {
  const relative = sourcePath
    .replace(/^docs\//, "")
    .replace(/\.rst$/, ".html")
    .replace(/(?:^|\/)index\.html$/, "$1index.html");
  return `${homepage.replace(/\/$/, "")}/${relative}${fragment ? `#${fragment}` : ""}`;
}

function resolveMarkdownLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  files: ReadonlySet<string>,
  project: GithubSourceProject,
  lock: GithubLockedSource,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return url;
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  if (!files.has(resolved)) return undefined;
  const base =
    kind === "image"
      ? githubRawUrl(project.repository, lock.sourceCommit, resolved)
      : githubBlobUrl(project.repository, lock.sourceCommit, resolved);
  return `${base}${suffix}`;
}

export function extractPythonSymbols(
  source: string,
  moduleName: string,
): readonly PythonSymbol[] {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const roots: MutableSymbol[] = [];
  const stack: { symbol: MutableSymbol; indent: number }[] = [];
  let decorators: string[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const indent = indentation(line);
    const standaloneString = readPythonString(lines, index);
    if (standaloneString) {
      index = standaloneString.next - 1;
      continue;
    }
    while (stack.length > 0 && indent <= (stack.at(-1)?.indent ?? -1)) {
      stack.pop();
    }
    if (/^\s*@/.test(line)) {
      decorators.push(line.trim());
      continue;
    }
    const definition = line.match(
      /^\s*(?:(async)\s+)?(class|def)\s+([A-Za-z_]\w*)/,
    );
    if (!definition?.[2] || !definition[3]) {
      const assignment = line.match(/^\s*([A-Za-z_]\w*)(?:\s*:[^=]+)?\s*=.+$/);
      const parent = stack.at(-1)?.symbol;
      if (
        assignment?.[1] &&
        parent?.kind !== "function" &&
        parent?.kind !== "method"
      ) {
        const parsedDocstring = readPythonDocstring(
          lines,
          index + 1,
          indent - 1,
        );
        if (parsedDocstring.text) {
          const [summary = assignment[1], ...body] =
            parsedDocstring.text.split("\n");
          const hasSignature = /^\w+\(.*\)$/.test(summary.trim());
          const signature = hasSignature ? summary.trim() : assignment[1];
          const symbol: MutableSymbol = {
            name: assignment[1],
            qualifiedName: `${parent?.qualifiedName ?? moduleName}.${assignment[1]}`,
            kind: parent ? "attribute" : "function",
            signature,
            docstring: hasSignature ? body.join("\n") : parsedDocstring.text,
            children: [],
          };
          if (parent) parent.children.push(symbol);
          else roots.push(symbol);
          index = parsedDocstring.next - 1;
        }
      }
      decorators = [];
      continue;
    }
    const parent = stack.at(-1)?.symbol;
    if (parent?.kind === "function" || parent?.kind === "method") {
      decorators = [];
      continue;
    }
    const header = readPythonHeader(lines, index);
    index = header.next - 1;
    const parsedDocstring = readPythonDocstring(lines, header.next, indent);
    const isClass = definition[2] === "class";
    const isAttribute = decorators.some((entry) =>
      /^@(?:[\w.]+\.)?(?:cached_)?property\b/.test(entry),
    );
    const kind: SymbolKind = isClass
      ? "class"
      : isAttribute
        ? "attribute"
        : parent
          ? "method"
          : "function";
    const qualifiedName = `${parent?.qualifiedName ?? moduleName}.${definition[3]}`;
    const symbol: MutableSymbol = {
      name: definition[3],
      qualifiedName,
      kind,
      signature: normalizePythonSignature(header.text),
      docstring: parsedDocstring.text,
      children: [],
    };
    if (parent) parent.children.push(symbol);
    else roots.push(symbol);
    stack.push({ symbol, indent });
    if (parsedDocstring.text) index = parsedDocstring.next - 1;
    decorators = [];
  }
  return roots;
}

interface MutableSymbol {
  name: string;
  qualifiedName: string;
  kind: SymbolKind;
  signature: string;
  docstring: string;
  children: MutableSymbol[];
}

function readPythonHeader(
  lines: readonly string[],
  start: number,
): { readonly text: string; readonly next: number } {
  const parts: string[] = [];
  let depth = 0;
  let quote: string | undefined;
  let escaped = false;
  for (let index = start; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    parts.push(line.trim());
    for (const character of line) {
      if (quote) {
        if (escaped) escaped = false;
        else if (character === "\\") escaped = true;
        else if (character === quote) quote = undefined;
        continue;
      }
      if (character === "#") break;
      if (character === "'" || character === '"') quote = character;
      else if ("([{".includes(character)) depth += 1;
      else if (")]}".includes(character)) depth -= 1;
    }
    if (!quote && depth === 0 && /:\s*(?:\.\.\.)?$/.test(line)) {
      return { text: parts.join(" "), next: index + 1 };
    }
  }
  throw new Error(`Unterminated Python definition at line ${start + 1}`);
}

function readPythonDocstring(
  lines: readonly string[],
  start: number,
  parentIndent: number,
): { readonly text: string; readonly next: number } {
  let index = start;
  while (index < lines.length && !(lines[index] ?? "").trim()) index += 1;
  const line = lines[index] ?? "";
  if (indentation(line) <= parentIndent) return { text: "", next: start };
  const parsed = readPythonString(lines, index);
  if (!parsed) return { text: "", next: start };
  return parsed;
}

function readPythonString(
  lines: readonly string[],
  start: number,
): { readonly text: string; readonly next: number } | undefined {
  const line = lines[start] ?? "";
  const closingOnly = line.match(/^\s*("""|''')\s*$/);
  if (closingOnly) return { text: "", next: start + 1 };
  const opening = line.match(/(?:^\s*[rubfRUBF]*|=\s*[rubfRUBF]*)("""|''')/);
  if (!opening?.[1]) return undefined;
  const delimiter = opening[1];
  const after = line.slice((opening.index ?? 0) + opening[0].length);
  const sameLineEnd = after.indexOf(delimiter);
  if (sameLineEnd >= 0) {
    return { text: after.slice(0, sameLineEnd).trim(), next: start + 1 };
  }
  const content = [after];
  for (let index = start + 1; index < lines.length; index += 1) {
    const current = lines[index] ?? "";
    const closing = current.indexOf(delimiter);
    if (closing >= 0) {
      content.push(current.slice(0, closing));
      return { text: dedentDocstring(content), next: index + 1 };
    }
    content.push(current);
  }
  throw new Error(`Unterminated Python string after line ${start}`);
}

function dedentDocstring(lines: readonly string[]): string {
  const trimmed = trimBlankLines(lines);
  const [first = "", ...rest] = trimmed;
  const indents = rest.filter((line) => line.trim()).map(indentation);
  const amount = indents.length > 0 ? Math.min(...indents) : 0;
  return [
    first.trim(),
    ...rest.map((line) => line.slice(Math.min(amount, line.length))),
  ].join("\n");
}

function normalizePythonSignature(header: string): string {
  return header
    .replace(/^async\s+/, "async ")
    .replace(/^(?:async\s+)?(?:class|def)\s+/, "")
    .replace(/:\s*$/, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,):])/g, "$1")
    .replace(/([(,])\s+/g, "$1 ");
}

export function indexPythonSymbols(
  roots: readonly PythonSymbol[],
): SymbolIndex {
  const exact = new Map<string, PythonSymbol>();
  const suffix = new Map<string, PythonSymbol[]>();
  for (const root of roots) visit(root);
  return { exact, suffix };

  function visit(symbol: PythonSymbol): void {
    exact.set(symbol.qualifiedName, symbol);
    const parts = symbol.qualifiedName.split(".");
    for (let count = 1; count <= Math.min(parts.length, 3); count += 1) {
      const key = parts.slice(-count).join(".");
      const values = suffix.get(key) ?? [];
      values.push(symbol);
      suffix.set(key, values);
    }
    for (const child of symbol.children) visit(child);
  }
}

function findSymbol(
  rawTarget: string,
  currentModule: string,
  index: SymbolIndex,
  currentClass?: PythonSymbol,
): PythonSymbol | undefined {
  const target = rawTarget
    .replace(/\([^)]*\)$/, "")
    .replace(/^~/, "")
    .trim();
  const targetParts = target.split(".");
  const targetName = targetParts.at(-1) ?? target;
  const targetParent = targetParts.at(-2) ?? "";
  if (
    currentClass &&
    (!target.includes(".") || targetParent === currentClass.name)
  ) {
    const member = findClassMember(
      currentClass,
      targetName,
      currentModule,
      index,
    );
    if (member) return member;
  }
  const exact =
    index.exact.get(target) ?? index.exact.get(`${currentModule}.${target}`);
  if (exact) return exact;
  const candidates = [
    ...(index.suffix.get(target) ?? []),
    ...(index.suffix.get(target.split(".").at(-1) ?? "") ?? []),
  ].filter((symbol, position, values) => values.indexOf(symbol) === position);
  if (!candidates || candidates.length === 0) return undefined;
  const documented = candidates.filter((symbol) => symbol.docstring.trim());
  const choices = documented.length > 0 ? documented : candidates;
  const targetNamespace = targetParts.slice(0, -1).join(".");
  const normalizedTarget = targetName.toLowerCase().replace(/_/g, "");
  const ranked = choices
    .map((symbol) => {
      const parts = symbol.qualifiedName.split(".");
      const modulePart =
        parts.at(
          symbol.kind === "method" || symbol.kind === "attribute" ? -3 : -2,
        ) ?? "";
      const symbolParent = parts.at(-2) ?? "";
      let score = 0;
      if (currentModule && symbol.qualifiedName.startsWith(`${currentModule}.`))
        score += 8;
      if (
        targetNamespace &&
        symbol.qualifiedName.startsWith(`${targetNamespace}.`)
      )
        score += 10;
      if (modulePart.toLowerCase().replace(/_/g, "") === normalizedTarget)
        score += 6;
      if (
        targetParent &&
        modulePart.toLowerCase().replace(/_/g, "") ===
          targetParent.toLowerCase().replace(/_/g, "")
      )
        score += 6;
      if (targetParent && symbolParent === targetParent) score += 8;
      if (targetParent && symbolParent.startsWith(targetParent)) score += 4;
      if (/\.types\./.test(symbol.qualifiedName)) score -= 12;
      if (/\.abc\./.test(symbol.qualifiedName)) score -= 3;
      score -= parts.length;
      return { symbol, score };
    })
    .sort(
      (left, right) =>
        right.score - left.score ||
        compareCodePoints(
          left.symbol.qualifiedName,
          right.symbol.qualifiedName,
        ),
    );
  if (!ranked[0] || ranked[0].score === ranked[1]?.score) return undefined;
  return ranked[0].symbol;
}

function findClassMember(
  classSymbol: PythonSymbol,
  memberName: string,
  currentModule: string,
  index: SymbolIndex,
  seen = new Set<string>(),
): PythonSymbol | undefined {
  if (seen.has(classSymbol.qualifiedName)) return undefined;
  seen.add(classSymbol.qualifiedName);
  const direct = classSymbol.children.find(
    (child) => child.name === memberName,
  );
  if (direct) return direct;
  const bases = classSymbol.signature.match(/^[^(]+\((.*)\)$/)?.[1];
  if (!bases) return undefined;
  for (const rawBase of bases.split(",")) {
    const base = rawBase.trim().replace(/\[.*$/, "");
    if (!base) continue;
    const classModule = classSymbol.qualifiedName
      .split(".")
      .slice(0, -1)
      .join(".");
    const symbol = findSymbol(base, classModule || currentModule, index);
    if (symbol?.kind !== "class") continue;
    const inherited = findClassMember(
      symbol,
      memberName,
      currentModule,
      index,
      seen,
    );
    if (inherited) return inherited;
  }
  return undefined;
}

function directiveOptions(
  lines: readonly string[],
): ReadonlyMap<string, string> {
  const options = new Map<string, string>();
  for (let index = 0; index < lines.length; index += 1) {
    const option = lines[index]?.match(/^\s*:([\w-]+):\s*(.*)$/);
    if (!option?.[1]) continue;
    let value = option[2]?.trim() ?? "";
    while (
      index + 1 < lines.length &&
      (lines[index + 1]?.trim() ?? "") &&
      indentation(lines[index + 1] ?? "") > indentation(lines[index] ?? "")
    ) {
      index += 1;
      value += ` ${lines[index]?.trim() ?? ""}`;
    }
    options.set(option[1], value.trim());
  }
  return options;
}

function withoutDirectiveOptions(lines: readonly string[]): readonly string[] {
  let index = 0;
  while (index < lines.length) {
    if (!(lines[index] ?? "").trim()) {
      index += 1;
      continue;
    }
    if (!/^\s*:[\w-]+:/.test(lines[index] ?? "")) break;
    const optionIndent = indentation(lines[index] ?? "");
    index += 1;
    while (
      index < lines.length &&
      ((lines[index] ?? "").trim() === "" ||
        indentation(lines[index] ?? "") > optionIndent)
    ) {
      index += 1;
    }
  }
  return lines.slice(index);
}

function readGridTable(
  lines: readonly string[],
  start: number,
  context: RstContext,
): GridTable | undefined {
  const first = lines[start] ?? "";
  if (!/^\s*\+(?:[-=]+\+)+\s*$/.test(first)) return undefined;
  const offset = first.indexOf("+");
  const positions = [...first.matchAll(/\+/g)].map(
    (match) => (match.index ?? 0) - offset,
  );
  const rows: string[][] = [];
  let current = Array.from({ length: positions.length - 1 }, () => "");
  let cursor = start + 1;
  for (; cursor < lines.length; cursor += 1) {
    const raw = lines[cursor] ?? "";
    const line = raw.slice(offset);
    if (/^\+(?:[-=]+\+)+\s*$/.test(line)) {
      if (current.some((cell) => cell.trim()))
        rows.push(current.map((cell) => cell.trim()));
      current = Array.from({ length: positions.length - 1 }, () => "");
      if (
        rows.length > 0 &&
        /^\+(?:[-]+\+)+\s*$/.test(line) &&
        cursor > start + 1
      ) {
        const next = lines[cursor + 1] ?? "";
        if (!/^\s*\|/.test(next)) {
          cursor += 1;
          break;
        }
      }
      continue;
    }
    if (!line.startsWith("|")) break;
    for (let column = 0; column < current.length; column += 1) {
      const value = line
        .slice((positions[column] ?? 0) + 1, positions[column + 1])
        .trim();
      if (value) current[column] = `${current[column]} ${value}`.trim();
    }
  }
  if (rows.length === 0) return undefined;
  return {
    lines: [
      `| ${rows[0]?.map((cell) => renderInline(cell, context).replace(/\|/g, "\\|")).join(" | ")} |`,
      `| ${rows[0]?.map(() => "---").join(" | ")} |`,
      ...rows
        .slice(1)
        .map(
          (row) =>
            `| ${row.map((cell) => renderInline(cell, context).replace(/\|/g, "\\|")).join(" | ")} |`,
        ),
    ],
    next: cursor,
  };
}

function readIndentedBlock(
  lines: readonly string[],
  start: number,
  parentIndent: number,
): IndentedBlock {
  let first = start;
  while (first < lines.length && !(lines[first] ?? "").trim()) first += 1;
  if (
    first >= lines.length ||
    indentation(lines[first] ?? "") <= parentIndent
  ) {
    return { lines: [], next: start };
  }
  let end = first;
  while (end < lines.length) {
    const candidate = lines[end] ?? "";
    if (candidate.trim() && indentation(candidate) <= parentIndent) break;
    end += 1;
  }
  return { lines: dedent(lines.slice(first, end)), next: end };
}

function readDefinition(
  lines: readonly string[],
  index: number,
): IndentedBlock | undefined {
  const current = lines[index] ?? "";
  if (/^\s*(?:[-*+] |\d+[.)] )/.test(current) || /[.!?]\s*$/.test(current)) {
    return undefined;
  }
  let first = index + 1;
  while (first < lines.length && !(lines[first] ?? "").trim()) first += 1;
  if (
    first >= lines.length ||
    indentation(lines[first] ?? "") <= indentation(current) ||
    /^\s*(?:[-*+] |\d+[.)] )/.test(lines[first] ?? "")
  ) {
    return undefined;
  }
  return readIndentedBlock(lines, index + 1, indentation(current));
}

function dedent(lines: readonly string[]): readonly string[] {
  const indents = lines.filter((line) => line.trim()).map(indentation);
  const amount = indents.length > 0 ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(Math.min(amount, line.length)));
}

function trimBlankLines(lines: readonly string[]): string[] {
  let start = 0;
  let end = lines.length;
  while (start < end && !(lines[start] ?? "").trim()) start += 1;
  while (end > start && !(lines[end - 1] ?? "").trim()) end -= 1;
  return lines.slice(start, end);
}

function indentation(value: string): number {
  return value.match(/^\s*/)?.[0].replace(/\t/g, "    ").length ?? 0;
}

function pythonModule(sourcePath: string): string {
  return sourcePath
    .replace(/\.py$/, "")
    .replace(/\/__init__$/, "")
    .replace(/\//g, ".");
}

function sectionFor(sourcePath: string): string {
  if (!sourcePath.startsWith("docs/")) return "Project";
  if (sourcePath.startsWith("docs/ext/commands/")) return "Commands extension";
  if (sourcePath.startsWith("docs/ext/tasks/")) return "Tasks extension";
  if (sourcePath.startsWith("docs/interactions/")) return "Interactions";
  if (sourcePath === "docs/api.rst") return "API reference";
  return "Guide";
}

function anchor(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeCode(value: string): string {
  return value.replace(/`/g, "\\`");
}

function titleCase(value: string): string {
  return value.replace(
    /(^|[-_\s]+)(\w)/g,
    (_match, prefix, letter) =>
      `${prefix ? " " : ""}${String(letter).toUpperCase()}`,
  );
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
