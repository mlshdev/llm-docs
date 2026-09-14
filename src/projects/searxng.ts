import path from "node:path";
import {
  exists,
  listFiles,
  readUtf8,
  withRepositoryArchive,
} from "../files.ts";
import {
  cleanMarkdown,
  documentTitle,
  githubBlobUrl,
  githubRawUrl,
  normalizeSpacing,
  rewriteMarkdownLinks,
} from "../markdown.ts";
import {
  convertSphinxRst,
  extractPythonSymbols,
  indexPythonSymbols,
} from "./discord-py.ts";
import { DocumentCollector } from "../quarantine.ts";
import type {
  GithubLockedSource,
  GithubSourceProject,
  ProjectBuild,
} from "../types.ts";

const rootDocuments = [
  "README.rst",
  "CONTRIBUTING.rst",
  "CHANGELOG.rst",
  "AI_POLICY.rst",
  "SECURITY.md",
] as const;

export async function buildSearxng(
  project: GithubSourceProject,
  lock: GithubLockedSource,
): Promise<ProjectBuild> {
  if (!lock.branch) {
    throw new Error("SearXNG documentation must be pinned to a branch commit");
  }
  return withRepositoryArchive(
    project.repository,
    lock.sourceCommit,
    async (root, archiveFiles) => {
      const files = await listFiles(root);
      const pages = files
        .filter(
          (sourcePath) =>
            rootDocuments.includes(
              sourcePath as (typeof rootDocuments)[number],
            ) || /^docs\/.*\.rst$/.test(sourcePath),
        )
        .sort(compareCodePoints);
      const sourceByPath = new Map(
        await Promise.all(
          pages
            .filter((sourcePath) => sourcePath.endsWith(".rst"))
            .map(
              async (sourcePath) =>
                [sourcePath, await readUtf8(root, sourcePath)] as const,
            ),
        ),
      );
      const labels = collectLabels(sourceByPath);
      const symbols = indexPythonSymbols(
        (
          await Promise.all(
            files
              .filter((sourcePath) => /^searx\/.*\.py$/.test(sourcePath))
              .map(async (sourcePath) => {
                try {
                  return extractPythonSymbols(
                    await readUtf8(root, sourcePath),
                    sourcePath
                      .replace(/\.py$/, "")
                      .replace(/\/__init__$/, "")
                      .replaceAll("/", "."),
                  );
                } catch {
                  // Some modules contain syntax intentionally outside the
                  // conservative static extractor's subset. Their autodoc
                  // directives remain explicit source-reference entries.
                  return [];
                }
              }),
          )
        ).flat(),
      );
      const documents = new DocumentCollector(project.id);
      for (const sourcePath of pages) {
        await documents.collect(sourcePath, async () => {
          const source = await expandIncludes(
            root,
            sourcePath,
            new Set([sourcePath]),
          );
          const converted = sourcePath.endsWith(".rst")
            ? convertSphinxRst(normalizeSphinx(source), {
                sourcePath,
                homepage: project.homepage,
                repository: project.repository,
                ref: lock.sourceCommit,
                files: archiveFiles,
                labels,
                symbols,
                currentModule: "",
                dialect: "searxng",
              })
            : cleanMarkdown(source);
          const body = rewriteMarkdownLinks(converted, (url, kind) =>
            resolveLink(
              url,
              kind,
              sourcePath,
              archiveFiles,
              project.repository,
              lock.sourceCommit,
            ),
          );
          return {
            sourcePath,
            outputPath: `pages/${sourcePath.replace(/\.rst$/, ".md")}`,
            title: documentTitle(body, {}, sourcePath),
            body,
            canonicalUrl: githubBlobUrl(
              project.repository,
              lock.sourceCommit,
              sourcePath,
            ),
            section: sectionFor(sourcePath),
          };
        });
      }
      return {
        project,
        lock,
        documents: documents.documents,
        quarantined: documents.quarantined,
        notes: [
          "SearXNG tracks master because the repository publishes neither GitHub releases nor release tags.",
          "Checked-in RST and Markdown includes are expanded without executing Sphinx, Jinja, or imported Python modules.",
          "Python autodoc is reproduced from statically extracted source docstrings when available; unresolved imported symbols are identified explicitly without importing or executing upstream modules.",
        ],
        licenseText: await readUtf8(root, "LICENSE"),
      };
    },
    (sourcePath) =>
      sourcePath === "LICENSE" ||
      rootDocuments.includes(sourcePath as (typeof rootDocuments)[number]) ||
      /^docs\/.*\.(?:rst|md)$/.test(sourcePath) ||
      /^searx\/infopage\/en\/.*\.md$/.test(sourcePath) ||
      /^searx\/.*\.py$/.test(sourcePath) ||
      /\.(?:conf|ini|json|py|sh|toml|ya?ml)$/.test(sourcePath),
  );
}

