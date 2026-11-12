> Pinned source for Docker main: [data/sbx_cli/sbx_exec.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/sbx_cli/sbx_exec.yaml)

# sbx exec

Execute a command inside a sandbox

**Usage:** `sbx exec [flags] SANDBOX COMMAND [ARG...]`

## Description

Execute a command in a sandbox. If the sandbox is stopped, it is started first. Or — with --cloud — the cloud sandbox
ID (sbx\_\*) or name from "sbx --cloud ls". --user is not supported with --cloud.
\--detach-keys applies only to an interactive (-i/-t) cloud exec.

Exit status is that of the command. sbx exits 125 if it could not run the command,
for example because the sandbox does not exist. A missing command exits 127,
unless a cloud backend reports it as an error rather than a status, which exits 125.

## Options

| Option                | Default | Description                                                                                              |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `--detach-keys`       |         | Override the key sequence for detaching an interactive cloud exec session (not supported for local exec) |
| `-e`, `--env`         |         | Set environment variables                                                                                |
| `--env-file`          |         | Read in a file of environment variables                                                                  |
| `-i`, `--interactive` |         | Keep STDIN open even if not attached                                                                     |
| `-t`, `--tty`         |         | Allocate a pseudo-TTY                                                                                    |
| `-u`, `--user`        |         | Username or UID (format: \<name\|uid>\[:\<group\|gid>])                                                  |
| `-w`, `--workdir`     |         | Working directory inside the container                                                                   |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Open a shell inside a sandbox
  sbx exec -it my-sandbox bash

  # Run as root
  sbx exec -u root my-sandbox apt-get update

  # Cloud: run a command in a cloud sandbox by ID or name
  sbx --cloud exec -it sbx_abc123 bash
  sbx --cloud exec -it claude/my-sandbox bash
```
