import path from "node:path";
import { parse as parseYaml } from "yaml";
import { isRecord } from "../config.ts";
import { listFiles, readUtf8, withRepositoryArchive } from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  parseFrontmatter,
  rewriteMarkdownLinks,
  titleCase,
} from "../markdown.ts";
import { DocumentCollector } from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

interface DockerPage {
  readonly sourcePath: string;
  readonly virtualPath: string;
  readonly attributes: Record<string, unknown>;
  readonly body: string;
}

interface DockerContext {
  readonly root: string;
  readonly files: ReadonlySet<string>;
  readonly page: DockerPage;
  readonly pages: ReadonlyMap<string, DockerPage>;
  readonly siteParams: Readonly<Record<string, unknown>>;
  readonly summaries: Readonly<Record<string, unknown>>;
  readonly whatsNew: unknown;
  readonly glossary: Readonly<Record<string, unknown>>;
  readonly samples: unknown;
}

interface ShortcodeArguments {
  readonly positional: readonly string[];
  readonly named: Readonly<Record<string, string>>;
}

interface CliPage {
  readonly sourcePath: string;
  readonly command: string;
  readonly data: Record<string, unknown>;
}

export async function buildDocker(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  if (!lock.branch) {
    throw new Error("Docker documentation must be pinned to a branch commit");
  }
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const fileSet = new Set(files);
      const pages = await loadPages(root, files);
      const hugo = parseYaml(await readUtf8(root, "hugo.yaml"));
      if (!isRecord(hugo) || !isRecord(hugo.params)) {
        throw new Error("Docker hugo.yaml has no site params");
      }
      const siteParams = hugo.params;
      const summaries = parseYaml(await readUtf8(root, "data/summary.yaml"));
      if (!isRecord(summaries)) {
        throw new Error("Docker data/summary.yaml is not a mapping");
      }
      const whatsNew: unknown = JSON.parse(
        await readUtf8(root, "data/whats-new.json"),
      );
      const glossary = parseYaml(await readUtf8(root, "data/glossary.yaml"));
      const samples = parseYaml(await readUtf8(root, "data/samples.yaml"));
      if (!isRecord(glossary)) {
        throw new Error("Docker data/glossary.yaml is not a mapping");
      }
      const documents = new DocumentCollector(project.id);
      for (const page of [...pages.values()].sort((left, right) =>
        compareCodePoints(left.virtualPath, right.virtualPath),
      )) {
        await documents.collect(page.sourcePath, async () => {
          if (!rendersAsDocument(page)) {
            return undefined;
          }
          const context: DockerContext = {
            root,
            files: fileSet,
            page,
            pages,
            siteParams,
            summaries,
            whatsNew,
            glossary,
            samples,
          };
          const expanded = await expandDockerMarkdown(page.body, context);
          let body = rewriteMarkdownLinks(
            cleanMarkdown(dropDockerBlockAttributes(expanded)),
            (url, kind) =>
              resolveDockerLink(
                url,
                kind,
                page,
                project.repository,
                lock.sourceCommit,
                archiveFiles,
              ),
          );
          const title = documentTitle(body, page.attributes, page.virtualPath);
          if (!/^#\s+/m.test(body)) {
            body = normalizeSpacing(`# ${title}\n\n${body}`);
          }
          assertDockerMarkdownResolved(page.sourcePath, body);
          return {
            sourcePath: page.sourcePath,
            outputPath: outputPathFor(page.virtualPath),
            title,
            body,
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              page.sourcePath,
            ),
            section: sectionFor(page.virtualPath),
          };
        });
      }
      for (const cli of await loadCliPages(root, files)) {
        await documents.collect(cli.sourcePath, async () => {
          return {
            sourcePath: cli.sourcePath,
            outputPath: `pages/reference/cli/${cli.command.replaceAll(" ", "/")}.md`,
            title: cli.command,
            body: renderCliPage(cli),
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              cli.sourcePath,
            ),
            section: "CLI reference",
          };
        });
      }
      return {
        project,
        lock,
        documents: [...documents.documents].sort((left, right) =>
          compareCodePoints(left.outputPath, right.outputPath),
        ),
        quarantined: documents.quarantined,
        notes: [
          "Docker tracks the latest main-branch commit because docker/docs does not publish current releases.",
          "Hugo content and vendored Markdown mounts are normalized without executing Hugo; includes and documentation shortcodes are expanded into plain Markdown.",
          "Docker and sbx CLI references, OpenAPI endpoints, glossary entries, and sample indexes are generated from data pinned in the same source archive.",
          "Non-rendered stubs, redirects, assets, and include-only fragments are omitted.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    includeDockerPath,
  );
}

function includeDockerPath(sourcePath: string): boolean {
  return (
    sourcePath === "LICENSE" ||
    sourcePath === "hugo.yaml" ||
    sourcePath === "data/summary.yaml" ||
    sourcePath === "data/whats-new.json" ||
    sourcePath === "data/glossary.yaml" ||
    sourcePath === "data/samples.yaml" ||
    /^content\/.*\.md$/.test(sourcePath) ||
    /^content\/reference\/api\/.*\.ya?ml$/.test(sourcePath) ||
    /^data\/(?:cli|sbx_cli)\/.*\.ya?ml$/.test(sourcePath) ||
    /^_vendor\/.*\.(?:md|ya?ml)$/.test(sourcePath)
  );
}

