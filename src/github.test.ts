import { describe, expect, test } from "bun:test";
import { compareVersions, latestSemanticTag } from "./github.ts";

describe("release version comparison", () => {
  test("compares v, bare, and release-prefixed semantic versions", () => {
    expect(compareVersions("release-1.37.0", "release-1.36.0")).toBeGreaterThan(
      0,
    );
    expect(compareVersions("release-1.37.0", "v1.37.0")).toBe(0);
    expect(compareVersions("1.36.0", "release-1.37.0")).toBeLessThan(0);
  });
});

describe("semantic tag selection", () => {
  test("chooses the newest final vX.Y.Z tag", () => {
    expect(
      latestSemanticTag([
        "refs/tags/v2.6.4",
        "refs/tags/v2.7.0rc1",
        "refs/tags/v2.7.0",
        "refs/tags/legacy",
        "refs/tags/v2.7.1",
      ]),
    ).toBe("v2.7.1");
  });
});
