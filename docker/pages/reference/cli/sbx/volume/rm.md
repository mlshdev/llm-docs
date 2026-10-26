> Pinned source for Docker main: [data/sbx_cli/sbx_volume_rm.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_volume_rm.yaml)

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
