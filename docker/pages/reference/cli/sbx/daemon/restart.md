> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_restart.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/sbx_cli/sbx_daemon_restart.yaml)

# sbx daemon restart

Restart the sandboxd daemon

**Usage:** `sbx daemon restart [flags]`

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx daemon restart
```
