> Pinned source for Docker main: [data/sbx_cli/sbx_env_exec.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_env_exec.yaml)

# sbx env exec

Execute a command inside a sandbox environment

**Usage:** `sbx env exec [flags] [PATH...] -- COMMAND [ARG...]`

> \[!NOTE]
> This command is experimental.

## Description

Run COMMAND in the sandbox declared in sbxenv.yaml. The sandbox
must already exist (see "sbx env create" and "sbx env run"); a stopped sandbox is
started first.

Arguments before `--` are environment-file paths, following the same rules as
the other "sbx env" subcommands: each PATH may be a directory (the file is <PATH>/sbxenv.yaml) or the path to the environment file itself, and passing
more than one deep-merges them in order. Without a `--` every positional
argument forms the command and the environment file is read from the current
directory.

A directory PATH selects sbxenv.yaml; a file PATH selects that file.
With no PATH, \~/.sbxenv.yaml supplies shared defaults when present.
Explicit PATHs skip those defaults. Later files override earlier values;
lists such as ports and mcp.servers are concatenated.

Flags match the behavior of "sbx exec".

Exit status is that of the command. sbx exits 125 if it could not run the command,
for example because the sandbox does not exist. A missing command exits 127,
unless a cloud backend reports it as an error rather than a status, which exits 125.

## Options

| Option                | Default | Description                                                                                                                                                            |
| --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-d`, `--detach`      |         | Detached mode (not supported)                                                                                                                                          |
| `--detach-keys`       |         | Override the key sequence for detaching a container                                                                                                                    |
| `-e`, `--env`         |         | Set environment variables                                                                                                                                              |
| `--env-arg`           |         | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental)                                                                    |
| `--env-args-file`     |         | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental)                                                           |
| `--env-file`          |         | Read in a file of environment variables                                                                                                                                |
| `-i`, `--interactive` |         | Keep STDIN open even if not attached                                                                                                                                   |
| `--name`              |         | Name for the sandbox, overriding 'name:' in sbxenv.yaml and the derived <agent>-<directory> (every 'sbx env' command addressing this environment needs the same value) |
| `--privileged`        |         | Give extended privileges to the command                                                                                                                                |
| `-t`, `--tty`         |         | Allocate a pseudo-TTY                                                                                                                                                  |
| `-u`, `--user`        |         | Username or UID (format: \<name\|uid>\[:\<group\|gid>])                                                                                                                |
| `-w`, `--workdir`     |         | Working directory inside the container                                                                                                                                 |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Run a command in the environment declared in the current directory
  sbx env exec go test ./...

  # Open a shell
  sbx env exec -it -- bash

  # Run against explicitly merged environment files
  sbx env exec sbxenv.yaml override.yaml -- npm test
```
