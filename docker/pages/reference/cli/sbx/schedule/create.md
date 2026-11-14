> Pinned source for Docker main: [data/sbx_cli/sbx_schedule_create.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_schedule_create.yaml)

# sbx schedule create

Create a schedule that runs a kit on a cron cadence

**Usage:** `sbx schedule create KIT [flags]`

## Description

Create a schedule that starts a cloud sandbox from KIT on every cron tick and runs
exactly one of --prompt or --command in it.

KIT is an agent name such as claude, or an oci:// kit reference. Each run's sandbox
denies all egress except the kit's own and --allow-network.

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
sbx --cloud schedule create claude --name nightly-tests --cron "0 2 * * *" --prompt "Run the tests and fix failures"
  sbx --cloud schedule create shell --name cleanup --cron "*/30 * * * *" --timezone Europe/Berlin --command "make clean"
```
