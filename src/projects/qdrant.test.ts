import { afterEach, describe, expect, test } from "bun:test";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { listFiles } from "../files.ts";
import type { BranchLockedSource, GithubSourceProject } from "../types.ts";
import { buildQdrantFromDirectory } from "./qdrant.ts";

const temporaryDirectories: string[] = [];
const sourceCommit = "0123456789abcdef0123456789abcdef01234567";
const project = {
  id: "qdrant",
  kind: "github",
  title: "Qdrant",
  repository: "qdrant/landing_page",
  branch: "master",
  homepage: "https://qdrant.tech/documentation/",
} as const satisfies GithubSourceProject;
const lock = {
  tag: "master",
  branch: "master",
  sourceCommit,
  sourceCommittedAt: "2026-09-17T00:00:00Z",
  observedCommit: sourceCommit,
} as const satisfies BranchLockedSource;

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("Qdrant adapter", () => {
  test("expands pinned Hugo content and excludes unpublished pages", async () => {
    const root = await fixtureRoot();
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/_index.md",
      `---
title: Qdrant Documentation
weight: 1
---
# Qdrant Documentation
`,
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/headless/snippets/_index.md",
      `---
snippetsOrder:
  - http
  - python
---
`,
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/headless/snippets/example/http.md",
      "```http\nGET /collections\n```\n",
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/headless/snippets/example/generated/python.md",
      "```python\nclient.get_collections()\n```\n",
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/headless/content/shared.md",
      "Included guidance.\n",
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/guide.md",
      `---
title: Test Guide
short_description: A deterministic adapter fixture.
weight: 2
---
# Test Guide

{{< code-snippet path="/documentation/headless/snippets/example/" >}}

{{% include "content/documentation/headless/content/shared.md" %}}

{{< figure src="/documentation/diagram.png" caption="Pinned diagram" >}}

{{< island path="content/documentation/headless/island" title="Static fallback" >}}
![Fallback](/documentation/diagram.png)
{{< /island >}}

{{< accordion >}}
- title: First answer
  content: Accordion body.
{{< /accordion >}}

<aside role="status">Important note.</aside>
`,
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/draft.md",
      `---
title: Draft
draft: true
---
Unpublished.
`,
    );
    await writeFixture(
      root,
      "qdrant-landing/content/documentation/delimiter.md",
      `---
title: Delimiter
type: delimiter
build:
  render: never
---
`,
    );
    await writeFixture(
      root,
      "qdrant-landing/static/documentation/diagram.png",
      "fixture",
    );

    const files = new Set(await listFiles(root));
    const build = await buildQdrantFromDirectory(project, lock, root, files);
    expect(build.quarantined).toEqual([]);
    expect(build.documents).toHaveLength(2);
    const guide = build.documents.find((document) =>
      document.sourcePath.endsWith("/guide.md"),
    );
    expect(guide).toBeDefined();
    expect(guide?.description).toBe("A deterministic adapter fixture.");
    expect(guide?.body).toContain("**Http**\n\n```http");
    expect(guide?.body).toContain("**Python**\n\n```python");
    expect(guide?.body.indexOf("**Http**")).toBeLessThan(
      guide?.body.indexOf("**Python**") ?? -1,
    );
    expect(guide?.body).toContain("Included guidance.");
    expect(guide?.body).toContain("### First answer\n\nAccordion body.");
    expect(guide?.body).toContain("> **Note**");
    expect(guide?.body).toContain("*Static fallback*");
    expect(guide?.body).toContain(
      `https://raw.githubusercontent.com/qdrant/landing_page/${sourceCommit}/qdrant-landing/static/documentation/diagram.png`,
    );
    expect(guide?.body).not.toContain("{{<");
    expect(guide?.body).not.toContain("{{%");
    expect(build.documents.some((document) => document.title === "Draft")).toBe(
      false,
    );
  });
});

async function fixtureRoot(): Promise<string> {
  const directory = await mkdtemp(path.join(tmpdir(), "qdrant-adapter-"));
  temporaryDirectories.push(directory);
  return directory;
}

async function writeFixture(
  root: string,
  relativePath: string,
  contents: string,
): Promise<void> {
  const destination = path.join(root, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, contents, "utf8");
}
