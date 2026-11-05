> Pinned source for Docker main: [data/sbx_cli/sbx_kit_pack.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_kit_pack.yaml)

# sbx kit pack

Package a directory as a kit artifact

**Usage:** `sbx kit pack DIRECTORY [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Validate and package a kit artifact directory as a ZIP file.

The directory must contain a valid spec.yaml and an optional files/ directory.

## Options

| Option           | Default | Description                                              |
| ---------------- | ------- | -------------------------------------------------------- |
| `-o`, `--output` |         | Output file path; must end in .zip (default: <name>.zip) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx kit pack ./my-kit

  # Choose the archive name
  sbx kit pack ./my-kit --output dist/my-kit.zip
```
