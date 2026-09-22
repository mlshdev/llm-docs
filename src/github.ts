import { createWriteStream } from "node:fs";
import { rm } from "node:fs/promises";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { setTimeout as sleep } from "node:timers/promises";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import { mapWithConcurrency } from "./concurrency.ts";
import { resolveNetbirdPin } from "./projects/netbird.ts";
import { resolveDoccSnapshot } from "./projects/apple.ts";
import { describeError } from "./quarantine.ts";
import { recordRequestAttempt, withRequestMetrics } from "./request-metrics.ts";
import { isTagLockedSource } from "./types.ts";
import type {
  BranchLockedSource,
  ReleaseLockedSource,
  GithubCommit,
  GithubRelease,
  GithubProjectId,
  GithubSourceProject,
  LockedSource,
  SourceProject,
} from "./types.ts";

const githubApi = "https://api.github.com";
const maximumArchiveBytes = 500 * 1024 * 1024;
const githubApiTimeoutMs = 30_000;
const githubArchiveTimeoutMs = 5 * 60_000;
const defaultSourceConcurrency = 4;

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
  readonly metrics: readonly SourceResolutionMetric[];
}

export interface SourceResolutionMetric {
  readonly project: SourceProject["id"];
  readonly requestAttempts: number;
  readonly elapsedMs: number;
  readonly outcome: "resolved" | "retained";
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
      recordRequestAttempt();
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
      const backoff = 2 ** (attempt - 1) * 1000;
      const delay = Math.min(
        requested ?? backoff * (0.75 + Math.random() * 0.5),
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
export function retryDelayFor(
  response: Response,
  now = Date.now(),
): number | undefined {
  const retryAfter = response.headers.get("retry-after");
  if (retryAfter !== null) {
    const seconds = Number(retryAfter);
    if (Number.isFinite(seconds) && seconds >= 0) {
      return seconds * 1000;
    }
    const date = Date.parse(retryAfter);
    if (Number.isFinite(date)) {
      return Math.max(0, date - now);
    }
  }
  if (
    (response.status === 403 || response.status === 429) &&
    response.headers.get("x-ratelimit-remaining") === "0"
  ) {
    const reset = Number(response.headers.get("x-ratelimit-reset"));
    if (Number.isFinite(reset) && reset > 0) {
      return Math.max(0, reset * 1000 - now);
    }
    return maximumRetryDelayMs;
  }
  return undefined;
}

export function isRetryableResponse(response: Response): boolean {
  return (
    retryableStatuses.has(response.status) ||
    ((response.status === 403 || response.status === 429) &&
      response.headers.has("retry-after")) ||
    ((response.status === 403 || response.status === 429) &&
      response.headers.get("x-ratelimit-remaining") === "0")
  );
}

export function sourceResolutionConcurrency(): number {
  const configured = Number.parseInt(process.env.SOURCE_CONCURRENCY ?? "", 10);
  return Number.isInteger(configured) && configured > 0
    ? configured
    : defaultSourceConcurrency;
}

// One upstream repository that is unreachable, that has retired its releases,
// or that moved a tag must not stop the remaining projects from being
// reconciled: the project keeps the pin it already has and the failure is
// reported.
export async function resolveLatestSources(
  projects: readonly SourceProject[],
  current: Readonly<Partial<Record<SourceProject["id"], LockedSource>>>,
): Promise<ResolvedSources> {
  const results = await mapWithConcurrency(
    projects,
    sourceResolutionConcurrency(),
    async (project) => {
      const startedAt = performance.now();
      const measured = await withRequestMetrics(async () => {
        try {
          const entry =
            project.kind === "docc"
              ? ([
                  project.id,
                  await resolveDoccSnapshot(project, current[project.id]),
                ] as const)
              : await resolveSource(project, current);
          return { entry, outcome: "resolved" as const };
        } catch (error) {
          const previous = current[project.id];
          if (!previous) {
            throw error;
          }
          const reason = describeError(error);
          console.warn(
            `${project.id} could not be reconciled; retaining ${previous.tag}: ${reason}`,
          );
          return {
            entry: [project.id, previous] as const,
            outcome: "retained" as const,
            failure: { project: project.id, reason },
          };
        }
      });
      return {
        ...measured.value,
        metric: {
          project: project.id,
          requestAttempts: measured.requestAttempts,
          elapsedMs: Math.max(0, Math.round(performance.now() - startedAt)),
          outcome: measured.value.outcome,
        } satisfies SourceResolutionMetric,
      };
    },
  );
  const failures = results
    .flatMap((result) => (result.failure ? [result.failure] : []))
    .sort((left, right) =>
      left.project < right.project ? -1 : left.project > right.project ? 1 : 0,
    );
  return {
    projects: Object.fromEntries(
      results.map((result) => result.entry),
    ) as Record<SourceProject["id"], LockedSource>,
    failures,
    metrics: results.map((result) => result.metric),
  };
}

async function resolveSource(
  project: GithubSourceProject,
  current: Readonly<Partial<Record<SourceProject["id"], LockedSource>>>,
): Promise<readonly [SourceProject["id"], LockedSource]> {
  if (project.tagSeries) {
    return resolveTagSeries(project, project.tagSeries, current[project.id]);
  }
  if (project.semanticTags) {
    return resolveSemanticTag(project, current[project.id]);
  }
  if (project.branch) {
    const sourceCommit = await getCommit(project.repository, project.branch);
    const previous = current[project.id];
    if (
      isBranchLockedSource(previous) &&
      previous.branch === project.branch &&
      previous.documentationDigest !== undefined &&
      (previous.observedCommit ?? previous.sourceCommit) === sourceCommit.sha
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
        observedCommit: sourceCommit.sha,
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
  const pin = toLockedSource(release, sourceCommit.sha);
  const extension = pinExtensions[project.id];
  if (!extension) {
    return [project.id, pin] as const;
  }
  return [
    project.id,
    await extension({
      project,
      release,
      sourceCommit: sourceCommit.sha,
      previous: current[project.id],
    }),
  ] as const;
}

// GitHub's releases endpoint is not useful for projects that publish releases
// only as tags. Restricting this mode to final vX.Y.Z tags keeps prereleases,
// moving branch heads, and unrelated historical tag formats out of the pin.
async function resolveSemanticTag(
  project: GithubSourceProject,
  previous: LockedSource | undefined,
): Promise<readonly [SourceProject["id"], LockedSource]> {
  const refs: string[] = [];
  for (let page = 1; ; page += 1) {
    const tags = await githubJson<readonly { readonly name: string }[]>(
      `/repos/${project.repository}/tags?per_page=100&page=${page}`,
    );
    refs.push(...tags.map((entry) => `refs/tags/${entry.name}`));
    if (tags.length < 100) break;
  }
  const tag = latestSemanticTag(refs);
  if (!tag) {
    throw new Error(`${project.repository} has no stable vX.Y.Z tags`);
  }
  if (
    previous &&
    isTagLockedSource(previous) &&
    compareVersions(tag, previous.tag) < 0
  ) {
    console.warn(
      `${project.repository} latest semantic tag ${tag} is older than locked ${previous.tag}; retaining the locked version`,
    );
    return [project.id, previous] as const;
  }
  const sourceCommit = await getCommit(project.repository, tag);
  if (previous && isTagLockedSource(previous) && previous.tag === tag) {
    if (previous.sourceCommit !== sourceCommit.sha) {
      throw new Error(
        `${project.repository} tag ${tag} moved from ${previous.sourceCommit} to ${sourceCommit.sha}`,
      );
    }
    return [project.id, previous] as const;
  }
  const taggedAt = sourceCommit.commit.author?.date;
  if (!taggedAt) {
    throw new Error(
      `${project.repository} tag ${tag} commit has no author date`,
    );
  }
  return [
    project.id,
    { tag, sourceCommit: sourceCommit.sha, taggedAt },
  ] as const;
}

export function latestSemanticTag(refs: readonly string[]): string | undefined {
  return refs
    .map((ref) => ref.match(/^refs\/tags\/(v\d+\.\d+\.\d+)$/)?.[1])
    .filter((tag): tag is string => tag !== undefined)
    .sort(compareVersions)
    .at(-1);
}

// A major version tracks only its own maintenance releases: every tag in the
// series is `<series>_<minor>`, and the highest minor is the current one.
// Prereleases (`REL_18_BETA1`, `REL_18_RC1`) do not match and are ignored.
async function resolveTagSeries(
  project: GithubSourceProject,
  series: string,
  previous: LockedSource | undefined,
): Promise<readonly [SourceProject["id"], LockedSource]> {
  const refs = await githubJson<readonly { readonly ref: string }[]>(
    `/repos/${project.repository}/git/matching-refs/tags/${encodeURIComponent(`${series}_`)}`,
  );
  const pattern = new RegExp(`^refs/tags/${escapeRegExp(series)}_(\\d+)$`);
  const minors = refs
    .map((entry) => Number(pattern.exec(entry.ref)?.[1]))
    .filter((minor) => Number.isInteger(minor));
  if (minors.length === 0) {
    throw new Error(
      `${project.repository} has no ${series}_<minor> maintenance tags`,
    );
  }
  const tag = `${series}_${Math.max(...minors)}`;
  if (previous && isTagLockedSource(previous)) {
    const previousMinor = Number(
      new RegExp(`^${escapeRegExp(series)}_(\\d+)$`).exec(previous.tag)?.[1],
    );
    if (
      Number.isInteger(previousMinor) &&
      previousMinor > Math.max(...minors)
    ) {
      console.warn(
        `${project.repository} highest ${series} tag ${tag} is older than locked ${previous.tag}; retaining the locked version`,
      );
      return [project.id, previous] as const;
    }
  }
  const sourceCommit = await getCommit(project.repository, tag);
  if (previous && isTagLockedSource(previous) && previous.tag === tag) {
    if (previous.sourceCommit !== sourceCommit.sha) {
      throw new Error(
        `${project.repository} tag ${tag} moved from ${previous.sourceCommit} to ${sourceCommit.sha}`,
      );
    }
    return [project.id, previous] as const;
  }
  const taggedAt = sourceCommit.commit.author?.date;
  if (!taggedAt) {
    throw new Error(
      `${project.repository} tag ${tag} commit has no author date`,
    );
  }
  return [
    project.id,
    { tag, sourceCommit: sourceCommit.sha, taggedAt },
  ] as const;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isBranchLockedSource(
  source: LockedSource | undefined,
): source is BranchLockedSource {
  return source?.branch !== undefined;
}

// Some projects publish documentation through a protocol beyond the standard
// release/tag/branch selection. Their adapters own that protocol instead of
// the shared resolver growing per-project branches.
interface PinExtensionContext {
  readonly project: GithubSourceProject;
  readonly release: GithubRelease;
  readonly sourceCommit: string;
  readonly previous: LockedSource | undefined;
}

const pinExtensions: Readonly<Partial<Record<GithubProjectId, PinExtension>>> =
  {
    netbird: resolveNetbirdPin,
  };

type PinExtension = (context: PinExtensionContext) => Promise<LockedSource>;

export function compareVersions(left: string, right: string): number {
  const leftVersion = semanticVersion(left);
  const rightVersion = semanticVersion(right);
  if (!leftVersion || !rightVersion) {
    throw new Error(
      `Cannot compare non-semantic release tags ${JSON.stringify(left)} and ${JSON.stringify(right)}`,
    );
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
  const match = value.match(/^(?:bun-v|release-|v)?(\d+)\.(\d+)\.(\d+)$/);
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
  const response = await fetchWithSafeAuth(
    `https://codeload.github.com/${repository
      .split("/")
      .map(encodeURIComponent)
      .join("/")}/tar.gz/${encodeURIComponent(ref)}`,
    {
      headers: {
        "User-Agent": "mlshdev-llm-docs",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(githubArchiveTimeoutMs),
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

export async function getCommit(
  repository: string,
  ref: string,
): Promise<GithubCommit> {
  return githubJson<GithubCommit>(
    `/repos/${repository}/commits/${encodeURIComponent(ref)}`,
  );
}

export async function findCommitByMessage(
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

export function toLockedSource(
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
  // The parse stays inside the retry scope: GitHub's CDN occasionally serves
  // truncated bodies, which should retry like any other transport fault.
  return withRetry(`GitHub API ${pathname}`, async () => {
    const response = await githubFetch(pathname);
    try {
      return (await response.json()) as T;
    } catch (error) {
      await response.body?.cancel();
      throw new RetryableRequestError(
        `GitHub API ${pathname} returned an unparsable body: ${describeError(error)}`,
        undefined,
      );
    }
  });
}

// A fetch that follows redirects without replaying credentials: the
// Authorization header is dropped as soon as the redirect leaves the origin.
async function fetchWithSafeAuth(
  url: string,
  init: RequestInit,
): Promise<Response> {
  let current = url;
  for (let redirect = 0; redirect < 10; redirect += 1) {
    const response = await fetch(current, {
      ...init,
      redirect: "manual",
    });
    if (response.status < 300 || response.status > 399) {
      return response;
    }
    const location = response.headers.get("location");
    await response.body?.cancel();
    if (!location) {
      throw new UnretryableRequestError(
        `Request to ${url} redirected without a location header`,
      );
    }
    const next = new URL(location, current);
    if (next.origin !== new URL(current).origin) {
      init = {
        ...init,
        headers: withoutAuthorization(init.headers ?? {}),
      };
    }
    current = next.toString();
  }
  throw new UnretryableRequestError(
    `Request to ${url} redirected too many times`,
  );
}

function withoutAuthorization(headers: HeadersInit): HeadersInit {
  const next = new Headers(headers);
  next.delete("Authorization");
  return next;
}

async function githubFetch(pathname: string): Promise<Response> {
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  const response = await fetchWithSafeAuth(`${githubApi}${pathname}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "mlshdev-llm-docs",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    signal: AbortSignal.timeout(githubApiTimeoutMs),
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
}
