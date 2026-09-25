> Pinned source for Docker main: [data/sbx_cli/sbx_template_ls.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_template_ls.yaml)

# sbx template ls

List template images

**Usage:** `sbx template ls [flags]`

## Description

List all template images stored in the sandbox runtime's image store.

## Options

| Option          | Default | Description                 |
| --------------- | ------- | --------------------------- |
| `--json`        |         | Output in JSON format       |
| `-q`, `--quiet` |         | Only display template names |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# List all template images
  sbx template ls

  # Output in JSON format
  sbx template ls --json
```
