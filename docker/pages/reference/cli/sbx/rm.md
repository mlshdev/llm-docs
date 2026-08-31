> Commit-pinned source for Docker main: [data/sbx_cli/sbx_rm.yaml](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/data/sbx_cli/sbx_rm.yaml)

# sbx rm

Remove one or more sandboxes

**Usage:** `sbx rm [SANDBOX...] [flags]`

## Description

Remove one or more sandboxes and all associated resources.

Stops running sandboxes, removes their containers, cleans up any Git
worktrees, and deletes sandbox state. This action cannot be undone.

Removal requires confirmation; use --force to skip confirmation prompts
(for non-interactive scripts) and to delete a sandbox that is in use
(e.g. an open SSH connection). Use --all to remove every sandbox.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Remove all sandboxes |
| `-f`, `--force` |  | Skip confirmation prompts and delete even if in use (e.g. an open SSH connection) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
