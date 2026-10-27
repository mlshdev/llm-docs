> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_trace.yaml](https://github.com/docker/docs/blob/370c82d98701ada95ec149a7a8ee8bd469e20bcc/data/sbx_cli/sbx_kit_builder_history_trace.yaml)

# sbx kit builder history trace

Show the execution trace of a kit build

**Usage:** `sbx kit builder history trace [ARGS...] [flags]`

> \[!NOTE]
> This command is experimental.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx kit builder history trace
  sbx kit builder history trace 3b6l9x
```
