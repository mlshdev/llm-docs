export const projectIds = ["traefik", "netbird", "podman"] as const;

export type ProjectId = (typeof projectIds)[number];

export interface SourceProject {
  readonly id: ProjectId;
  readonly title: string;
  readonly repository: string;
  readonly docsRepository?: string;
  readonly homepage: string;
}

export interface SourcesConfig {
  readonly schemaVersion: 1;
  readonly projects: readonly SourceProject[];
}

export interface LockedSource {
  readonly tag: string;
  readonly releaseId: number;
  readonly releasePublishedAt: string;
  readonly sourceCommit: string;
  readonly docsCommit?: string;
}

export interface SourcesLock {
  readonly schemaVersion: 1;
  readonly projects: Record<ProjectId, LockedSource>;
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
