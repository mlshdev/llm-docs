> Pinned source for Docker main: [data/sbx_cli/sbx_logout.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/sbx_cli/sbx_logout.yaml)

# sbx logout

Stop running local sandboxes and sign out of Docker

**Usage:** `sbx logout [flags]`

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
sbx logout

  # Skip the confirmation prompt
  sbx logout --force
```