async function loadPages(
  root: string,
  files: readonly string[],
): Promise<ReadonlyMap<string, DockerPage>> {
  const pages = new Map<string, DockerPage>();
  for (const sourcePath of files.filter((file) =>
    /^content\/.*\.md$/.test(file),
  )) {
    await addPage(root, pages, sourcePath, sourcePath);
  }
  const singleMounts = [
    [
      "_vendor/github.com/moby/moby/api/docs/CHANGELOG.md",
      "content/reference/api/engine/version-history.md",
    ],
    [
      "_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/reference.md",
      "content/reference/dockerfile.md",
    ],
    [
      "_vendor/github.com/moby/buildkit/docs/buildkitd.toml.md",
      "content/manuals/build/buildkit/toml-configuration.md",
    ],
    [
      "_vendor/github.com/moby/buildkit/docs/attestations/slsa-definitions.md",
      "content/manuals/build/metadata/attestations/slsa-definitions.md",
    ],
    [
      "_vendor/github.com/moby/buildkit/docs/attestations/attestation-storage.md",
      "content/manuals/build/metadata/attestations/attestation-storage.md",
    ],
    [
      "_vendor/github.com/docker/buildx/docs/bake-reference.md",
      "content/manuals/build/bake/reference.md",
    ],
    [
      "_vendor/github.com/docker/buildx/docs/bake-stdlib.md",
      "content/manuals/build/bake/stdlib.md",
    ],
    [
      "_vendor/github.com/docker/cli/docs/deprecated.md",
      "content/manuals/engine/deprecated.md",
    ],
    [
      "_vendor/github.com/docker/cli/docs/reference/run.md",
      "content/manuals/engine/containers/run.md",
    ],
    [
      "_vendor/github.com/docker/cli/docs/reference/dockerd.md",
      "content/reference/cli/dockerd.md",
    ],
  ] as const;
  for (const [sourcePath, virtualPath] of singleMounts) {
    if (!files.includes(sourcePath)) {
      throw new Error(`Docker vendored mount is missing ${sourcePath}`);
    }
    await addPage(root, pages, sourcePath, virtualPath);
  }
  await addDirectoryMount(
    root,
    files,
    pages,
    "_vendor/github.com/moby/buildkit/frontend/dockerfile/docs/rules",
    "content/reference/build-checks",
  );
  await addDirectoryMount(
    root,
    files,
    pages,
    "_vendor/github.com/docker/cli/docs/extend",
    "content/manuals/engine/extend",
    new Set(["EBS_volume.md", "plugins_metrics.md", "plugins_services.md"]),
  );
  for (const directory of [
    "getting-started",
    "concepts",
    "configuration",
    "tools",
    "providers",
    "features",
    "guides",
    "community",
  ]) {
    await addDirectoryMount(
      root,
      files,
      pages,
      `_vendor/github.com/docker/docker-agent/docs/${directory}`,
      `content/manuals/ai/docker-agent/${directory}`,
    );
  }
  return pages;
}

async function addPage(
  root: string,
  pages: Map<string, DockerPage>,
  sourcePath: string,
  virtualPath: string,
): Promise<void> {
  if (pages.has(virtualPath)) {
    throw new Error(`Duplicate Docker content mount: ${virtualPath}`);
  }
  const frontmatter = parseFrontmatter(await readUtf8(root, sourcePath));
  pages.set(virtualPath, {
    sourcePath,
    virtualPath,
    attributes: frontmatter.attributes,
    body: frontmatter.body,
  });
}

async function addDirectoryMount(
  root: string,
  files: readonly string[],
  pages: Map<string, DockerPage>,
  sourceDirectory: string,
  targetDirectory: string,
  excludedNames: ReadonlySet<string> = new Set(),
): Promise<void> {
  const prefix = `${sourceDirectory}/`;
  for (const sourcePath of files.filter(
    (file) =>
      file.startsWith(prefix) &&
      file.endsWith(".md") &&
      !excludedNames.has(path.posix.basename(file)),
  )) {
    await addPage(
      root,
      pages,
      sourcePath,
      path.posix.join(targetDirectory, sourcePath.slice(prefix.length)),
    );
  }
}

function rendersAsDocument(page: DockerPage): boolean {
  if (
    page.virtualPath.startsWith("content/includes/") ||
    page.virtualPath === "content/bot-detection.md" ||
    frontmatterValue(page.attributes, "sitemap") === false
  ) {
    return false;
  }
  const build = frontmatterValue(page.attributes, "build");
  if (isRecord(build) && build.render === "never") {
    return false;
  }
  const params = frontmatterValue(page.attributes, "params");
  const sidebar = isRecord(params) ? params.sidebar : undefined;
  if (
    isRecord(sidebar) &&
    typeof sidebar.goto === "string" &&
    page.body.trim() === ""
  ) {
    return false;
  }
  const layout = frontmatterValue(page.attributes, "layout");
  return (
    page.body.trim() !== "" ||
    layout === "api" ||
    layout === "api-reference" ||
    layout === "glossary" ||
    page.virtualPath.startsWith("content/reference/samples/") ||
    /^content\/reference\/api\/engine\/version\/v[\d.]+\.md$/.test(
      page.virtualPath,
    )
  );
}

