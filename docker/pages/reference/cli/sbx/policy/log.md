> Pinned source for Docker main: [data/sbx_cli/sbx_policy_log.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_policy_log.yaml)

# sbx policy log

Show sandbox policy logs

**Usage:** `sbx policy log [SANDBOX] [flags]`

## Description

Show policy logs for all sandboxes, or filter by a specific sandbox name.

Displays which hosts were allowed or blocked by the proxy, along with the
matching rule, proxy type, and request count. Useful for debugging connectivity
issues or auditing network activity.

## Options

| Option     | Default | Description                                                                                                   |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `--format` |         | Output format: table, json or yaml                                                                            |
| `--json`   |         | Output in JSON format                                                                                         |
| `--limit`  |         | Maximum number of log entries to show                                                                         |
| `--type`   | `all`   | Filter logs by type: "all", "network", or "filesystem" (filesystem logs are not supported yet; default "all") |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Show all policy logs
  sbx policy log

  # Show logs for a specific sandbox
  sbx policy log my-sandbox

  # Output in JSON format
  sbx policy log --json

  # Show the last 20 entries
  sbx policy log --limit 20
```
