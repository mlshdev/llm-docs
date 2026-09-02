import path from "node:path";
import { exists, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import type {
  Document,
  LockedSource,
  ProjectBuild,
  SourceProject,
} from "../types.ts";

const texinfoManuals = [
  "doc/ffmpeg.texi",
  "doc/ffplay.texi",
  "doc/ffprobe.texi",
  "doc/ffmpeg-utils.texi",
  "doc/ffmpeg-scaler.texi",
  "doc/ffmpeg-resampler.texi",
  "doc/ffmpeg-codecs.texi",
  "doc/ffmpeg-formats.texi",
  "doc/ffmpeg-devices.texi",
  "doc/ffmpeg-filters.texi",
  "doc/ffmpeg-protocols.texi",
  "doc/ffmpeg-bitstream-filters.texi",
  "doc/developer.texi",
  "doc/faq.texi",
  "doc/fate.texi",
  "doc/general.texi",
  "doc/community.texi",
  "doc/git-howto.texi",
  "doc/mailing-list-faq.texi",
  "doc/platform.texi",
] as const;

const markdownAndText = [
  "README.md",
  "INSTALL.md",
  "CONTRIBUTING.md",
  "doc/build_system.txt",
  "doc/filter_design.txt",
  "doc/infra.txt",
  "doc/issue_tracker.txt",
  "doc/multithreading.txt",
  "doc/optimization.txt",
  "doc/rate_distortion.txt",
  "doc/tablegen.txt",
  "doc/transforms.md",
  "doc/writing_filters.txt",
] as const;

export async function buildFfmpeg(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  if (!lock.branch) {
    throw new Error("FFmpeg documentation must be pinned to a branch commit");
  }
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const documents: Document[] = [];
      for (const sourcePath of texinfoManuals) {
        const expanded = await expandTexinfo(
          root,
          sourcePath,
          new Set([sourcePath]),
        );
        const body = rewriteMarkdownLinks(
          convertTexinfo(expanded, sourcePath),
          (url, kind) =>
            resolveLink(
              url,
              kind,
              sourcePath,
              archiveFiles,
              project.repository,
              lock.sourceCommit,
            ),
        );
        documents.push(document(project, lock, sourcePath, body, "Manuals"));
      }
      for (const sourcePath of markdownAndText) {
        const body = rewriteMarkdownLinks(
          cleanMarkdown(await readUtf8(root, sourcePath)),
          (url, kind) =>
            resolveLink(
              url,
              kind,
              sourcePath,
              archiveFiles,
              project.repository,
              lock.sourceCommit,
            ),
        );
        documents.push(
          document(project, lock, sourcePath, body, "Development reference"),
        );
      }
      return {
        project,
        lock,
        documents,
        notes: [
          "FFmpeg tracks master because its GitHub mirror does not publish GitHub releases.",
          "Primary Texinfo manuals and their checked-in includes are converted without executing Make, Texinfo, or FFmpeg binaries.",
          "Build-generated configuration sections, API Doxygen output, and duplicate Texinfo fragments are omitted.",
        ],
        licenseText: await readUtf8(root, "LICENSE.md"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE.md" ||
      sourcePath.endsWith(".texi") ||
      markdownAndText.includes(sourcePath as (typeof markdownAndText)[number]),
  );
}

function document(
  project: SourceProject,
  lock: LockedSource,
  sourcePath: string,
  body: string,
  section: string,
): Document {
  return {
    sourcePath,
    outputPath: `pages/${sourcePath.replace(/\.(?:texi|txt)$/, ".md")}`,
    title: documentTitle(body, {}, sourcePath),
    body,
    canonicalUrl: githubBlobUrl(
      project.repository,
      lock.sourceCommit,
      sourcePath,
    ),
    section,
  };
}

async function expandTexinfo(
  root: string,
  sourcePath: string,
  stack: ReadonlySet<string>,
): Promise<string> {
  const output: string[] = [];
  for (const line of (await readUtf8(root, sourcePath)).split("\n")) {
    const include = line.match(/^@include\s+(\S+)\s*$/)?.[1];
    if (!include) {
      output.push(line);
      continue;
    }
    const includePath = path.posix.join(
      path.posix.dirname(sourcePath),
      include,
    );
    if (!(await exists(path.join(root, includePath)))) {
      if (include === "config.texi") {
        continue;
      }
      throw new Error(`Missing FFmpeg Texinfo include: ${includePath}`);
    }
    if (stack.has(includePath)) {
      throw new Error(`Circular FFmpeg Texinfo include: ${includePath}`);
    }
    output.push(
      await expandTexinfo(root, includePath, new Set([...stack, includePath])),
    );
  }
  return output.join("\n");
}

export function convertTexinfo(source: string, sourcePath: string): string {
  const output: string[] = [];
  const skipped: string[] = [];
  let fence: string | undefined;
  let listDepth = 0;
  for (const original of source.split("\n")) {
    const line = original.replace(/\s+@c(?:omment)?(?:\s.*)?$/, "");
    if (
      /^\s*@c(?:omment)?(?:\s|$)/.test(line) ||
      /^\\input\s+texinfo\s*$/.test(line)
    ) {
      continue;
    }
    const command = line.match(/^\s*@(\w+)(?:\s+(.*))?\s*$/);
    const name = command?.[1];
    const value = command?.[2] ?? "";
    if (name === "ignore" || name === "ifset" || name === "ifhtml") {
      skipped.push(name);
      continue;
    }
    if (name === "end" && skipped.at(-1) === value.trim()) {
      skipped.pop();
      continue;
    }
    if (skipped.length > 0) {
      continue;
    }
    if (
      name &&
      /^(?:example|smallexample|verbatim|lisp|display|format)$/.test(name)
    ) {
      fence = name;
      output.push(name === "lisp" ? "```elisp" : "```text");
      continue;
    }
    if (name === "end" && fence && value.trim() === fence) {
      output.push("```");
      fence = undefined;
      continue;
    }
    if (fence) {
      output.push(inlineTexinfo(line));
      continue;
    }
    const heading = headingFor(name);
    if (heading) {
      output.push(`${heading} ${inlineTexinfo(value)}`);
      continue;
    }
    if (name === "anchor") {
      output.push(`<a id="${slug(value)}"></a>`);
      continue;
    }
    if (name === "float") {
      output.push(`> **${inlineTexinfo(value || "Note")}**`);
      continue;
    }
    if (name === "itemize" || name === "enumerate") {
      listDepth += 1;
      continue;
    }
    if (name === "table" || name === "ftable" || name === "vtable") {
      listDepth += 1;
      continue;
    }
    if (
      name === "end" &&
      /^(?:itemize|enumerate|table|ftable|vtable)$/.test(value.trim())
    ) {
      listDepth = Math.max(0, listDepth - 1);
      continue;
    }
    if (name === "item" || name === "itemx") {
      output.push(
        `${"  ".repeat(Math.max(0, listDepth - 1))}- ${inlineTexinfo(value)}`,
      );
      continue;
    }
    if (
      name &&
      /^(?:c|comment|node|multitable|columnfractions|titlepage|settitle|titlefont|center|top|contents|bye|documentencoding|set|clear|ifclear|ifnothtml|iftex|menu|end)$/.test(
        name,
      )
    ) {
      continue;
    }
    output.push(inlineTexinfo(line));
  }
  if (fence || skipped.length > 0) {
    throw new Error(`Unbalanced FFmpeg Texinfo block in ${sourcePath}`);
  }
  const result = normalizeSpacing(mapOutsideFences(output.join("\n")));
  const visible = withoutFencedCode(result);
  const unresolved = visible.match(/@(\w+)(?:\{|\s)/);
  if (unresolved?.[1]) {
    throw new Error(
      `Unsupported FFmpeg Texinfo command @${unresolved[1]} in ${sourcePath}: ${visible.slice(Math.max(0, (unresolved.index ?? 0) - 40), (unresolved.index ?? 0) + 120).replaceAll("\n", " ")}`,
    );
  }
  return result;
}

function withoutFencedCode(source: string): string {
  const output: string[] = [];
  let inFence = false;
  for (const line of source.split("\n")) {
    if (line.startsWith("```")) {
      inFence = !inFence;
    } else if (!inFence) {
      output.push(line);
    }
  }
  return output.join("\n");
}

function mapOutsideFences(source: string): string {
  const output: string[] = [];
  let prose: string[] = [];
  let inFence = false;
  const flush = (): void => {
    if (prose.length > 0) {
      output.push(inlineTexinfo(prose.join("\n")));
      prose = [];
    }
  };
  for (const line of source.split("\n")) {
    if (line.startsWith("```")) {
      flush();
      output.push(line);
      inFence = !inFence;
    } else if (inFence) {
      output.push(line);
    } else {
      prose.push(line);
    }
  }
  flush();
  return output.join("\n");
}

function inlineTexinfo(source: string): string {
  let value = source
    .replaceAll("@@", "__FFMPEG_AT__")
    .replaceAll("@{", "__FFMPEG_OPEN_BRACE__")
    .replaceAll("@}", "__FFMPEG_CLOSE_BRACE__");
  const replacements: readonly [
    RegExp,
    (content: string, detail?: string) => string,
  ][] = [
    [/@anchor{([^{}]*)}/g, (text) => `<a id="${slug(text)}"></a>`],
    [
      /@(?:code|command|option|file|env|samp|kbd|key|t){([^{}]*)}/g,
      (text) => `\`${text}\``,
    ],
    [/@(?:var|emph|dfn|cite|i){([^{}]*)}/g, (text) => `*${text}*`],
    [/@(?:strong|b){([^{}]*)}/g, (text) => `**${text}**`],
    [
      /@(?:ref|xref|pxref){([^{}]*)}/g,
      (text) =>
        text
          .split(",")
          .map((part) => part.trim())
          .find(Boolean) ?? "reference",
    ],
    [
      /@(?:url|uref){([^,}]+),?\s*([^}]*)}/g,
      (target: string, label?: string) => `[${label || target}](${target})`,
    ],
    [
      /@email{([^,}]+),?\s*([^}]*)}/g,
      (target: string, label?: string) =>
        `[${label || target}](mailto:${target})`,
    ],
    [
      /@(?:acronym|abbr){([^,}]+)(?:,\s*([^}]+))?}/g,
      (text: string, description?: string) =>
        description ? `${text} (${description})` : text,
    ],
  ];
  for (let pass = 0; pass < 8; pass += 1) {
    const previous = value;
    for (const [pattern, replacement] of replacements) {
      value = value.replace(pattern, (_match, first: string, second: string) =>
        replacement(first, second),
      );
    }
    if (value === previous) {
      break;
    }
  }
  return value
    .replace(/@value{[^{}]+}/g, "")
    .replace(/@footnote{([^{}]*)}/g, " ($1)")
    .replace(/@w{([^{}]*)}/g, "$1")
    .replace(/@tie{}/g, " ")
    .replace(/@dots{}/g, "...")
    .replace(/@bullet{}/g, "-")
    .replace(/@minus{}/g, "-")
    .replace(/@copyright{}/g, "Copyright")
    .replace(/@TeX{}/g, "TeX")
    .replace(/@LaTeX{}/g, "LaTeX")
    .replace(/@tab\b/g, " | ")
    .replace(/@\*/g, "  ")
    .replaceAll("__FFMPEG_AT__", "@")
    .replaceAll("__FFMPEG_OPEN_BRACE__", "{")
    .replaceAll("__FFMPEG_CLOSE_BRACE__", "}")
    .replace(/@@/g, "@")
    .replace(/@\{/g, "{")
    .replace(/@\}/g, "}");
}

function headingFor(command: string | undefined): string | undefined {
  const headings: Readonly<Record<string, string>> = {
    chapter: "#",
    unnumbered: "#",
    section: "##",
    unnumberedsec: "##",
    subsection: "###",
    subheading: "###",
    subsubsection: "####",
    subsubheading: "####",
  };
  return command ? headings[command] : undefined;
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  files: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  const resolved = path.posix.normalize(
    path.posix.join(path.posix.dirname(sourcePath), pathname),
  );
  if (!files.has(resolved)) {
    return undefined;
  }
  const base =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${base}${suffix}`;
}
