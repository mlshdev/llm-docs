> Pinned source for Docker main: [data/sbx_cli/sbx_volume_create.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_volume_create.yaml)

# sbx volume create

Create a new persistent volume

**Usage:** `sbx volume create NAME [flags]`

## Description

Create a new persistent volume.

The volume name must be unique per account; an attempt to create a volume
with a name already in use is rejected.

## Options

| Option   | Default | Description           |
| -------- | ------- | --------------------- |
| `--json` |         | Output in JSON format |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx --cloud volume create my-cache
```
