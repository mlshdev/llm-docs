> Pinned source for Docker main: [data/sbx_cli/sbx_settings_unset.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_settings_unset.yaml)

# sbx settings unset

Remove a setting override

**Usage:** `sbx settings unset KEY [flags]`

## Description

Remove the user override for a setting.

Administrator policy remains in effect. Otherwise, the setting evaluates from
its environment variable, remote default, or built-in default.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Remove the override for a setting
  sbx settings unset proxy.daemon
```
