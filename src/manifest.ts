import { isRecord } from "./config.ts";
import { projectIds } from "./types.ts";
import type { QuarantinedDocument } from "./quarantine.ts";
import type { ProjectId } from "./types.ts";

export const manifestSchemaVersion = 2;
export const generatorVersion = 3;

export interface CorpusVolumeManifest {
  readonly name: string;
  readonly byteLength: number;
  readonly documentCount: number;
  readonly sha256: string;
}

export interface ProjectManifest {
  readonly schemaVersion: typeof manifestSchemaVersion;
  readonly generatorVersion: typeof generatorVersion;
  readonly generatorDigest: string;
  readonly project: ProjectId;
  readonly title: string;
  readonly homepage: string;
  readonly repository?: string;
  readonly catalog?: string;
  readonly tag: string;
  readonly releaseId?: number;
  readonly releasePublishedAt?: string;
  readonly branch?: string;
  readonly sourceCommittedAt?: string;
  readonly documentationDigest?: string;
  readonly taggedAt?: string;
  readonly sourceCommit?: string;
  readonly docsCommit?: string;
  readonly snapshotDigest?: string;
  readonly contentDigest?: string;
  readonly capturedAt?: string;
  readonly documentCount: number;
  readonly indexComplete: boolean;
  readonly corpusVolumes: readonly CorpusVolumeManifest[];
  readonly outputDigest: string;
  readonly quarantined?: readonly QuarantinedDocument[];
  readonly notes: readonly string[];
}

const manifestKeys = new Set([
  "schemaVersion",
  "generatorVersion",
  "generatorDigest",
  "project",
  "title",
  "homepage",
  "repository",
  "catalog",
  "tag",
  "releaseId",
  "releasePublishedAt",
  "branch",
  "sourceCommittedAt",
  "documentationDigest",
  "taggedAt",
  "sourceCommit",
  "docsCommit",
  "snapshotDigest",
  "contentDigest",
  "capturedAt",
  "documentCount",
  "indexComplete",
  "corpusVolumes",
  "outputDigest",
  "quarantined",
  "notes",
]);

const digestPattern = /^[0-9a-f]{64}$/;
const commitPattern = /^[0-9a-f]{40}$/;
const volumePattern = /^llms-full(?:\.\d{3})?\.txt$/;

export function parseProjectManifest(value: unknown): ProjectManifest {
  if (!isRecord(value)) {
    throw new Error("manifest must be an object");
  }
  const unknown = Object.keys(value).filter((key) => !manifestKeys.has(key));
  if (unknown.length > 0) {
    throw new Error(
      `manifest has unknown fields: ${unknown.sort().join(", ")}`,
    );
  }
  if (value.schemaVersion !== manifestSchemaVersion) {
    throw new Error(`manifest schemaVersion must be ${manifestSchemaVersion}`);
  }
  if (value.generatorVersion !== generatorVersion) {
    throw new Error(`manifest generatorVersion must be ${generatorVersion}`);
  }
  if (
    typeof value.generatorDigest !== "string" ||
    !digestPattern.test(value.generatorDigest)
  ) {
    throw new Error("manifest generatorDigest must be a SHA-256 digest");
  }
  if (
    typeof value.project !== "string" ||
    !projectIds.includes(value.project as ProjectId)
  ) {
    throw new Error("manifest project is invalid");
  }
  for (const field of ["title", "homepage", "tag"] as const) {
    if (typeof value[field] !== "string" || !value[field].trim()) {
      throw new Error(`manifest ${field} must be a non-empty string`);
    }
  }
  requireHttpUrl(value.homepage, "homepage");
  optionalString(value, "repository");
  optionalString(value, "catalog");
  optionalString(value, "branch");
  optionalDate(value, "releasePublishedAt");
  optionalDate(value, "sourceCommittedAt");
  optionalDate(value, "taggedAt");
  optionalDate(value, "capturedAt");
  optionalDigest(value, "snapshotDigest");
  optionalDigest(value, "contentDigest");
  optionalDigest(value, "documentationDigest");
  optionalCommit(value, "sourceCommit");
  optionalCommit(value, "docsCommit");
  if (
    value.releaseId !== undefined &&
    (!Number.isSafeInteger(value.releaseId) || Number(value.releaseId) < 1)
  ) {
    throw new Error("manifest releaseId must be a positive integer");
  }
  if (
    typeof value.documentCount !== "number" ||
    !Number.isSafeInteger(value.documentCount) ||
    value.documentCount < 1
  ) {
    throw new Error("manifest documentCount must be a positive integer");
  }
  if (typeof value.indexComplete !== "boolean") {
    throw new Error("manifest indexComplete must be a boolean");
  }
  validateProvenance(value);
  if (
    typeof value.outputDigest !== "string" ||
    !digestPattern.test(value.outputDigest)
  ) {
    throw new Error("manifest outputDigest must be a SHA-256 digest");
  }
  const corpusVolumes = parseVolumes(value.corpusVolumes);
  if (!Array.isArray(value.notes) || !value.notes.every(isString)) {
    throw new Error("manifest notes must be an array of strings");
  }
  const quarantined = parseQuarantine(value.quarantined);
  return {
    ...(value as unknown as ProjectManifest),
    corpusVolumes,
    ...(quarantined ? { quarantined } : {}),
  };
}

