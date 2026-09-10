> Commit-pinned source for Docker main: [data/sbx_cli/sbx_skills_rm.yaml](https://github.com/docker/docs/blob/2f7b1064bd44cf6c3eddead9e945823e4f565a7b/data/sbx_cli/sbx_skills_rm.yaml)

# sbx skills rm

Remove installed skills

**Usage:** `sbx skills rm <skill>... [flags]`

> [!NOTE]
> This command is experimental.

## Description

Remove one or more installed skills from Docker Sandboxes.

Running agents may be reading installed skills. Removal cannot be undone and
requires confirmation; use --force to skip confirmation in scripts.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Skip confirmation prompts |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
