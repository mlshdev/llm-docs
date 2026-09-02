import { createWriteStream } from "node:fs";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import type {
  BranchLockedSource,
  GithubCommit,
  GithubRelease,
  LockedSource,
  SourceProject,
} from "./types.ts";

const githubApi = "https://api.github.com";
const maximumArchiveBytes = 500 * 1024 * 1024;

export async function resolveLatestSources(
  projects: readonly SourceProject[],
  current: Readonly<Partial<Record<SourceProject["id"], LockedSource>>>,
): Promise<Record<SourceProject["id"], LockedSource>> {
  const entries = await Promise.all(
    projects.map(async (project) => {
      if (project.branch) {
        const sourceCommit = await getCommit(
          project.repository,
          project.branch,
        );
        const previous = current[project.id];
        if (
          isBranchLockedSource(previous) &&
          previous.branch === project.branch &&
          previous.sourceCommit === sourceCommit.sha
        ) {
          return [project.id, previous] as const;
        }
        const sourceCommittedAt = sourceCommit.commit.author?.date;
        if (!sourceCommittedAt) {
          throw new Error(
            `${project.repository} branch ${project.branch} commit has no author date`,
          );
        }
        return [
          project.id,
          {
            tag: project.branch,
            branch: project.branch,
            sourceCommit: sourceCommit.sha,
            sourceCommittedAt,
          },
        ] as const;
      }
      const release = await getLatestStableRelease(project.repository);
      const previous = current[project.id];
      if (
        previous &&
        !isBranchLockedSource(previous) &&
        compareVersions(release.tag_name, previous.tag) < 0
      ) {
        console.warn(
          `${project.repository} latest release ${release.tag_name} is older than locked ${previous.tag}; retaining the locked version`,
        );
        return [project.id, previous] as const;
      }
      const sourceCommit = await getCommit(
        project.repository,
        release.tag_name,
      );
      if (
        previous &&
        !isBranchLockedSource(previous) &&
        previous.tag === release.tag_name
      ) {
        if (previous.sourceCommit !== sourceCommit.sha) {
          throw new Error(
            `${project.repository} tag ${release.tag_name} moved from ${previous.sourceCommit} to ${sourceCommit.sha}`,
          );
        }
        return [project.id, previous] as const;
      }
      if (project.id !== "netbird") {
        return [project.id, toLockedSource(release, sourceCommit.sha)] as const;
      }
      if (!project.docsRepository) {
        throw new Error("NetBird requires docsRepository configuration");
      }
      const docsCommit = await findCommitByMessage(
        project.docsRepository,
        `Update API pages with ${release.tag_name}`,
      );
      if (!docsCommit) {
        const previous = current.netbird;
        if (previous) {
          console.warn(
            `NetBird ${release.tag_name} has no matching docs commit yet; retaining ${previous.tag}`,
          );
          return [project.id, previous] as const;
        }
        throw new Error(
          `No NetBird docs commit matches release ${release.tag_name}`,
        );
      }
      const docsCommitDetails = await getCommit(
        project.docsRepository,
        docsCommit.sha,
      );
      validateNetbirdDocsCommit(docsCommitDetails);
      return [
        project.id,
        {
          ...toLockedSource(release, sourceCommit.sha),
          docsCommit: docsCommitDetails.sha,
        },
      ] as const;
    }),
  );
  return Object.fromEntries(entries) as Record<
    SourceProject["id"],
    LockedSource
  >;
}

function isBranchLockedSource(
  source: LockedSource | undefined,
): source is BranchLockedSource {
  return source?.branch !== undefined;
}

function validateNetbirdDocsCommit(commit: GithubCommit): void {
  if (
    !commit.files?.some((file) =>
      file.filename.startsWith("src/pages/ipa/resources/"),
    )
  ) {
    throw new Error(
      `NetBird docs commit ${commit.sha} does not change generated API resource pages`,
    );
  }
}

function compareVersions(left: string, right: string): number {
  const leftVersion = semanticVersion(left);
  const rightVersion = semanticVersion(right);
  if (!leftVersion || !rightVersion) {
    return 0;
  }
  for (let index = 0; index < leftVersion.length; index += 1) {
    const difference = (leftVersion[index] ?? 0) - (rightVersion[index] ?? 0);
    if (difference !== 0) {
      return difference;
    }
  }
  return 0;
}

function semanticVersion(
  value: string,
): readonly [number, number, number] | undefined {
  const match = value.match(/^v?(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    return undefined;
  }
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

export async function downloadArchive(
  repository: string,
  ref: string,
  destination: string,
): Promise<void> {
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  const response = await fetch(
    `https://codeload.github.com/${repository
      .split("/")
      .map(encodeURIComponent)
      .join("/")}/tar.gz/${encodeURIComponent(ref)}`,
    {
      headers: {
        "User-Agent": "mlshdev-llm-docs",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      redirect: "follow",
    },
  );
  if (!response.ok) {
    throw new Error(
      `${repository}@${ref} archive download failed: ${response.status} ${response.statusText}`,
    );
  }
  const contentLength = Number(response.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maximumArchiveBytes) {
    throw new Error(`${repository}@${ref} archive exceeds 500 MiB`);
  }
  if (!response.body) {
    throw new Error(`${repository}@${ref} archive response has no body`);
  }
  let receivedBytes = 0;
  const limiter = new Transform({
    transform(chunk: Buffer, _encoding, callback) {
      receivedBytes += chunk.length;
      callback(
        receivedBytes > maximumArchiveBytes
          ? new Error(`${repository}@${ref} archive exceeds 500 MiB`)
          : undefined,
        chunk,
      );
    },
  });
  await pipeline(
    Readable.fromWeb(response.body as unknown as NodeReadableStream),
    limiter,
    createWriteStream(destination, { flags: "wx", mode: 0o600 }),
  );
}

async function getLatestStableRelease(
  repository: string,
): Promise<GithubRelease> {
  const release = await githubJson<GithubRelease>(
    `/repos/${repository}/releases/latest`,
  );
  if (release.draft || release.prerelease || !release.published_at) {
    throw new Error(
      `${repository} latest release is not a published stable release`,
    );
  }
  return release;
}

async function getCommit(
  repository: string,
  ref: string,
): Promise<GithubCommit> {
  return githubJson<GithubCommit>(
    `/repos/${repository}/commits/${encodeURIComponent(ref)}`,
  );
}

async function findCommitByMessage(
  repository: string,
  message: string,
): Promise<GithubCommit | undefined> {
  for (let page = 1; page <= 10; page += 1) {
    const commits = await githubJson<GithubCommit[]>(
      `/repos/${repository}/commits?per_page=100&page=${page}`,
    );
    const match = commits.find(
      (commit) => commit.commit.message.trim() === message,
    );
    if (match) {
      return match;
    }
    if (commits.length < 100) {
      return undefined;
    }
  }
  return undefined;
}

function toLockedSource(
  release: GithubRelease,
  sourceCommit: string,
): LockedSource {
  if (!release.published_at) {
    throw new Error(`Release ${release.tag_name} has no publication time`);
  }
  return {
    tag: release.tag_name,
    releaseId: release.id,
    releasePublishedAt: release.published_at,
    sourceCommit,
  };
}

async function githubJson<T>(pathname: string): Promise<T> {
  const response = await githubFetch(pathname);
  return (await response.json()) as T;
}

async function githubFetch(pathname: string): Promise<Response> {
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  const response = await fetch(`${githubApi}${pathname}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "mlshdev-llm-docs",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(
      `GitHub API ${pathname} failed: ${response.status} ${response.statusText}`,
    );
  }
  return response;
}
