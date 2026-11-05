> Pinned source for Docker main: [data/sbx_cli/sbx_setup_ssh_remove.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_setup_ssh_remove.yaml)

# sbx setup ssh remove

Remove SSH config and desktop targets; keep sandboxes

**Usage:** `sbx setup ssh remove [flags]`

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
sbx setup ssh remove
```
