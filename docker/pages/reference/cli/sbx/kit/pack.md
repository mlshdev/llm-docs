> Pinned source for Docker main: [data/sbx_cli/sbx_kit_pack.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_kit_pack.yaml)

# sbx kit pack

Package a directory as a kit artifact

**Usage:** `sbx kit pack DIRECTORY [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Validate and package a kit artifact directory as a ZIP file.

The directory must contain a valid spec.yaml and an optional files/ directory.

## Options

| Option           | Default | Description                                |
| ---------------- | ------- | ------------------------------------------ |
| `-o`, `--output` |         | Output ZIP file path (default: <name>.zip) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
