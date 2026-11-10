> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_ls.yaml](https://github.com/docker/docs/blob/75a95460ce3cc8db87a23893490ec331506d08fd/data/sbx_cli/sbx_kit_builder_history_ls.yaml)

# sbx kit builder history ls

List kit build records

**Usage:** `sbx kit builder history ls [ARGS...] [flags]`

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
sbx kit builder history ls
```
