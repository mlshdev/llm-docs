> Pinned source for Docker main: [data/sbx_cli/sbx.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/data/sbx_cli/sbx.yaml)

# sbx

Manage AI coding agent sandboxes.

**Usage:** `sbx COMMAND`

## Description

Docker Sandboxes creates isolated sandbox environments for AI agents, powered by Docker.

Run without a command to launch interactive mode, or pass a command for CLI usage.

## Options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |
