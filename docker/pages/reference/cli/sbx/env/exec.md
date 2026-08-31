> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_exec.yaml](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/data/sbx_cli/sbx_env_exec.yaml)

# sbx env exec

Execute a command inside a sandbox environment

**Usage:** `sbx env exec [flags] [PATH...] -- COMMAND [ARG...]`

> [!NOTE]
> This command is experimental.

## Description

Run COMMAND in the sandbox declared in .sbxenv.yaml. The sandbox
must already exist (see "sbx env create" and "sbx env run"); a stopped sandbox is
started first.

Arguments before `--` are environment-file paths, following the same rules as
the other "sbx env" subcommands: each PATH may be a directory (the file is
<PATH>/.sbxenv.yaml) or the path to the environment file itself, and passing
more than one deep-merges them in order. Without a `--` every positional
argument forms the command and the environment file is read from the current
directory.

Flags match the behavior of "sbx exec".

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
# Run a command in the environment declared in the current directory
  sbx env exec go test ./...

  # Open a shell
  sbx env exec -it -- bash

  # Run against explicitly merged environment files
  sbx env exec .sbxenv.yaml override.yaml -- npm test
```
