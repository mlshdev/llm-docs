import { afterEach, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { listFiles } from "../files.ts";
import type { GithubSourceProject, ReleaseLockedSource } from "../types.ts";
import { buildUnslothFromDirectory, resolveUnslothLink } from "./unsloth.ts";

const temporaryDirectories: string[] = [];
const sourceCommit = "0123456789abcdef0123456789abcdef01234567";
const project = {
  id: "unsloth",
  kind: "github",
  title: "Unsloth",
  repository: "unslothai/unsloth",
  homepage: "https://unsloth.ai/docs",
} as const satisfies GithubSourceProject;
const lock = {
  tag: "v0.1.902-beta",
  releaseId: 1,
  releasePublishedAt: "2026-10-01T14:06:23Z",
  sourceCommit,
} as const satisfies ReleaseLockedSource;

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("Unsloth adapter", () => {
  test("publishes repository guides with immutable links and both licenses", async () => {
    const root = await fixture({
      "README.md": `<h1 align="center"><picture><img src="logo.png"></picture></h1>

Install Unsloth.

[Studio](studio/MCP.md#setup)
[Registry](https://github.com/unslothai/unsloth/blob/main/unsloth/registry/REGISTRY.md)
[Sources](https://github.com/unslothai/unsloth/tree/main/studio)
![Screenshot](images/studio%20screen.png)
<a href="docker/DOCKERHUB.md">Docker guide</a>
[GitBook](https://unsloth.ai/docs/get-started/install)

\`\`\`bash
curl https://raw.githubusercontent.com/unslothai/unsloth/main/install.sh | sh
\`\`\`
`,
      "studio/MCP.md": "# MCP\n\n## Setup\n\nMCP setup guidance.\n",
      "docker/DOCKERHUB.md": "# Docker guide\n\nDocker guidance.\n",
      "unsloth/registry/REGISTRY.md": "# Registry\n\nRegistry guidance.\n",
      "scripts/probe/README.md": "# Development probe\n",
      "tests/studio/fixtures/inline-images.md": "Fixture, not documentation.\n",
      "studio/backend/vendor/README.md": "Vendor documentation.\n",
      "studio/backend/assets/docs_ui/README.md": "Vendored Swagger UI.\n",
      "studio/backend/core/inference/bundled_skills/tool/SKILL.md":
        "Bundled agent instructions.\n",
      "images/studio screen.png": "image",
      "install.sh": "upstream script",
    });
    const files = new Set(await listFiles(root));
    const build = await buildUnslothFromDirectory(project, lock, root, files);
    expect(build.quarantined).toEqual([]);
    expect(build.documents).toHaveLength(5);
    const guide = build.documents.find(
      (document) => document.title === "Unsloth",
    );
    expect(guide?.outputPath).toBe("pages/index.md");
    expect(guide?.body).toContain(
      `https://github.com/unslothai/unsloth/blob/${sourceCommit}/studio/MCP.md#setup`,
    );
    expect(guide?.body).toContain(
      `https://github.com/unslothai/unsloth/blob/${sourceCommit}/unsloth/registry/REGISTRY.md`,
    );
    expect(guide?.body).toContain(
      `https://github.com/unslothai/unsloth/blob/${sourceCommit}/studio`,
    );
    expect(guide?.body).toContain(
      `https://raw.githubusercontent.com/unslothai/unsloth/${sourceCommit}/images/studio%20screen.png`,
    );
    expect(guide?.body).toContain(
      `href="https://github.com/unslothai/unsloth/blob/${sourceCommit}/docker/DOCKERHUB.md"`,
    );
    expect(guide?.body).toContain(
      "https://unsloth.ai/docs/get-started/install",
    );
    expect(guide?.body).toContain(
      "curl https://raw.githubusercontent.com/unslothai/unsloth/main/install.sh | sh",
    );
    expect(build.licenseText).toContain("Apache license fixture");
    expect(build.licenseText).toContain("AGPL license fixture");
    expect(await buildUnslothFromDirectory(project, lock, root, files)).toEqual(
      build,
    );
  });

  test("quarantines missing references and unresolved GitBook syntax", async () => {
    const root = await fixture({
      "studio/missing.md": "# Broken\n\n[Guide](absent.md)\n",
      "studio/unsupported.md": "# Unsupported\n\n{% include 'fragment.md' %}\n",
    });
    const build = await buildUnslothFromDirectory(
      project,
      lock,
      root,
      new Set(await listFiles(root)),
    );
    expect(build.documents).toHaveLength(1);
    expect(build.quarantined.map((document) => document.sourcePath)).toEqual([
      "studio/missing.md",
      "studio/unsupported.md",
    ]);
    expect(build.quarantined[0]?.reason).toContain("Missing Unsloth link");
    expect(build.quarantined[1]?.reason).toContain(
      "Unresolved unsloth source syntax",
    );
  });

  test("rejects unsafe and malformed repository paths", () => {
    for (const target of ["../../outside.md", "%00.md", "bad%encoding.md"]) {
      expect(() =>
        resolveUnslothLink(
          target,
          "link",
          "studio/MCP.md",
          new Set(["README.md"]),
          project.repository,
          sourceCommit,
        ),
      ).toThrow();
    }
  });
});

async function fixture(
  sources: Readonly<Record<string, string>>,
): Promise<string> {
  const root = await mkdtemp(path.join(tmpdir(), "unsloth-adapter-"));
  temporaryDirectories.push(root);
  for (const [sourcePath, content] of Object.entries({
    "README.md": "# Unsloth\n\nRepository guide.\n",
    LICENSE: "Apache license fixture\n",
    COPYING: "AGPL license fixture\n",
    ...sources,
  })) {
    const destination = path.join(root, sourcePath);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, content, "utf8");
  }
  return root;
}
