> Pinned source for Docker main: [data/sbx_cli/sbx_ls.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_ls.yaml)

# sbx ls

List sandboxes

**Usage:** `sbx ls [flags]`

## Description

List all sandboxes with their agent, status, published ports, and workspace.

## Options

| Option          | Default | Description                |
| --------------- | ------- | -------------------------- |
| `--json`        |         | Output in JSON format      |
| `-q`, `--quiet` |         | Only display sandbox names |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
