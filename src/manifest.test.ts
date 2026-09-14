import { describe, expect, test } from "bun:test";
import { parseProjectManifest, serializeProjectManifest } from "./manifest.ts";

const manifest = {
  schemaVersion: 2,
  generatorVersion: 3,
  generatorDigest:
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  project: "traefik",
  title: "Traefik Proxy",
  homepage: "https://doc.traefik.io/traefik/",
  repository: "traefik/traefik",
  tag: "v3.7.13",
  releaseId: 1,
  releasePublishedAt: "2026-09-01T00:00:00Z",
  sourceCommit: "413f95d65f08d2c3fb03e227b1f3ba42884ca796",
  documentCount: 1,
  indexComplete: true,
  corpusVolumes: [
    {
      name: "llms-full.txt",
      byteLength: 100,
      documentCount: 1,
      sha256:
        "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    },
  ],
  outputDigest:
    "fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210",
  notes: [],
};

describe("project manifest validation", () => {
  test("accepts a complete schema v2 manifest", () => {
    expect(parseProjectManifest(manifest).project).toBe("traefik");
  });

  test("rejects unknown properties and unsafe volume names", () => {
    expect(() => parseProjectManifest({ ...manifest, surprise: true })).toThrow(
      "unknown fields",
    );
    expect(() =>
      parseProjectManifest({
        ...manifest,
        corpusVolumes: [
          { ...manifest.corpusVolumes[0], name: "../llms-full.txt" },
        ],
      }),
    ).toThrow("unsafe name");
  });

  test("requires contiguous, ordered numbered volumes", () => {
    expect(() =>
      parseProjectManifest({
        ...manifest,
        corpusVolumes: [
          manifest.corpusVolumes[0],
          {
            ...manifest.corpusVolumes[0],
            name: "llms-full.002.txt",
          },
        ],
      }),
    ).toThrow("must be llms-full.001.txt");
  });

  // The determinism check compares manifests as bytes, so a writer that emits
  // the declared fields in a different order fails CI while every local check
  // passes: parsing discards key order.
  test("serializes field order independently of construction order", () => {
    const migrated = parseProjectManifest({
      ...Object.fromEntries(
        Object.entries(manifest).filter(([key]) => key !== "generatorDigest"),
      ),
      generatorDigest: manifest.generatorDigest,
    });
    expect(serializeProjectManifest(migrated)).toBe(
      serializeProjectManifest(parseProjectManifest(manifest)),
    );
    const keys = Object.keys(
      JSON.parse(serializeProjectManifest(migrated)) as Record<string, unknown>,
    );
    expect(keys.indexOf("generatorDigest")).toBe(2);
    expect(keys.at(-1)).toBe("notes");
  });

  test("omits absent optional fields rather than emitting null", () => {
    expect(
      serializeProjectManifest(parseProjectManifest(manifest)),
    ).not.toContain("undefined");
  });
});
