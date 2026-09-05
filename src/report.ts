import { createHash } from "node:crypto";
import { appendFile, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { rootDirectory } from "./config.ts";
import { exists } from "./files.ts";
import type { SourceResolutionFailure } from "./github.ts";
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
  readonly schemaVersion: 1;
  readonly generatedAt: string;
  readonly healthy: boolean;
  readonly unresolvedSources: readonly SourceResolutionFailure[];
  readonly retainedProjects: readonly RetainedProject[];
  readonly quarantine: readonly ProjectQuarantine[];
}

export async function writePipelineReport(
  projects: readonly SourceProject[],
  unresolvedSources: readonly SourceResolutionFailure[],
  retainedProjects: readonly RetainedProject[],
): Promise<PipelineReport> {
  const quarantine = await collectQuarantine(projects);
  const report: PipelineReport = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    // Health is about publication: a source that would not reconcile or build
    // holds a project at an older pin and needs a handler written. Quarantined
    // pages are disclosed in the run summary and in every project manifest,
    // but a page upstream itself cannot render must not hold a tracking issue
    // open forever against work this repository cannot do.
    healthy: unresolvedSources.length === 0 && retainedProjects.length === 0,
    unresolvedSources,
    retainedProjects,
    quarantine,
  };
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await publishSummary(report);
  return report;
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
          `| ${entry.project} | ${entry.attemptedTag} | ${entry.retainedTag} | ${escapeCell(entry.reason)} |`,
      ),
      "",
    );
  }
  if (report.unresolvedSources.length > 0) {
    lines.push(
      "### Sources that could not be reconciled",
      "",
      ...report.unresolvedSources.map(
        (entry) => `- \`${entry.project}\`: ${entry.reason}`,
      ),
      "",
    );
  }
  if (report.quarantine.length > 0) {
    lines.push("### Quarantined pages", "");
    for (const entry of report.quarantine) {
      lines.push(
        `<details><summary><code>${entry.project}</code> ${entry.tag} — ${entry.documents.length} page(s)</summary>`,
        "",
      );
      lines.push(
        ...entry.documents.map(
          (document) => `- \`${document.sourcePath}\`: ${document.reason}`,
        ),
      );
      lines.push("", "</details>", "");
    }
  }
  return lines;
}

function escapeCell(value: string): string {
  return value.replaceAll("|", "\\|");
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
