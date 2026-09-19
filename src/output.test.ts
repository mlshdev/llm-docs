import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { loadConfig } from "./config.ts";
import { parseProjectManifest } from "./manifest.ts";
import {
  computeDocumentationDigest,
  computeOutputDigest,
  generatedPaths,
  stageProject,
  validateDocumentLinks,
  validateOutputPath,
} from "./output.ts";
import type { ProjectBuild } from "./types.ts";

describe("generatedPaths", () => {
  test("lists the aggregates before the project directories", () => {
    const paths = generatedPaths([{ id: "traefik" }, { id: "docker" }]);
    expect(paths).toEqual([
      "sources.lock.json",
      "llms.txt",
      "llms-full.txt",
      "traefik",
      "docker",
    ]);
  });

  // The publishing workflow replaces exactly these paths. A project missing
  // from the list is published in the root indexes while its directory is
  // managed by nobody, which is how a merged project once lost its pin.
  test("covers every configured project", async () => {
    const config = await loadConfig();
    const paths = new Set(generatedPaths(config.projects));
    for (const project of config.projects) {
      expect(paths).toContain(project.id);
    }
    expect(paths.size).toBe(config.projects.length + 3);
  });
});

describe("output path validation", () => {
  test("accepts a portable page path", () => {
    expect(() =>
      validateOutputPath("traefik", "pages/reference/http.md"),
    ).not.toThrow();
  });

  test("rejects traversal and Windows-specific unsafe names", () => {
    for (const outputPath of [
      "pages/../secret.md",
      "pages\\secret.md",
      "C:/pages/secret.md",
      "pages/CON.md",
      "pages/trailing./page.md",
      "pages/double//page.md",
      "pages/nul\0page.md",
    ]) {
      expect(() => validateOutputPath("traefik", outputPath)).toThrow(
        "Unsafe generated path",
      );
    }
  });
});

describe("document link validation", () => {
  const document = {
    sourcePath: "docs/guide.md",
    outputPath: "pages/guide.md",
    title: "Guide",
    body: "[Reference](reference.md)",
    canonicalUrl: "https://example.com/guide",
  };

  test("allows absolute URLs, fragments, and existing local pages", () => {
    expect(() =>
      validateDocumentLinks(
        "traefik",
        {
          ...document,
          body: "[Web](https://example.com) [Section](#section) [Reference](reference.md)",
        },
        new Set(["pages/guide.md", "pages/reference.md"]),
      ),
    ).not.toThrow();
  });

  test("rejects root-relative, missing, and raw-HTML asset links", () => {
    for (const body of [
      "[Root](/install/)",
      "[Missing](missing.md)",
      '<figure><img src=".gitbook/assets/missing.png"></figure>',
      '<div class="not-prose">\n[Nested root](/nested)\n</div>',
    ]) {
      expect(() =>
        validateDocumentLinks(
          "traefik",
          { ...document, body },
          new Set(["pages/guide.md", "pages/reference.md"]),
        ),
      ).toThrow();
    }
  });

  test("rejects schemes that generated readers cannot follow", () => {
    expect(() =>
      validateDocumentLinks(
        "apple-macos",
        { ...document, body: "[Feedback](applefeedback://new)" },
        new Set(["pages/guide.md"]),
      ),
    ).toThrow("unsupported link scheme");
  });
});

describe("staged project integrity", () => {
  test("streams a corpus and binds every output byte to the manifest", async () => {
    const destination = await mkdtemp(path.join(tmpdir(), "output-test-"));
    const build: ProjectBuild = {
      project: {
        id: "traefik",
        kind: "github",
        title: "Traefik Proxy",
        homepage: "https://doc.traefik.io/traefik/",
        repository: "traefik/traefik",
      },
      lock: {
        tag: "v3.7.13",
        releaseId: 1,
        releasePublishedAt: "2026-09-01T00:00:00Z",
        sourceCommit: "413f95d65f08d2c3fb03e227b1f3ba42884ca796",
      },
      documents: [
        {
          sourcePath: "docs/guide.md",
          outputPath: "pages/guide.md",
          title: "Guide",
          body: "# Guide\n\nA useful introduction.",
          canonicalUrl: "https://doc.traefik.io/traefik/guide/",
          section: "Guide",
        },
      ],
      quarantined: [],
      notes: [],
      licenseText: "MIT",
    };
    try {
      await stageProject(build, destination);
      const manifest = parseProjectManifest(
        JSON.parse(
          await readFile(path.join(destination, "manifest.json"), "utf8"),
        ),
      );
      expect(manifest.corpusVolumes[0]?.documentCount).toBe(1);
      const page = await readFile(
        path.join(destination, "pages/guide.md"),
        "utf8",
      );
      expect(page).toContain(
        "Pinned source for Traefik Proxy v3.7.13: [docs/guide.md](https://github.com/traefik/traefik/blob/413f95d65f08d2c3fb03e227b1f3ba42884ca796/docs/guide.md)",
      );
      expect(page).toContain(
        "Canonical documentation: https://doc.traefik.io/traefik/guide/",
      );
      expect(
        await readFile(path.join(destination, "llms.txt"), "utf8"),
      ).toContain("A useful introduction. (31 bytes)");
      expect(manifest.outputDigest).toBe(
        await computeOutputDigest(
          destination,
          manifest.corpusVolumes.map((volume) => volume.name),
        ),
      );

      await writeFile(path.join(destination, "pages/guide.md"), "tampered\n");
      expect(
        await computeOutputDigest(
          destination,
          manifest.corpusVolumes.map((volume) => volume.name),
        ),
      ).not.toBe(manifest.outputDigest);
    } finally {
      await rm(destination, { recursive: true, force: true });
    }
  });
});

describe("branch documentation digest", () => {
  test("ignores the immutable commit token but changes with documentation", () => {
    const build = (commit: string, body = "# Guide\n\nStable prose.") =>
      ({
        project: {
          id: "docker",
          kind: "github",
          title: "Docker",
          homepage: "https://docs.docker.com/",
          repository: "docker/docs",
          branch: "main",
        },
        lock: {
          tag: "main",
          branch: "main",
          sourceCommit: commit,
          sourceCommittedAt: "2026-09-01T00:00:00Z",
        },
        documents: [
          {
            sourcePath: "content/guide.md",
            outputPath: "pages/guide.md",
            title: "Guide",
            body: `${body}\n\nhttps://raw.githubusercontent.com/docker/docs/${commit}/image.png`,
            canonicalUrl: `https://github.com/docker/docs/blob/${commit}/content/guide.md`,
          },
        ],
        quarantined: [],
        notes: [],
        licenseText: "Apache-2.0",
      }) satisfies ProjectBuild;
    const first = build("1111111111111111111111111111111111111111");
    const second = build("2222222222222222222222222222222222222222");
    expect(computeDocumentationDigest(first)).toBe(
      computeDocumentationDigest(second),
    );
    expect(computeDocumentationDigest(first)).not.toBe(
      computeDocumentationDigest(
        build(
          "2222222222222222222222222222222222222222",
          "# Guide\n\nChanged prose.",
        ),
      ),
    );
  });
});
