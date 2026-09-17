> Pinned source for Docker main: [data/sbx_cli/sbx_version.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/sbx_cli/sbx_version.yaml)

# sbx version

Show Docker Sandboxes version information

**Usage:** `sbx version`

## Options

| Option   | Default | Description                                                                                                            |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `--json` |         | Output in JSON format, including the server version and, when the backend reports them, the runtime component versions |

## Global options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |
