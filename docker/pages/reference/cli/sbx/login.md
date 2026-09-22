> Pinned source for Docker main: [data/sbx_cli/sbx_login.yaml](https://github.com/docker/docs/blob/c69ce0fd3851270bba5473502268ff7661887b2a/data/sbx_cli/sbx_login.yaml)

# sbx login

Sign in to Docker

**Usage:** `sbx login [flags]`

## Options

| Option             | Default | Description                               |
| ------------------ | ------- | ----------------------------------------- |
| `--password-stdin` |         | Read password or access token from stdin  |
| `--username`       |         | Docker username for non-interactive login |

## Global options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |
