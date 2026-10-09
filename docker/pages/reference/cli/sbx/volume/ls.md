> Pinned source for Docker main: [data/sbx_cli/sbx_volume_ls.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/sbx_cli/sbx_volume_ls.yaml)

# sbx volume ls

List persistent volumes

**Usage:** `sbx volume ls [flags]`

## Options

| Option          | Default | Description               |
| --------------- | ------- | ------------------------- |
| `--json`        |         | Output in JSON format     |
| `-q`, `--quiet` |         | Only display volume names |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx --cloud volume ls
```
