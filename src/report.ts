import { createHash } from "node:crypto";
import { appendFile, readFile } from "node:fs/promises";
import path from "node:path";
import { rootDirectory } from "./config.ts";
import { exists, writeUtf8Atomic } from "./files.ts";
import type {
  SourceResolutionFailure,
  SourceResolutionMetric,
} from "./github.ts";
import type { QuarantinedDocument } from "./quarantine.ts";
import type { ProjectId, SourceProject } from "./types.ts";

export const reportPath = path.join(rootDirectory, "build-report.json");

// A project whose new upstream pin could not be converted. The previously
// published pin and snapshot stay in place, so the corpus keeps working while
// the missing handler is written.
export interface RetainedProject {
  readonly project: ProjectId;
  readonly attemptedTag: string;
  readonly retainedTag: string;
  readonly reason: string;
}

export interface ProjectQuarantine {
  readonly project: ProjectId;
  readonly tag: string;
  readonly documents: readonly QuarantinedDocument[];
}

export interface PipelineReport {
  readonly schemaVersion: 2;
  readonly generatedAt: string;
  readonly healthy: boolean;
  readonly unresolvedSources: readonly SourceResolutionFailure[];
  readonly retainedProjects: readonly RetainedProject[];
  readonly quarantine: readonly ProjectQuarantine[];
  readonly sourceResolution: readonly SourceResolutionMetric[];
}

export async function writePipelineReport(
  projects: readonly SourceProject[],
  unresolvedSources: readonly SourceResolutionFailure[],
  retainedProjects: readonly RetainedProject[],
  sourceResolution: readonly SourceResolutionMetric[],
): Promise<PipelineReport> {
  const quarantine = await collectQuarantine(projects);
  const report: PipelineReport = {
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    // A healthy report means the published corpus is complete according to the
    // conversion policy. Every omission remains actionable until it is either
    // converted or represented by an explicit future approved-omission policy.
    healthy: pipelineIsHealthy(unresolvedSources, retainedProjects, quarantine),
    unresolvedSources,
    retainedProjects,
    quarantine,
    sourceResolution,
  };
  await writeUtf8Atomic(reportPath, JSON.stringify(report, null, 2));
  await publishSummary(report);
  return report;
}

export function pipelineIsHealthy(
  unresolvedSources: readonly SourceResolutionFailure[],
  retainedProjects: readonly RetainedProject[],
  quarantine: readonly ProjectQuarantine[],
): boolean {
  return (
    unresolvedSources.length === 0 &&
    retainedProjects.length === 0 &&
    quarantine.length === 0
  );
}

// Read back from the manifests rather than from this run so the report stays
// complete for projects that were already up to date and never rebuilt.
async function collectQuarantine(
  projects: readonly SourceProject[],
): Promise<readonly ProjectQuarantine[]> {
  const quarantine: ProjectQuarantine[] = [];
  for (const project of projects) {
    const manifestPath = path.join(rootDirectory, project.id, "manifest.json");
    if (!(await exists(manifestPath))) {
      continue;
    }
    const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as {
      readonly tag?: string;
      readonly quarantined?: readonly QuarantinedDocument[];
    };
    if (!manifest.quarantined || manifest.quarantined.length === 0) {
      continue;
    }
    quarantine.push({
      project: project.id,
      tag: manifest.tag ?? "unknown",
      documents: manifest.quarantined,
    });
  }
  return quarantine;
}

async function publishSummary(report: PipelineReport): Promise<void> {
  const lines = renderSummary(report);
  console.log(lines.join("\n"));
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (summaryPath) {
    await appendFile(summaryPath, `${lines.join("\n")}\n`, "utf8");
  }
}

export function renderSummary(report: PipelineReport): string[] {
  if (report.healthy && report.quarantine.length === 0) {
    return [
      "## Documentation pipeline",
      "",
      "Every project converted cleanly.",
    ];
  }
  const lines = ["## Documentation pipeline", ""];
  if (report.retainedProjects.length > 0) {
    lines.push(
      "### Projects held at their previous pin",
      "",
      "| Project | Attempted | Retained | Reason |",
      "| --- | --- | --- | --- |",
      ...report.retainedProjects.map(
        (entry) =>
          `| ${entry.project} | ${escapeCell(entry.attemptedTag)} | ${escapeCell(entry.retainedTag)} | ${escapeCell(entry.reason)} |`,
      ),
      "",
    );
  }
  if (report.unresolvedSources.length > 0) {
    lines.push(
      "### Sources that could not be reconciled",
      "",
      ...report.unresolvedSources.map(
        (entry) => `- \`${entry.project}\`: ${safeText(entry.reason)}`,
      ),
      "",
    );
  }
  if (report.quarantine.length > 0) {
    lines.push("### Quarantined pages", "");
    for (const entry of report.quarantine) {
      lines.push(
        `<details><summary><code>${entry.project}</code> ${safeText(entry.tag)} — ${entry.documents.length} page(s)</summary>`,
        "",
      );
      lines.push(
        ...entry.documents.map(
          (document) =>
            `- \`${safeCode(document.sourcePath)}\`: ${safeText(document.reason)}`,
        ),
      );
      lines.push("", "</details>", "");
    }
  }
  return lines;
}

function escapeCell(value: string): string {
  return safeText(value).replaceAll("|", "\\|");
}

function safeCode(value: string): string {
  return safeText(value).replaceAll("`", "\\`");
}

// Error text and upstream identifiers are rendered into a public GitHub issue.
// Keep them single-line, bounded, inert as HTML, and unable to mention users.
function safeText(value: string): string {
  const safe = value
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("@", "@\u200b");
  return safe.length <= 400 ? safe : `${safe.slice(0, 399)}…`;
}

export async function loadPipelineReport(): Promise<PipelineReport> {
  return JSON.parse(await readFile(reportPath, "utf8")) as PipelineReport;
}

// The tracking issue is rewritten only when the underlying problem set changes,
// so a pipeline that keeps reporting the same drift every quarter hour does not
// generate a notification every quarter hour.
export function reportFingerprint(report: PipelineReport): string {
  return createHash("sha256")
    .update(
      JSON.stringify([
        report.unresolvedSources,
        report.retainedProjects.map((entry) => [
          entry.project,
          entry.attemptedTag,
          entry.reason,
        ]),
        report.quarantine.map((entry) => [
          entry.project,
          entry.documents.map((document) => [
            document.sourcePath,
            document.reason,
          ]),
        ]),
      ]),
    )
    .digest("hex")
    .slice(0, 16);
}

export function renderIssueBody(report: PipelineReport): string {
  return [
    `<!-- pipeline-fingerprint: ${reportFingerprint(report)} -->`,
    "",
    "Upstream documentation changed in a way this generator cannot convert yet.",
    "Publication was not blocked: affected projects keep their previous pin and",
    "affected pages are omitted from the corpus until a handler is added.",
    "",
    ...renderSummary(report).slice(2),
    "",
    "This issue is updated by the scheduled `Update and publish documentation`",
    "workflow and closes itself once every source converts cleanly again.",
  ].join("\n");
}
