import { describe, expect, test } from "bun:test";
import {
  canonicalUrlFor,
  collectIndexEntries,
  digestOf,
  indexUrl,
  mapWithConcurrency,
  renderJsonUrl,
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
});
