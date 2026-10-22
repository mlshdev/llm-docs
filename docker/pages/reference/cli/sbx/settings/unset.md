> Pinned source for Docker main: [data/sbx_cli/sbx_settings_unset.yaml](https://github.com/docker/docs/blob/09d7cacc04ae5b1298b811fa31cfb830f3ef194f/data/sbx_cli/sbx_settings_unset.yaml)

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

## Examples

```console
# Remove the override for a setting
  sbx settings unset proxy.daemon
```
