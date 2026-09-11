> Commit-pinned source for Docker main: [data/sbx_cli/sbx_stop.yaml](https://github.com/docker/docs/blob/2054b419afd87a3232f2e77366a561e172e27c67/data/sbx_cli/sbx_stop.yaml)

# sbx stop

Stop one or more sandboxes without removing them

**Usage:** `sbx stop SANDBOX [SANDBOX...]`

## Description

Stop one or more running sandboxes without removing them. Or — with --cloud — the cloud sandbox
ID (sbx_*) or name from "sbx --cloud ls".

Stopped sandboxes retain their state and can be restarted with "sbx run".

With --cloud, stop suspends each sandbox in place: its full state (memory +
disk) is preserved, the host is released, and the sandbox keeps its ID.
Restart it — same ID — by running its agent again ("sbx --cloud run <agent>")
and picking the stopped sandbox from the prompt. A detached run (--detached)
creates a new sandbox instead of restarting a stopped one.

Stop does not create a template and does not delete the sandbox. To capture
a durable, shareable template from a running sandbox instead, use
"sbx --cloud template save SANDBOX TAG" (which leaves the sandbox
running).

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
