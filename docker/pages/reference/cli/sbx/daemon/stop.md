> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_stop.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/sbx_cli/sbx_daemon_stop.yaml)

# sbx daemon stop

Stop the sandboxd daemon

**Usage:** `sbx daemon stop [flags]`

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx daemon stop
```