async function expandDockerMarkdown(
  source: string,
  context: DockerContext,
): Promise<string> {
  let result = expandInlineDefinitions(source, context);
  result = await expandIncludes(result, context, new Set());
  result = expandParams(result, context);
  result = replaceBlock(result, "file", (args, body) => {
    const parsed = parseArguments(args);
    const filePath = requiredArgument(parsed, "path", context.page.sourcePath);
    const status = parsed.named.status;
    if (status && status !== "new" && status !== "modified") {
      throw new Error(
        `Docker ${context.page.sourcePath} has invalid file status ${status}`,
      );
    }
    if (!/^\s*```[\s\S]*```\s*$/.test(body)) {
      throw new Error(
        `Docker ${context.page.sourcePath} file ${filePath} is not fenced`,
      );
    }
    return `\n\n**File: \`${filePath}\`${status ? ` (${status})` : ""}**\n\n${body.trim()}\n\n`;
  });
  result = replaceBlock(result, "files", (args, body) => {
    const name = requiredArgument(
      parseArguments(args),
      "name",
      context.page.sourcePath,
    );
    return `\n\n### Files: \`${name}/\`\n\n${body.trim()}\n\n`;
  });
  result = replaceBlock(result, "tab", (args, body) => {
    const name = requiredArgument(
      parseArguments(args),
      "name",
      context.page.sourcePath,
    );
    return `\n\n**${name}**\n\n${body.trim()}\n\n`;
  });
  result = replaceBlock(result, "tabs", (_args, body) =>
    normalizeSpacing(body),
  );
  result = replaceBlock(result, "accordion", (args, body) => {
    const title = requiredArgument(
      parseArguments(args),
      "title",
      context.page.sourcePath,
    );
    return `\n\n**${title}**\n\n${body.trim()}\n\n`;
  });
  for (const name of ["experimental", "restricted"] as const) {
    result = replaceBlock(result, name, (args, body) => {
      const parsed = parseArguments(args);
      const heading = parsed.named.title ?? titleCase(name);
      return blockquote(heading, body);
    });
  }
  result = replaceSelfClosing(result, "param", (args) =>
    renderParam(parseArguments(args), context),
  );
  result = replaceSelfClosing(result, "grid", (args) =>
    renderGrid(parseArguments(args), context),
  );
  result = replaceSelfClosing(result, "summary-bar", (args) =>
    renderSummary(parseArguments(args), context),
  );
  result = replaceSelfClosing(result, "button", (args) => {
    const parsed = parseArguments(args);
    const text = requiredArgument(parsed, "text", context.page.sourcePath);
    const url = requiredArgument(parsed, "url", context.page.sourcePath);
    return `[${text}](${url})`;
  });
  result = replaceSelfClosing(result, "card", (args) => {
    const parsed = parseArguments(args);
    const cardTitle = requiredArgument(
      parsed,
      "title",
      context.page.sourcePath,
    );
    const description = parsed.named.description;
    const link = parsed.named.link;
    return `${link ? `[${cardTitle}](${link})` : `**${cardTitle}**`}${description ? `: ${description}` : ""}`;
  });
  for (const name of ["figure", "inline-image"] as const) {
    result = replaceSelfClosing(result, name, (args) => {
      const parsed = parseArguments(args);
      const src =
        parsed.named.src ?? parsed.positional[0] ?? parsed.named.link ?? "";
      if (!src) {
        throw new Error(
          `Docker ${context.page.sourcePath} ${name} has no source`,
        );
      }
      const alt = parsed.named.alt ?? parsed.named.title ?? "";
      return `![${alt}](${src})`;
    });
  }
  result = replaceSelfClosing(result, "badge", (args) => {
    const parsed = parseArguments(args);
    const text = requiredArgument(parsed, "text", context.page.sourcePath);
    return `**${text}**`;
  });
  result = replaceSelfClosing(result, "youtube-embed", (args) => {
    const id = parseArguments(args).positional[0];
    if (!id) {
      throw new Error(
        `Docker ${context.page.sourcePath} YouTube embed has no ID`,
      );
    }
    return `[Watch the video](https://www.youtube.com/watch?v=${id})`;
  });
  result = replaceSelfClosing(result, "release-date", (args) => {
    const parsed = parseArguments(args);
    const date = parsed.positional[0] ?? parsed.named.date;
    return date ? `**Release date:** ${date}` : "";
  });
  result = replaceSelfClosing(result, "sectionlinks", () =>
    renderSectionLinks(context),
  );
  result = replaceSelfClosing(result, "whats-new", () =>
    renderWhatsNew(context),
  );
  for (const name of ["desktop-install", "desktop-install-v2"] as const) {
    result = replaceSelfClosing(result, name, (args) =>
      renderDesktopInstall(parseArguments(args)),
    );
  }
  result = replaceSelfClosing(result, "labspace-launch", (args) =>
    renderLabspace(parseArguments(args), context.page.sourcePath),
  );
  result = replaceSelfClosing(result, "icon", () => "");
  result += await renderDataDrivenContent(context);
  return normalizeSpacing(result);
}

function expandInlineDefinitions(
  source: string,
  context: DockerContext,
): string {
  const latest = context.siteParams.latest_engine_api_version;
  if (typeof latest !== "string") {
    throw new Error("Docker latest_engine_api_version is not configured");
  }
  const parts = latest.split(".").map(Number);
  const previous =
    parts.length === 2 && parts.every(Number.isFinite)
      ? `${parts[0]}.${(parts[1] ?? 0) - 1}`
      : undefined;
  if (!previous) {
    throw new Error(`Invalid Docker Engine API version ${latest}`);
  }
  let result = replaceNamedInline(source, "apiVersionPrevious", previous);
  result = unwrapNamedInline(result, "create_panel");
  result = replaceNamedInline(
    result,
    "dockerfile",
    "[View the sample Dockerfile](https://raw.githubusercontent.com/dvdksn/rpg-name-generator/refs/heads/main/Dockerfile)",
  );
  return replaceNamedInline(
    result,
    "acr-template",
    "[View the current Azure Resource Manager template](https://prod-scout-integration-templates.s3.amazonaws.com/latest/acr_token_template.json)",
  );
}

