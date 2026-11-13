> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_update.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_schedule_update.yaml)

# sbx schedule update

Update a schedule's settings or what it runs

**Usage:** `sbx schedule update SCHEDULE_ID [KIT] [flags]`

## Description

Update a schedule's settings or what it runs.

\--name, --description, --cron, --timezone and --enabled change only those settings.
Any other flag, or KIT, rebuilds what each run executes from the flags given, so
restate --prompt or --command and every run flag to keep: --static-mcp, the
network flags, --max-run-duration, --cpus, --memory, --platform, --env and
\--working-dir not given again are reset, with a warning. Without KIT, the schedule's current kit is resolved again.

## Options

| Option               | Default | Description                                                                                                               |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `--allow-network`    |         | Network pattern each run's sandbox may reach (can be repeated); other egress is denied                                    |
| `--command`          |         | Shell command each run executes                                                                                           |
| `--cpus`             |         | CPUs for each run's sandbox (default: the kit's)                                                                          |
| `--cron`             |         | Five-field cron expression for when runs start, e.g. "0 9 \* \* 1-5"                                                      |
| `--deny-network`     |         | Network pattern to deny within --allow-network (can be repeated)                                                          |
| `--description`      |         | Description of the schedule                                                                                               |
| `--enabled`          | `true`  | Start runs on the cron cadence; --enabled=false pauses the schedule                                                       |
| `-e`, `--env`        |         | Set an environment variable for each run (can be repeated): KEY=VALUE                                                     |
| `--env-file`         |         | Read environment variables from a file (can be repeated). --env wins over any file; a later file wins over an earlier one |
| `--max-run-duration` |         | Longest a run may take, at least 1h, e.g. 2h30m (default: 1h)                                                             |
| `-m`, `--memory`     |         | Memory for each run's sandbox, e.g. 8g (default: the kit's)                                                               |
| `--name`             |         | Name of the schedule                                                                                                      |
| `--platform`         |         | Platform for each run's sandbox: linux/amd64 or linux/arm64                                                               |
| `--prompt`           |         | Prompt each run passes to the kit's agent                                                                                 |
| `--static-mcp`       |         | Cloud MCP gateway servers each run's sandbox gets, comma-separated or repeated                                            |
| `--timezone`         |         | IANA time zone the cron expression is evaluated in, e.g. Europe/Berlin                                                    |
| `--working-dir`      |         | Directory the prompt or command runs in                                                                                   |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud schedule update SCHEDULE_ID --enabled=false
  sbx --cloud schedule update SCHEDULE_ID --cron "0 6 * * 1-5" --timezone America/New_York
  sbx --cloud schedule update SCHEDULE_ID --prompt "Triage new issues" --static-mcp github
```
