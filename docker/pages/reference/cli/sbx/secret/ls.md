> Commit-pinned source for Docker main: [data/sbx_cli/sbx_secret_ls.yaml](https://github.com/docker/docs/blob/b98c400647c70f3e2177d513802d5d785aef232e/data/sbx_cli/sbx_secret_ls.yaml)

# sbx secret ls

List stored secrets

**Usage:** `sbx secret ls [flags]`

## Description

List stored secrets across global and sandbox scopes.

With no scope flag, all stored secrets are shown. Use --global to show only
global secrets, or --sandbox to show only secrets scoped to one sandbox.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-g`, `--global` |  | Only list global secrets |
| `--sandbox` |  | Only list secrets for one sandbox |
| `--service` |  | Filter by secret service name |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

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
```
