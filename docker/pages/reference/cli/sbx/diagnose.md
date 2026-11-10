> Pinned source for Docker main: [data/sbx_cli/sbx_diagnose.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_diagnose.yaml)

# sbx diagnose

Diagnose common issues with your sbx installation

**Usage:** `sbx diagnose [flags]`

## Options

| Option     | Default | Description                                      |
| ---------- | ------- | ------------------------------------------------ |
| `--format` |         | Output format: table, json, yaml or github-issue |
| `--json`   |         | Output in JSON format                            |
| `--upload` |         | Upload diagnostics to Docker support             |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx diagnose

  # Print the report as JSON
  sbx diagnose --format json

  # Upload the report to Docker support
  sbx diagnose --upload
```
