> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_reset.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_policy_reset.yaml)

# sbx policy reset

Reset policies to defaults

**Usage:** `sbx policy reset [flags]`

## Description

Remove all custom policies and restart the daemon to restore defaults.

This deletes the local policy store and stops the daemon. The daemon restarts
automatically on the next command, then prompts you to initialize the global
network policy again.

If sandboxes are currently running, they will be stopped when the daemon
shuts down. You will be prompted for confirmation unless --force is used.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Skip confirmation prompt |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Reset policies — prompts if sandboxes are running
  sbx policy reset

  # Reset policies without confirmation
  sbx policy reset --force
```
