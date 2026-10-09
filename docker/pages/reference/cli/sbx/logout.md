> Pinned source for Docker main: [data/sbx_cli/sbx_logout.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/sbx_cli/sbx_logout.yaml)

# sbx logout

Stop running local sandboxes and sign out of Docker

**Usage:** `sbx logout [flags]`

## Options

| Option        | Default | Description              |
| ------------- | ------- | ------------------------ |
| `-y`, `--yes` |         | Skip confirmation prompt |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
