import { readFile } from "node:fs/promises";
import path from "node:path";
import { projectIds } from "./types.ts";
import type {
  LockedSource,
  ProjectId,
  SourcesConfig,
  SourcesLock,
} from "./types.ts";

export const rootDirectory = path.resolve(import.meta.dir, "..");
export const lockPath = path.join(rootDirectory, "sources.lock.json");

export async function loadConfig(): Promise<SourcesConfig> {
  const value: unknown = JSON.parse(
    await readFile(path.join(rootDirectory, "config/sources.json"), "utf8"),
  );
  if (!isSourcesConfig(value)) {
    throw new Error("config/sources.json does not match schema version 1");
  }
  return value;
}

export async function loadLock(): Promise<SourcesLock | undefined> {
  try {
    const value: unknown = JSON.parse(await readFile(lockPath, "utf8"));
    if (!isSourcesLock(value)) {
      throw new Error("sources.lock.json does not match schema version 1");
    }
    return value;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}

function isSourcesConfig(value: unknown): value is SourcesConfig {
  if (
    !isRecord(value) ||
    value.schemaVersion !== 1 ||
    !Array.isArray(value.projects)
  ) {
    return false;
  }
  const ids = new Set<string>();
  for (const project of value.projects) {
    if (
      !isRecord(project) ||
      !isProjectId(project.id) ||
      typeof project.title !== "string" ||
      typeof project.repository !== "string" ||
      typeof project.homepage !== "string" ||
      (project.docsRepository !== undefined &&
        typeof project.docsRepository !== "string") ||
      (project.branch !== undefined &&
        (typeof project.branch !== "string" || project.branch.trim() === "")) ||
      ids.has(project.id)
    ) {
      return false;
    }
    ids.add(project.id);
  }
  return ids.size === projectIds.length;
}

export function isSourcesLock(value: unknown): value is SourcesLock {
  if (
    !isRecord(value) ||
    value.schemaVersion !== 1 ||
    !isRecord(value.projects)
  ) {
    return false;
  }
  return Object.entries(value.projects).every(
    ([id, source]) => isProjectId(id) && isLockedSource(source),
  );
}

function isLockedSource(value: unknown): value is LockedSource {
  if (
    !isRecord(value) ||
    typeof value.tag !== "string" ||
    !isCommitSha(value.sourceCommit)
  ) {
    return false;
  }
  if (value.branch !== undefined) {
    return (
      typeof value.branch === "string" &&
      value.branch === value.tag &&
      typeof value.sourceCommittedAt === "string" &&
      value.releaseId === undefined &&
      value.releasePublishedAt === undefined &&
      value.docsCommit === undefined
    );
  }
  return (
    typeof value.releaseId === "number" &&
    typeof value.releasePublishedAt === "string" &&
    value.sourceCommittedAt === undefined &&
    (value.docsCommit === undefined || isCommitSha(value.docsCommit))
  );
}

function isCommitSha(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{40}$/.test(value);
}

function isProjectId(value: unknown): value is ProjectId {
  return projectIds.some((id) => id === value);
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
