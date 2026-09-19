> Pinned source for Docker main: [data/sbx_cli/sbx_prune.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/data/sbx_cli/sbx_prune.yaml)

# sbx prune

Remove all stopped sandboxes

**Usage:** `sbx prune [flags]`

## Description

Remove all stopped sandboxes and their associated resources.

Only stopped sandboxes are candidates — a running sandbox is never removed,
which makes this safe to run habitually. Stop a sandbox first with
"sbx stop" if you want it pruned. To remove a specific sandbox regardless of
state, use "sbx rm SANDBOX".

Use --filter until=TIMESTAMP to narrow the set to sandboxes that stopped before
TIMESTAMP. The value can be an RFC 3339 timestamp, Unix timestamp, or Go duration
relative to now (e.g. until=168h keeps anything stopped within the last week).
A sandbox whose stop time the daemon cannot report is left alone, since how long
it has been stopped cannot be established.

Use --dry-run to list what would be removed without removing anything, and
\--json with it for machine-readable output.

Pruning requires confirmation; use --force to skip the confirmation prompt
(for non-interactive scripts) and to remove a sandbox that is in use (e.g. an
open SSH connection). This action cannot be undone.

Secrets scoped to each successfully pruned sandbox are also deleted.

Local-only: cloud sandboxes expire via their TTL.

## Options

| Option          | Default | Description                                                                       |
| --------------- | ------- | --------------------------------------------------------------------------------- |
| `--dry-run`     |         | List the sandboxes that would be removed without removing them                    |
| `--filter`      |         | Filter candidates (supported: until=TIMESTAMP — stopped before TIMESTAMP)         |
| `-f`, `--force` |         | Skip confirmation prompts and remove even if in use (e.g. an open SSH connection) |
| `--json`        |         | Output the --dry-run listing in JSON format                                       |

## Global options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |
