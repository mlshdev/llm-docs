import { describe, expect, test } from "bun:test";
import {
  generatedOperationRoute,
  mintlifyGeneratedGroups,
  mintlifyOpenApiSpecs,
  mintlifyRoute,
  mintlifySections,
  mintlifySlug,
  openApiOperations,
  parseMintlifyOpenApiOperation,
  parseOpenApiSpec,
  renderOpenApiOperationBody,
  resolveMintlifyImport,
  resolveMintlifyLink,
} from "./mintlify.ts";

describe("mintlifyRoute", () => {
  test("serves a page at its path without the extension", () => {
    expect(mintlifyRoute("guides/frameworks/bun.mdx")).toBe(
      "guides/frameworks/bun",
    );
    expect(mintlifyRoute("introduction.md")).toBe("introduction");
  });

  test("keeps an index segment, which the site does not collapse", () => {
    expect(mintlifyRoute("guides/index.mdx")).toBe("guides/index");
  });
});

describe("resolveMintlifyImport", () => {
  const sources = new Map([
    ["snippets/prerequisites.mdx", "# Prerequisites"],
    ["guides/shared.mdx", "# Shared"],
  ]);

  test("resolves a root-relative snippet", () => {
    expect(
      resolveMintlifyImport(
        "/snippets/prerequisites.mdx",
        "guides/bun.mdx",
        sources,
      ),
    ).toEqual({
      kind: "mdx",
      sourcePath: "snippets/prerequisites.mdx",
      source: "# Prerequisites",
    });
  });

  test("resolves a sibling relative to the importing page", () => {
    expect(
      resolveMintlifyImport("./shared.mdx", "guides/bun.mdx", sources)
        ?.sourcePath,
    ).toBe("guides/shared.mdx");
  });

  test("leaves a non-Markdown import for the caller to handle", () => {
    expect(
      resolveMintlifyImport("/snippets/labels.jsx", "guides/bun.mdx", sources),
    ).toBeUndefined();
  });

  test("reports a Markdown import that is absent", () => {
    expect(
      resolveMintlifyImport("/snippets/missing.mdx", "guides/bun.mdx", sources),
    ).toBeUndefined();
  });
});

describe("mintlifySections", () => {
  const navigation = {
    dropdowns: [
      {
        dropdown: "Documentation",
        groups: [
          { group: "Getting started", pages: ["introduction", "quick-start"] },
          {
            group: "Fundamentals",
            pages: [
              "triggering",
              { group: "Tasks", pages: ["tasks/overview"] },
            ],
          },
        ],
      },
      { dropdown: "API reference", pages: ["management/overview"] },
    ],
  };

  test("names a page after the outermost group that encloses it", () => {
    const sections = mintlifySections(navigation);
    expect(sections.get("introduction")).toBe("Getting started");
    expect(sections.get("triggering")).toBe("Fundamentals");
    expect(sections.get("tasks/overview")).toBe("Fundamentals");
  });

  test("falls back to the container for a page outside every group", () => {
    expect(mintlifySections(navigation).get("management/overview")).toBe(
      "API reference",
    );
  });

  test("keeps navigation order, which is the order the site lists pages", () => {
    expect([...mintlifySections(navigation).keys()]).toEqual([
      "introduction",
      "quick-start",
      "triggering",
      "tasks/overview",
      "management/overview",
    ]);
  });

  test("reads tab and anchor labels as well", () => {
    const sections = mintlifySections({
      tabs: [{ tab: "Guides", anchors: [{ anchor: "Deploy", pages: ["ci"] }] }],
    });
    expect(sections.get("ci")).toBe("Deploy");
  });

  test("ignores navigation that is not a page tree", () => {
    expect(mintlifySections(undefined).size).toBe(0);
    expect(mintlifySections("introduction").size).toBe(0);
  });
});

describe("mintlifyOpenApiSpecs", () => {
  test("registers each declared specification under its base name", () => {
    const specs = mintlifyOpenApiSpecs({
      api: { openapi: ["openapi.yml", "v3-openapi.yaml"] },
    });
    expect([...specs]).toEqual([
      ["openapi", "openapi.yml"],
      ["v3-openapi", "v3-openapi.yaml"],
    ]);
  });

  test("accepts a single specification and an object entry", () => {
    expect([
      ...mintlifyOpenApiSpecs({ api: { openapi: "openapi.json" } }),
    ]).toEqual([["openapi", "openapi.json"]]);
    expect([
      ...mintlifyOpenApiSpecs({
        api: { openapi: [{ source: "api/spec.yaml" }] },
      }),
    ]).toEqual([["spec", "api/spec.yaml"]]);
  });

  test("is empty when the site declares no API", () => {
    expect(mintlifyOpenApiSpecs({}).size).toBe(0);
  });
});

