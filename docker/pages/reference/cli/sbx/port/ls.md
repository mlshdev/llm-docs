> Pinned source for Docker main: [data/sbx_cli/sbx_port_ls.yaml](https://github.com/docker/docs/blob/f8d4abc333036d7d71928bab49a417876d348966/data/sbx_cli/sbx_port_ls.yaml)

# sbx port ls

List published ports

**Usage:** `sbx port ls SANDBOX [flags]`

## Description

List the published ports of a sandbox.

With --cloud:
List the exposed ports of a cloud sandbox given by ID (sbx\_\*) or name, each
with its publicly reachable URL.

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx port ls my-sandbox

  # Machine-readable output
  sbx port ls my-sandbox --format json
```
