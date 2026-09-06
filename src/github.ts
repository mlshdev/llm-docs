import { createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { setTimeout as sleep } from "node:timers/promises";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import { describeError } from "./quarantine.ts";
import type {
  BranchLockedSource,
  ReleaseLockedSource,
  GithubCommit,
  GithubRelease,
  LockedSource,
  SourceProject,
} from "./types.ts";

const githubApi = "https://api.github.com";
const maximumArchiveBytes = 500 * 1024 * 1024;

// Every request here is an idempotent read, so transport faults, secondary
// rate limits, and GitHub's own 5xx responses are retried rather than allowed
// to fail a scheduled reconciliation that would otherwise have nothing to do.
const maximumAttempts = 5;
const maximumRetryDelayMs = 60_000;
const retryableStatuses = new Set([408, 425, 429, 500, 502, 503, 504]);

// A source whose latest pin could not be resolved. The caller keeps publishing
// the pin it already has.
export interface SourceResolutionFailure {
  readonly project: SourceProject["id"];
  readonly reason: string;
}

export interface ResolvedSources {
  readonly projects: Record<SourceProject["id"], LockedSource>;
  readonly failures: readonly SourceResolutionFailure[];
}

class UnretryableRequestError extends Error {
  override readonly name = "UnretryableRequestError";
}

class RetryableRequestError extends Error {
  override readonly name = "RetryableRequestError";

  constructor(
    message: string,
    readonly delayMs: number | undefined,
  ) {
    super(message);
  }
}

async function withRetry<T>(
  description: string,
  operation: () => Promise<T>,
): Promise<T> {
  for (let attempt = 1; ; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      if (
        error instanceof UnretryableRequestError ||
        attempt >= maximumAttempts
      ) {
        throw error;
      }
      const requested =
        error instanceof RetryableRequestError ? error.delayMs : undefined;
      const delay = Math.min(
        requested ?? 2 ** (attempt - 1) * 1000,
        maximumRetryDelayMs,
      );
      console.warn(
        `${description} failed (attempt ${attempt}/${maximumAttempts}), retrying in ${Math.round(delay / 1000)}s: ${describeError(error)}`,
      );
      await sleep(delay);
    }
  }
}

// GitHub answers a primary rate limit with 403 plus a reset timestamp and a
// secondary rate limit with 403/429 plus `retry-after`.
function retryDelayFor(response: Response): number | undefined {
  const retryAfter = Number(response.headers.get("retry-after"));
  if (Number.isFinite(retryAfter) && retryAfter > 0) {
    return retryAfter * 1000;
  }
  if (
    (response.status === 403 || response.status === 429) &&
    response.headers.get("x-ratelimit-remaining") === "0"
  ) {
    const reset = Number(response.headers.get("x-ratelimit-reset"));
    if (Number.isFinite(reset) && reset > 0) {
      return Math.max(0, reset * 1000 - Date.now());
    }
    return maximumRetryDelayMs;
  }
  return undefined;
}

function isRetryableResponse(response: Response): boolean {
  return (
    retryableStatuses.has(response.status) ||
    ((response.status === 403 || response.status === 429) &&
      response.headers.get("x-ratelimit-remaining") === "0")
  );
}

// One upstream repository that is unreachable, that has retired its releases,
// or that moved a tag must not stop the remaining projects from being
// reconciled: the project keeps the pin it already has and the failure is
// reported.
export async function resolveLatestSources(
  projects: readonly SourceProject[],
  current: Readonly<Partial<Record<SourceProject["id"], LockedSource>>>,
): Promise<ResolvedSources> {
  const failures: SourceResolutionFailure[] = [];
  const entries = await Promise.all(
    projects.map(async (project) => {
      try {
        return await resolveSource(project, current);
      } catch (error) {
        const previous = current[project.id];
        if (!previous) {
          throw error;
        }
        const reason = describeError(error);
        failures.push({ project: project.id, reason });
        console.warn(
          `${project.id} could not be reconciled; retaining ${previous.tag}: ${reason}`,
        );
        return [project.id, previous] as const;
      }
    }),
  );
  return {
    projects: Object.fromEntries(entries) as Record<
      SourceProject["id"],
      LockedSource
    >,
    failures: [...failures].sort((left, right) =>
      left.project < right.project ? -1 : left.project > right.project ? 1 : 0,
    ),
  };
}

async function resolveSource(
  project: SourceProject,
  current: Readonly<Partial<Record<SourceProject["id"], LockedSource>>>,
): Promise<readonly [SourceProject["id"], LockedSource]> {
  if (project.branch) {
    const sourceCommit = await getCommit(project.repository, project.branch);
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
  const sourceCommit = await getCommit(project.repository, release.tag_name);
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
  await withRetry(`${repository}@${ref} archive download`, async () => {
    // The stream below opens the destination exclusively, so a retry has to
    // start from a clean path.
    await rm(destination, { force: true });
    await fetchArchive(repository, ref, destination);
  });
}

async function fetchArchive(
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
    const message = `${repository}@${ref} archive download failed: ${response.status} ${response.statusText}`;
    const retryable = isRetryableResponse(response);
    const delay = retryDelayFor(response);
    await response.body?.cancel();
    if (!retryable) {
      throw new UnretryableRequestError(message);
    }
    throw new RetryableRequestError(message, delay);
  }
  const contentLength = Number(response.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maximumArchiveBytes) {
    throw new UnretryableRequestError(
      `${repository}@${ref} archive exceeds 500 MiB`,
    );
  }
  if (!response.body) {
    throw new RetryableRequestError(
      `${repository}@${ref} archive response has no body`,
      undefined,
    );
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
): ReleaseLockedSource {
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
  return withRetry(`GitHub API ${pathname}`, async () => {
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
    if (response.ok) {
      return response;
    }
    const message = `GitHub API ${pathname} failed: ${response.status} ${response.statusText}`;
    const retryable = isRetryableResponse(response);
    const delay = retryDelayFor(response);
    await response.body?.cancel();
    if (!retryable) {
      throw new UnretryableRequestError(message);
    }
    throw new RetryableRequestError(message, delay);
  });
}
