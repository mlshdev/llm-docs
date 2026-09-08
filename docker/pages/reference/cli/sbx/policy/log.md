> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_log.yaml](https://github.com/docker/docs/blob/1808ce9024d6e24a418ae6b43b2413042e2c8e42/data/sbx_cli/sbx_policy_log.yaml)

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
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
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
