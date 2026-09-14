import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  canonicalUrlFor,
  collectIndexEntries,
  digestOf,
  indexUrl,
  mapWithConcurrency,
  readCacheFile,
  renderJsonUrl,
  writeCacheFile,
} from "./docc.ts";

describe("DocC URLs", () => {
  test("maps documentation paths to Apple's public endpoints", () => {
    expect(canonicalUrlFor("/documentation/swift/string")).toBe(
      "https://developer.apple.com/documentation/swift/string",
    );
    expect(renderJsonUrl("/documentation/swift/string")).toBe(
      "https://developer.apple.com/tutorials/data/documentation/swift/string.json",
    );
    expect(indexUrl("swift")).toBe(
      "https://developer.apple.com/tutorials/data/index/swift",
    );
  });
});

describe("DocC catalog traversal", () => {
  test("collects unique internal documentation pages recursively", () => {
    const entries = collectIndexEntries([
      {
        title: "Swift",
        type: "module",
        path: "/documentation/swift",
        children: [
          {
            title: "String",
            type: "struct",
            path: "/documentation/swift/string",
            deprecated: true,
          },
          {
            title: "String duplicate",
            type: "struct",
            path: "/documentation/swift/string",
          },
          {
            title: "External",
            type: "article",
            path: "/documentation/example/external",
            external: true,
          },
        ],
      },
      {
        title: "Marker",
        type: "groupMarker",
        children: [
          {
            title: "Guide",
            type: "article",
            path: "/documentation/swift/guide",
            beta: true,
          },
        ],
      },
    ]);

    expect([...entries]).toEqual([
      [
        "/documentation/swift",
        {
          path: "/documentation/swift",
          title: "Swift",
          type: "module",
          beta: false,
          deprecated: false,
        },
      ],
      [
        "/documentation/swift/string",
        {
          path: "/documentation/swift/string",
          title: "String",
          type: "struct",
          beta: false,
          deprecated: true,
        },
      ],
      [
        "/documentation/swift/guide",
        {
          path: "/documentation/swift/guide",
          title: "Guide",
          type: "article",
          beta: true,
          deprecated: false,
        },
      ],
    ]);
  });

  test("hashes a set independently of discovery order", () => {
    expect(digestOf(["b", "a"])).toBe(digestOf(["a", "b"]));
    expect(digestOf(["a", "b"])).not.toBe(digestOf(["a", "c"]));
  });

  test("preserves result order while bounding concurrency", async () => {
    let active = 0;
    let peak = 0;
    const result = await mapWithConcurrency([3, 1, 2, 0], 2, async (value) => {
      active += 1;
      peak = Math.max(peak, active);
      await Bun.sleep(value);
      active -= 1;
      return value * 2;
    });

    expect(result).toEqual([6, 2, 4, 0]);
    expect(peak).toBe(2);
  });

  test("stops scheduling new work after the first failure", async () => {
    const started: number[] = [];
    await expect(
      mapWithConcurrency([0, 1, 2, 3, 4, 5], 2, async (value) => {
        started.push(value);
        if (value === 0) {
          throw new Error("stop");
        }
        await Bun.sleep(5);
        return value;
      }),
    ).rejects.toThrow("stop");
    expect(started).toEqual([0, 1]);
  });
});

describe("DocC cache", () => {
  test("atomically replaces cache files and reads complete JSON", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "docc-cache-test-"));
    const file = path.join(directory, "cache.json");
    try {
      await Promise.all([
        writeCacheFile(file, '{"value":1}'),
        writeCacheFile(file, '{"value":2}'),
      ]);
      expect(['{"value":1}', '{"value":2}']).toContain(
        await readFile(file, "utf8"),
      );
      expect((await readCacheFile(file))?.startsWith('{"value":')).toBe(true);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  test("deletes a malformed cache entry and treats it as a miss", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "docc-cache-test-"));
    const file = path.join(directory, "cache.json");
    try {
      await writeFile(file, "{truncated", "utf8");
      expect(await readCacheFile(file)).toBeUndefined();
      expect(await Bun.file(file).exists()).toBe(false);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