describe("parseMintlifyOpenApiOperation", () => {
  test("reads a directive that names its specification", () => {
    expect(
      parseMintlifyOpenApiOperation(
        "v3-openapi POST /api/v1/tasks/{id}/trigger",
      ),
    ).toEqual({
      spec: "v3-openapi",
      method: "post",
      route: "/api/v1/tasks/{id}/trigger",
    });
  });

  test("reads a directive that omits the specification", () => {
    expect(parseMintlifyOpenApiOperation("GET /api/v1/runs")).toEqual({
      method: "get",
      route: "/api/v1/runs",
    });
  });

  test("rejects a directive that names no HTTP method or route", () => {
    expect(parseMintlifyOpenApiOperation("/api/v1/runs")).toBeUndefined();
    expect(
      parseMintlifyOpenApiOperation("spec TRACE /api/v1/runs"),
    ).toBeUndefined();
    expect(
      parseMintlifyOpenApiOperation("a b GET /api/v1/runs"),
    ).toBeUndefined();
  });
});

describe("resolveMintlifyLink", () => {
  const context = {
    sourcePath: "guides/bun.mdx",
    docsFiles: new Set(["images/logo.png", "guides/bun.mdx"]),
    repository: "triggerdotdev/trigger.dev",
    ref: "ee34a4b13710742ae26d94831547fa2b6cddc9bd",
    siteBase: "https://trigger.dev/docs",
    docsRoot: "docs/",
  };

  test("points an image at the file under its repository path", () => {
    expect(resolveMintlifyLink("/images/logo.png", "image", context)).toBe(
      "https://raw.githubusercontent.com/triggerdotdev/trigger.dev/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/images/logo.png",
    );
  });

  test("points a link to a real file at the blob it lives in", () => {
    expect(resolveMintlifyLink("./bun.mdx", "link", context)).toBe(
      "https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/guides/bun.mdx",
    );
  });

  test("treats everything else as a page the site serves", () => {
    expect(resolveMintlifyLink("/tasks/overview", "link", context)).toBe(
      "https://trigger.dev/docs/tasks/overview",
    );
  });

  test("keeps a fragment, an absolute URL, and a query", () => {
    expect(resolveMintlifyLink("#usage", "link", context)).toBe("#usage");
    expect(
      resolveMintlifyLink("https://example.invalid", "link", context),
    ).toBe("https://example.invalid");
    expect(resolveMintlifyLink("/runs?filter=all", "link", context)).toBe(
      "https://trigger.dev/docs/runs?filter=all",
    );
  });

  test("drops an image the archive does not carry", () => {
    expect(
      resolveMintlifyLink("/images/missing.png", "image", context),
    ).toBeUndefined();
  });
});

describe("renderOpenApiOperationBody", () => {
  const spec = parseOpenApiSpec(
    `
paths:
  /api/v1/runs/{runId}:
    parameters:
      - name: runId
        in: path
        required: true
        description: The run to read
    get:
      summary: Retrieve a run
      description: Returns one run.
      parameters:
        - $ref: "#/components/parameters/Version"
      responses:
        "200":
          description: The run
        "404":
          $ref: "#/components/responses/NotFound"
components:
  parameters:
    Version:
      name: version
      in: query
      description: API version
  responses:
    NotFound:
      description: Resource not found
`,
    "openapi.yml",
  );

  test("renders the operation the page names, resolving references", () => {
    expect(
      renderOpenApiOperationBody(
        spec,
        "openapi.yml",
        "get",
        "/api/v1/runs/{runId}",
      ),
    ).toBe(
      [
        "`GET /api/v1/runs/{runId}`",
        "",
        "**Retrieve a run**",
        "",
        "Returns one run.",
        "",
        "**Parameters**",
        "",
        "- `runId` (path, required): The run to read",
        "- `version` (query): API version",
        "",
        "**Responses**",
        "",
        "- `200`: The run",
        "- `404`: Resource not found",
        "",
      ].join("\n"),
    );
  });

  test("fails rather than publish an operation the specification lacks", () => {
    expect(() =>
      renderOpenApiOperationBody(
        spec,
        "openapi.yml",
        "delete",
        "/api/v1/runs/{runId}",
      ),
    ).toThrow("has no delete operation");
    expect(() =>
      renderOpenApiOperationBody(spec, "openapi.yml", "get", "/api/v1/missing"),
    ).toThrow("has no path /api/v1/missing");
  });

  test("refuses a reference it cannot resolve inside the specification", () => {
    const dangling = parseOpenApiSpec(
      `
paths:
  /api/v1/runs:
    get:
      responses:
        "200":
          $ref: "#/components/responses/Missing"
`,
      "openapi.yml",
    );
    expect(() =>
      renderOpenApiOperationBody(
        dangling,
        "openapi.yml",
        "get",
        "/api/v1/runs",
      ),
    ).toThrow("unresolved reference");
  });

  test("refuses a reference to another file", () => {
    const external = parseOpenApiSpec(
      `
paths:
  /api/v1/runs:
    get:
      responses:
        "200":
          $ref: "shared.yaml#/NotFound"
`,
      "openapi.yml",
    );
    expect(() =>
      renderOpenApiOperationBody(
        external,
        "openapi.yml",
        "get",
        "/api/v1/runs",
      ),
    ).toThrow("external reference");
  });
});

