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
  "postgres-18",
  "vastai",
  "runpod",
  "discord-py-self",
  "discord-py",
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
  // Some repositories publish stable semver tags but do not create GitHub
  // Releases. These sources pin the highest final vX.Y.Z tag.
  readonly semanticTags?: true;
  // A repository that publishes no GitHub releases but tags every maintenance
  // release pins the highest `<series>_<minor>` tag, which is how a major
  // version tracks its own minor versions and nothing else.
  readonly tagSeries?: string;
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
  readonly taggedAt?: never;
  readonly snapshotDigest?: never;
  readonly contentDigest?: never;
  readonly capturedAt?: never;
}

export interface BranchLockedSource {
  readonly tag: string;
  readonly branch: string;
  readonly sourceCommit: string;
  readonly sourceCommittedAt: string;
  // Hash of the normalized documentation content with the commit token
  // removed. It prevents unrelated branch commits from churning snapshots.
  readonly documentationDigest?: string;
  // Latest branch head already inspected. It may advance while sourceCommit
  // stays pinned when the normalized documentation digest is unchanged.
  readonly observedCommit?: string;
  readonly docsCommit?: never;
  readonly releaseId?: never;
  readonly releasePublishedAt?: never;
  readonly taggedAt?: never;
  readonly snapshotDigest?: never;
  readonly contentDigest?: never;
  readonly capturedAt?: never;
}

// A stable tag in a repository that publishes no GitHub releases. `taggedAt`
// is the pinned commit's author date and distinguishes this pin from a release
// pin, which carries the release's own publication time instead.
export interface TagLockedSource {
  readonly tag: string;
  readonly sourceCommit: string;
  readonly taggedAt: string;
  readonly branch?: never;
  readonly sourceCommittedAt?: never;
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
  readonly taggedAt?: never;
  readonly docsCommit?: never;
  readonly releaseId?: never;
  readonly releasePublishedAt?: never;
}

export type LockedSource =
  | ReleaseLockedSource
  | BranchLockedSource
  | TagLockedSource
  | SnapshotLockedSource;

export type GithubLockedSource =
  | ReleaseLockedSource
  | BranchLockedSource
  | TagLockedSource;

export function isBranchLockedSource(
  source: LockedSource,
): source is BranchLockedSource {
  return source.branch !== undefined;
}

export function isTagLockedSource(
  source: LockedSource,
): source is TagLockedSource {
  return source.taggedAt !== undefined;
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
  // Immutable input location. For GitHub adapters this defaults to a blob URL
  // at the locked commit; adapters may override it for secondary repositories.
  readonly sourceUrl?: string;
  // Live documentation URL, which may move independently of the pinned input.
  readonly canonicalUrl: string;
  readonly section?: string;
  readonly description?: string;
  readonly documentType?: string;
  readonly beta?: boolean;
  readonly deprecated?: boolean;
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
