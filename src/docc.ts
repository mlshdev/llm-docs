import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export const doccOrigin = "https://developer.apple.com";
const dataRoot = `${doccOrigin}/tutorials/data`;

const maximumAttempts = 5;
const baseRetryDelayMs = 500;
const maximumRetryDelayMs = 30_000;
const defaultConcurrency = 12;
const defaultCacheTtlSeconds = 86_400;

export interface DoccIndexNode {
  readonly title: string;
  readonly type: string;
  readonly path?: string;
  readonly external?: boolean;
  readonly beta?: boolean;
  readonly deprecated?: boolean;
  readonly children?: readonly DoccIndexNode[];
}

export interface DoccIndex {
  readonly slug: string;
  readonly body: string;
  readonly nodes: readonly DoccIndexNode[];
}

// The exact bytes a page was rendered from, alongside their digest: the pin
// records what was actually converted rather than an HTTP validator Apple's
// CDN varies by transfer encoding.
export interface DoccDocument {
  readonly payload: unknown;
  readonly bodyDigest: string;
}

export interface DoccIndexEntry {
  readonly path: string;
  readonly title: string;
  readonly type: string;
  readonly beta: boolean;
  readonly deprecated: boolean;
}

export class DoccRequestError extends Error {
  override readonly name = "DoccRequestError";

  constructor(
    readonly url: string,
    readonly status: number | undefined,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
  }
}

export function doccConcurrency(): number {
  const configured = Number.parseInt(process.env.DOCC_CONCURRENCY ?? "", 10);
  return Number.isInteger(configured) && configured > 0
    ? configured
    : defaultConcurrency;
}

export function canonicalUrlFor(documentationPath: string): string {
  return `${doccOrigin}${documentationPath}`;
}

export function renderJsonUrl(documentationPath: string): string {
  return `${dataRoot}${documentationPath}.json`;
}

export function indexUrl(slug: string): string {
  return `${dataRoot}/index/${slug}`;
}

export async function fetchDoccJson(url: string): Promise<unknown | undefined> {
  return (await fetchDoccDocument(url))?.payload;
}

export async function fetchDoccDocument(
  url: string,
): Promise<DoccDocument | undefined> {
  const body = await fetchWithCache(url);
  if (body === undefined) {
    return undefined;
  }
  try {
    return {
      payload: JSON.parse(body) as unknown,
      bodyDigest: createHash("sha256").update(body).digest("hex"),
    };
  } catch (error) {
    throw new DoccRequestError(url, undefined, `Malformed JSON from ${url}`, {
      cause: error,
    });
  }
}

export async function fetchDoccIndex(
  slug: string,
): Promise<DoccIndex | undefined> {
  const url = indexUrl(slug);
  const body = await fetchWithCache(url);
  if (body === undefined) {
    return undefined;
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(body) as unknown;
  } catch (error) {
    throw new DoccRequestError(url, undefined, `Malformed JSON from ${url}`, {
      cause: error,
    });
  }
  const languages = readRecord(parsed)?.interfaceLanguages;
  const record = readRecord(languages);
  if (!record) {
    throw new DoccRequestError(
      url,
      undefined,
      `Index for ${slug} has no interfaceLanguages`,
    );
  }
  const nodes: DoccIndexNode[] = [];
  for (const language of Object.keys(record).sort()) {
    nodes.push(...readIndexNodes(record[language]));
  }
  return { slug, body, nodes };
}

export function collectIndexEntries(
  nodes: readonly DoccIndexNode[],
  into: Map<string, DoccIndexEntry> = new Map(),
): Map<string, DoccIndexEntry> {
  for (const node of nodes) {
    if (
      node.path !== undefined &&
      !node.external &&
      node.path.startsWith("/documentation/") &&
      !into.has(node.path)
    ) {
      into.set(node.path, {
        path: node.path,
        title: node.title,
        type: node.type,
        beta: node.beta === true,
        deprecated: node.deprecated === true,
      });
    }
    if (node.children) {
      collectIndexEntries(node.children, into);
    }
  }
  return into;
}

export function digestOf(parts: readonly string[]): string {
  const hash = createHash("sha256");
  for (const part of [...parts].sort()) {
    hash.update(part);
    hash.update("\n");
  }
  return hash.digest("hex");
}

export async function mapWithConcurrency<T, R>(
  items: readonly T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  const runners = Array.from(
    { length: Math.min(Math.max(limit, 1), items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        const item = items[index];
        if (item === undefined) {
          continue;
        }
        results[index] = await worker(item, index);
      }
    },
  );
  await Promise.all(runners);
  return results;
}

