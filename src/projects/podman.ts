import path from "node:path";
import {
  exists,
  listFiles,
  readUtf8,
  withRepositoryArchive,
} from "../files.ts";
import {
  cleanMarkdown,
  convertRst,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

const rootDocuments = [
  "README.md",
  "install.md",
  "rootless.md",
  "troubleshooting.md",
  "transfer.md",
  "build_osx.md",
  "build_windows.md",
  "RELEASE_NOTES.md",
] as const;

const sphinxDocuments = [
  "docs/source/index.rst",
  "docs/source/Introduction.rst",
  "docs/source/Commands.rst",
  "docs/source/Tutorials.rst",
  "docs/source/Reference.rst",
] as const;

export async function buildPodman(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const selected = new Set<string>();
      for (const sourcePath of [...rootDocuments, ...sphinxDocuments]) {
        if (await exists(path.join(root, sourcePath))) {
          selected.add(sourcePath);
        }
      }
      for (const sourcePath of files) {
        if (
          /^docs\/[^/]+\.md$/.test(sourcePath) ||
          (/^docs\/(?:tutorials|cncf)\/.*\.md$/.test(sourcePath) &&
            !/_(?:cn|zh)\.md$/i.test(sourcePath)) ||
          /^pkg\/bindings\/.*\.md$/.test(sourcePath) ||
          /^docs\/source\/markdown\/podman(?:-[^/]*)?\.[157]\.md(?:\.in)?$/.test(
            sourcePath,
          )
        ) {
          selected.add(sourcePath);
        }
      }
      selected.delete("docs/source/markdown/podman-rootless.7.md");
      selected.delete("docs/source/markdown/podman-troubleshooting.7.md");

      const documents = new DocumentCollector(project.id);
      for (const sourcePath of [...selected].sort(compareCodePoints)) {
        await documents.collect(sourcePath, async () => {
          const raw = sourcePath.endsWith(".md.in")
            ? await preprocessPodmanTemplate(root, sourcePath)
            : await readUtf8(root, sourcePath);
          const normalized = sourcePath.endsWith(".rst")
            ? convertRst(
                await expandRstIncludes(
                  root,
                  sourcePath,
                  raw,
                  new Set([sourcePath]),
                ),
              )
            : cleanMarkdown(repairPodmanFences(normalizeManPage(raw)));
          const body = rewriteMarkdownLinks(normalized, (url, kind) =>
            resolvePodmanLink(
              url,
              kind,
              sourcePath,
              project.repository,
              lock.sourceCommit,
              archiveFiles,
            ),
          );
          return {
            sourcePath,
            outputPath: outputPathFor(sourcePath),
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
      await documents.collect("pkg/api/server", () =>
        buildPodmanApiReference(
          root,
          files,
          project.repository,
          lock.sourceCommit,
        ),
      );
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "Podman man-page templates are expanded by a non-executing implementation of the tagged repository's documented preprocessing rules.",
          "Generated aliases, duplicate rootless/troubleshooting pages, translations, assets, and vendored code are omitted.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      rootDocuments.includes(sourcePath as (typeof rootDocuments)[number]) ||
      sourcePath.endsWith(".md") ||
      sourcePath.endsWith(".md.in") ||
      sourcePath.endsWith(".rst") ||
      sourcePath === "docs/source/_static/api.html" ||
      /^pkg\/api\/server\/.*\.go$/.test(sourcePath),
  );
}

async function buildPodmanApiReference(
  root: string,
  files: readonly string[],
  repository: string,
  ref: string,
): Promise<Document> {
  const operations: Array<{
    readonly method: string;
    readonly route: string;
    readonly tag: string;
    readonly operationId: string;
    readonly summary?: string;
    readonly description?: string;
    readonly responses: readonly string[];
    readonly sourcePath: string;
    readonly sourceLine: number;
  }> = [];
  for (const sourcePath of files
    .filter((file) => /^pkg\/api\/server\/.*\.go$/.test(file))
    .sort(compareCodePoints)) {
    const lines = (await readUtf8(root, sourcePath)).split("\n");
    for (let index = 0; index < lines.length; index += 1) {
      const operation = lines[index]?.match(
        /\/\/\s*swagger:operation\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)/,
      );
      if (!operation?.[1] || !operation[2] || !operation[3] || !operation[4]) {
        continue;
      }
      let summary: string | undefined;
      let description: string | undefined;
      const responses: string[] = [];
      let inResponses = false;
      for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
        const comment = lines[cursor]?.match(/^\s*\/\/\s?(.*)$/)?.[1];
        if (comment === undefined) {
          break;
        }
        summary ??= comment.match(/^summary:\s*(.+)$/)?.[1];
        const descriptionValue = comment.match(/^description:\s*(.*)$/)?.[1];
        if (descriptionValue !== undefined && description === undefined) {
          if (descriptionValue === "|" || descriptionValue === ">") {
            const block: string[] = [];
            let blockCursor = cursor + 1;
            for (; blockCursor < lines.length; blockCursor += 1) {
              const blockComment =
                lines[blockCursor]?.match(/^\s*\/\/\s?(.*)$/)?.[1];
              if (blockComment === undefined) {
                break;
              }
              if (blockComment === "") {
                block.push("");
                continue;
              }
              if (!/^\s+/.test(blockComment)) {
                break;
              }
              block.push(blockComment.replace(/^\s{1,2}/, ""));
            }
            description = normalizeSpacing(block.join("\n")).trim();
            cursor = blockCursor - 1;
          } else if (descriptionValue) {
            description = descriptionValue;
          }
        }
        if (/^responses:\s*$/.test(comment)) {
          inResponses = true;
          continue;
        }
        if (inResponses && /^[a-zA-Z][\w-]*:/.test(comment)) {
          inResponses = false;
        }
        const response = inResponses
          ? comment.match(/^\s{2,}(\d{3}|default):\s*$/)?.[1]
          : undefined;
        if (response) {
          responses.push(response);
        }
      }
      operations.push({
        method: operation[1],
        route: operation[2],
        tag: operation[3],
        operationId: operation[4],
        ...(summary ? { summary } : {}),
        ...(description ? { description } : {}),
        responses,
        sourcePath,
        sourceLine: index + 1,
      });
    }
  }
  if (operations.length === 0) {
    throw new Error(
      "Podman API source contains no swagger:operation annotations",
    );
  }
  operations.sort((left, right) =>
    compareCodePoints(
      `${left.tag}\0${left.route}\0${left.method}`,
      `${right.tag}\0${right.route}\0${right.method}`,
    ),
  );
  const lines = [
    "# Podman REST API endpoint reference",
    "",
    "> Generated without executing upstream code by extracting `swagger:operation` annotations from the immutable release source.",
  ];
  let currentTag = "";
  for (const operation of operations) {
    if (operation.tag !== currentTag) {
      currentTag = operation.tag;
      lines.push("", `## ${currentTag}`);
    }
    const sourceUrl = `${githubBlobUrl(repository, ref, operation.sourcePath)}#L${operation.sourceLine}`;
    lines.push(
      "",
      `### \`${operation.method} ${operation.route}\``,
      "",
      `- Operation ID: \`${operation.operationId}\``,
      `- Source: [${operation.sourcePath}:${operation.sourceLine}](${sourceUrl})`,
    );
    if (operation.responses.length > 0) {
      lines.push(
        `- Responses: ${operation.responses.map((value) => `\`${value}\``).join(", ")}`,
      );
    }
    if (operation.summary) {
      lines.push("", operation.summary);
    }
    if (operation.description && operation.description !== operation.summary) {
      lines.push("", operation.description);
    }
  }
  return {
    sourcePath: "pkg/api/server/* (swagger:operation annotations)",
    outputPath: "pages/api-reference.md",
    title: "Podman REST API endpoint reference",
    body: normalizeSpacing(lines.join("\n")),
    canonicalUrl: `https://github.com/${repository}/tree/${ref}/pkg/api/server`,
    section: "REST API",
  };
}

async function expandRstIncludes(
  root: string,
  sourcePath: string,
  source: string,
  stack: ReadonlySet<string>,
): Promise<string> {
  const output: string[] = [];
  for (const line of source.split("\n")) {
    const include = line.match(/^\s*\.\.\s+include::\s+(\S+)\s*$/);
    if (!include?.[1]) {
      output.push(line);
      continue;
    }
    const includePath = path.posix.normalize(
      path.posix.join(path.posix.dirname(sourcePath), include[1]),
    );
    if (stack.has(includePath)) {
      throw new Error(`Circular Podman RST include: ${includePath}`);
    }
    output.push(
      await expandRstIncludes(
        root,
        includePath,
        await readUtf8(root, includePath),
        new Set([...stack, includePath]),
      ),
    );
  }
  return output.join("\n");
}

async function preprocessPodmanTemplate(
  root: string,
  sourcePath: string,
): Promise<string> {
  const input = await readUtf8(root, sourcePath);
  const manDirectory = path.posix.dirname(sourcePath);
  const fileName = path.posix.basename(sourcePath);
  const podOrContainer =
    fileName.includes("-pod-") || fileName.includes("-kube-")
      ? "pod"
      : "container";
  const output: string[] = [];
  for (const line of input.split("\n")) {
    const option = line.match(/^@@option\s+(\S+)\s*$/);
    const include = line.match(/^@@include\s+(\S+)\s*$/);
    if (!option && !include) {
      output.push(line);
      continue;
    }
    const optionName = option?.[1];
    const isQuadlet = optionName?.startsWith("quadlet:") ?? false;
    const includeName = optionName
      ? `options/${optionName.replace(/^quadlet:/, "")}.md`
      : include?.[1];
    if (!includeName) {
      throw new Error(`Invalid Podman include in ${sourcePath}: ${line}`);
    }
    const includePath = path.posix.join(manDirectory, includeName);
    const rendered = renderPodmanConditional(
      await readUtf8(root, includePath),
      isQuadlet,
    );
    output.push("");
    for (const includedLine of rendered.split("\n")) {
      if (includedLine.startsWith("####>")) {
        continue;
      }
      output.push(
        replacePodmanType(includedLine, podOrContainer)
          .replaceAll("<<subcommand>>", podmanSubcommand(fileName, false))
          .replaceAll("<<fullsubcommand>>", podmanSubcommand(fileName, true)),
      );
    }
    output.push("");
  }
  return output.join("\n");
}

function renderPodmanConditional(source: string, isQuadlet: boolean): string {
  const token = /<<(.*?)>>/gs;
  const output: string[] = [];
  const stack: Array<{
    readonly parentActive: boolean;
    readonly condition: boolean;
    active: boolean;
    seenElse: boolean;
  }> = [];
  let cursor = 0;
  const isActive = (): boolean => stack.every((frame) => frame.active);
  const condition = (value: string): boolean => {
    const normalized = value.trim();
    if (normalized === "is_quadlet") {
      return isQuadlet;
    }
    if (normalized === "not is_quadlet") {
      return !isQuadlet;
    }
    throw new Error(`Unsupported Podman template condition: ${value}`);
  };
  for (const match of source.matchAll(token)) {
    const index = match.index;
    const inner = match[1]?.trim();
    if (index === undefined || !inner) {
      continue;
    }
    if (isActive()) {
      output.push(source.slice(cursor, index));
    }
    cursor = index + match[0].length;
    if (/^if (?:not )?is_quadlet$/.test(inner)) {
      const parentActive = isActive();
      const result = condition(inner.slice(3));
      stack.push({
        parentActive,
        condition: result,
        active: parentActive && result,
        seenElse: false,
      });
      continue;
    }
    if (inner === "else") {
      const frame = stack.at(-1);
      if (!frame || frame.seenElse) {
        throw new Error("Invalid Podman template else block");
      }
      frame.seenElse = true;
      frame.active = frame.parentActive && !frame.condition;
      continue;
    }
    if (inner === "endif") {
      if (!stack.pop()) {
        throw new Error("Podman template endif without if");
      }
      continue;
    }
    const inline = inner.match(/^(.*?)\s+if\s+(.+?)\s+else\s+(.*?)$/s);
    if (inline) {
      if (isActive()) {
        const selected = condition(inline[2] ?? "") ? inline[1] : inline[3];
        output.push((selected ?? "").trim().replace(/^['"]|['"]$/g, ""));
      }
      continue;
    }
    if (isActive()) {
      output.push(match[0]);
    }
  }
  if (isActive()) {
    output.push(source.slice(cursor));
  }
  if (stack.length > 0) {
    throw new Error("Unclosed Podman template condition");
  }
  return output.join("");
}

function replacePodmanType(
  line: string,
  podOrContainer: "pod" | "container",
): string {
  return line.replace(/<<[^|>]*\|[^|>]*>>/g, (token) => {
    const [left = "", right = ""] = token.slice(2, -2).split("|");
    const leftHasPod = /pod([^m]|$)/i.test(left);
    const rightHasPod = /pod([^m]|$)/i.test(right);
    if (leftHasPod === rightHasPod) {
      throw new Error(`Ambiguous Podman type template: ${token}`);
    }
    if (podOrContainer === "pod") {
      return leftHasPod ? left : right;
    }
    return leftHasPod ? right : left;
  });
}

function podmanSubcommand(fileName: string, full: boolean): string {
  if (fileName.endsWith(".unit.5.md.in")) {
    return fileName;
  }
  let value = fileName;
  if (!full && value.startsWith("podman-pod-")) {
    value = value.slice("podman-pod-".length);
  }
  value = value.replace(/^podman-/, "").replace(/\.1\.md\.in$/, "");
  return value.replaceAll("-", " ");
}

function normalizeManPage(source: string): string {
  return normalizeSpacing(
    source.replace(
      /^%\s+([^\n]+?)(?:\s+[157])?\s*$/m,
      (_match, title: string) => `# ${title}`,
    ),
  );
}

function repairPodmanFences(source: string): string {
  const lines = source.split("\n");
  const output: string[] = [];
  let inFence = false;
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (
      !inFence &&
      /^\$\s+/.test(line) &&
      hasFenceBeforeHeading(lines, index + 1)
    ) {
      output.push("```console");
      inFence = true;
    }
    output.push(line);
    if (/^```/.test(line)) {
      inFence = !inFence;
    }
  }
  if (inFence) {
    throw new Error("Unbalanced Podman Markdown fence after normalization");
  }
  return output.join("\n");
}

function hasFenceBeforeHeading(
  lines: readonly string[],
  start: number,
): boolean {
  for (let index = start; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (/^```\s*$/.test(line)) {
      return true;
    }
    if (/^#{1,6}\s/.test(line)) {
      return false;
    }
  }
  return false;
}

function resolvePodmanLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  repository: string,
  ref: string,
  files: ReadonlySet<string>,
): string | undefined {
  const internalGithub = url.match(
    /^https:\/\/github\.com\/(?:containers|podman-container-tools)\/podman\/(?:blob|tree)\/(?:main|master)\/([^?#]+)([?#].*)?$/,
  );
  if (internalGithub?.[1]) {
    const existingPath = existingPodmanPath(internalGithub[1], files);
    return existingPath
      ? `${githubBlobUrl(repository, ref, existingPath)}${internalGithub[2] ?? ""}`
      : undefined;
  }
  const internalRaw = url.match(
    /^https:\/\/raw\.githubusercontent\.com\/(?:containers|podman-container-tools)\/podman\/(?:main|master)\/([^?#]+)([?#].*)?$/,
  );
  if (internalRaw?.[1]) {
    return files.has(internalRaw[1])
      ? `${githubRawUrl(repository, ref, internalRaw[1])}${internalRaw[2] ?? ""}`
      : undefined;
  }
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  let resolved = pathname.startsWith("/")
    ? pathname.slice(1)
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), pathname),
      );
  if (resolved.endsWith(".html")) {
    const markdownPath = `${resolved.slice(0, -5)}.md`;
    if (files.has(markdownPath) || files.has(`${markdownPath}.in`)) {
      resolved = markdownPath;
    }
  }
  const existingPath = existingPodmanPath(resolved, files);
  if (!existingPath) {
    return undefined;
  }
  resolved = existingPath;
  const sourceUrl =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${sourceUrl}${suffix}`;
}

function existingPodmanPath(
  candidate: string,
  files: ReadonlySet<string>,
): string | undefined {
  if (files.has(candidate)) {
    return candidate;
  }
  if (files.has(`${candidate}.in`)) {
    return `${candidate}.in`;
  }
  if (candidate.endsWith(".md") && files.has(`${candidate.slice(0, -3)}.rst`)) {
    return `${candidate.slice(0, -3)}.rst`;
  }
  const manPage = `docs/source/markdown/${path.posix.basename(candidate)}`;
  if (files.has(manPage)) {
    return manPage;
  }
  if (files.has(`${manPage}.in`)) {
    return `${manPage}.in`;
  }
  return undefined;
}

function outputPathFor(sourcePath: string): string {
  return `pages/${sourcePath.replace(/\.md\.in$/, ".md").replace(/\.rst$/, ".md")}`;
}

function sectionFor(sourcePath: string): string {
  if (sourcePath.startsWith("docs/source/markdown/")) {
    return "Command and configuration reference";
  }
  if (
    sourcePath.startsWith("docs/tutorials/") ||
    sourcePath.startsWith("docs/cncf/")
  ) {
    return "Tutorials";
  }
  if (sourcePath.startsWith("pkg/bindings/")) {
    return "Go bindings";
  }
  if (sourcePath.startsWith("docs/")) {
    return "Documentation";
  }
  return "Overview and operations";
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
