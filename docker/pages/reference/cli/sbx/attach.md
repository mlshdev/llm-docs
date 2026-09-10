> Commit-pinned source for Docker main: [data/sbx_cli/sbx_attach.yaml](https://github.com/docker/docs/blob/920ee0bb1e638c6a39d7c2a1075fa2b1d8f451a7/data/sbx_cli/sbx_attach.yaml)

# sbx attach

Attach to a running cloud sandbox

**Usage:** `sbx attach SANDBOX [flags]`

## Description

Attach an interactive terminal session to a running cloud sandbox.

SANDBOX is the cloud sandbox ID (sbx_*) or name from "sbx --cloud ls".

Opens a PTY-backed exec session against the sandbox's agent process. The
sandbox must already exist and be in a running state; use `sbx --cloud run`
to create a sandbox and attach in one step.

Only supported with --cloud. See https://docs.docker.com/ai/sandboxes/ for the cloud sandbox model.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--detach-keys` |  | Override the detach gesture that leaves the agent running (Docker-style, e.g. "ctrl-\", "ctrl-x,ctrl-d"). Default: Ctrl-\. Use this when the default collides with an agent's keymap (cloud only). |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Attach to a running sandbox by ID or name
  sbx --cloud attach sbx_abc123
  sbx --cloud attach claude/my-sandbox
```
