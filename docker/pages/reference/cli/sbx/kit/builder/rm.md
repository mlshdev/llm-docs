> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_rm.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_kit_builder_rm.yaml)

# sbx kit builder rm

Remove the kit builder sandbox and its build cache

**Usage:** `sbx kit builder rm [flags]`

> \[!NOTE]
> This command is experimental.

## Options

| Option          | Default | Description                                         |
| --------------- | ------- | --------------------------------------------------- |
| `-f`, `--force` |         | Skip confirmation prompts and delete even if in use |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
