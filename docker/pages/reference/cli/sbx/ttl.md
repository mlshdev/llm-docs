> Pinned source for Docker main: [data/sbx_cli/sbx_ttl.yaml](https://github.com/docker/docs/blob/c69ce0fd3851270bba5473502268ff7661887b2a/data/sbx_cli/sbx_ttl.yaml)

# sbx ttl

Inspect or extend a cloud sandbox's TTL

**Usage:** `sbx ttl [+DURATION] SANDBOX`

## Description

Inspect or extend a cloud sandbox's TTL.

With one argument, prints the current expiration and the maximum
remaining time before the sandbox's hard 24h-from-creation ceiling.

With two arguments — a duration prefixed with '+' followed by a sandbox
ID or name — extends the TTL by that amount, subject to the server-enforced
ceiling. The server cannot shorten an expiration, so DURATION must be
positive.

SANDBOX may be given by ID (sbx\_\*) or name, as shown by "sbx --cloud ls".

Cloud-only: local sandboxes are not TTL-managed.

## Options

| Option   | Default | Description    |
| -------- | ------- | -------------- |
| `--json` |         | Output as JSON |

## Global options

| Option            | Default                                  | Description                                                                                                                                                                                                             |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cloud`         |                                          | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list)                                                                  |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (<https://api.sandboxes-cloud.docker.com>). Set DOCKER\_CLOUD\_API\_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug`   |                                          | Enable debug logging                                                                                                                                                                                                    |
