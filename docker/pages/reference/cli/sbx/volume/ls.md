> Pinned source for Docker main: [data/sbx_cli/sbx_volume_ls.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_volume_ls.yaml)

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
