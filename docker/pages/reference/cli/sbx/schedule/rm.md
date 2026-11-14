> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_rm.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_schedule_rm.yaml)

# sbx schedule rm

Remove a schedule

**Usage:** `sbx schedule rm SCHEDULE_ID [flags]`

## Description

Remove a schedule so it starts no further runs.

The removal fails if the schedule changed after it was read; inspect it and
retry.

## Options

| Option          | Default | Description                        |
| --------------- | ------- | ---------------------------------- |
| `-f`, `--force` |         | Skip confirmation prompt           |
| `--format`      |         | Output format: table, json or yaml |
| `--json`        |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud schedule rm 0b5c6f3e-1d2a-4c8e-9f70-2a6d1e4b8c31
```
