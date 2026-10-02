> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_log-level_set.yaml](https://github.com/docker/docs/blob/1cb9a4d2c65d712da863e30cd3a1319ddeea3298/data/sbx_cli/sbx_daemon_log-level_set.yaml)

# sbx daemon log-level set

Set a category's log level (target: proxy, general, or all)

**Usage:** `sbx daemon log-level set <target> <level> [flags]`

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
