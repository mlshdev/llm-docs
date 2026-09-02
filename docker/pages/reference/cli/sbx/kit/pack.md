> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_pack.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/sbx_cli/sbx_kit_pack.yaml)

# sbx kit pack

Package a directory as a kit artifact

**Usage:** `sbx kit pack DIRECTORY [flags]`

> [!NOTE]
> This command is experimental.

## Description

Validate and package a kit artifact directory as a ZIP file.

The directory must contain a valid spec.yaml and an optional files/ directory.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-o`, `--output` |  | Output ZIP file path (default: <name>.zip) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
