> Pinned source for Docker main: [data/sbx_cli/sbx_logout.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_logout.yaml)

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
