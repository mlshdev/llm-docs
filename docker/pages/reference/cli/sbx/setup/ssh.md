> Commit-pinned source for Docker main: [data/sbx_cli/sbx_setup_ssh.yaml](https://github.com/docker/docs/blob/bbf8dfd2f0205fd5c754eedceac8f8b69aa91f81/data/sbx_cli/sbx_setup_ssh.yaml)

# sbx setup ssh

Set up SSH client config for the sandbox endpoint

**Usage:** `sbx setup ssh [flags]`

> [!NOTE]
> This command is experimental.

## Description

Write a generated SSH config + known_hosts and include it from
~/.ssh/config so "ssh <name>.sbx" connects with no prompts. Named app instances
use "ssh <name>.sbx-<app>" instead. Re-run any time; it's idempotent.

No SSH client key is needed — authentication is handled by the daemon's Unix
socket (OS user boundary) combined with an active Docker login. Sign in first
(sbx login).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--alias` | `*.sbx` | ssh_config Host pattern to write |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx setup ssh
  ssh my-sandbox.sbx -- echo hello
```