async function expandIncludes(
  source: string,
  context: DockerContext,
  stack: ReadonlySet<string>,
): Promise<string> {
  const pattern = /\{\{%\s*include\s+(?:"([^"]+)"|'([^']+)'|(\S+))\s*%\}\}/g;
  let cursor = 0;
  let output = "";
  for (const match of source.matchAll(pattern)) {
    const target = match[1] ?? match[2] ?? match[3];
    if (!target) {
      continue;
    }
    const virtualPath = path.posix.normalize(`content/includes/${target}`);
    if (
      !virtualPath.startsWith("content/includes/") ||
      stack.has(virtualPath)
    ) {
      throw new Error(
        `Invalid Docker include ${target} in ${context.page.sourcePath}`,
      );
    }
    const fragment = context.pages.get(virtualPath);
    if (!fragment) {
      throw new Error(
        `Docker ${context.page.sourcePath} includes missing ${target}`,
      );
    }
    output += source.slice(cursor, match.index);
    cursor = match.index + match[0].length;
    output += await expandIncludes(
      fragment.body,
      context,
      new Set([...stack, virtualPath]),
    );
  }
  return output + source.slice(cursor);
}

function expandParams(source: string, context: DockerContext): string {
  return replaceSelfClosing(source, "param", (args) =>
    renderParam(parseArguments(args), context),
  );
}

function renderParam(args: ShortcodeArguments, context: DockerContext): string {
  const name = args.positional[0];
  if (!name) {
    throw new Error(`Docker ${context.page.sourcePath} param has no name`);
  }
  const pageParams = frontmatterValue(context.page.attributes, "params");
  const value =
    frontmatterValue(context.page.attributes, name) ??
    (isRecord(pageParams) ? frontmatterValue(pageParams, name) : undefined);
  const resolved = value ?? frontmatterValue(context.siteParams, name);
  if (
    typeof resolved !== "string" &&
    typeof resolved !== "number" &&
    typeof resolved !== "boolean"
  ) {
    throw new Error(
      `Docker ${context.page.sourcePath} references unknown param ${name}`,
    );
  }
  return String(resolved);
}

function renderGrid(args: ShortcodeArguments, context: DockerContext): string {
  const name = args.named.items ?? args.positional[0] ?? "grid";
  const params = frontmatterValue(context.page.attributes, "params");
  const value =
    frontmatterValue(context.page.attributes, name) ??
    (isRecord(params) ? frontmatterValue(params, name) : undefined);
  if (!Array.isArray(value)) {
    throw new Error(
      `Docker ${context.page.sourcePath} grid references missing ${name}`,
    );
  }
  return value
    .map((item) => {
      if (!isRecord(item) || typeof item.title !== "string") {
        throw new Error(
          `Docker ${context.page.sourcePath} grid ${name} has an invalid item`,
        );
      }
      const label =
        typeof item.link === "string"
          ? `[${item.title}](${item.link})`
          : `**${item.title}**`;
      return `- ${label}${typeof item.description === "string" ? `: ${item.description}` : ""}`;
    })
    .join("\n");
}

function renderSummary(
  args: ShortcodeArguments,
  context: DockerContext,
): string {
  const feature = requiredArgument(
    args,
    "feature_name",
    context.page.sourcePath,
  );
  const summary = context.summaries[feature];
  if (!isRecord(summary)) {
    throw new Error(
      `Docker ${context.page.sourcePath} references unknown summary ${feature}`,
    );
  }
  const details = Object.entries(summary).map(([key, value]) => {
    const rendered = Array.isArray(value) ? value.join(", ") : String(value);
    return `- ${titleCase(key)}: ${rendered}`;
  });
  return details.length > 0
    ? `\n\n**${feature} requirements**\n\n${details.join("\n")}\n\n`
    : "";
}

function renderSectionLinks(context: DockerContext): string {
  const directory = context.page.virtualPath.replace(/\/?_index\.md$/, "");
  const children = [...context.pages.values()]
    .filter(
      (page) =>
        path.posix.dirname(page.virtualPath) === directory &&
        page.virtualPath !== context.page.virtualPath &&
        rendersAsDocument(page),
    )
    .sort(comparePages);
  return children
    .map((page) => {
      const title = documentTitle(page.body, page.attributes, page.virtualPath);
      return `- [${title}](${siteUrlFor(page)})`;
    })
    .join("\n");
}

function renderWhatsNew(context: DockerContext): string {
  if (!isRecord(context.whatsNew) || !Array.isArray(context.whatsNew.items)) {
    throw new Error("Docker data/whats-new.json has no items");
  }
  return context.whatsNew.items
    .map((item) => {
      if (
        !isRecord(item) ||
        typeof item.title !== "string" ||
        typeof item.url !== "string"
      ) {
        throw new Error("Docker data/whats-new.json has an invalid item");
      }
      const metadata = [item.product, item.published]
        .filter((value): value is string => typeof value === "string")
        .join(", ");
      return `- [${item.title}](${item.url})${metadata ? ` (${metadata})` : ""}${typeof item.description === "string" ? `: ${item.description}` : ""}`;
    })
    .join("\n");
}

async function renderDataDrivenContent(
  context: DockerContext,
): Promise<string> {
  const layout = frontmatterValue(context.page.attributes, "layout");
  if (layout === "glossary") {
    return `\n\n${Object.entries(context.glossary)
      .map(([term, definition]) => {
        if (typeof definition !== "string") {
          throw new Error(`Docker glossary entry ${term} is not text`);
        }
        return `## ${titleCase(term)}\n\n${definition.trim()}`;
      })
      .join("\n\n")}`;
  }
  if (context.page.virtualPath.startsWith("content/reference/samples/")) {
    return renderSamples(context);
  }
  if (
    layout === "api" ||
    layout === "api-reference" ||
    /^content\/reference\/api\/engine\/version\/v[\d.]+\.md$/.test(
      context.page.virtualPath,
    )
  ) {
    const specification = openApiPath(context);
    if (!specification) {
      throw new Error(
        `Docker ${context.page.sourcePath} has no OpenAPI specification`,
      );
    }
    const parsed = parseYaml(await readUtf8(context.root, specification));
    if (!isRecord(parsed)) {
      throw new Error(
        `Docker OpenAPI specification ${specification} is invalid`,
      );
    }
    return `\n\n${renderOpenApi(parsed, specification)}`;
  }
  return "";
}

function renderSamples(context: DockerContext): string {
  if (!isRecord(context.samples) || !Array.isArray(context.samples.samples)) {
    throw new Error("Docker data/samples.yaml has no samples");
  }
  const service = path.posix.basename(context.page.virtualPath, ".md");
  if (service === "_index") {
    return "";
  }
  const entries = context.samples.samples.filter(
    (sample): sample is Record<string, unknown> =>
      isRecord(sample) &&
      Array.isArray(sample.services) &&
      sample.services.includes(service),
  );
  return entries
    .map((sample) => {
      if (typeof sample.title !== "string" || typeof sample.url !== "string") {
        throw new Error(`Docker sample for ${service} is invalid`);
      }
      return `- [${sample.title}](${sample.url})${typeof sample.description === "string" ? `: ${sample.description}` : ""}`;
    })
    .join("\n");
}

function openApiPath(context: DockerContext): string | undefined {
  const engineVersion = context.page.virtualPath.match(
    /^content\/reference\/api\/engine\/version\/(v[\d.]+)\.md$/,
  )?.[1];
  const candidates = engineVersion
    ? [`_vendor/github.com/moby/moby/api/docs/${engineVersion}.yaml`]
    : path.posix.basename(context.page.virtualPath) === "index.md"
      ? [context.page.virtualPath.replace(/index\.md$/, "api.yaml")]
      : [context.page.virtualPath.replace(/\.md$/, ".yaml")];
  return candidates.find((candidate) => context.files.has(candidate));
}

function renderOpenApi(
  api: Readonly<Record<string, unknown>>,
  sourcePath: string,
): string {
  const lines = ["## API specification"];
  const info = isRecord(api.info) ? api.info : undefined;
  if (typeof info?.version === "string") {
    lines.push("", `- Version: \`${info.version}\``);
  }
  if (typeof api.host === "string") {
    const scheme = Array.isArray(api.schemes) ? api.schemes[0] : "https";
    const basePath = typeof api.basePath === "string" ? api.basePath : "";
    lines.push(
      "",
      `- Base URL: \`${String(scheme)}://${api.host}${basePath}\``,
    );
  }
  if (Array.isArray(api.servers)) {
    for (const server of api.servers) {
      if (isRecord(server) && typeof server.url === "string") {
        lines.push("", `- Base URL: \`${server.url}\``);
      }
    }
  }
  if (typeof info?.description === "string" && info.description.trim()) {
    lines.push("", info.description.trim());
  }
  const securitySchemes = isRecord(api.components)
    ? api.components.securitySchemes
    : api.securityDefinitions;
  if (isRecord(securitySchemes)) {
    lines.push("", "## Authentication");
    for (const [name, rawScheme] of Object.entries(securitySchemes)) {
      const scheme = resolveOpenApiReference(api, rawScheme, sourcePath);
      if (!isRecord(scheme)) {
        continue;
      }
      const details = [scheme.type, scheme.scheme]
        .filter((value): value is string => typeof value === "string")
        .join(", ");
      lines.push(
        "",
        `### \`${name}\`${details ? ` (${details})` : ""}`,
        ...(typeof scheme.description === "string"
          ? ["", scheme.description.trim()]
          : []),
      );
    }
  }
  if (!isRecord(api.paths)) {
    throw new Error(`Docker OpenAPI specification ${sourcePath} has no paths`);
  }
  lines.push("", "## Endpoints");
  for (const [route, rawItem] of Object.entries(api.paths)) {
    const item = resolveOpenApiReference(api, rawItem, sourcePath);
    if (!isRecord(item)) {
      continue;
    }
    const sharedParameters = Array.isArray(item.parameters)
      ? item.parameters
      : [];
    for (const method of [
      "get",
      "post",
      "put",
      "patch",
      "delete",
      "head",
    ] as const) {
      const operation = resolveOpenApiReference(api, item[method], sourcePath);
      if (!isRecord(operation)) {
        continue;
      }
      lines.push("", `### \`${method.toUpperCase()} ${route}\``);
      if (typeof operation.summary === "string") {
        lines.push("", `**${operation.summary.trim()}**`);
      }
      if (typeof operation.description === "string") {
        lines.push("", operation.description.trim());
      }
      const parameters = [
        ...sharedParameters,
        ...(Array.isArray(operation.parameters) ? operation.parameters : []),
      ];
      if (parameters.length > 0) {
        lines.push("", "**Parameters**", "");
        for (const rawParameter of parameters) {
          const parameter = resolveOpenApiReference(
            api,
            rawParameter,
            sourcePath,
          );
          if (!isRecord(parameter) || typeof parameter.name !== "string") {
            continue;
          }
          const location =
            typeof parameter.in === "string" ? parameter.in : "parameter";
          lines.push(
            `- \`${parameter.name}\` (${location}${parameter.required ? ", required" : ""})${typeof parameter.description === "string" ? `: ${singleLine(parameter.description)}` : ""}`,
          );
        }
      }
      const requestBody = resolveOpenApiReference(
        api,
        operation.requestBody,
        sourcePath,
      );
      if (isRecord(requestBody)) {
        lines.push(
          "",
          `**Request body**${typeof requestBody.description === "string" ? `: ${singleLine(requestBody.description)}` : ""}`,
        );
      }
      if (isRecord(operation.responses)) {
        lines.push("", "**Responses**", "");
        for (const [status, rawResponse] of Object.entries(
          operation.responses,
        )) {
          const response = resolveOpenApiReference(
            api,
            rawResponse,
            sourcePath,
          );
          lines.push(
            `- \`${status}\`${isRecord(response) && typeof response.description === "string" ? `: ${singleLine(response.description)}` : ""}`,
          );
        }
      }
    }
  }
  return normalizeSpacing(lines.join("\n"));
}

