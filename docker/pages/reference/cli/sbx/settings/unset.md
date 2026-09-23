> Pinned source for Docker main: [data/sbx_cli/sbx_settings_unset.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_settings_unset.yaml)

# sbx settings unset

Remove a setting override

**Usage:** `sbx settings unset <key> [flags]`

## Description

Remove the user override for a setting.

The setting then evaluates from its environment variable or default value.

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
