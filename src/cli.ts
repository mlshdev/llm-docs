import { readFile, rename, rm } from "node:fs/promises";
import path from "node:path";
import {
  isSourcesLock,
  loadConfig,
  loadLock,
  lockPath,
  rootDirectory,
} from "./config.ts";
import {
  commitDirectoryReplacements,
  discardDirectoryReplacements,
  exists,
  writeUtf8Atomic,
} from "./files.ts";
import { resolveLatestSources } from "./github.ts";
import {
  generatedPaths,
  computeDocumentationDigest,
  orderedLock,
  refreshManifestGeneratorDigest,
  snapshotMatchesPin,
  stageProjectReplacement,
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
import { isBranchLockedSource } from "./types.ts";
import type {
  CompleteSourcesLock,
  LockedSource,
  ProjectId,
  SourcesLock,
} from "./types.ts";

const command = process.argv[2];
const updateTransactionPath = path.join(
  rootDirectory,
  ".generated-update-transaction.json",
);

if (["build", "update", "verify"].includes(command ?? "")) {
  await recoverUpdateTransaction();
}

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
  case "report":
    await report();
    break;
  case "paths":
    await paths();
    break;
  default:
    throw new Error(
      "Usage: bun run src/cli.ts <build|update|verify|report|paths>",
    );
}

