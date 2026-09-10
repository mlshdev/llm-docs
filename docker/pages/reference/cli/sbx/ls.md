> Commit-pinned source for Docker main: [data/sbx_cli/sbx_ls.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/sbx_cli/sbx_ls.yaml)

# sbx ls

List sandboxes

**Usage:** `sbx ls [flags]`

## Description

List all sandboxes with their agent, status, published ports, and workspace.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |
| `-q`, `--quiet` |  | Only display sandbox names |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
