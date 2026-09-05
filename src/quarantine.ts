import type { Document, ProjectBuild, ProjectId } from "./types.ts";

// Upstream projects change their documentation source syntax continuously, and
// a construct this generator cannot convert must never reach the corpus. It
// must also never stop the other pages, the other projects, or the scheduled
// publication from making progress, so an unconvertible page is quarantined:
// dropped from the output, recorded in the project manifest, and reported for
// a handler to be written. Quarantine is deterministic, so a rebuild from the
// same pins reproduces the same corpus and the same quarantine list.
export interface QuarantinedDocument {
  readonly sourcePath: string;
  readonly reason: string;
}

// Isolated drift is quarantined, but systemic drift — an upstream switching
// templating engines, renaming its component library, restructuring its
// navigation — would silently gut a corpus. Past this budget the project build
// fails as a whole so the caller retains the previous, complete snapshot.
const maximumQuarantineRatio = 0.05;
const minimumQuarantineAllowance = 5;

const maximumReasonLength = 400;

// Every message a build failure produces travels into a committed manifest, so
// it must not carry the per-run temporary extraction directory.
const temporaryRoot = /\S*llm-docs-[A-Za-z0-9]+\/source\//g;

const hugoShortcode = /\{\{[<%]\s*\/?\s*[a-zA-Z_]|^\{(?:width|class|style)="/m;
// The plugin README carries Hugo build directives for the site that renders it.
const hugoFrontmatterBlock = /^(?:build|sitemap):\s*$/m;

// Source markup that the adapter is expected to have resolved. A match means
// the conversion silently passed upstream templating through to the corpus.
const unresolvedSyntax: Record<ProjectId, RegExp> = {
  traefik:
    /{%\s*include-markdown|--8<--|\{:[^{}]+\}|(?:^|\n)\s*(?:>\s*)*(?:!!!|\?\?\?\+?)|```[^\n]*\btab=["']/m,
  netbird:
    /<\/?(?:Note|Warning|Success|Property|Properties|CodeGroup|Tiles|Button|YouTube|Badge|Guides|Resources)\b|\{\{\s*(?:title|tag|className|anchor)\s*:/,
  podman:
    /@@(?:option|include)|<<(?:subcommand|fullsubcommand|pod|container| if )/,
  docker: /\{\{[<%]\s*\/?\s*[a-zA-Z_]|\{\{\s*\$[a-zA-Z_]/,
  n8n: /\{%\s*@?[a-zA-Z-]+/,
  grafana: /\{\{[<%]\s*\/?\s*[a-zA-Z_]|\]\(ref:|<GRAFANA[_ ]VERSION>/,
  victoriametrics: hugoShortcode,
  victorialogs: hugoShortcode,
  "victoriametrics-datasource": hugoFrontmatterBlock,
  "victorialogs-datasource": hugoFrontmatterBlock,
  vmestimator: hugoShortcode,
  zitadel:
    /<\/?(?:Admonition|ApiCard|Callout|Cards?|Column|DocCardList|DynamicCodeBlock|FrameworkSelector|GithubCodeBlock|Steps?|Tabs?)\b/,
  ffmpeg: /@(?:chapter|section|subsection|include|item|table|example|end)\b/,
  "yt-dlp": /(?!)/,
  searxng: /(?!)/,
  bun: /<\/?(?:Accordion|Card|CodeGroup|Frame|Note|Step|Tab|Tip|Warning)\b/,
  "trigger-dev":
    /<\/?(?:Accordion|Card|CardGroup|CodeGroup|Expandable|Frame|Info|Note|ParamField|ResponseField|Step|Steps|Tab|Tabs|Tip|Update|Warning)\b/,
};

// A project that cannot be built at all: the caller falls back to the pins and
// output it already published rather than propagating the failure.
export class ProjectBuildError extends Error {
  override readonly name = "ProjectBuildError";

  constructor(
    readonly projectId: ProjectId,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
  }
}

type Rendered = Document | readonly Document[] | undefined;

export class DocumentCollector {
  readonly #projectId: ProjectId;
  readonly #documents: Document[] = [];
  readonly #quarantined: QuarantinedDocument[] = [];
  readonly #outputPaths = new Set<string>();

  constructor(projectId: ProjectId) {
    this.#projectId = projectId;
  }

  // `render` converts exactly one upstream source file. Anything it throws is
  // attributed to `sourcePath` and quarantines only that file.
  async collect(
    sourcePath: string,
    render: () => Rendered | Promise<Rendered>,
  ): Promise<void> {
    let rendered: Rendered;
    try {
      rendered = await render();
    } catch (error) {
      this.quarantine(sourcePath, describeError(error));
      return;
    }
    if (rendered === undefined) {
      return;
    }
    const produced = isDocument(rendered) ? [rendered] : rendered;
    for (const document of produced) {
      const reason = rejectionReason(this.#projectId, document);
      if (reason) {
        this.quarantine(sourcePath, reason);
        return;
      }
      if (this.#outputPaths.has(document.outputPath)) {
        this.quarantine(
          sourcePath,
          `Duplicate generated path ${document.outputPath}`,
        );
        return;
      }
    }
    for (const document of produced) {
      this.#outputPaths.add(document.outputPath);
      this.#documents.push(document);
    }
  }

  quarantine(sourcePath: string, reason: string): void {
    this.#quarantined.push({ sourcePath, reason: cleanReason(reason) });
  }

  get documents(): readonly Document[] {
    return this.#documents;
  }

  get quarantined(): readonly QuarantinedDocument[] {
    return [...this.#quarantined].sort((left, right) =>
      left.sourcePath < right.sourcePath
        ? -1
        : left.sourcePath > right.sourcePath
          ? 1
          : 0,
    );
  }
}

export function assertQuarantineBudget(build: ProjectBuild): void {
  const kept = build.documents.length;
  const dropped = build.quarantined.length;
  if (kept === 0) {
    throw new ProjectBuildError(
      build.project.id,
      `${build.project.id} produced no documents at ${build.lock.tag}${dropped > 0 ? ` (${dropped} quarantined)` : ""}`,
    );
  }
  if (dropped === 0) {
    return;
  }
  const allowance = Math.max(
    minimumQuarantineAllowance,
    Math.floor((kept + dropped) * maximumQuarantineRatio),
  );
  if (dropped > allowance) {
    throw new ProjectBuildError(
      build.project.id,
      `${build.project.id} quarantined ${dropped} of ${kept + dropped} pages at ${build.lock.tag}, above the ${allowance}-page budget: ${summarizeQuarantine(build.quarantined)}`,
    );
  }
}

export function describeError(error: unknown): string {
  const messages: string[] = [];
  const seen = new Set<unknown>();
  let current: unknown = error;
  while (current instanceof Error && !seen.has(current)) {
    seen.add(current);
    messages.push(current.message);
    current = current.cause;
  }
  if (messages.length === 0) {
    messages.push(String(error));
  }
  return messages.join(": ");
}

function summarizeQuarantine(
  quarantined: readonly QuarantinedDocument[],
): string {
  const reasons = new Map<string, number>();
  for (const entry of quarantined) {
    const key = reasonKind(entry.reason);
    reasons.set(key, (reasons.get(key) ?? 0) + 1);
  }
  return [...reasons]
    .sort((left, right) => right[1] - left[1] || (left[0] < right[0] ? -1 : 1))
    .slice(0, 3)
    .map(([reason, count]) => `${reason} (${count})`)
    .join("; ");
}

// Failure messages end in the offending path or token; the leading phrase is
// what identifies the missing handler.
function reasonKind(reason: string): string {
  return reason.split(/\s+in\s+|:/)[0]?.trim() ?? reason;
}

function rejectionReason(
  projectId: ProjectId,
  document: Document,
): string | undefined {
  const source =
    projectId === "searxng" && document.sourcePath === "docs/dev/reST.rst"
      ? ""
      : projectId === "docker" || projectId === "n8n"
        ? withoutFencedCode(document.body)
        : document.body;
  const match = unresolvedSyntax[projectId].exec(source);
  return match
    ? `Unresolved ${projectId} source syntax ${JSON.stringify(match[0].trim().slice(0, 60))}`
    : undefined;
}

function withoutFencedCode(source: string): string {
  const lines: string[] = [];
  let fence: "```" | "~~~" | undefined;
  for (const line of source.split("\n")) {
    const marker = line.match(/^\s*(?:>\s*)*(```|~~~)/)?.[1] as
      | "```"
      | "~~~"
      | undefined;
    if (marker) {
      fence = fence === marker ? undefined : marker;
    } else if (!fence) {
      lines.push(line);
    }
  }
  return lines.join("\n");
}

function cleanReason(reason: string): string {
  const collapsed = reason
    .replace(temporaryRoot, "")
    .replace(/\s+/g, " ")
    .trim();
  return collapsed.length > maximumReasonLength
    ? `${collapsed.slice(0, maximumReasonLength - 1)}…`
    : collapsed;
}

function isDocument(value: Document | readonly Document[]): value is Document {
  return !Array.isArray(value);
}
