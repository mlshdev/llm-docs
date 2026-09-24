> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_status.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_daemon_status.yaml)

# sbx daemon status

Check sandboxd daemon status

**Usage:** `sbx daemon status [flags]`

## Options

| Option   | Default | Description    |
| -------- | ------- | -------------- |
| `--json` |         | Output as JSON |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
