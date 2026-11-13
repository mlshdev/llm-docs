> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_runs.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_schedule_runs.yaml)

# sbx schedule runs

List the runs of a schedule

**Usage:** `sbx schedule runs SCHEDULE_ID [flags]`

## Description

List the runs of a schedule, newest first.

## Options

| Option          | Default | Description                                 |
| --------------- | ------- | ------------------------------------------- |
| `--format`      |         | Output format: table, json or yaml          |
| `--json`        |         | Output in JSON format                       |
| `--limit`       | `20`    | Maximum number of runs to show; 0 shows all |
| `-q`, `--quiet` |         | Only display run IDs                        |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud schedule runs SCHEDULE_ID
  sbx --cloud schedule runs SCHEDULE_ID --limit 0 --json
```
