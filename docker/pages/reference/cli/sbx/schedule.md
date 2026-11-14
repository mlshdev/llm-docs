> Pinned source for Docker main: [data/sbx_cli/sbx_schedule.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_schedule.yaml)

# sbx schedule

Manage scheduled cloud sandbox runs (cloud-only)

**Usage:** `sbx schedule COMMAND`

## Description

Manage schedules that start cloud sandboxes on a cron cadence.

Schedules are a cloud-only feature; every subcommand requires --cloud.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
