import { describe, expect, test } from "bun:test";
import {
  expandInlineDefinitions,
  renderSandboxAuthentication,
  type DockerContext,
} from "./docker.ts";

function context(latestEngineApiVersion: string): DockerContext {
  return {
    root: "/",
    files: new Set(),
    page: {
      sourcePath: "docs/example.md",
      virtualPath: "docs/example.md",
      attributes: {},
      body: "",
    },
    pages: new Map(),
    siteParams: { latest_engine_api_version: latestEngineApiVersion },
    summaries: {},
    whatsNew: {},
    glossary: {},
    samples: undefined,
  };
}

describe("Docker inline definitions", () => {
  test("interpolates the previous Engine API version", () => {
    const source =
      "API {{< apiVersionPrevious.inline >}}x{{< /apiVersionPrevious.inline >}}";
    const rendered = expandInlineDefinitions(source, context("1.48"));
    expect(rendered).toContain("1.47");
    expect(rendered).not.toContain("apiVersionPrevious");
  });

  test("unwraps the dockerfile and panel definitions", () => {
    const source =
      "{{% create_panel.inline %}}body{{% /create_panel.inline %}}";
    const rendered = expandInlineDefinitions(source, context("1.48"));
    expect(rendered).not.toContain("create_panel");
  });

  test("rejects an Engine API version with no previous minor", () => {
    expect(() => expandInlineDefinitions("x", context("2.0"))).toThrow(
      "has no previous minor",
    );
  });

  test("rejects a malformed Engine API version", () => {
    expect(() =>
      expandInlineDefinitions("x", context("not-a-version")),
    ).toThrow("Invalid Docker Engine API version");
  });
});

describe("Docker sandbox authentication", () => {
  test("documents both agent sign-in flows without secrets", () => {
    const rendered = renderSandboxAuthentication();
    expect(rendered).toContain("**Codex:**");
    expect(rendered).toContain("**Claude Code:**");
    expect(rendered).toContain("/login");
    expect(rendered.toLowerCase()).not.toContain("api_key=");
  });
});
