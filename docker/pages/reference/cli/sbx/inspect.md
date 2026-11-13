> Pinned source for Docker main: [data/sbx_cli/sbx_inspect.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_inspect.yaml)

# sbx inspect

Show details for a sandbox

**Usage:** `sbx inspect SANDBOX [flags]`

## Description

Show a human-readable summary of a sandbox: its agent, kits, state, auth mode, workspace and mounts, network policy, secrets, published ports, and active sessions.

With --cloud, SANDBOX is the cloud sandbox ID (sbx\_\*) or name from
"sbx --cloud ls", and the summary reports what the cloud records: template,
sizing, timeout behavior, and the URL each published port is reached at.

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
sbx inspect my-sandbox
  sbx inspect my-sandbox --format json

  sbx --cloud inspect my-sandbox
  sbx --cloud inspect my-sandbox --format json
```
