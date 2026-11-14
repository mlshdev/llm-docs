> Pinned source for Docker main: [data/sbx_cli/sbx_policy_log.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_policy_log.yaml)

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
| `--limit`  |         | Maximum number of entries to show in each category (allowed and blocked); 0 shows all                         |
| `--type`   | `all`   | Filter logs by type: "all", "network", or "filesystem" (filesystem logs are not supported yet; default "all") |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Show all policy logs
  sbx policy log

  # Show logs for a specific sandbox
  sbx policy log my-sandbox

  # Output in JSON format
  sbx policy log --json

  # Show up to 20 allowed and 20 blocked entries
  sbx policy log --limit 20
```
