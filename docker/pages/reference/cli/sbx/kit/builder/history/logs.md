> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_logs.yaml](https://github.com/docker/docs/blob/09d7cacc04ae5b1298b811fa31cfb830f3ef194f/data/sbx_cli/sbx_kit_builder_history_logs.yaml)

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
