> Pinned source for Docker main: [data/sbx_cli/sbx_ls.yaml](https://github.com/docker/docs/blob/75a95460ce3cc8db87a23893490ec331506d08fd/data/sbx_cli/sbx_ls.yaml)

# sbx ls

List sandboxes

**Usage:** `sbx ls [flags]`

## Description

List all sandboxes with their agent, status, published ports, and workspace.

## Options

| Option          | Default | Description                        |
| --------------- | ------- | ---------------------------------- |
| `--format`      |         | Output format: table, json or yaml |
| `--json`        |         | Output in JSON format              |
| `-q`, `--quiet` |         | Only display sandbox names         |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx ls

  # Names only, for scripting
  sbx ls -q

  # Machine-readable output
  sbx ls --format json
```
