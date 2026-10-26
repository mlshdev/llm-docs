> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_logs.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_kit_builder_history_logs.yaml)

# sbx kit builder history logs

Show a kit build's logs

**Usage:** `sbx kit builder history logs [ARGS...] [flags]`

> \[!NOTE]
> This command is experimental.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx kit builder history logs
  sbx kit builder history logs 3b6l9x
```
