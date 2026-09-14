import { describe, expect, test } from "bun:test";
import { createWriteStream } from "node:fs";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { pack } from "tar-stream";
import {
  archiveRelativePath,
  commitDirectoryReplacements,
  extractArchive,
  recoverAtomicDirectory,
  replaceDirectoryAtomically,
  stageDirectoryReplacement,
  writeUtf8Atomic,
} from "./files.ts";

describe("atomic output", () => {
  test("keeps the previous directory when staging fails", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "atomic-directory-test-"));
    const destination = path.join(root, "project");
    try {
      await mkdir(destination);
      await writeFile(path.join(destination, "value"), "previous", "utf8");
      await expect(
        replaceDirectoryAtomically(destination, async (staging) => {
          await writeFile(path.join(staging, "value"), "partial", "utf8");
          throw new Error("conversion failed");
        }),
      ).rejects.toThrow("conversion failed");
      expect(await readFile(path.join(destination, "value"), "utf8")).toBe(
        "previous",
      );
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  test("recovers a previous directory left in the backup location", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "atomic-directory-test-"));
    const destination = path.join(root, "project");
    try {
      await mkdir(`${destination}.backup`);
      await writeFile(
        path.join(`${destination}.backup`, "value"),
        "previous",
        "utf8",
      );
      await recoverAtomicDirectory(destination);
      expect(await readFile(path.join(destination, "value"), "utf8")).toBe(
        "previous",
      );
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  test("rolls every staged directory back when transaction finalization fails", async () => {
    const root = await mkdtemp(
      path.join(tmpdir(), "directory-transaction-test-"),
    );
    const destinations = [path.join(root, "one"), path.join(root, "two")];
    try {
      for (const destination of destinations) {
        await mkdir(destination);
        await writeFile(path.join(destination, "value"), "previous", "utf8");
        await stageDirectoryReplacement(destination, (staging) =>
          writeFile(path.join(staging, "value"), "next", "utf8"),
        );
      }
      await expect(
        commitDirectoryReplacements(destinations, async () => {
          throw new Error("root index failed");
        }),
      ).rejects.toThrow("root index failed");
      for (const destination of destinations) {
        expect(await readFile(path.join(destination, "value"), "utf8")).toBe(
          "previous",
        );
      }
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  test("atomically writes complete newline-terminated UTF-8", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "atomic-file-test-"));
    const destination = path.join(root, "sources.lock.json");
    try {
      await writeUtf8Atomic(destination, "first");
      await writeUtf8Atomic(destination, "second\n");
      expect(await readFile(destination, "utf8")).toBe("second\n");
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});

describe("archive extraction", () => {
  test("rejects traversal, absolute, backslash, and ambiguous paths", () => {
    for (const unsafe of [
      "repo/../escape",
      "/repo/file",
      "repo\\file",
      "repo//file",
      "repo/./file",
      "repo/file\0name",
    ]) {
      expect(() => archiveRelativePath(unsafe)).toThrow();
    }
    expect(archiveRelativePath("repo/docs/page.md")).toBe("docs/page.md");
  });

  test("rejects links and removes partially extracted output", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "archive-test-"));
    const archive = path.join(directory, "source.tar.gz");
    const destination = path.join(directory, "destination");
    try {
      await mkdir(destination);
      const source = pack();
      source.entry({ name: "repo/good.txt" }, "good");
      source.entry({
        name: "repo/link",
        type: "symlink",
        linkname: "good.txt",
      });
      source.finalize();
      await pipeline(source, createGzip(), createWriteStream(archive));
      await expect(
        extractArchive(archive, destination, () => true),
      ).rejects.toThrow("contains a link");
      expect(await Bun.file(path.join(destination, "good.txt")).exists()).toBe(
        false,
      );
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  test("rejects duplicate files even when they are not selected", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "archive-test-"));
    const archive = path.join(directory, "source.tar.gz");
    const destination = path.join(directory, "destination");
    try {
      await mkdir(destination);
      const source = pack();
      source.entry({ name: "repo/repeated.txt" }, "first");
      source.entry({ name: "repo/repeated.txt" }, "second");
      source.finalize();
      await pipeline(source, createGzip(), createWriteStream(archive));
      await expect(
        extractArchive(archive, destination, () => false),
      ).rejects.toThrow("repeats file");
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
