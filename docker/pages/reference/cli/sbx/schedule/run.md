> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_run.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/sbx_cli/sbx_schedule_run.yaml)

# sbx schedule run

Start a run of a schedule now

**Usage:** `sbx schedule run SCHEDULE_ID [flags]`

## Description

Start a run of a schedule now, outside its cron cadence. The schedule definition is unchanged.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud schedule run SCHEDULE_ID
```