function resolveOpenApiReference(
  api: Readonly<Record<string, unknown>>,
  value: unknown,
  sourcePath: string,
): unknown {
  if (!isRecord(value) || typeof value.$ref !== "string") {
    return value;
  }
  if (!value.$ref.startsWith("#/")) {
    throw new Error(
      `Docker OpenAPI specification ${sourcePath} uses external reference ${value.$ref}`,
    );
  }
  let current: unknown = api;
  for (const encoded of value.$ref.slice(2).split("/")) {
    const key = encoded.replaceAll("~1", "/").replaceAll("~0", "~");
    if (!isRecord(current) || !(key in current)) {
      throw new Error(
        `Docker OpenAPI specification ${sourcePath} has unresolved reference ${value.$ref}`,
      );
    }
    current = current[key];
  }
  return current;
}

function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function renderDesktopInstall(args: ShortcodeArguments): string {
  const all = args.named.all !== undefined;
  const buildPath = args.named.build_path ?? "";
  const lines = ["Download Docker Desktop:"];
  if (all || args.named.win !== undefined) {
    lines.push(
      `- [Windows](https://desktop.docker.com/win/main/amd64${buildPath}Docker%20Desktop%20Installer.exe)`,
    );
  }
  if (args.named.win_arm_release) {
    lines.push(
      `- [Windows ARM ${args.named.win_arm_release}](https://desktop.docker.com/win/main/arm64${buildPath}Docker%20Desktop%20Installer.exe)`,
    );
  }
  if (all || args.named.mac !== undefined) {
    lines.push(
      `- [Mac (Apple chip)](https://desktop.docker.com/mac/main/arm64${buildPath}Docker.dmg)`,
      `- [Mac (Intel chip)](https://desktop.docker.com/mac/main/amd64${buildPath}Docker.dmg)`,
    );
  }
  if (all || args.named.linux !== undefined) {
    lines.push(
      `- [Linux (Debian)](https://desktop.docker.com/linux/main/amd64${buildPath}docker-desktop-amd64.deb)`,
      `- [Linux (RPM)](https://desktop.docker.com/linux/main/amd64${buildPath}docker-desktop-x86_64.rpm)`,
      `- [Linux (Arch)](https://desktop.docker.com/linux/main/amd64${buildPath}docker-desktop-x86_64.pkg.tar.zst)`,
    );
  }
  return lines.join("\n");
}