describe("mintlifySlug", () => {
  test("separates words inside an identifier", () => {
    expect(mintlifySlug("createApiKey")).toBe("create-api-key");
    expect(mintlifySlug("getMachines")).toBe("get-machines");
  });

  // An acronym is one run of capitals, so it stays one segment; every route the
  // live site serves is reproduced without splitting it further.
  test("keeps an acronym whole", () => {
    expect(mintlifySlug("showSSHKeys")).toBe("show-sshkeys");
  });

  test("collapses every run of separators into one hyphen", () => {
    expect(mintlifySlug("Network Volumes")).toBe("network-volumes");
    expect(mintlifySlug("  cancel / copy  ")).toBe("cancel-copy");
  });
});

describe("mintlifyGeneratedGroups", () => {
  const navigation = {
    tabs: [
      {
        tab: "API",
        groups: [
          { group: "Overview", pages: ["api-reference/introduction"] },
          { group: "Endpoints", openapi: "api-reference/openapi.yaml" },
        ],
      },
    ],
  };

  test("finds a group that names a specification and lists no pages", () => {
    expect(mintlifyGeneratedGroups(navigation)).toEqual([
      { specPath: "api-reference/openapi.yaml", section: "Endpoints" },
    ]);
  });

  test("ignores a group that lists its pages itself", () => {
    expect(
      mintlifyGeneratedGroups({
        groups: [
          {
            group: "Endpoints",
            openapi: "openapi.yaml",
            pages: ["api-reference/introduction"],
          },
        ],
      }),
    ).toEqual([]);
  });
});

describe("openApiOperations", () => {
  const spec = parseOpenApiSpec(
    `
paths:
  /api/v0/users:
    get:
      operationId: showUser
      summary: show user
      tags: [Accounts]
    post:
      operationId: setUser
      tags: [Accounts]
`,
    "openapi.yaml",
  );

  test("reads every operation a path declares", () => {
    expect(openApiOperations(spec, "openapi.yaml")).toEqual([
      {
        method: "get",
        route: "/api/v0/users",
        operationId: "showUser",
        summary: "show user",
        tag: "Accounts",
      },
      {
        method: "post",
        route: "/api/v0/users",
        operationId: "setUser",
        tag: "Accounts",
      },
    ]);
  });

  test("refuses an operation the site could not name a page after", () => {
    const unnamed = parseOpenApiSpec(
      `
paths:
  /api/v0/users:
    get:
      summary: show user
`,
      "openapi.yaml",
    );
    expect(() => openApiOperations(unnamed, "openapi.yaml")).toThrow(
      "no operationId",
    );
  });
});

describe("generatedOperationRoute", () => {
  test("names the page after the summary, under the spec directory", () => {
    expect(
      generatedOperationRoute(
        {
          method: "get",
          route: "/api/v0/machines",
          operationId: "getMachines",
          summary: "show machines",
          tag: "Machines",
        },
        "api-reference/openapi.yaml",
      ),
    ).toBe("api-reference/machines/show-machines");
  });

  test("falls back to the identifier when an operation has no summary", () => {
    expect(
      generatedOperationRoute(
        {
          method: "get",
          route: "/api/v0/machines",
          operationId: "getMachines",
          tag: "Machines",
        },
        "api-reference/openapi.yaml",
      ),
    ).toBe("api-reference/machines/get-machines");
  });

  test("omits the tag segment for an untagged operation", () => {
    expect(
      generatedOperationRoute(
        { method: "get", route: "/x", operationId: "getX", summary: "get x" },
        "openapi.yaml",
      ),
    ).toBe("get-x");
  });
});

describe("renderOpenApiOperationBody", () => {
  const spec = parseOpenApiSpec(
    `
paths:
  /api/v0/users:
    get:
      summary: show user
      description: Reads the current user.
`,
    "openapi.yaml",
  );

  test("omits the summary a generated page already carries as its title", () => {
    const body = renderOpenApiOperationBody(
      spec,
      "openapi.yaml",
      "get",
      "/api/v0/users",
      false,
    );
    expect(body).not.toContain("**show user**");
    expect(body).toContain("Reads the current user.");
  });
});
