import { describe, expect, test } from "bun:test";
import {
  pipelineIsHealthy,
  renderIssueBody,
  renderSummary,
  reportFingerprint,
  type PipelineReport,
} from "./report.ts";

function report(overrides: Partial<PipelineReport> = {}): PipelineReport {
  const unresolvedSources = overrides.unresolvedSources ?? [];
  const retainedProjects = overrides.retainedProjects ?? [];
  const quarantine = overrides.quarantine ?? [];
  return {
    schemaVersion: 2,
    generatedAt: "2026-09-05T12:00:00.000Z",
    healthy: pipelineIsHealthy(unresolvedSources, retainedProjects, quarantine),
    unresolvedSources,
    retainedProjects,
    quarantine,
    sourceResolution: [],
    ...overrides,
  };
}

const quarantine = [
  {
    project: "trigger-dev" as const,
    tag: "v4.5.16",
    documents: [{ sourcePath: "limits.mdx", reason: "Unhandled <SoftLimit>" }],
  },
];

describe("renderSummary", () => {
  test("reports a clean run", () => {
    expect(renderSummary(report())).toEqual([
      "## Documentation pipeline",
      "",
      "Every project converted cleanly.",
    ]);
  });

  test("discloses quarantined pages from an unhealthy publication", () => {
    const lines = renderSummary(report({ quarantine })).join("\n");
    expect(lines).toContain("Quarantined pages");
    expect(lines).toContain("limits.mdx");
    expect(lines).not.toContain("Every project converted cleanly.");
  });

  test("escapes a reason that would break the retained-project table", () => {
    const lines = renderSummary(
      report({
        healthy: false,
        retainedProjects: [
          {
            project: "n8n",
            attemptedTag: "main",
            retainedTag: "main",
            reason: "a | b",
          },
        ],
      }),
    ).join("\n");
    expect(lines).toContain("a \\| b");
  });
});

describe("pipelineIsHealthy", () => {
  test("rejects a quarantine-only report", () => {
    expect(pipelineIsHealthy([], [], quarantine)).toBe(false);
  });

  test("accepts a report only when every problem set is empty", () => {
    expect(pipelineIsHealthy([], [], [])).toBe(true);
  });
});

describe("reportFingerprint", () => {
  test("ignores the generation time so an unchanged problem set is stable", () => {
    expect(
      reportFingerprint(
        report({ quarantine, generatedAt: "2026-01-01T00:00:00.000Z" }),
      ),
    ).toBe(reportFingerprint(report({ quarantine })));
  });

  test("changes when a new page is quarantined", () => {
    const extra = [
      {
        ...quarantine[0]!,
        documents: [
          ...quarantine[0]!.documents,
          { sourcePath: "context.mdx", reason: "Unhandled <RequestExample>" },
        ],
      },
    ];
    expect(reportFingerprint(report({ quarantine: extra }))).not.toBe(
      reportFingerprint(report({ quarantine })),
    );
  });
});

describe("renderIssueBody", () => {
  test("carries the fingerprint the workflow matches on", () => {
    const body = renderIssueBody(report({ quarantine }));
    expect(body).toContain(
      `<!-- pipeline-fingerprint: ${reportFingerprint(report({ quarantine }))} -->`,
    );
    expect(body).toContain("limits.mdx");
  });

  test("makes upstream-controlled issue text inert and bounded", () => {
    const body = renderIssueBody(
      report({
        healthy: false,
        unresolvedSources: [
          {
            project: "docker",
            reason: "bad\n</details> @maintainer | `oops`",
          },
        ],
      }),
    );
    expect(body).toContain("bad &lt;/details&gt; @\u200bmaintainer | `oops`");
    expect(body).not.toContain("\n</details>");
    expect(
      body.match(/^<!-- pipeline-fingerprint: ([0-9a-f]{16}) -->$/m)?.[1],
    ).toHaveLength(16);
  });
});
