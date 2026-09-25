> Pinned source for Docker main: [data/sbx_cli/sbx_policy_reset.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_policy_reset.yaml)

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

With --cloud, deletes the custom cloud network policy for your account and
leaves the local daemon alone. You will be prompted for confirmation unless
\--force is used. Afterwards the default the server now stores is printed.

## Options

| Option          | Default | Description              |
| --------------- | ------- | ------------------------ |
| `-f`, `--force` |         | Skip confirmation prompt |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Reset policies — prompts if sandboxes are running
  sbx policy reset

  # Reset policies without confirmation
  sbx policy reset --force
```
