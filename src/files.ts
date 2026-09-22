import { randomUUID } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import {
  lstat,
  mkdtemp,
  mkdir,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";
import { extract } from "tar-stream";
import { isGithubRepository } from "./config.ts";
import { compareCodePoints } from "./compare.ts";
import { downloadArchive } from "./github.ts";

const maximumExtractedBytes = 500 * 1024 * 1024;
const maximumFileBytes = 25 * 1024 * 1024;
const maximumFiles = 50_000;
const maximumArchiveEntries = 100_000;
const maximumDeclaredBytes = 2 * 1024 * 1024 * 1024;

// Generous default: a blobless clone of a large repository is slow but not
// hung. `DOCS_PROCESS_TIMEOUT_MS` shortens it for local runs.
const processTimeout = 15 * 60 * 1000;

export async function withRepositoryArchive<T>(
  repository: string,
  ref: string,
  callback: (
    directory: string,
    archiveFiles: ReadonlySet<string>,
  ) => Promise<T>,
  includePath: (relativePath: string) => boolean = () => true,
): Promise<T> {
  const temporary = await mkdtemp(path.join(tmpdir(), "llm-docs-"));
  const sourcePath = path.join(temporary, "source");
  try {
    await mkdir(sourcePath);
    const archivePath = await repositoryArchive(repository, ref);
    const archiveFiles = await extractArchive(
      archivePath,
      sourcePath,
      includePath,
    );
    return await callback(sourcePath, archiveFiles);
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

export async function withSparseGithubCheckout<T>(
  repository: string,
  ref: string,
  sparsePaths: readonly string[],
  callback: (
    directory: string,
    repositoryFiles: ReadonlySet<string>,
  ) => Promise<T>,
): Promise<T> {
  if (!isGithubRepository(repository) || !/^[0-9a-f]{40}$/.test(ref)) {
    throw new Error(
      `Sparse GitHub checkouts must be addressed by owner/name and immutable commit SHA: ${repository}@${ref}`,
    );
  }
  if (
    sparsePaths.length === 0 ||
    sparsePaths.some(
      (entry) =>
        path.isAbsolute(entry) ||
        entry.includes("\\") ||
        entry.includes("\0") ||
        entry.split("/").includes(".."),
    )
  ) {
    throw new Error(`Invalid sparse checkout paths for ${repository}`);
  }
  const cacheRoot =
    process.env.GITHUB_SPARSE_CACHE_DIR ??
    path.join(tmpdir(), "docs-llm-github-sparse");
  const repositoryDirectory = path.join(
    cacheRoot,
    repository.replace("/", "--"),
  );
  const checkout = path.join(repositoryDirectory, ref);
  await mkdir(repositoryDirectory, { recursive: true });
  if (!(await exists(checkout))) {
    const staging = await mkdtemp(path.join(repositoryDirectory, `${ref}.`));
    const source = path.join(staging, "source");
    try {
      await runProcess([
        "gh",
        "repo",
        "clone",
        repository,
        source,
        "--",
        "--filter=blob:none",
        "--no-checkout",
        "--depth=1",
      ]);
      await runProcess([
        "git",
        "-C",
        source,
        "sparse-checkout",
        "set",
        "--cone",
        ...sparsePaths,
      ]);
      await runProcess([
        "git",
        "-C",
        source,
        "fetch",
        "--depth=1",
        "origin",
        ref,
      ]);
      await runProcess(["git", "-C", source, "checkout", "--detach", ref]);
      try {
        await rename(source, checkout);
      } catch (error) {
        // A concurrent run may have committed the same checkout between this
        // run's existence check and its rename. That checkout is validated by
        // its recorded HEAD below, so adopting it is safe.
        const code = (error as NodeJS.ErrnoException | undefined)?.code;
        if (
          code !== "ENOTEMPTY" &&
          code !== "EEXIST" &&
          code !== "ENOTDIR" &&
          code !== "EISDIR"
        ) {
          throw error;
        }
      }
    } finally {
      await rm(staging, { recursive: true, force: true });
    }
  }
  const head = (
    await runProcess(["git", "-C", checkout, "rev-parse", "HEAD"])
  ).trim();
  if (head !== ref) {
    // Move the mismatched checkout aside before removing it, so a concurrent
    // reader never loses the directory it is currently walking.
    const quarantinePath = `${checkout}.invalid.${process.pid}.${randomUUID()}`;
    try {
      await rename(checkout, quarantinePath);
      await rm(quarantinePath, { recursive: true, force: true });
    } catch {
      // Another process already quarantined or removed it.
    }
    throw new Error(
      `Sparse GitHub checkout resolved ${repository}@${ref} to ${head}`,
    );
  }
  const tracked = await runProcess(["git", "-C", checkout, "ls-files", "-z"]);
  return callback(
    checkout,
    new Set(tracked.split("\0").filter((entry) => entry !== "")),
  );
}

async function runProcess(arguments_: readonly string[]): Promise<string> {
  const child = Bun.spawn([...arguments_], {
    stdout: "pipe",
    stderr: "pipe",
    // A hung clone or fetch must not stall the scheduled pipeline forever.
    timeout: processTimeoutMs(),
  });
  const [exitCode, stdout, stderr] = await Promise.all([
    child.exited,
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
  ]);
  if (exitCode !== 0) {
    throw new Error(
      `${arguments_[0] ?? "Process"} exited with ${exitCode}: ${stderr.trim() || stdout.trim()}`,
    );
  }
  return stdout;
}

function processTimeoutMs(): number {
  const override = Number(process.env.DOCS_PROCESS_TIMEOUT_MS);
  return Number.isSafeInteger(override) && override > 0
    ? override
    : processTimeout;
}

async function repositoryArchive(
  repository: string,
  ref: string,
): Promise<string> {
  if (!isGithubRepository(repository) || !/^[0-9a-f]{40}$/.test(ref)) {
    throw new Error(
      `Repository archives must be addressed by owner/name and immutable commit SHA: ${repository}@${ref}`,
    );
  }
  const cacheRoot =
    process.env.GITHUB_ARCHIVE_CACHE_DIR ??
    path.join(tmpdir(), "docs-llm-github-archives");
  const directory = path.join(cacheRoot, repository.replace("/", "--"));
  const archivePath = path.join(directory, `${ref}.tar.gz`);
  await mkdir(directory, { recursive: true });
  if (await exists(archivePath)) return archivePath;

  const temporary = `${archivePath}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await downloadArchive(repository, ref, temporary);
    await rename(temporary, archivePath);
  } finally {
    await rm(temporary, { force: true });
  }
  return archivePath;
}

export async function listFiles(directory: string): Promise<string[]> {
  const result: string[] = [];
  async function walk(current: string): Promise<void> {
    const entries = await readdir(current, { withFileTypes: true });
    entries.sort((left, right) => compareCodePoints(left.name, right.name));
    for (const entry of entries) {
      const absolute = path.join(current, entry.name);
      if (entry.isSymbolicLink()) {
        throw new Error(`Unexpected symbolic link: ${absolute}`);
      }
      if (entry.isDirectory()) {
        await walk(absolute);
      } else if (entry.isFile()) {
        result.push(
          path.relative(directory, absolute).split(path.sep).join("/"),
        );
      }
    }
  }
  await walk(directory);
  return result;
}

export async function readUtf8(
  root: string,
  relativePath: string,
): Promise<string> {
  const filePath = resolveWithin(root, relativePath);
  const details = await lstat(filePath);
  if (!details.isFile()) {
    throw new Error(`Expected a regular file: ${relativePath}`);
  }
  return Bun.file(filePath).text();
}

export async function writeUtf8(
  filePath: string,
  content: string,
): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await Bun.write(filePath, content.endsWith("\n") ? content : `${content}\n`);
}

export async function writeUtf8Atomic(
  filePath: string,
  content: string,
): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await writeFile(
      temporary,
      content.endsWith("\n") ? content : `${content}\n`,
      { encoding: "utf8", flag: "wx", mode: 0o644 },
    );
    await rename(temporary, filePath);
  } finally {
    await rm(temporary, { force: true });
  }
}

export async function replaceDirectoryAtomically(
  destination: string,
  populate: (staging: string) => Promise<void>,
): Promise<void> {
  await stageDirectoryReplacement(destination, populate);
  await commitDirectoryReplacements([destination], async () => {});
}

export async function stageDirectoryReplacement(
  destination: string,
  populate: (staging: string) => Promise<void>,
): Promise<void> {
  const staging = `${destination}.staging`;
  await recoverAtomicDirectory(destination);
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  try {
    await populate(staging);
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
}

// Commit a set of fully staged directories as one in-process transaction. Old
// snapshots remain in sibling backups until the caller's root indexes, lock,
// and verification callback has also succeeded; any failure rolls every swap
// back in reverse order.
export async function commitDirectoryReplacements(
  destinations: readonly string[],
  finalize: () => Promise<void>,
): Promise<void> {
  const committed: { destination: string; retainedPrevious: boolean }[] = [];
  try {
    for (const destination of destinations) {
      const staging = `${destination}.staging`;
      const backup = `${destination}.backup`;
      if (!(await exists(staging))) {
        throw new Error(`Missing staged directory: ${staging}`);
      }
      const retainedPrevious = await exists(destination);
      if (retainedPrevious) await rename(destination, backup);
      try {
        await rename(staging, destination);
      } catch (error) {
        if (retainedPrevious) await rename(backup, destination);
        throw error;
      }
      committed.push({ destination, retainedPrevious });
    }
    await finalize();
  } catch (error) {
    const rollbackFailures: string[] = [];
    for (const entry of committed.reverse()) {
      const backup = `${entry.destination}.backup`;
      // Every rollback step runs even after an earlier one fails, so the
      // original error stays primary and the failures stay visible.
      try {
        await rm(entry.destination, { recursive: true, force: true });
        if (entry.retainedPrevious) await rename(backup, entry.destination);
      } catch (rollbackError) {
        rollbackFailures.push(
          `${entry.destination}: ${asError(rollbackError).message}`,
        );
      }
    }
    if (rollbackFailures.length > 0) {
      throw new Error(
        `${asError(error).message}; rollback also failed (${rollbackFailures.join("; ")})`,
        { cause: error },
      );
    }
    throw error;
  } finally {
    for (const destination of destinations) {
      await rm(`${destination}.staging`, { recursive: true, force: true });
    }
  }
  for (const entry of committed) {
    if (entry.retainedPrevious) {
      await rm(`${entry.destination}.backup`, { recursive: true, force: true });
    }
  }
}

export async function discardDirectoryReplacements(
  destinations: readonly string[],
): Promise<void> {
  for (const destination of destinations) {
    await rm(`${destination}.staging`, { recursive: true, force: true });
  }
}

export async function recoverAtomicDirectory(
  destination: string,
): Promise<void> {
  const staging = `${destination}.staging`;
  const backup = `${destination}.backup`;
  await rm(staging, { recursive: true, force: true });
  if (!(await exists(backup))) {
    return;
  }
  if (await exists(destination)) {
    await rm(backup, { recursive: true, force: true });
  } else {
    await rename(backup, destination);
  }
}

export async function exists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

export function resolveWithin(root: string, relativePath: string): string {
  if (
    path.isAbsolute(relativePath) ||
    relativePath.includes("\\") ||
    relativePath.includes("\0")
  ) {
    throw new Error(`Unsafe relative path: ${relativePath}`);
  }
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, relativePath);
  if (
    resolved !== resolvedRoot &&
    !resolved.startsWith(`${resolvedRoot}${path.sep}`)
  ) {
    throw new Error(`Path escapes source root: ${relativePath}`);
  }
  return resolved;
}

export async function extractArchive(
  archivePath: string,
  destination: string,
  includePath: (relativePath: string) => boolean,
): Promise<ReadonlySet<string>> {
  const archive = extract();
  const archiveFiles = new Set<string>();
  let archiveRoot: string | undefined;
  let fileCount = 0;
  let extractedBytes = 0;
  let archiveEntries = 0;
  let declaredBytes = 0;
  archive.on("entry", (header, stream, next) => {
    void handleEntry().catch((error: unknown) =>
      archive.destroy(asError(error)),
    );

    async function handleEntry(): Promise<void> {
      const relativePath = archiveRelativePath(header.name);
      const root = header.name.replace(/\/$/, "").split("/")[0];
      if (root) {
        if (archiveRoot !== undefined && root !== archiveRoot) {
          throw new Error(
            `Source archive has multiple roots: ${archiveRoot}, ${root}`,
          );
        }
        archiveRoot = root;
      }
      if (
        relativePath &&
        includePath(relativePath) &&
        (header.type === "symlink" || header.type === "link")
      ) {
        throw new Error(`Source archive contains a link: ${relativePath}`);
      }
      const size = header.size ?? 0;
      if (!Number.isSafeInteger(size) || size < 0) {
        throw new Error(
          `Invalid archive file size for ${relativePath ?? header.name}`,
        );
      }
      archiveEntries += 1;
      declaredBytes += size;
      if (
        archiveEntries > maximumArchiveEntries ||
        declaredBytes > maximumDeclaredBytes
      ) {
        throw new Error("Source archive exceeds entry or declared-size limits");
      }
      if (relativePath && header.type === "file") {
        if (archiveFiles.has(relativePath)) {
          throw new Error(`Source archive repeats file: ${relativePath}`);
        }
        archiveFiles.add(relativePath);
      }
      if (
        !relativePath ||
        header.type !== "file" ||
        !includePath(relativePath)
      ) {
        stream.resume();
        stream.once("end", next);
        return;
      }
      const destinationPath = resolveWithin(destination, relativePath);
      fileCount += 1;
      extractedBytes += size;
      if (
        fileCount > maximumFiles ||
        size > maximumFileBytes ||
        extractedBytes > maximumExtractedBytes
      ) {
        throw new Error("Source archive exceeds extraction limits");
      }
      await mkdir(path.dirname(destinationPath), { recursive: true });
      await pipeline(
        stream,
        createWriteStream(destinationPath, { flags: "wx", mode: 0o644 }),
      );
      next();
    }
  });
  try {
    // tar-stream 3.2.1 ships its own typings, where Extract extends streamx's
    // Writable rather than node:stream's. The two are duck-compatible at
    // runtime — this is how tar-stream is meant to be piped — but structurally
    // different types, so node:stream/promises cannot accept it directly.
    await pipeline(
      createReadStream(archivePath),
      createGunzip(),
      archive as unknown as NodeJS.WritableStream,
    );
    return archiveFiles;
  } catch (error) {
    await rm(destination, { recursive: true, force: true });
    throw error;
  }
}

export function archiveRelativePath(name: string): string | undefined {
  if (
    !name ||
    name.includes("\\") ||
    name.includes("\0") ||
    path.posix.isAbsolute(name)
  ) {
    throw new Error(`Unsafe archive path: ${name}`);
  }
  const rawParts = name.replace(/\/$/, "").split("/");
  if (rawParts.some((part) => part === "" || part === "." || part === "..")) {
    throw new Error(`Unsafe archive path: ${name}`);
  }
  const normalized = path.posix.normalize(name);
  if (normalized === ".." || normalized.startsWith("../")) {
    throw new Error(`Archive path escapes root: ${name}`);
  }
  const parts = normalized.split("/").filter(Boolean);
  parts.shift();
  return parts.length > 0 ? parts.join("/") : undefined;
}

function asError(value: unknown): Error {
  return value instanceof Error ? value : new Error(String(value));
}