function validateProvenance(value: Readonly<Record<string, unknown>>): void {
  const github = typeof value.repository === "string";
  const docc = typeof value.catalog === "string";
  if (github === docc) {
    throw new Error("manifest must identify exactly one repository or catalog");
  }
  if (github) {
    if (!/^[^/\s]+\/[^/\s]+$/.test(value.repository as string)) {
      throw new Error("manifest repository must be an owner/name pair");
    }
    if (typeof value.sourceCommit !== "string") {
      throw new Error("GitHub manifest requires sourceCommit");
    }
    const branch =
      value.branch !== undefined || value.sourceCommittedAt !== undefined;
    const tag = value.taggedAt !== undefined;
    const release =
      value.releaseId !== undefined || value.releasePublishedAt !== undefined;
    if (Number(branch) + Number(tag) + Number(release) !== 1) {
      throw new Error("GitHub manifest must identify one pin kind");
    }
    if (
      (branch &&
        (typeof value.branch !== "string" ||
          typeof value.sourceCommittedAt !== "string")) ||
      (release &&
        (typeof value.releaseId !== "number" ||
          typeof value.releasePublishedAt !== "string"))
    ) {
      throw new Error("GitHub manifest pin fields are incomplete");
    }
    if (!branch && value.documentationDigest !== undefined) {
      throw new Error(
        "manifest documentationDigest is only valid for a branch pin",
      );
    }
    for (const field of [
      "snapshotDigest",
      "contentDigest",
      "capturedAt",
    ] as const) {
      if (value[field] !== undefined) {
        throw new Error(`GitHub manifest cannot contain ${field}`);
      }
    }
    return;
  }
  for (const field of [
    "snapshotDigest",
    "contentDigest",
    "capturedAt",
  ] as const) {
    if (typeof value[field] !== "string") {
      throw new Error(`catalog manifest requires ${field}`);
    }
  }
  for (const field of [
    "repository",
    "sourceCommit",
    "docsCommit",
    "branch",
    "sourceCommittedAt",
    "taggedAt",
    "releaseId",
    "releasePublishedAt",
  ] as const) {
    if (value[field] !== undefined) {
      throw new Error(`catalog manifest cannot contain ${field}`);
    }
  }
}

