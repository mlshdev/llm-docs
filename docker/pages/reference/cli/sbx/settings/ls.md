> Pinned source for Docker main: [data/sbx_cli/sbx_settings_ls.yaml](https://github.com/docker/docs/blob/31d174d090fd7111ca2199ed54a3978e0d4ac74d/data/sbx_cli/sbx_settings_ls.yaml)

# sbx settings ls

List settings

**Usage:** `sbx settings ls [flags]`

## Description

List known settings with their evaluated value, type, source, and description.

The SOURCE column shows where the value came from (default, envvar, or
override). RESTART identifies settings that require 'sbx daemon restart' for
existing daemon-side consumers. Long values and descriptions are truncated to
keep the table readable; use --no-trunc or --format json for complete output. Use
'sbx settings get KEY' to print one value in full.

## Options

| Option       | Default | Description                                              |
| ------------ | ------- | -------------------------------------------------------- |
| `--format`   |         | Output format: table, json or yaml                       |
| `--json`     |         | Output in JSON format                                    |
| `--no-trunc` |         | Show full values and descriptions, one setting per block |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# List settings as a table
  sbx settings ls

  # List settings as JSON
  sbx settings ls --format json
```
