> Commit-pinned source for Docker main: [data/sbx_cli/sbx_prune.yaml](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/data/sbx_cli/sbx_prune.yaml)

# sbx prune

Remove all stopped sandboxes

**Usage:** `sbx prune [flags]`

## Description

Remove all stopped sandboxes and their associated resources.

Only stopped sandboxes are candidates — a running sandbox is never removed,
which makes this safe to run habitually. Stop a sandbox first with
"sbx stop" if you want it pruned. To remove a specific sandbox regardless of
state, use "sbx rm SANDBOX".

Use --filter since=DURATION to narrow the set to sandboxes that have been
stopped for longer than DURATION (e.g. since=168h to keep anything stopped
within the last week). A sandbox whose stop time the daemon cannot report is
left alone, since how long it has been stopped cannot be established.

Use --dry-run to list what would be removed without removing anything.

Pruning requires confirmation; use --force to skip the confirmation prompt
(for non-interactive scripts) and to remove a sandbox that is in use (e.g. an
open SSH connection). This action cannot be undone.

Local-only: cloud sandboxes expire via their TTL.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | List the sandboxes that would be removed without removing them |
| `--filter` |  | Filter candidates (supported: since=DURATION — stopped for longer than DURATION) |
| `-f`, `--force` |  | Skip confirmation prompts and remove even if in use (e.g. an open SSH connection) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
