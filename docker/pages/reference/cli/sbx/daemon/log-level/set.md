> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_log-level_set.yaml](https://github.com/docker/docs/blob/947343021a3e1eea022cbede8df39387717343f9/data/sbx_cli/sbx_daemon_log-level_set.yaml)

# sbx daemon log-level set

Set a category's log level (target: proxy, general, or all)

**Usage:** `sbx daemon log-level set TARGET LEVEL [flags]`

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx daemon log-level set proxy debug

  # Every category at once
  sbx daemon log-level set all info
```
