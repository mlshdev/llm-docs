import { describe, expect, test } from "bun:test";
import { isSourcesLock } from "./config.ts";

const pin = {
  tag: "v1.150.0",
  releaseId: 370663729,
  releasePublishedAt: "2026-08-17T09:53:36Z",
  sourceCommit: "413f95d65f08d2c3fb03e227b1f3ba42884ca796",
};

const branchPin = {
  tag: "main",
  branch: "main",
  sourceCommit: "dbad77a00e8352f30e663bec3eeae9fb31a19b4e",
  sourceCommittedAt: "2026-08-28T14:48:42Z",
};

const lock = (projects: Record<string, unknown>) => ({
  schemaVersion: 1,
  projects,
});

describe("sources lock validation", () => {
  test("accepts a lock missing a project that update has yet to resolve", () => {
    expect(isSourcesLock(lock({ traefik: pin }))).toBe(true);
    expect(isSourcesLock(lock({}))).toBe(true);
  });

  test("accepts an optional docs commit", () => {
    expect(
      isSourcesLock(
        lock({
          netbird: {
            ...pin,
            docsCommit: "d905fda2a3f04a2066746875d09e51a3fe62dfed",
          },
        }),
      ),
    ).toBe(true);
  });

  test("accepts a branch-pinned source", () => {
    expect(isSourcesLock(lock({ docker: branchPin }))).toBe(true);
  });

  test("rejects an unknown project id", () => {
    expect(isSourcesLock(lock({ prometheus: pin }))).toBe(false);
  });

  test("rejects a malformed pin", () => {
    expect(
      isSourcesLock(lock({ traefik: { ...pin, releaseId: "370663729" } })),
    ).toBe(false);
    expect(
      isSourcesLock(lock({ traefik: { ...pin, sourceCommit: "413f95d" } })),
    ).toBe(false);
    expect(
      isSourcesLock(lock({ traefik: { ...pin, docsCommit: "nope" } })),
    ).toBe(false);
    expect(
      isSourcesLock(lock({ docker: { ...branchPin, releaseId: 1 } })),
    ).toBe(false);
  });

  test("rejects a foreign schema version", () => {
    expect(isSourcesLock({ schemaVersion: 2, projects: {} })).toBe(false);
    expect(isSourcesLock({ projects: {} })).toBe(false);
  });
});
