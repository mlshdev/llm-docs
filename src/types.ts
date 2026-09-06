import type { QuarantinedDocument } from "./quarantine.ts";

export const projectIds = [
  "traefik",
  "netbird",
  "podman",
  "docker",
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
] as const;

export type ProjectId = (typeof projectIds)[number];

export interface SourceProject {
  readonly id: ProjectId;
  readonly title: string;
  readonly repository: string;
  readonly docsRepository?: string;
  readonly branch?: string;
  readonly homepage: string;
}

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
}

export interface BranchLockedSource {
  readonly tag: string;
  readonly branch: string;
  readonly sourceCommit: string;
  readonly sourceCommittedAt: string;
  readonly docsCommit?: never;
  readonly releaseId?: never;
  readonly releasePublishedAt?: never;
}

export type LockedSource = ReleaseLockedSource | BranchLockedSource;

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
