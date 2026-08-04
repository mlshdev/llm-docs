import { createReadStream, createWriteStream } from "node:fs";
import {
  lstat,
  mkdtemp,
  mkdir,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";
import { extract } from "tar-stream";
import { downloadArchive } from "./github.ts";

const maximumExtractedBytes = 500 * 1024 * 1024;
const maximumFileBytes = 25 * 1024 * 1024;
const maximumFiles = 50_000;
const maximumArchiveEntries = 100_000;
const maximumDeclaredBytes = 2 * 1024 * 1024 * 1024;

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
  const archivePath = path.join(temporary, "source.tar.gz");
  const sourcePath = path.join(temporary, "source");
  try {
    await mkdir(sourcePath);
    await downloadArchive(repository, ref, archivePath);
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

export async function listFiles(directory: string): Promise<string[]> {
  const result: string[] = [];
  async function walk(current: string): Promise<void> {
    const entries = await readdir(current, { withFileTypes: true });
    entries.sort((left, right) =>
      left.name < right.name ? -1 : left.name > right.name ? 1 : 0,
    );
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
  return readFile(filePath, "utf8");
}

export async function writeUtf8(
  filePath: string,
  content: string,
): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(
    filePath,
    content.endsWith("\n") ? content : `${content}\n`,
    "utf8",
  );
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

export function toPosixPath(value: string): string {
  return value.split(path.sep).join("/");
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

async function extractArchive(
  archivePath: string,
  destination: string,
  includePath: (relativePath: string) => boolean,
): Promise<ReadonlySet<string>> {
  const archive = extract();
  const archiveFiles = new Set<string>();
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
  await pipeline(createReadStream(archivePath), createGunzip(), archive);
  return archiveFiles;
}

function archiveRelativePath(name: string): string | undefined {
  if (
    !name ||
    name.includes("\\") ||
    name.includes("\0") ||
    path.posix.isAbsolute(name)
  ) {
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
