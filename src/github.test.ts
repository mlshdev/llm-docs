import { describe, expect, test } from "bun:test";
import { compareVersions } from "./github.ts";

describe("release version comparison", () => {
  test("compares v, bare, and release-prefixed semantic versions", () => {
    expect(compareVersions("release-1.37.0", "release-1.36.0")).toBeGreaterThan(
      0,
    );
    expect(compareVersions("release-1.37.0", "v1.37.0")).toBe(0);
    expect(compareVersions("1.36.0", "release-1.37.0")).toBeLessThan(0);
  });
});
