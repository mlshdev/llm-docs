> Pinned source for Docker main: [data/sbx_cli/sbx_setup_ssh.yaml](https://github.com/docker/docs/blob/53581df94e05ad4116a8d31e47ea098289fa5498/data/sbx_cli/sbx_setup_ssh.yaml)

# sbx setup ssh

Set up SSH client config for the sandbox endpoint

**Usage:** `sbx setup ssh [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Write a generated SSH config + known\_hosts and include it from
\~/.ssh/config so "ssh <name>.sbx" connects with no prompts. Named app instances
use "ssh <name>.sbx-<app>" instead. Re-run any time; it's idempotent.

No SSH client key is needed — authentication is handled by the daemon's local
socket or named pipe (OS user boundary) combined with an active Docker login. Sign in first
(sbx login). On macOS and Windows, use --auto-create to install the fixed codex.sbx and
claude.sbx desktop profiles. Sandboxes are created with the standard resource defaults.

## Options

| Option          | Default | Description                                                           |
| --------------- | ------- | --------------------------------------------------------------------- |
| `--alias`       | `*.sbx` | ssh\_config Host pattern to write                                     |
| `--auto-create` |         | enable managed Codex and Claude Desktop profiles on macOS and Windows |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx setup ssh
  ssh my-sandbox.sbx -- echo hello
```
