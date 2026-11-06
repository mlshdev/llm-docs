> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history_rm.yaml](https://github.com/docker/docs/blob/16e452c8eaea26cec842cbf1065037fb2015001f/data/sbx_cli/sbx_kit_builder_history_rm.yaml)

# sbx kit builder history rm

Remove kit build records

**Usage:** `sbx kit builder history rm [ARGS...] [flags]`

> \[!NOTE]
> This command is experimental.

## Options

| Option        | Default | Description              |
| ------------- | ------- | ------------------------ |
| `-y`, `--yes` |         | Skip confirmation prompt |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx kit builder history rm 3b6l9x

  # Skip the confirmation prompt
  sbx kit builder history rm --yes 3b6l9x
```
