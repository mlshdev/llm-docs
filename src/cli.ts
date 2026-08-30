import { writeFile } from "node:fs/promises";
import { loadConfig, loadLock, lockPath } from "./config.ts";
import { resolveLatestSources } from "./github.ts";
import {
  buildSite,
  orderedLock,
  verifyOutputs,
  writeProject,
  writeRootIndexes,
} from "./output.ts";
import { buildProject } from "./projects/index.ts";
import { projectIds } from "./types.ts";
import type { CompleteSourcesLock, ProjectId, SourcesLock } from "./types.ts";

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
  default:
    throw new Error("Usage: bun run src/cli.ts <build|update|verify|site>");
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

async function update(): Promise<void> {
  const config = await loadConfig();
  const current = await loadLock();
  const projects = await resolveLatestSources(
    config.projects,
    current?.projects ?? {},
  );
  const next = orderedLock(projects);
  const changed = changedProjects(current, next);
  if (changed.length === 0) {
    await verifyOutputs(config.projects, next);
    console.log("All projects already match their latest stable release");
    return;
  }
  for (const project of config.projects) {
    if (!changed.includes(project.id)) {
      continue;
    }
    console.log(`Updating ${project.id} to ${next.projects[project.id].tag}`);
    await writeProject(await buildProject(project, next.projects[project.id]));
  }
  await writeRootIndexes(config.projects, next);
  await writeFile(lockPath, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  await verifyOutputs(config.projects, next);
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
