> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_log-level_set.yaml](https://github.com/docker/docs/blob/31d174d090fd7111ca2199ed54a3978e0d4ac74d/data/sbx_cli/sbx_daemon_log-level_set.yaml)

# sbx daemon log-level set

Set a category's log level (target: proxy, general, or all)

**Usage:** `sbx daemon log-level set TARGET LEVEL [flags]`

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx daemon log-level set proxy debug

  # Every category at once
  sbx daemon log-level set all info
```