function renderLabspace(args: ShortcodeArguments, sourcePath: string): string {
  const image = args.named.image ?? args.positional[0];
  if (!image) {
    throw new Error(`Docker ${sourcePath} labspace launch has no image`);
  }
  const url = args.named.url ?? "http://localhost";
  return [
    "```console",
    `$ docker compose -p labspace -f oci://${image} up -d`,
    "```",
    "",
    `Open ${url} in your browser.`,
    "",
    "```console",
    "$ docker compose -p labspace down",
    "```",
  ].join("\n");
}

async function loadCliPages(
  root: string,
  files: readonly string[],
): Promise<readonly CliPage[]> {
  const candidates = files.filter(
    (file) =>
      /^data\/cli\/.*\.ya?ml$/.test(file) ||
      /^data\/sbx_cli\/.*\.ya?ml$/.test(file) ||
      /^_vendor\/github\.com\/docker\/(?:compose\/v5\/docs\/reference|model-runner\/cmd\/cli\/docs\/reference)\/.*\.ya?ml$/.test(
        file,
      ),
  );
  const pages: CliPage[] = [];
  for (const sourcePath of candidates) {
    const data = parseYaml(await readUtf8(root, sourcePath));
    if (!isRecord(data) || data.hidden) {
      continue;
    }
    const command =
      typeof data.command === "string"
        ? data.command
        : typeof data.name === "string"
          ? data.name
          : undefined;
    if (!command) {
      continue;
    }
    const aliases =
      typeof data.aliases === "string" ? data.aliases.split(/,\s*/) : [];
    const commandWords = command.split(/\s+/).length;
    if (aliases.some((alias) => alias.split(/\s+/).length > commandWords)) {
      continue;
    }
    pages.push({ sourcePath, command, data });
  }
  pages.sort((left, right) => compareCodePoints(left.command, right.command));
  return pages;
}

function renderCliPage(page: CliPage): string {
  const { data } = page;
  const lines = [`# ${page.command}`];
  appendString(lines, data.short ?? data.synopsis);
  if (typeof data.usage === "string" && data.usage.trim()) {
    lines.push("", `**Usage:** \`${data.usage.trim()}\``);
  }
  if (typeof data.aliases === "string" && data.aliases.trim()) {
    lines.push("", `**Aliases:** ${data.aliases}`);
  }
  if (data.deprecated) {
    lines.push("", "> [!WARNING]", "> This command is deprecated.");
  }
  if (data.experimental || data.experimentalcli) {
    lines.push("", "> [!NOTE]", "> This command is experimental.");
  }
  const description = data.long ?? data.description;
  if (typeof description === "string" && description.trim()) {
    lines.push("", "## Description", "", description.trim());
  }
  appendCliOptions(lines, "Options", data.options);
  appendCliOptions(lines, "Global options", data.inherited_options);
  if (Array.isArray(data.cname) && data.cname.length > 0) {
    lines.push("", "## Subcommands", "");
    for (const command of data.cname) {
      if (typeof command === "string") {
        lines.push(
          `- [\`${command}\`](https://docs.docker.com/reference/cli/${command.replaceAll(" ", "/")}/)`,
        );
      }
    }
  }
  const examples = data.examples ?? data.example;
  if (typeof examples === "string" && examples.trim()) {
    lines.push(
      "",
      "## Examples",
      "",
      data.example
        ? `\`\`\`console\n${examples.trim()}\n\`\`\``
        : examples.trim(),
    );
  }
  return cleanMarkdown(dropDockerBlockAttributes(lines.join("\n")));
}