async function buildAll(): Promise<void> {
  const config = await loadConfig();
  const lock = await requireLock();
  for (const project of config.projects) {
    if (
      project.kind === "docc" &&
      process.env.DOCC_REBUILD !== "1" &&
      (await snapshotMatchesPin(project.id, lock.projects[project.id]))
    ) {
      console.log(
        `Keeping captured ${project.id} ${lock.projects[project.id].tag}`,
      );
      await refreshManifestGeneratorDigest(project.id);
      continue;
    }
    const pin = lock.projects[project.id];
    console.log(`Building ${project.id} ${pin.tag}`);
    const build = await buildProject(project, pin);
    // `build` reproduces a pin, it never mints one: a snapshot pin that predates
    // content addressing has to be completed by a reconciliation run instead.
    if (build.lock.contentDigest !== pin.contentDigest) {
      throw new Error(
        `${project.id} is pinned without a content digest; run bun run update`,
      );
    }
    await writeProject(build);
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
  const staged: string[] = [];
  try {
    for (const project of config.projects) {
      if (!changed.includes(project.id)) {
        continue;
      }
      const target = pins[project.id];
      console.log(`Updating ${project.id} to ${target.tag}`);
      try {
        // A snapshot pin is only complete once the build has hashed the
        // payloads it converted, so the pin recorded is the staged build's.
        const build = await buildProject(project, target);
        if (isBranchLockedSource(build.lock)) {
          const documentationDigest = computeDocumentationDigest(build);
          const previous = current?.projects[project.id];
          if (
            previous &&
            isBranchLockedSource(previous) &&
            previous.documentationDigest === documentationDigest
          ) {
            pins[project.id] = {
              ...previous,
              observedCommit: build.lock.sourceCommit,
            };
            console.log(
              `${project.id} branch advanced without changing published documentation`,
            );
            continue;
          }
          const finalized = {
            ...build,
            lock: {
              ...build.lock,
              documentationDigest,
              observedCommit: build.lock.sourceCommit,
            },
          };
          staged.push(await stageProjectReplacement(finalized));
          pins[project.id] = finalized.lock;
        } else {
          staged.push(await stageProjectReplacement(build));
          pins[project.id] = build.lock;
        }
      } catch (error) {
        const previous = current?.projects[project.id];
        if (!previous) {
          throw error;
        }
        // If an interrupted earlier run left this project inconsistent with
        // the published lock, stage a deterministic rebuild of the retained
        // pin as part of the same transaction.
        if (await snapshotMatchesPin(project.id, previous)) {
          pins[project.id] = previous;
        } else {
          const rebuilt = await buildProject(project, previous);
          staged.push(await stageProjectReplacement(rebuilt));
          pins[project.id] = rebuilt.lock;
        }
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
  } catch (error) {
    await discardDirectoryReplacements(staged);
    throw error;
  }
  const next = orderedLock(pins);
  const transaction = {
    schemaVersion: 1 as const,
    state: "preparing" as const,
    projects: await Promise.all(
      staged.map(async (destination) => ({
        project: path.basename(destination) as ProjectId,
        hadPrevious: await exists(destination),
      })),
    ),
    previousLock: current && hasEveryProject(current) ? current : undefined,
    targetLock: next,
  };
  await writeUtf8Atomic(
    updateTransactionPath,
    JSON.stringify(transaction, null, 2),
  );
  try {
    await commitDirectoryReplacements(staged, async () => {
      await writeRootIndexes(config.projects, next);
      await writeUtf8Atomic(lockPath, JSON.stringify(next, null, 2));
      await verifyOutputs(config.projects, next);
      await writeUtf8Atomic(
        updateTransactionPath,
        JSON.stringify({ ...transaction, state: "committed" }, null, 2),
      );
    });
    await rm(updateTransactionPath, { force: true });
  } catch (error) {
    if (current && hasEveryProject(current)) {
      const previous = current as CompleteSourcesLock;
      await writeRootIndexes(config.projects, previous);
      await writeUtf8Atomic(lockPath, JSON.stringify(previous, null, 2));
      await rm(updateTransactionPath, { force: true });
      await verifyOutputs(config.projects, previous);
    } else {
      await rm(updateTransactionPath, { force: true });
    }
    throw error;
  }
  if (changed.length === 0 && retained.length === 0) {
    console.log("All projects already match their latest stable release");
  }
  await writePipelineReport(
    config.projects,
    resolved.failures,
    [...retained].sort((left, right) =>
      left.project < right.project ? -1 : 1,
    ),
    resolved.metrics,
  );
}

function hasEveryProject(lock: SourcesLock): boolean {
  return projectIds.every((id) => lock.projects[id] !== undefined);
}

interface UpdateTransaction {
  readonly schemaVersion: 1;
  readonly state: "preparing" | "committed";
  readonly projects: readonly {
    readonly project: ProjectId;
    readonly hadPrevious: boolean;
  }[];
  readonly previousLock?: CompleteSourcesLock;
  readonly targetLock: CompleteSourcesLock;
}

async function recoverUpdateTransaction(): Promise<void> {
  if (!(await exists(updateTransactionPath))) return;
  const value: unknown = JSON.parse(
    await readFile(updateTransactionPath, "utf8"),
  );
  const transaction = parseUpdateTransaction(value);
  const config = await loadConfig();
  if (transaction.state === "committed") {
    for (const entry of transaction.projects) {
      const destination = path.join(rootDirectory, entry.project);
      await rm(`${destination}.backup`, { recursive: true, force: true });
      await rm(`${destination}.staging`, { recursive: true, force: true });
    }
    await writeRootIndexes(config.projects, transaction.targetLock);
    await writeUtf8Atomic(
      lockPath,
      JSON.stringify(transaction.targetLock, null, 2),
    );
    await verifyOutputs(config.projects, transaction.targetLock);
    await rm(updateTransactionPath, { force: true });
    return;
  }

  for (const entry of [...transaction.projects].reverse()) {
    const destination = path.join(rootDirectory, entry.project);
    const backup = `${destination}.backup`;
    if (await exists(backup)) {
      await rm(destination, { recursive: true, force: true });
      await rename(backup, destination);
    } else if (!entry.hadPrevious && (await exists(destination))) {
      await rm(destination, { recursive: true, force: true });
    }
    await rm(`${destination}.staging`, { recursive: true, force: true });
  }
  if (transaction.previousLock) {
    await writeRootIndexes(config.projects, transaction.previousLock);
    await writeUtf8Atomic(
      lockPath,
      JSON.stringify(transaction.previousLock, null, 2),
    );
    await rm(updateTransactionPath, { force: true });
    await verifyOutputs(config.projects, transaction.previousLock);
  } else {
    await rm(updateTransactionPath, { force: true });
  }
}

function parseUpdateTransaction(value: unknown): UpdateTransaction {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    (value as { schemaVersion?: unknown }).schemaVersion !== 1 ||
    !["preparing", "committed"].includes(
      String((value as { state?: unknown }).state),
    ) ||
    !Array.isArray((value as { projects?: unknown }).projects)
  ) {
    throw new Error("Generated update transaction journal is invalid");
  }
  const candidate = value as Record<string, unknown>;
  const projects = candidate.projects as unknown[];
  if (
    projects.some(
      (entry) =>
        !entry ||
        typeof entry !== "object" ||
        Array.isArray(entry) ||
        !projectIds.includes(
          (entry as { project?: ProjectId }).project as ProjectId,
        ) ||
        typeof (entry as { hadPrevious?: unknown }).hadPrevious !== "boolean",
    ) ||
    !isCompleteLock(candidate.targetLock) ||
    (candidate.previousLock !== undefined &&
      !isCompleteLock(candidate.previousLock))
  ) {
    throw new Error("Generated update transaction journal is invalid");
  }
  return candidate as unknown as UpdateTransaction;
}

function isCompleteLock(value: unknown): value is CompleteSourcesLock {
  return isSourcesLock(value) && hasEveryProject(value);
}

// Renders the tracking-issue body for the last `update` run.
async function report(): Promise<void> {
  console.log(renderIssueBody(await loadPipelineReport()));
}

async function paths(): Promise<void> {
  const config = await loadConfig();
  console.log(generatedPaths(config.projects).join("\n"));
}

async function verify(): Promise<void> {
  const config = await loadConfig();
  await verifyOutputs(config.projects, await requireLock());
  console.log("Generated documentation matches sources.lock.json");
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
