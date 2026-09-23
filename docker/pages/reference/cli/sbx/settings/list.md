> Pinned source for Docker main: [data/sbx_cli/sbx_settings_list.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_settings_list.yaml)

# sbx settings list

List settings

**Usage:** `sbx settings list [flags]`

## Description

List known settings with their evaluated value, type, source, and description.

The SOURCE column shows where the value came from (default, envvar, or
override). RESTART identifies settings that require 'sbx daemon restart' for
existing daemon-side consumers. Long values and descriptions are truncated to
keep the table readable; use --no-trunc or --json for complete output. Use
'sbx settings get <key>' to print one value in full.

## Options

| Option       | Default | Description                                              |
| ------------ | ------- | -------------------------------------------------------- |
| `--json`     |         | Print complete setting records as JSON                   |
| `--no-trunc` |         | Show full values and descriptions, one setting per block |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# List settings as a table
  sbx settings list

  # List settings as JSON
  sbx settings list --json
```
