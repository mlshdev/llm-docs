import { buildAria2 } from "./aria2.ts";
import { buildDatasourcePlugin } from "./datasource-plugin.ts";
import { buildBun } from "./bun.ts";
import { buildDocker } from "./docker.ts";
import { buildFfmpeg } from "./ffmpeg.ts";
import { buildGrafana } from "./grafana.ts";
import { buildNetbird } from "./netbird.ts";
import { buildN8n } from "./n8n.ts";
import { buildPodman } from "./podman.ts";
import { buildSearxng } from "./searxng.ts";
import { buildTraefik } from "./traefik.ts";
import { buildTriggerDev } from "./trigger-dev.ts";
import { buildVictoriametricsDocs } from "./victoriametrics.ts";
import { buildZitadel } from "./zitadel.ts";
import { buildYtDlp } from "./yt-dlp.ts";
import {
  assertQuarantineBudget,
  describeError,
  ProjectBuildError,
} from "../quarantine.ts";
import type { LockedSource, ProjectBuild, SourceProject } from "../types.ts";

export async function buildProject(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  let build: ProjectBuild;
  try {
    build = await runAdapter(project, lock);
  } catch (error) {
    if (error instanceof ProjectBuildError) {
      throw error;
    }
    throw new ProjectBuildError(
      project.id,
      `${project.id} ${lock.tag} failed to build: ${describeError(error)}`,
      { cause: error },
    );
  }
  assertQuarantineBudget(build);
  return build;
}

function runAdapter(
  project: SourceProject,
  lock: LockedSource,
): Promise<ProjectBuild> {
  switch (project.id) {
    case "traefik":
      return buildTraefik(project, lock);
    case "netbird":
      return buildNetbird(project, lock);
    case "podman":
      return buildPodman(project, lock);
    case "docker":
      return buildDocker(project, lock);
    case "n8n":
      return buildN8n(project, lock);
    case "grafana":
      return buildGrafana(project, lock);
    case "victoriametrics":
    case "victorialogs":
    case "vmestimator":
      return buildVictoriametricsDocs(project, lock);
    case "victoriametrics-datasource":
    case "victorialogs-datasource":
      return buildDatasourcePlugin(project, lock);
    case "zitadel":
      return buildZitadel(project, lock);
    case "ffmpeg":
      return buildFfmpeg(project, lock);
    case "yt-dlp":
      return buildYtDlp(project, lock);
    case "searxng":
      return buildSearxng(project, lock);
    case "bun":
      return buildBun(project, lock);
    case "trigger-dev":
      return buildTriggerDev(project, lock);
    case "aria2":
      return buildAria2(project, lock);
  }
}
