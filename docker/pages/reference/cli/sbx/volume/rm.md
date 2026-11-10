> Pinned source for Docker main: [data/sbx_cli/sbx_volume_rm.yaml](https://github.com/docker/docs/blob/75a95460ce3cc8db87a23893490ec331506d08fd/data/sbx_cli/sbx_volume_rm.yaml)

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
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud volume rm my-cache
```
