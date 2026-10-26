> Pinned source for Docker main: [data/sbx_cli/sbx_rm.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_rm.yaml)

# sbx rm

Remove one or more sandboxes

**Usage:** `sbx rm [SANDBOX...] [flags]`

## Description

Remove one or more sandboxes. Or — with --cloud — the cloud sandbox
ID (sbx\_\*) or name from "sbx --cloud ls".

For local sandboxes, stops them, removes their containers, cleans up any Git
worktrees, deletes sandbox state, and deletes secrets scoped to each removed
sandbox. Host-mount directories and persistent volume\@1 storage created with
retention support are kept; creating the same sandbox name with the same kit
reattaches its persistent volumes. This action cannot be undone. With --cloud, deletes
the sandbox in Docker Sandboxes Cloud. This action cannot be undone. Once the
server accepts the request, rm waits up to 60 seconds per sandbox for the
deletion. A removal still completing after that exits 0. Verify it later with
"sbx --cloud ls".

Removal requires confirmation; use --force to skip confirmation prompts
(for non-interactive scripts) and to delete a sandbox that is in use
(e.g. an open SSH connection). Use --all to remove every sandbox. With --cloud, --all is
intentionally disabled as a safety gate — the blast radius covers every
sandbox the credential can see, which may include shared or production
workloads. Pass IDs explicitly in --cloud mode.

## Options

| Option          | Default | Description                                                                       |
| --------------- | ------- | --------------------------------------------------------------------------------- |
| `--all`         |         | Remove all sandboxes                                                              |
| `-f`, `--force` |         | Skip confirmation prompts and delete even if in use (e.g. an open SSH connection) |
| `--format`      |         | Output format: table, json or yaml                                                |
| `--json`        |         | Output in JSON format                                                             |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx rm my-sandbox

  # Remove several at once
  sbx rm one two

  # Remove every sandbox without asking
  sbx rm --all --force
```
