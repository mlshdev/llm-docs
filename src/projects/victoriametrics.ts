import { buildHugoDocs } from "./hugo-docs.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

// VictoriaMetrics, VictoriaLogs, and vmestimator publish one Hugo site from the
// docs/ tree of each repository.
export function buildVictoriametricsDocs(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  return buildHugoDocs(project, lock, {
    label: project.title,
    docsSite: "https://docs.victoriametrics.com",
    notes: [
      "Pages follow the Hugo `menu.docs` navigation declared in docs/ at the immutable release tag.",
      "Fragments pulled in by `{{% content %}}` are inlined into the page that renders them and are not published separately.",
      "Hugo shortcodes are expanded to plain Markdown; presentation-only attribute lists are dropped.",
    ],
  });
}
