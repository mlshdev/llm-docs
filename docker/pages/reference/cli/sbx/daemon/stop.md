> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_stop.yaml](https://github.com/docker/docs/blob/53581df94e05ad4116a8d31e47ea098289fa5498/data/sbx_cli/sbx_daemon_stop.yaml)

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
