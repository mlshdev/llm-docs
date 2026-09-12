import type { QuarantinedDocument } from "./quarantine.ts";

export const projectIds = [
  "traefik",
  "netbird",
  "podman",
  "docker",
  "container",
  "n8n",
  "grafana",
  "victoriametrics",
  "victorialogs",
  "victoriametrics-datasource",
  "victorialogs-datasource",
  "vmestimator",
  "zitadel",
  "ffmpeg",
  "yt-dlp",
  "searxng",
  "bun",
  "trigger-dev",
  "aria2",
  "apple-swift",
  "apple-swiftui",
  "apple-webkit",
  "apple-xcode",
  "apple-ios",
  "apple-macos",
  "apple-watchos",
  "apple-frameworks",
] as const;

export type ProjectId = (typeof projectIds)[number];

// Which slice of Apple's documentation catalog a project publishes. Every page
// Apple serves belongs to exactly one catalog, so the projects together carry
// the whole corpus without storing a page twice.
export const doccCatalogIds = [
  "swift",
  "swiftui",
  "webkit",
  "xcode",
  "ios",
  "macos",
  "watchos",
  "shared",
] as const;

export type DoccCatalogId = (typeof doccCatalogIds)[number];

export const doccProjectCatalogs = {
  "apple-swift": "swift",
  "apple-swiftui": "swiftui",
  "apple-webkit": "webkit",
  "apple-xcode": "xcode",
  "apple-ios": "ios",
  "apple-macos": "macos",
  "apple-watchos": "watchos",
  "apple-frameworks": "shared",
} as const satisfies Readonly<Partial<Record<ProjectId, DoccCatalogId>>>;

export type DoccProjectId = keyof typeof doccProjectCatalogs;
export type GithubProjectId = Exclude<ProjectId, DoccProjectId>;

interface BaseSourceProject<T extends ProjectId> {
  readonly id: T;
  readonly title: string;
  readonly homepage: string;
}

export interface GithubSourceProject
  extends BaseSourceProject<GithubProjectId> {
  readonly kind: "github";
  readonly repository: string;
  readonly docsRepository?: string;
  readonly branch?: string;
}

export interface DoccSourceProject extends BaseSourceProject<DoccProjectId> {
  readonly kind: "docc";
  readonly catalog: DoccCatalogId;
}

export type SourceProject = GithubSourceProject | DoccSourceProject;

export interface SourcesConfig {
  readonly schemaVersion: 1;
  readonly projects: readonly SourceProject[];
}

export interface ReleaseLockedSource {
  readonly tag: string;
  readonly releaseId: number;
  readonly releasePublishedAt: string;
  readonly sourceCommit: string;
  readonly docsCommit?: string;
  readonly branch?: never;
  readonly sourceCommittedAt?: never;
  readonly snapshotDigest?: never;
  readonly contentDigest?: never;
  readonly capturedAt?: never;
}

export interface BranchLockedSource {
  readonly tag: string;
  readonly branch: string;
  readonly sourceCommit: string;
  readonly sourceCommittedAt: string;
  readonly docsCommit?: never;
  readonly releaseId?: never;
  readonly releasePublishedAt?: never;
  readonly snapshotDigest?: never;
  readonly contentDigest?: never;
  readonly capturedAt?: never;
}

// Apple serves documentation from a live endpoint rather than a repository, so
// there is no commit to pin. `snapshotDigest` pins the catalog inventory, which
// a daily run can re-derive from a few hundred index documents; `contentDigest`
// pins the render payloads the published pages were converted from and is
// computed by the build that converted them, so it is absent until a project
// has been built at least once since content addressing was introduced.
export interface SnapshotLockedSource {
  readonly tag: string;
  readonly snapshotDigest: string;
  readonly contentDigest?: string;
  readonly capturedAt: string;
  readonly sourceCommit?: never;
  readonly branch?: never;
  readonly sourceCommittedAt?: never;
  readonly docsCommit?: never;
  readonly releaseId?: never;
  readonly releasePublishedAt?: never;
}

export type LockedSource =
  | ReleaseLockedSource
  | BranchLockedSource
  | SnapshotLockedSource;

export type GithubLockedSource = ReleaseLockedSource | BranchLockedSource;

export function isBranchLockedSource(
  source: LockedSource,
): source is BranchLockedSource {
  return source.branch !== undefined;
}

export function isSnapshotLockedSource(
  source: LockedSource,
): source is SnapshotLockedSource {
  return source.snapshotDigest !== undefined;
}

export function isGithubLockedSource(
  source: LockedSource,
): source is GithubLockedSource {
  return !isSnapshotLockedSource(source);
}

export function isGithubSourceProject(
  project: SourceProject,
): project is GithubSourceProject {
  return project.kind === "github";
}

// A lock may omit a project that was added to the configuration but not yet
// resolved against its upstream releases, which is the state `update` starts
// from. Everything that reads pins requires the complete form.
export interface SourcesLock {
  readonly schemaVersion: 1;
  readonly projects: Readonly<Partial<Record<ProjectId, LockedSource>>>;
}

export interface CompleteSourcesLock extends SourcesLock {
  readonly projects: Readonly<Record<ProjectId, LockedSource>>;
}

export interface Document {
  readonly sourcePath: string;
  readonly outputPath: string;
  readonly title: string;
  readonly body: string;
  readonly canonicalUrl: string;
  readonly section?: string;
}

export interface ProjectBuild {
  readonly project: SourceProject;
  readonly lock: LockedSource;
  readonly documents: readonly Document[];
  readonly quarantined: readonly QuarantinedDocument[];
  readonly notes: readonly string[];
  readonly licenseText: string;
  // Corpora too large to enumerate page by page supply their own index body;
  // the default index lists every document.
  readonly indexOverride?: readonly string[];
}

export interface GithubRelease {
  readonly id: number;
  readonly tag_name: string;
  readonly draft: boolean;
  readonly prerelease: boolean;
  readonly published_at: string | null;
}

export interface GithubCommit {
  readonly sha: string;
  readonly commit: {
    readonly message: string;
    readonly author?: {
      readonly date: string;
    };
  };
  readonly files?: readonly {
    readonly filename: string;
  }[];
}
