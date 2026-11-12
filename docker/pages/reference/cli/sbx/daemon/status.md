> Pinned source for Docker main: [data/sbx_cli/sbx_daemon_status.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/sbx_cli/sbx_daemon_status.yaml)

# sbx daemon status

Show sandboxd daemon status

**Usage:** `sbx daemon status [flags]`

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
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx daemon status

  # Machine-readable output
  sbx daemon status --format json
```
