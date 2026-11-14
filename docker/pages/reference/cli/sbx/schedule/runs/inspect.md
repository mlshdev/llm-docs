> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_runs_inspect.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_schedule_runs_inspect.yaml)

# sbx schedule runs inspect

Show the details of a schedule run

**Usage:** `sbx schedule runs inspect SCHEDULE_ID RUN_ID [flags]`

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
sbx --cloud schedule runs inspect SCHEDULE_ID RUN_ID
  sbx --cloud schedule runs inspect SCHEDULE_ID RUN_ID --json
```
