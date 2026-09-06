import { writeFile } from "node:fs/promises";
import { loadConfig, loadLock, lockPath } from "./config.ts";
import { resolveLatestSources } from "./github.ts";
import {
  buildSite,
  orderedLock,
  snapshotMatchesPin,
  verifyOutputs,
  writeProject,
  writeRootIndexes,
} from "./output.ts";
import { buildProject } from "./projects/index.ts";
import { describeError } from "./quarantine.ts";
import {
  loadPipelineReport,
  renderIssueBody,
  writePipelineReport,
} from "./report.ts";
import type { RetainedProject } from "./report.ts";
import { projectIds } from "./types.ts";
import type {
  CompleteSourcesLock,
  LockedSource,
  ProjectId,
  SourcesLock,
} from "./types.ts";

const command = process.argv[2];

switch (command) {
  case "build":
    await buildAll();
    break;
  case "update":
    await update();
    break;
  case "verify":
    await verify();
    break;
  case "site":
    await site();
    break;
  case "report":
    await report();
    break;
  default:
    throw new Error(
      "Usage: bun run src/cli.ts <build|update|verify|site|report>",
    );
}

async function buildAll(): Promise<void> {
  const config = await loadConfig();
  const lock = await requireLock();
  for (const project of config.projects) {
    console.log(`Building ${project.id} ${lock.projects[project.id].tag}`);
    await writeProject(await buildProject(project, lock.projects[project.id]));
  }
  await writeRootIndexes(config.projects, lock);
  await verifyOutputs(config.projects, lock);
}

// Reconciliation must always leave the repository in a publishable state. A
// project whose new upstream pin cannot be converted keeps the pin and the
// snapshot it already published; the run continues, publishes every project
// that did convert, and reports what was held back.
async function update(): Promise<void> {
  const config = await loadConfig();
  const current = await loadLock();
  const resolved = await resolveLatestSources(
    config.projects,
    current?.projects ?? {},
  );
  const pins: Record<ProjectId, LockedSource> = { ...resolved.projects };
  const changed = changedProjects(current, orderedLock(pins));
  const retained: RetainedProject[] = [];
  for (const project of config.projects) {
    if (!changed.includes(project.id)) {
      continue;
    }
    const target = pins[project.id];
    console.log(`Updating ${project.id} to ${target.tag}`);
    try {
      await writeProject(await buildProject(project, target));
    } catch (error) {
      const previous = current?.projects[project.id];
      if (!previous) {
        throw error;
      }
      // A project that has never been published has nothing to retain, and a
      // snapshot that this run already replaced has to be regenerated at the
      // pin being retained. Either failing leaves nothing publishable, so it
      // propagates.
      if (!(await snapshotMatchesPin(project.id, previous))) {
        await writeProject(await buildProject(project, previous));
      }
      pins[project.id] = previous;
      const reason = describeError(error);
      retained.push({
        project: project.id,
        attemptedTag: target.tag,
        retainedTag: previous.tag,
        reason,
      });
      console.error(
        `::warning title=${project.id} held at ${previous.tag}::${reason}`,
      );
    }
  }
  const next = orderedLock(pins);
  await writeRootIndexes(config.projects, next);
  await writeFile(lockPath, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  await verifyOutputs(config.projects, next);
  if (changed.length === 0 && retained.length === 0) {
    console.log("All projects already match their latest stable release");
  }
  await writePipelineReport(
    config.projects,
    resolved.failures,
    [...retained].sort((left, right) =>
      left.project < right.project ? -1 : 1,
    ),
  );
}

// Renders the tracking-issue body for the last `update` run.
async function report(): Promise<void> {
  console.log(renderIssueBody(await loadPipelineReport()));
}

async function verify(): Promise<void> {
  const config = await loadConfig();
  await verifyOutputs(config.projects, await requireLock());
  console.log("Generated documentation matches sources.lock.json");
}

async function site(): Promise<void> {
  const config = await loadConfig();
  const lock = await requireLock();
  await verifyOutputs(config.projects, lock);
  await buildSite(config.projects);
  console.log("GitHub Pages artifact prepared in _site");
}

async function requireLock(): Promise<CompleteSourcesLock> {
  const lock = await loadLock();
  if (!lock) {
    throw new Error("sources.lock.json is missing; run bun run update first");
  }
  const missing = projectIds.filter((id) => !lock.projects[id]);
  if (missing.length > 0) {
    throw new Error(
      `sources.lock.json has no pin for ${missing.join(", ")}; run bun run update first`,
    );
  }
  return lock as CompleteSourcesLock;
}

function changedProjects(
  current: SourcesLock | undefined,
  next: SourcesLock,
): ProjectId[] {
  if (!current) {
    return [...projectIds];
  }
  return projectIds.filter(
    (id) =>
      JSON.stringify(current.projects[id]) !==
      JSON.stringify(next.projects[id]),
  );
}
