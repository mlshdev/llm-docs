import { afterAll, describe, expect, mock, test } from "bun:test";
import type {
  GithubCommit,
  GithubRelease,
  GithubSourceProject,
  LockedSource,
} from "../types.ts";

type FoundCommit = { readonly sha: string } | undefined;

let commitByMessage: FoundCommit = undefined;
let commitDetails: GithubCommit | undefined;

// files.ts and other transitive imports still need every real export; only
// the two resolution helpers are stubbed.
const realGithub = await import("../github.ts");

mock.module("../github.ts", () => ({
  ...realGithub,
  findCommitByMessage: async (): Promise<FoundCommit> => commitByMessage,
  getCommit: async (): Promise<GithubCommit> => {
    if (!commitDetails) {
      throw new Error("no commit details configured");
    }
    return commitDetails;
  },
  toLockedSource: (
    release: GithubRelease,
    sourceCommit: string,
  ): LockedSource => {
    if (!release.published_at) {
      throw new Error(`Release ${release.tag_name} has no publication time`);
    }
    return {
      tag: release.tag_name,
      releaseId: release.id,
      releasePublishedAt: release.published_at,
      sourceCommit,
    };
  },
}));

afterAll(() => {
  mock.restore();
});

const { resolveNetbirdPin } = await import("./netbird.ts");

const release: GithubRelease = {
  id: 7,
  tag_name: "v0.77.1",
  draft: false,
  prerelease: false,
  published_at: "2026-09-01T00:00:00Z",
};

const project = {
  id: "netbird",
  kind: "github",
  title: "NetBird",
  homepage: "https://netbird.io",
  repository: "netbirdio/netbird",
  docsRepository: "netbirdio/docs",
} as GithubSourceProject;

const previous: LockedSource = {
  tag: "v0.77.0",
  releaseId: 6,
  releasePublishedAt: "2026-08-01T00:00:00Z",
  sourceCommit: "a".repeat(40),
};

function resolve(
  overrides?: Partial<Parameters<typeof resolveNetbirdPin>[0]>,
): Promise<LockedSource> {
  return resolveNetbirdPin({
    project,
    release,
    sourceCommit: "b".repeat(40),
    previous,
    ...overrides,
  });
}

describe("NetBird pin resolution", () => {
  test("requires a documentation repository", async () => {
    await expect(
      resolve({
        project: {
          ...project,
          docsRepository: undefined,
        } as unknown as GithubSourceProject,
        previous: undefined,
      }),
    ).rejects.toThrow("NetBird requires docsRepository configuration");
  });

  test("retains the previous pin while the docs commit is pending", async () => {
    commitByMessage = undefined;
    expect(await resolve()).toEqual(previous);
  });

  test("fails with no previous pin and no matching docs commit", async () => {
    commitByMessage = undefined;
    await expect(resolve({ previous: undefined })).rejects.toThrow(
      "No NetBird docs commit matches release v0.77.1",
    );
  });

  test("rejects a docs commit that does not touch API resource pages", async () => {
    commitByMessage = { sha: "c".repeat(40) };
    commitDetails = {
      sha: "c".repeat(40),
      commit: { message: "Update API pages with v0.77.1" },
      files: [{ filename: "docs/other.md" }],
    };
    await expect(resolve()).rejects.toThrow(
      "does not change generated API resource pages",
    );
  });

  test("pins the docs commit when the API pages are regenerated", async () => {
    commitByMessage = { sha: "d".repeat(40) };
    commitDetails = {
      sha: "e".repeat(40),
      commit: { message: "Update API pages with v0.77.1" },
      files: [{ filename: "src/pages/ipa/resources/peers.md" }],
    };
    expect(await resolve()).toEqual({
      tag: "v0.77.1",
      releaseId: 7,
      releasePublishedAt: "2026-09-01T00:00:00Z",
      sourceCommit: "b".repeat(40),
      docsCommit: "e".repeat(40),
    });
  });
});