function appendCliOptions(
  lines: string[],
  heading: string,
  value: unknown,
): void {
  if (!Array.isArray(value)) {
    return;
  }
  const options = value.filter(
    (option): option is Record<string, unknown> =>
      isRecord(option) &&
      !option.hidden &&
      option.option !== "help" &&
      option.name !== "help",
  );
  if (options.length === 0) {
    return;
  }
  lines.push(
    "",
    `## ${heading}`,
    "",
    "| Option | Default | Description |",
    "| --- | --- | --- |",
  );
  for (const option of options) {
    const name =
      typeof option.option === "string"
        ? option.option
        : typeof option.name === "string"
          ? option.name
          : undefined;
    if (!name) {
      continue;
    }
    const shorthand =
      typeof option.shorthand === "string" && option.shorthand
        ? `\`-${option.shorthand}\`, `
        : "";
    const defaultValue =
      typeof option.default_value === "string" &&
      !["", "''", '""', "[]", "map[]", "false", "0", "0s", "default"].includes(
        option.default_value,
      )
        ? `\`${escapeTable(option.default_value)}\``
        : "";
    const description =
      typeof option.description === "string"
        ? option.description
        : typeof option.usage === "string"
          ? option.usage
          : "";
    const flags = [
      typeof option.min_api_version === "string"
        ? `API ${option.min_api_version}+`
        : "",
      option.deprecated ? "Deprecated" : "",
      option.experimental || option.experimentalcli ? "Experimental" : "",
    ].filter(Boolean);
    lines.push(
      `| ${shorthand}\`--${name}\` | ${defaultValue} | ${escapeTable(description)}${flags.length > 0 ? ` (${flags.join(", ")})` : ""} |`,
    );
  }
}

function appendString(lines: string[], value: unknown): void {
  if (typeof value === "string" && value.trim()) {
    lines.push("", value.trim());
  }
}

function escapeTable(value: string): string {
  return value.replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function replaceBlock(
  source: string,
  name: string,
  render: (args: string, body: string) => string,
): string {
  const pattern = new RegExp(
    `\\{\\{[<%]\\s*${escapeRegex(name)}\\b([^}]*)\\}\\}([\\s\\S]*?)\\{\\{[<%]\\s*\\/${escapeRegex(name)}\\s*[>%]\\}\\}`,
    "g",
  );
  return source.replace(pattern, (_match, args: string, body: string) =>
    render(stripDelimiter(args), body),
  );
}

function replaceSelfClosing(
  source: string,
  name: string,
  render: (args: string) => string,
): string {
  const pattern = new RegExp(
    `\\{\\{[<%]\\s*${escapeRegex(name)}\\b([^}]*)\\}\\}`,
    "g",
  );
  return source.replace(pattern, (_match, args: string) =>
    render(stripDelimiter(args)),
  );
}

function replaceNamedInline(
  source: string,
  name: string,
  replacement: string,
): string {
  const pattern = new RegExp(
    `\\{\\{[<%]\\s*${escapeRegex(name)}\\.inline\\s*[>%]\\}\\}[\\s\\S]*?\\{\\{[<%]\\s*\\/${escapeRegex(name)}\\.inline\\s*[>%]\\}\\}`,
    "g",
  );
  return source.replace(pattern, replacement);
}

function unwrapNamedInline(source: string, name: string): string {
  const opening = new RegExp(
    `\\{\\{[<%]\\s*${escapeRegex(name)}\\.inline\\s*\\/?\\s*[>%]\\}\\}`,
    "g",
  );
  const closing = new RegExp(
    `\\{\\{[<%]\\s*\\/${escapeRegex(name)}\\.inline\\s*[>%]\\}\\}`,
    "g",
  );
  return source.replace(opening, "").replace(closing, "");
}

function stripDelimiter(value: string): string {
  return value.replace(/[>%]\s*$/, "").trim();
}

function parseArguments(source: string): ShortcodeArguments {
  const positional: string[] = [];
  const named: Record<string, string> = {};
  const pattern = /(?:([\w-]+)\s*=\s*)?(?:"([^"]*)"|'([^']*)'|([^\s]+))/g;
  for (const match of source.matchAll(pattern)) {
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    if (match[1]) {
      named[match[1]] = value;
    } else {
      positional.push(value);
    }
  }
  return { positional, named };
}

function requiredArgument(
  args: ShortcodeArguments,
  name: string,
  sourcePath: string,
): string {
  const value = args.named[name] ?? args.positional[0];
  if (!value) {
    throw new Error(`Docker ${sourcePath} shortcode requires ${name}`);
  }
  return value;
}

function blockquote(title: string, body: string): string {
  const lines = body
    .trim()
    .split("\n")
    .map((line) => (line ? `> ${line}` : ">"));
  return `\n\n> **${title}**\n>\n${lines.join("\n")}\n\n`;
}

