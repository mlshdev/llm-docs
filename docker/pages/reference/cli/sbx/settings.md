> Pinned source for Docker main: [data/sbx_cli/sbx_settings.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/data/sbx_cli/sbx_settings.yaml)

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
