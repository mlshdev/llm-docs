import { readFile } from "node:fs/promises";
import path from "node:path";
import { doccCatalogIds, doccProjectCatalogs, projectIds } from "./types.ts";
import type {
  DoccCatalogId,
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
      typeof project.homepage !== "string" ||
      ids.has(project.id) ||
      !isSourceKind(project)
    ) {
      return false;
    }
    ids.add(project.id);
  }
  return ids.size === projectIds.length;
}

function isSourceKind(project: Record<string, unknown>): boolean {
  if (project.kind === "github") {
    return (
      doccProjectCatalogs[project.id as keyof typeof doccProjectCatalogs] ===
        undefined &&
      typeof project.repository === "string" &&
      (project.docsRepository === undefined ||
        typeof project.docsRepository === "string") &&
      (project.branch === undefined ||
        (typeof project.branch === "string" && project.branch.trim() !== ""))
    );
  }
  if (project.kind === "docc") {
    return (
      isDoccCatalogId(project.catalog) &&
      doccProjectCatalogs[project.id as keyof typeof doccProjectCatalogs] ===
        project.catalog &&
      project.repository === undefined &&
      project.docsRepository === undefined &&
      project.branch === undefined
    );
  }
  return false;
}

function isDoccCatalogId(value: unknown): value is DoccCatalogId {
  return doccCatalogIds.some((catalog) => catalog === value);
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
  if (!isRecord(value) || typeof value.tag !== "string") {
    return false;
  }
  if (value.snapshotDigest !== undefined) {
    return (
      isSnapshotDigest(value.snapshotDigest) &&
      (value.contentDigest === undefined ||
        isSnapshotDigest(value.contentDigest)) &&
      typeof value.capturedAt === "string" &&
      value.tag === `snapshot-${value.snapshotDigest.slice(0, 12)}` &&
      value.sourceCommit === undefined &&
      value.branch === undefined &&
      value.sourceCommittedAt === undefined &&
      value.docsCommit === undefined &&
      value.releaseId === undefined &&
      value.releasePublishedAt === undefined
    );
  }
  if (value.contentDigest !== undefined || !isCommitSha(value.sourceCommit)) {
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

function isSnapshotDigest(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f]{64}$/.test(value);
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
