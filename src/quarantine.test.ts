import { describe, expect, test } from "bun:test";
import {
  assertQuarantineBudget,
  describeError,
  DocumentCollector,
  ProjectBuildError,
} from "./quarantine.ts";
import type { Document, LockedSource, ProjectBuild } from "./types.ts";

const lock: LockedSource = {
  tag: "main",
  branch: "main",
  sourceCommit: "dbad77a00e8352f30e663bec3eeae9fb31a19b4e",
  sourceCommittedAt: "2026-08-28T14:48:42Z",
};

function page(name: string, body = "# Title\n\nBody."): Document {
  return {
    sourcePath: `docs/${name}.md`,
    outputPath: `pages/${name}.md`,
    title: "Title",
    body,
    canonicalUrl: `https://example.invalid/${name}`,
  };
}

function build(
  documents: readonly Document[],
  quarantined: ProjectBuild["quarantined"],
): ProjectBuild {
  return {
    project: {
      id: "n8n",
      title: "n8n",
      repository: "n8n-io/n8n-docs",
      homepage: "https://docs.n8n.io/",
    },
    lock,
    documents,
    quarantined,
    notes: [],
    licenseText: "",
  };
}

describe("DocumentCollector", () => {
  test("keeps converted pages and quarantines the ones that throw", async () => {
    const collector = new DocumentCollector("n8n");
    await collector.collect("docs/a.md", () => page("a"));
    await collector.collect("docs/b.md", () => {
      throw new Error("Unsupported n8n GitBook block in docs/b.md: {% x %}");
    });
    await collector.collect("docs/c.md", () => page("c"));

    expect(collector.documents.map((document) => document.outputPath)).toEqual([
      "pages/a.md",
      "pages/c.md",
    ]);
    expect(collector.quarantined).toEqual([
      {
        sourcePath: "docs/b.md",
        reason: "Unsupported n8n GitBook block in docs/b.md: {% x %}",
      },
    ]);
  });

  test("quarantines a page that still carries unresolved upstream syntax", async () => {
    const collector = new DocumentCollector("n8n");
    await collector.collect("docs/a.md", () =>
      page("a", "# Title\n\n{% @github-files/github-code-block %}\n"),
    );

    expect(collector.documents).toHaveLength(0);
    expect(collector.quarantined[0]?.reason).toBe(
      'Unresolved n8n source syntax "{% @github-files"',
    );
  });

  test("keeps unresolved-looking syntax that is inside a fenced example", async () => {
    const collector = new DocumentCollector("n8n");
    await collector.collect("docs/a.md", () =>
      page("a", "# Title\n\n```\n{% raw %}\n```\n"),
    );

    expect(collector.quarantined).toHaveLength(0);
    expect(collector.documents).toHaveLength(1);
  });

  test("quarantines a second page claiming an output path", async () => {
    const collector = new DocumentCollector("n8n");
    await collector.collect("docs/a.md", () => page("a"));
    await collector.collect("docs/duplicate.md", () => ({
      ...page("a"),
      sourcePath: "docs/duplicate.md",
    }));

    expect(collector.documents).toHaveLength(1);
    expect(collector.quarantined[0]?.reason).toBe(
      "Duplicate generated path pages/a.md",
    );
  });

  test("reports quarantined pages in source order", async () => {
    const collector = new DocumentCollector("n8n");
    for (const name of ["c", "a", "b"]) {
      await collector.collect(`docs/${name}.md`, () => {
        throw new Error("boom");
      });
    }

    expect(collector.quarantined.map((entry) => entry.sourcePath)).toEqual([
      "docs/a.md",
      "docs/b.md",
      "docs/c.md",
    ]);
  });

  test("strips the per-run extraction directory from reasons", async () => {
    const collector = new DocumentCollector("n8n");
    await collector.collect("docs/a.md", () => {
      throw new Error(
        "Unexpected symbolic link: /var/folders/t/llm-docs-a1b2c3/source/docs/a.md",
      );
    });

    expect(collector.quarantined[0]?.reason).toBe(
      "Unexpected symbolic link: docs/a.md",
    );
  });
});

describe("assertQuarantineBudget", () => {
  test("accepts isolated upstream drift", () => {
    const documents = Array.from({ length: 100 }, (_, index) =>
      page(`page-${index}`),
    );
    expect(() =>
      assertQuarantineBudget(
        build(documents, [{ sourcePath: "docs/x.md", reason: "boom" }]),
      ),
    ).not.toThrow();
  });

  test("rejects systemic drift so the caller keeps the previous snapshot", () => {
    const documents = Array.from({ length: 10 }, (_, index) =>
      page(`page-${index}`),
    );
    const quarantined = Array.from({ length: 10 }, (_, index) => ({
      sourcePath: `docs/broken-${index}.md`,
      reason: "Unhandled MDX component <Callout>",
    }));
    expect(() => assertQuarantineBudget(build(documents, quarantined))).toThrow(
      ProjectBuildError,
    );
  });

  test("rejects an empty corpus", () => {
    expect(() => assertQuarantineBudget(build([], []))).toThrow(
      "n8n produced no documents at main",
    );
  });
});

describe("describeError", () => {
  test("joins the cause chain", () => {
    const error = new Error("Unable to convert Bun MDX page docs/a.mdx", {
      cause: new Error("Unhandled MDX component <Foo>"),
    });
    expect(describeError(error)).toBe(
      "Unable to convert Bun MDX page docs/a.mdx: Unhandled MDX component <Foo>",
    );
  });

  test("survives a self-referencing cause", () => {
    const error: Error & { cause?: unknown } = new Error("loop");
    error.cause = error;
    expect(describeError(error)).toBe("loop");
  });
});
