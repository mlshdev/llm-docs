> Commit-pinned source for Docker main: [data/sbx_cli/sbx_exec.yaml](https://github.com/docker/docs/blob/14df09affa43a67a6a8f7927a3578a4e4ff1bc28/data/sbx_cli/sbx_exec.yaml)

# sbx exec

Execute a command inside a sandbox

**Usage:** `sbx exec [flags] SANDBOX COMMAND [ARG...]`

## Description

Execute a command in a sandbox. If the sandbox is stopped, it is started first. Or — with --cloud — the cloud sandbox
ID (sbx_*) or name from "sbx --cloud ls".

Flags match the behavior of "docker exec". Some flags (-d, --user, --privileged)
are not supported with --cloud and are rejected rather than silently ignored.
--detach-keys applies only to an interactive (-i/-t) cloud exec.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-d`, `--detach` |  | Detached mode: run command in the background |
| `--detach-keys` |  | Override the key sequence for detaching a container |
| `-e`, `--env` |  | Set environment variables |
| `--env-file` |  | Read in a file of environment variables |
| `-i`, `--interactive` |  | Keep STDIN open even if not attached |
| `--privileged` |  | Give extended privileges to the command |
| `-t`, `--tty` |  | Allocate a pseudo-TTY |
| `-u`, `--user` |  | Username or UID (format: <name\|uid>[:<group\|gid>]) |
| `-w`, `--workdir` |  | Working directory inside the container |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Open a shell inside a sandbox
  sbx exec -it my-sandbox bash

  # Run a command in the background
  sbx exec -d my-sandbox npm start

  # Run as root
  sbx exec -u root my-sandbox apt-get update

  # Cloud: run a command in a cloud sandbox by ID or name
  sbx --cloud exec -it sbx_abc123 bash
  sbx --cloud exec -it claude/my-sandbox bash
```
