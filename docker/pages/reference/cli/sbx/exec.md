> Commit-pinned source for Docker main: [data/sbx_cli/sbx_exec.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/sbx_cli/sbx_exec.yaml)

# sbx exec

Execute a command inside a sandbox

**Usage:** `sbx exec [flags] SANDBOX COMMAND [ARG...]`

## Description

Execute a command in a sandbox. If the sandbox is stopped, it is started first.

Flags match the behavior of "docker exec".

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
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Open a shell inside a sandbox
  sbx exec -it my-sandbox bash

  # Run a command in the background
  sbx exec -d my-sandbox npm start

  # Run as root
  sbx exec -u root my-sandbox apt-get update
```
