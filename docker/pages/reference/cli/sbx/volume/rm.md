> Pinned source for Docker main: [data/sbx_cli/sbx_volume_rm.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_volume_rm.yaml)

# sbx volume rm

Delete a persistent volume

**Usage:** `sbx volume rm NAME [flags]`

## Description

Delete a persistent volume by name.

Volumes attached to active sandboxes cannot be deleted; detach them
first by stopping or deleting the sandbox(es) that mount the volume.

## Options

| Option          | Default | Description              |
| --------------- | ------- | ------------------------ |
| `-f`, `--force` |         | Skip confirmation prompt |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx --cloud volume rm my-cache
```
