> Pinned source for Docker main: [data/sbx_cli/sbx_settings.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_settings.yaml)

# sbx settings

Manage Docker Sandboxes settings

**Usage:** `sbx settings COMMAND`

## Description

View and manage settings for Docker Sandboxes.

Settings can come from defaults, environment variables, or user overrides.
These commands use the local daemon to read evaluated values and manage
overrides, starting it if necessary.

Most changes take effect within about five seconds. Some require a daemon
restart.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
