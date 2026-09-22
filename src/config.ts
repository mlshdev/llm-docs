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

export function isSourcesConfig(value: unknown): value is SourcesConfig {
  if (
    !isRecord(value) ||
    !hasOnlyKeys(value, ["schemaVersion", "projects"]) ||
    value.schemaVersion !== 1 ||
    !Array.isArray(value.projects)
  ) {
    return false;
  }
  const ids = new Set<string>();
  for (const project of value.projects) {
    if (
      !isRecord(project) ||
      !hasOnlyKeys(
        project,
        project.kind === "github"
          ? [
              "id",
              "kind",
              "title",
              "homepage",
              "repository",
              "docsRepository",
              "branch",
              "semanticTags",
              "tagSeries",
            ]
          : ["id", "kind", "title", "homepage", "catalog"],
      ) ||
      !isProjectId(project.id) ||
      !isNonEmptyString(project.title) ||
      !isHttpUrl(project.homepage) ||
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
      isGithubRepository(project.repository) &&
      (project.docsRepository === undefined ||
        isGithubRepository(project.docsRepository)) &&
      (project.branch === undefined ||
        (typeof project.branch === "string" && project.branch.trim() !== "")) &&
      (project.semanticTags === undefined || project.semanticTags === true) &&
      // A project follows a branch head or one stable-tag selection mode,
      // never more than one of them.
      (project.tagSeries === undefined ||
        (typeof project.tagSeries === "string" &&
          /^[A-Za-z0-9._-]+$/.test(project.tagSeries) &&
          project.branch === undefined)) &&
      [project.branch, project.tagSeries, project.semanticTags].filter(
        (value) => value !== undefined,
      ).length <= 1
    );
  }
  if (project.kind === "docc") {
    return (
      isDoccCatalogId(project.catalog) &&
      doccProjectCatalogs[project.id as keyof typeof doccProjectCatalogs] ===
        project.catalog &&
      project.repository === undefined &&
      project.docsRepository === undefined &&
      project.branch === undefined &&
      project.semanticTags === undefined &&
      project.tagSeries === undefined
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
    !hasOnlyKeys(value, ["schemaVersion", "projects"]) ||
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
    !hasOnlyKeys(value, [
      "tag",
      "branch",
      "sourceCommit",
      "sourceCommittedAt",
      "taggedAt",
      "releaseId",
      "releasePublishedAt",
      "docsCommit",
      "snapshotDigest",
      "contentDigest",
      "capturedAt",
      "documentationDigest",
      "observedCommit",
    ]) ||
    !isNonEmptyString(value.tag)
  ) {
    return false;
  }
  if (value.snapshotDigest !== undefined) {
    return (
      isSnapshotDigest(value.snapshotDigest) &&
      (value.contentDigest === undefined ||
        isSnapshotDigest(value.contentDigest)) &&
      isIsoTimestamp(value.capturedAt) &&
      value.tag === `snapshot-${value.snapshotDigest.slice(0, 12)}` &&
      value.sourceCommit === undefined &&
      value.branch === undefined &&
      value.sourceCommittedAt === undefined &&
      value.taggedAt === undefined &&
      value.docsCommit === undefined &&
      value.releaseId === undefined &&
      value.releasePublishedAt === undefined &&
      value.documentationDigest === undefined &&
      value.observedCommit === undefined
    );
  }
  // Snapshot-only fields are forbidden on every commit-backed pin kind.
  if (value.capturedAt !== undefined) {
    return false;
  }
  if (value.contentDigest !== undefined || !isCommitSha(value.sourceCommit)) {
    return false;
  }
  if (value.branch !== undefined) {
    return (
      typeof value.branch === "string" &&
      value.branch.trim() !== "" &&
      value.branch === value.tag &&
      isIsoTimestamp(value.sourceCommittedAt) &&
      value.taggedAt === undefined &&
      value.releaseId === undefined &&
      value.releasePublishedAt === undefined &&
      value.docsCommit === undefined &&
      (value.documentationDigest === undefined ||
        isSnapshotDigest(value.documentationDigest)) &&
      (value.observedCommit === undefined || isCommitSha(value.observedCommit))
    );
  }
  if (
    value.documentationDigest !== undefined ||
    value.observedCommit !== undefined
  ) {
    return false;
  }
  if (value.taggedAt !== undefined) {
    return (
      isIsoTimestamp(value.taggedAt) &&
      value.sourceCommittedAt === undefined &&
      value.releaseId === undefined &&
      value.releasePublishedAt === undefined &&
      value.docsCommit === undefined
    );
  }
  return (
    Number.isSafeInteger(value.releaseId) &&
    (value.releaseId as number) > 0 &&
    isIsoTimestamp(value.releasePublishedAt) &&
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

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "";
}

function isHttpUrl(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  try {
    const url = new URL(value);
    return (
      (url.protocol === "https:" || url.protocol === "http:") && !!url.host
    );
  } catch {
    return false;
  }
}

export function isGithubRepository(value: unknown): value is string {
  return (
    typeof value === "string" &&
    // The leading character must be alphanumeric so the value can never be
    // mistaken for a command-line option when passed to `gh repo clone`.
    /^[A-Za-z0-9][A-Za-z0-9_.-]*\/[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(value) &&
    !value.endsWith(".git")
  );
}

function isIsoTimestamp(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(value) &&
    Number.isFinite(Date.parse(value))
  );
}

function hasOnlyKeys(
  value: Readonly<Record<string, unknown>>,
  keys: readonly string[],
): boolean {
  const allowed = new Set(keys);
  return Object.keys(value).every((key) => allowed.has(key));
}

function isProjectId(value: unknown): value is ProjectId {
  return projectIds.some((id) => id === value);
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
