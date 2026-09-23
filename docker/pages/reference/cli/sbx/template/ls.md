> Pinned source for Docker main: [data/sbx_cli/sbx_template_ls.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_template_ls.yaml)

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
