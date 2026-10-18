> Pinned source for Docker main: [data/sbx_cli/sbx_settings_get.yaml](https://github.com/docker/docs/blob/31d174d090fd7111ca2199ed54a3978e0d4ac74d/data/sbx_cli/sbx_settings_get.yaml)

# sbx settings get

Get the value of a setting

**Usage:** `sbx settings get KEY [flags]`

## Description

Print the evaluated value of a setting.

Use --json to print the complete setting record, including its source, type,
default, and description.

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Get a setting value
  sbx settings get proxy.daemon

  # Get in JSON format with source info
  sbx settings get --json proxy.daemon
```
