> Pinned source for Docker main: [data/sbx_cli/sbx_login.yaml](https://github.com/docker/docs/blob/4e9a5751518ed8223a8dcde53693badddd72604f/data/sbx_cli/sbx_login.yaml)

# sbx login

Sign in to Docker

**Usage:** `sbx login [flags]`

## Options

| Option             | Default | Description                               |
| ------------------ | ------- | ----------------------------------------- |
| `--password-stdin` |         | Read password or access token from stdin  |
| `--username`       |         | Docker username for non-interactive login |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
