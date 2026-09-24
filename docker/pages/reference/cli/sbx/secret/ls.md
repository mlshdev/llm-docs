> Pinned source for Docker main: [data/sbx_cli/sbx_secret_ls.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_secret_ls.yaml)

# sbx secret ls

List stored secrets

**Usage:** `sbx secret ls [flags]`

## Description

List stored secrets across global and sandbox scopes.

With no scope flag, all stored secrets are shown. Use --global to show only
global secrets, or --sandbox to show only secrets scoped to one sandbox.

## Options

| Option           | Default | Description                       |
| ---------------- | ------- | --------------------------------- |
| `-g`, `--global` |         | Only list global secrets          |
| `--json`         |         | Output in JSON format             |
| `-q`, `--quiet`  |         | Only display secret names         |
| `--sandbox`      |         | Only list secrets for one sandbox |
| `--service`      |         | Filter by secret service name     |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# List all secrets
  sbx secret ls

  # List only global secrets
  sbx secret ls -g

  # List secrets for a specific sandbox
  sbx secret ls --sandbox my-sandbox

  # Filter by service
  sbx secret ls --service github

  # Machine-readable output for scripting
  sbx secret ls --json
```
