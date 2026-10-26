> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_inspect.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_kit_builder_history_inspect.yaml)

# sbx kit builder history inspect

Show a kit build record

**Usage:** `sbx kit builder history inspect [ARGS...] [flags]`

> \[!NOTE]
> This command is experimental.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# The most recent build
  sbx kit builder history inspect

  # One build by record reference
  sbx kit builder history inspect 3b6l9x
```