function parseVolumes(value: unknown): readonly CorpusVolumeManifest[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error("manifest corpusVolumes must be a non-empty array");
  }
  const names = new Set<string>();
  const volumes = value.map((entry, index) => {
    if (!isRecord(entry)) {
      throw new Error(`manifest corpus volume ${index + 1} must be an object`);
    }
    const unknown = Object.keys(entry).filter(
      (key) => !["name", "byteLength", "documentCount", "sha256"].includes(key),
    );
    if (unknown.length > 0) {
      throw new Error(
        `manifest corpus volume has unknown fields: ${unknown.join(", ")}`,
      );
    }
    if (typeof entry.name !== "string" || !volumePattern.test(entry.name)) {
      throw new Error(`manifest corpus volume ${index + 1} has an unsafe name`);
    }
    if (names.has(entry.name)) {
      throw new Error(`manifest repeats corpus volume ${entry.name}`);
    }
    names.add(entry.name);
    if (
      typeof entry.byteLength !== "number" ||
      !Number.isSafeInteger(entry.byteLength) ||
      entry.byteLength < 1
    ) {
      throw new Error(
        `manifest corpus volume ${entry.name} has invalid byteLength`,
      );
    }
    if (
      typeof entry.documentCount !== "number" ||
      !Number.isSafeInteger(entry.documentCount) ||
      entry.documentCount < 0
    ) {
      throw new Error(
        `manifest corpus volume ${entry.name} has invalid documentCount`,
      );
    }
    if (typeof entry.sha256 !== "string" || !digestPattern.test(entry.sha256)) {
      throw new Error(
        `manifest corpus volume ${entry.name} has invalid SHA-256`,
      );
    }
    return entry as unknown as CorpusVolumeManifest;
  });
  if (volumes[0]?.name !== "llms-full.txt") {
    throw new Error("manifest corpusVolumes must begin with llms-full.txt");
  }
  if (volumes.length > 1) {
    for (let index = 1; index < volumes.length; index += 1) {
      const expected = `llms-full.${String(index).padStart(3, "0")}.txt`;
      if (volumes[index]?.name !== expected) {
        throw new Error(
          `manifest corpus volume ${index + 1} must be ${expected}`,
        );
      }
    }
  }
  return volumes;
}

function parseQuarantine(
  value: unknown,
): readonly QuarantinedDocument[] | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (
    !Array.isArray(value) ||
    !value.every(
      (entry) =>
        isRecord(entry) &&
        Object.keys(entry).every((key) =>
          ["sourcePath", "reason"].includes(key),
        ) &&
        typeof entry.sourcePath === "string" &&
        entry.sourcePath.length > 0 &&
        typeof entry.reason === "string" &&
        entry.reason.length > 0,
    )
  ) {
    throw new Error("manifest quarantined entries are invalid");
  }
  return value as unknown as readonly QuarantinedDocument[];
}

function optionalString(
  value: Readonly<Record<string, unknown>>,
  field: string,
): void {
  if (
    value[field] !== undefined &&
    (typeof value[field] !== "string" || !value[field].trim())
  ) {
    throw new Error(`manifest ${field} must be a non-empty string`);
  }
}

function optionalDate(
  value: Readonly<Record<string, unknown>>,
  field: string,
): void {
  const entry = value[field];
  if (
    entry !== undefined &&
    (typeof entry !== "string" ||
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(entry) ||
      !Number.isFinite(Date.parse(entry)))
  ) {
    throw new Error(`manifest ${field} must be an ISO date`);
  }
}

function optionalDigest(
  value: Readonly<Record<string, unknown>>,
  field: string,
): void {
  const entry = value[field];
  if (
    entry !== undefined &&
    (typeof entry !== "string" || !digestPattern.test(entry))
  ) {
    throw new Error(`manifest ${field} must be a SHA-256 digest`);
  }
}

function optionalCommit(
  value: Readonly<Record<string, unknown>>,
  field: string,
): void {
  const entry = value[field];
  if (
    entry !== undefined &&
    (typeof entry !== "string" || !commitPattern.test(entry))
  ) {
    throw new Error(`manifest ${field} must be a Git commit SHA`);
  }
}

function requireHttpUrl(value: unknown, field: string): void {
  try {
    const parsed = new URL(String(value));
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      throw new Error("protocol");
    }
  } catch {
    throw new Error(`manifest ${field} must be an HTTP URL`);
  }
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}
