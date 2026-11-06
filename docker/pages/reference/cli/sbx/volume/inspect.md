> Pinned source for Docker main: [data/sbx_cli/sbx_volume_inspect.yaml](https://github.com/docker/docs/blob/16e452c8eaea26cec842cbf1065037fb2015001f/data/sbx_cli/sbx_volume_inspect.yaml)

# sbx volume inspect

Show volume details

**Usage:** `sbx volume inspect NAME [flags]`

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud volume inspect my-cache
```
