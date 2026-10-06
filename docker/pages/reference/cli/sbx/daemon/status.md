> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_status.yaml](https://github.com/docker/docs/blob/d745218a0918016144f1ba0d98222b75b21bf65a/data/sbx_cli/sbx_daemon_status.yaml)

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
