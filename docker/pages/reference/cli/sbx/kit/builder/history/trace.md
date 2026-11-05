> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_trace.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_kit_builder_history_trace.yaml)

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
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx kit builder history trace
  sbx kit builder history trace 3b6l9x
```
