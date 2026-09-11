> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion.yaml](https://github.com/docker/docs/blob/14df09affa43a67a6a8f7927a3578a4e4ff1bc28/data/sbx_cli/sbx_completion.yaml)

# sbx completion

Generate the autocompletion script for the specified shell

**Usage:** `sbx completion COMMAND`

## Description

Generate the autocompletion script for sbx for the specified shell.
See each sub-command's help for details on how to use the generated script.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
