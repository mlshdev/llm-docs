> Pinned source for Docker main: [data/sbx_cli/sbx_volume_rm.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/sbx_cli/sbx_volume_rm.yaml)

# sbx volume rm

Remove a persistent volume

**Usage:** `sbx volume rm NAME [flags]`

## Description

Delete a persistent volume by name.

Volumes attached to active sandboxes cannot be deleted; detach them
first by stopping or deleting the sandbox(es) that mount the volume.

## Options

| Option          | Default | Description                        |
| --------------- | ------- | ---------------------------------- |
| `-f`, `--force` |         | Skip confirmation prompt           |
| `--format`      |         | Output format: table, json or yaml |
| `--json`        |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx --cloud volume rm my-cache
```
