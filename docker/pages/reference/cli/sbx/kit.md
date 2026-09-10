> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit.yaml](https://github.com/docker/docs/blob/56ff4df658450553e83cf962aeba536b246d51c8/data/sbx_cli/sbx_kit.yaml)

# sbx kit

Manage kit artifacts

**Usage:** `sbx kit COMMAND`

> [!NOTE]
> This command is experimental.

## Description

Manage kit artifacts.

Kits are declarative YAML artifacts that define sandbox agents or extend them
with additional credentials, network policies, environment variables, startup
commands, and files.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
