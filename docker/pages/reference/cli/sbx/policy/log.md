> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_log.yaml](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/data/sbx_cli/sbx_policy_log.yaml)

# sbx policy log

Show sandbox policy logs

**Usage:** `sbx policy log [SANDBOX] [flags]`

## Description

Show policy logs for all sandboxes, or filter by a specific sandbox name.

Displays which hosts were allowed or blocked by the proxy, along with the
matching rule, proxy type, and request count. Useful for debugging connectivity
issues or auditing network activity.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |
| `--limit` |  | Maximum number of log entries to show |
| `-q`, `--quiet` |  | Only display log entries |
| `--type` | `all` | Filter logs by type: "all", "network", or "filesystem" (filesystem logs are not supported yet; default "all") |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

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
