> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills.yaml](https://github.com/docker/docs/blob/920ee0bb1e638c6a39d7c2a1075fa2b1d8f451a7/data/sbx_cli/sbx_skills.yaml)

# sbx skills

Manage skills available in sandboxes

**Usage:** `sbx skills COMMAND`

> [!NOTE]
> This command is experimental.

## Description

Manage skills available to agents in Docker Sandboxes.

Skills are shared across sandboxes by default. Use --no-share-skills when
creating a sandbox to opt out.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