async function expandIncludes(
  root: string,
  sourcePath: string,
  stack: ReadonlySet<string>,
): Promise<string> {
  const source = await readUtf8(root, sourcePath);
  const output: string[] = [];
  const lines = source.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    const include = line.match(/^\s*\.\.\s+include::\s+(\S+)\s*$/)?.[1];
    if (!include) {
      output.push(line);
      continue;
    }
    const relativeIncludePath = path.posix.normalize(
      path.posix.join(path.posix.dirname(sourcePath), include),
    );
    const includePath = (await exists(path.join(root, relativeIncludePath)))
      ? relativeIncludePath
      : `searx/infopage/en/${path.posix.basename(include)}`;
    if (!(await exists(path.join(root, includePath)))) {
      throw new Error(
        `Unable to resolve SearXNG include ${include} from ${sourcePath}`,
      );
    }
    if (stack.has(includePath)) {
      throw new Error(`Circular SearXNG include: ${includePath}`);
    }
    output.push(
      await expandIncludes(root, includePath, new Set([...stack, includePath])),
    );
    while (/^\s+:[\w-]+:/.test(lines[index + 1] ?? "")) {
      index += 1;
    }
  }
  return output.join("\n");
}

function normalizeSphinx(source: string): string {
  return normalizeSpacing(
    source
      .replace(/^([=\-~^"'`:+*#])\1{2,}\n([^\n]+)\n\1{2,}\s*$/gm, "# $2")
      .replace(/\{\{[^{}\n]+\}\}/g, "available"),
  );
}

function collectLabels(
  sources: ReadonlyMap<string, string>,
): ReadonlyMap<string, { sourcePath: string; anchor: string }> {
  const labels = new Map<string, { sourcePath: string; anchor: string }>();
  for (const [sourcePath, source] of sources) {
    for (const match of source.matchAll(
      /^\s*\.\.\s+_([^:]+):(?:\s+\S+)?\s*$/gm,
    )) {
      const label = match[1]?.trim();
      if (label) {
        labels.set(label, {
          sourcePath,
          anchor: label
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, ""),
        });
      }
    }
  }
  return labels;
}

function resolveLink(
  url: string,
  kind: "link" | "image",
  sourcePath: string,
  files: ReadonlySet<string>,
  repository: string,
  ref: string,
): string | undefined {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) {
    return url;
  }
  const match = url.match(/^([^?#]*)(.*)$/);
  const pathname = match?.[1] ?? url;
  const suffix = match?.[2] ?? "";
  let resolved = pathname.startsWith("/")
    ? `docs/${pathname.replace(/^\/(?:docs\/)?/, "")}`
    : path.posix.normalize(
        path.posix.join(path.posix.dirname(sourcePath), pathname),
      );
  if (!files.has(resolved) && files.has(`${resolved}.rst`)) {
    resolved = `${resolved}.rst`;
  }
  if (!files.has(resolved)) {
    return undefined;
  }
  const base =
    kind === "image"
      ? githubRawUrl(repository, ref, resolved)
      : githubBlobUrl(repository, ref, resolved);
  return `${base}${suffix}`;
}

function sectionFor(sourcePath: string): string {
  const section = sourcePath.match(/^docs\/([^/]+)/)?.[1];
  const names: Readonly<Record<string, string>> = {
    admin: "Administration",
    dev: "Development",
    user: "User guide",
    utils: "Utilities",
    src: "Source reference",
  };
  return section ? (names[section] ?? "Documentation") : "Project";
}

function compareCodePoints(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}