function resolveDockerLink(
  url: string,
  kind: "link" | "image",
  page: DockerPage,
  repository: string,
  ref: string,
  archiveFiles: ReadonlySet<string>,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = (match?.[1] ?? url).replace(/\.md\/$/, ".md");
  const suffix = match?.[2] ?? "";
  if (kind === "image") {
    const candidates = pathname.startsWith("/")
      ? [pathname.slice(1), `static${pathname}`, `content${pathname}`]
      : [
          path.posix.normalize(
            path.posix.join(path.posix.dirname(page.sourcePath), pathname),
          ),
        ];
    const sourcePath = candidates.find((candidate) =>
      archiveFiles.has(candidate),
    );
    return sourcePath
      ? `${githubRawUrl(repository, ref, sourcePath)}${suffix}`
      : pathname.startsWith("/")
        ? `https://docs.docker.com${pathname}${suffix}`
        : undefined;
  }
  if (pathname === "") {
    return suffix || undefined;
  }
  const extension = path.posix.extname(pathname);
  if (extension && extension !== ".md") {
    const physical = pathname.startsWith("/")
      ? pathname.slice(1)
      : path.posix.normalize(
          path.posix.join(path.posix.dirname(page.sourcePath), pathname),
        );
    return archiveFiles.has(physical)
      ? `${githubRawUrl(repository, ref, physical)}${suffix}`
      : pathname.startsWith("/")
        ? `https://docs.docker.com${pathname}${suffix}`
        : undefined;
  }
  if (pathname.startsWith("/")) {
    const virtualPath = pathname.endsWith(".md")
      ? `content${pathname}`
      : undefined;
    return `https://docs.docker.com${virtualPath ? routeForVirtualPath(virtualPath) : sitePath(pathname)}${suffix}`;
  }
  const virtualPath = path.posix.normalize(
    path.posix.join(path.posix.dirname(page.virtualPath), pathname),
  );
  return `https://docs.docker.com${routeForVirtualPath(virtualPath)}${suffix}`;
}

function siteUrlFor(page: DockerPage): string {
  const override = frontmatterValue(page.attributes, "url");
  return typeof override === "string" && override.startsWith("/")
    ? `https://docs.docker.com${sitePath(override)}`
    : `https://docs.docker.com${routeForVirtualPath(page.virtualPath)}`;
}

function routeForVirtualPath(virtualPath: string): string {
  let route = virtualPath.replace(/^content\//, "").replace(/\.md$/, "");
  route = route.replace(/(^|\/)(?:_?index)$/, "$1");
  route = route.replace(/^manuals\//, "");
  return sitePath(`/${route}`);
}

function sitePath(value: string): string {
  const withoutManuals = value.replace(/^\/manuals\//, "/");
  if (/\.[a-z0-9]+$/i.test(withoutManuals)) {
    return withoutManuals;
  }
  return withoutManuals.endsWith("/") ? withoutManuals : `${withoutManuals}/`;
}

function outputPathFor(virtualPath: string): string {
  const relative = virtualPath
    .replace(/^content\//, "")
    .replace(/(^|\/)_index\.md$/, "$1index.md");
  return `pages/${relative}`;
}

function sectionFor(virtualPath: string): string {
  const parts = virtualPath.replace(/^content\//, "").split("/");
  if (parts[0] === "manuals") {
    return titleCase(parts[1] ?? "Manuals");
  }
  return titleCase(parts[0] ?? "Documentation");
}

function frontmatterValue(
  attributes: Readonly<Record<string, unknown>>,
  name: string,
): unknown {
  const entry = Object.entries(attributes).find(
    ([key]) => key.toLowerCase() === name.toLowerCase(),
  );
  return entry?.[1];
}

function comparePages(left: DockerPage, right: DockerPage): number {
  const leftWeight = frontmatterValue(left.attributes, "weight");
  const rightWeight = frontmatterValue(right.attributes, "weight");
  const difference =
    (typeof leftWeight === "number" ? leftWeight : 0) -
    (typeof rightWeight === "number" ? rightWeight : 0);
  return difference || compareCodePoints(left.virtualPath, right.virtualPath);
}

function assertDockerMarkdownResolved(sourcePath: string, body: string): void {
  const prose = withoutFencedCode(body);
  const unresolved = prose.match(/\{\{[<%]\s*\/?\s*([a-zA-Z_][\w.-]*)/);
  if (unresolved?.[1]) {
    throw new Error(
      `Unsupported Docker shortcode ${unresolved[1]} in ${sourcePath}`,
    );
  }
  if (/\{\{\s*\$[a-zA-Z_]/.test(prose)) {
    throw new Error(`Unresolved Docker template expression in ${sourcePath}`);
  }
}

function dropDockerBlockAttributes(source: string): string {
  const output: string[] = [];
  let fence: "```" | "~~~" | undefined;
  for (const line of source.split("\n")) {
    const marker = line.match(/^\s*(?:>\s*)*(```|~~~)/)?.[1] as
      | "```"
      | "~~~"
      | undefined;
    if (marker) {
      fence = fence === marker ? undefined : marker;
    }
    if (!fence && /^\s*(?:>\s*)?\{\s*\.[\w -]+\}\s*$/.test(line)) {
      continue;
    }
    output.push(
      line.replace(
        /^( +)(\t+)/,
        (_match, spaces: string, tabs: string) =>
          `${spaces}${"    ".repeat(tabs.length)}`,
      ),
    );
  }
  return output.join("\n");
}

function withoutFencedCode(source: string): string {
  const lines: string[] = [];
  let fence: "```" | "~~~" | undefined;
  for (const line of source.split("\n")) {
    const marker = line.match(/^\s*(?:>\s*)*(```|~~~)/)?.[1] as
      | "```"
      | "~~~"
      | undefined;
    if (marker) {
      fence = fence === marker ? undefined : marker;
      continue;
    }
    if (!fence) {
      lines.push(line);
    }
  }
  return lines.join("\n");
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