function readIndexNodes(value: unknown): DoccIndexNode[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const nodes: DoccIndexNode[] = [];
  for (const entry of value) {
    const record = readRecord(entry);
    if (!record) {
      continue;
    }
    const nodePath = record.path;
    const children = readIndexNodes(record.children);
    nodes.push({
      title: typeof record.title === "string" ? record.title : "",
      type: typeof record.type === "string" ? record.type : "unknown",
      ...(typeof nodePath === "string" ? { path: nodePath } : {}),
      external: record.external === true,
      beta: record.beta === true,
      deprecated: record.deprecated === true,
      ...(children.length > 0 ? { children } : {}),
    });
  }
  return nodes;
}

function readRecord(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : undefined;
}

// A missing page is cached as the empty body so a rebuild does not re-ask
// Apple for the 404 it already saw.
async function fetchWithCache(url: string): Promise<string | undefined> {
  const cached = await readCache(url);
  if (cached !== undefined) {
    return cached === "" ? undefined : cached;
  }
  const body = await fetchWithRetry(url);
  await writeCache(url, body ?? "");
  return body;
}

async function fetchWithRetry(url: string): Promise<string | undefined> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          "accept-encoding": "identity",
          "user-agent":
            "llm-docs (+https://github.com/mlshdev/docs-llm) documentation snapshot",
        },
      });
      if (response.status === 404 || response.status === 410) {
        await response.body?.cancel();
        return undefined;
      }
      if (response.ok) {
        return await response.text();
      }
      await response.body?.cancel();
      if (!isRetryableStatus(response.status)) {
        throw new DoccRequestError(
          url,
          response.status,
          `${url} responded ${response.status}`,
        );
      }
      lastError = new DoccRequestError(
        url,
        response.status,
        `${url} responded ${response.status}`,
      );
      if (attempt < maximumAttempts) {
        await delay(retryDelay(attempt, response.headers.get("retry-after")));
      }
    } catch (error) {
      if (error instanceof DoccRequestError && error.status !== undefined) {
        if (!isRetryableStatus(error.status)) {
          throw error;
        }
        lastError = error;
        if (attempt < maximumAttempts) {
          await delay(retryDelay(attempt, null));
        }
        continue;
      }
      lastError = error;
      if (attempt < maximumAttempts) {
        await delay(retryDelay(attempt, null));
      }
    }
  }
  throw new DoccRequestError(
    url,
    undefined,
    `${url} failed after ${maximumAttempts} attempts: ${lastError instanceof Error ? lastError.message : String(lastError)}`,
    { cause: lastError },
  );
}

function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

function retryDelay(attempt: number, retryAfter: string | null): number {
  const seconds = Number.parseInt(retryAfter ?? "", 10);
  if (Number.isInteger(seconds) && seconds > 0) {
    return Math.min(seconds * 1000, maximumRetryDelayMs);
  }
  const backoff = baseRetryDelayMs * 2 ** (attempt - 1);
  return Math.min(
    backoff + Math.random() * baseRetryDelayMs,
    maximumRetryDelayMs,
  );
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Apple publishes continuously and a snapshot spans hundreds of thousands of
// requests, so responses are cached on disk: a rebuild, a resumed run, and the
// `verify` that follows a build all read the same bytes instead of re-reading
// a corpus that may have moved underneath them.
function cacheDirectory(): string {
  return (
    process.env.DOCC_CACHE_DIR ?? path.join(tmpdir(), "llm-docs-docc-cache")
  );
}

function cacheTtlSeconds(): number {
  const configured = Number.parseInt(process.env.DOCC_CACHE_TTL ?? "", 10);
  return Number.isInteger(configured) && configured >= 0
    ? configured
    : defaultCacheTtlSeconds;
}

function cachePath(url: string): string {
  const digest = createHash("sha256").update(url).digest("hex");
  return path.join(cacheDirectory(), digest.slice(0, 2), `${digest}.json`);
}

async function readCache(url: string): Promise<string | undefined> {
  if (process.env.DOCC_REFRESH === "1") {
    return undefined;
  }
  return readCacheFile(cachePath(url));
}

async function readCacheFile(file: string): Promise<string | undefined> {
  try {
    const details = await stat(file);
    const ttl = cacheTtlSeconds();
    if (ttl > 0 && Date.now() - details.mtimeMs > ttl * 1000) {
      return undefined;
    }
    return await readFile(file, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}

async function writeCache(url: string, body: string): Promise<void> {
  await writeCacheFile(cachePath(url), body);
}

async function writeCacheFile(file: string, body: string): Promise<void> {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, body, "utf8");
}
