import { describe, expect, test } from "bun:test";
import { renderSandboxAuthentication } from "./docker.ts";
import { normalizeTriggerComponents } from "./trigger-dev.ts";
import { normalizeVastMdx } from "./vastai.ts";

describe("adapter-specific static components", () => {
  test("retains every Docker sandbox authentication mechanism", () => {
    const rendered = renderSandboxAuthentication();
    expect(rendered).toContain("Subscription sign-in");
    expect(rendered).toContain("sbx secret set openai");
    expect(rendered).toContain("sbx secret set anthropic");
    expect(rendered).toContain("sbx secret set openrouter");
    expect(rendered).toContain("sbx secret set google");
  });

  test("expands Trigger.dev global snippets and removes its visual marker", () => {
    const sources = new Map([
      ["snippets/web-scraping-warning.mdx", "<Warning>Use a proxy.</Warning>"],
      ["snippets/useful-next-steps.mdx", "## Useful next steps"],
    ]);
    const normalized = normalizeTriggerComponents(
      "<ScrapingWarning />\n<UsefulNextSteps />\n<SoftLimit />",
      "example.mdx",
      sources,
    );
    expect(normalized).toContain("<Warning>Use a proxy.</Warning>");
    expect(normalized).toContain("## Useful next steps");
    expect(normalized).not.toContain("SoftLimit");
  });

  test("quotes Vast.ai brace-enclosed prose choices for MDX", () => {
    expect(
      normalizeVastMdx(
        '<ParamField path="type">Choice: {i|instance, v|volume}</ParamField>',
      ),
    ).toContain("Choice: `{i|instance, v|volume}`");
  });
});
