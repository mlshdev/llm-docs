import { describe, expect, test } from "bun:test";
import {
  compareVersions,
  isRetryableResponse,
  latestSemanticTag,
  retryDelayFor,
} from "./github.ts";

describe("release version comparison", () => {
  test("compares v, bare, and release-prefixed semantic versions", () => {
    expect(compareVersions("release-1.37.0", "release-1.36.0")).toBeGreaterThan(
      0,
    );
    expect(compareVersions("release-1.37.0", "v1.37.0")).toBe(0);
    expect(compareVersions("1.36.0", "release-1.37.0")).toBeLessThan(0);
    expect(compareVersions("bun-v1.4.2", "bun-v1.4.1")).toBeGreaterThan(0);
  });

  test("fails safely when a release tag is not semantic", () => {
    expect(() => compareVersions("stable", "v1.2.3")).toThrow(
      "Cannot compare non-semantic release tags",
    );
  });
});

describe("GitHub rate limits", () => {
  test("retries a secondary 403 even when primary quota remains", () => {
    const response = new Response(null, {
      status: 403,
      headers: {
        "retry-after": "7",
        "x-ratelimit-remaining": "100",
      },
    });
    expect(isRetryableResponse(response)).toBe(true);
    expect(retryDelayFor(response)).toBe(7_000);
  });

  test("parses an HTTP-date Retry-After value", () => {
    const now = Date.parse("2026-09-14T10:00:00Z");
    const response = new Response(null, {
      status: 429,
      headers: { "retry-after": "Mon, 14 Sep 2026 10:00:12 GMT" },
    });
    expect(retryDelayFor(response, now)).toBe(12_000);
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
