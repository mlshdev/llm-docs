> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_exec.yaml](https://github.com/docker/docs/blob/56ff4df658450553e83cf962aeba536b246d51c8/data/sbx_cli/sbx_env_exec.yaml)

# sbx env exec

Execute a command inside a sandbox environment

**Usage:** `sbx env exec [flags] [PATH...] -- COMMAND [ARG...]`

> [!NOTE]
> This command is experimental.

## Description

Run COMMAND in the sandbox declared in sbxenv.yaml. The sandbox
must already exist (see "sbx env create" and "sbx env run"); a stopped sandbox is
started first.

Arguments before `--` are environment-file paths, following the same rules as
the other "sbx env" subcommands: each PATH may be a directory (the file is
<PATH>/sbxenv.yaml) or the path to the environment file itself, and passing
more than one deep-merges them in order. Without a `--` every positional
argument forms the command and the environment file is read from the current
directory.

A directory resolves to the sbxenv.yaml in it and to no other name; any
other file is read only when a PATH names it. The hidden .sbxenv.yaml was once
read as a directory's own environment too, so a project still holding one now
reads as having none.

With no PATH, an existing .sbxenv.yaml in your home directory is merged
underneath as a base layer for defaults shared across projects; naming any
PATH skips the layer. It may not set "name:" or "workspace:", each of which
identifies a single project. Changing its "agent:" changes the derived
<agent>-<directory-basename> sandbox name, leaving sandboxes created under
the previous name for "sbx env rm" to miss.

A list such as "ports" or "mcp.servers" concatenates across layers rather
than overriding, so an entry declared in both appears twice.

Flags match the behavior of "sbx exec".

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-d`, `--detach` |  | Detached mode: run command in the background |
| `--detach-keys` |  | Override the key sequence for detaching a container |
| `-e`, `--env` |  | Set environment variables |
| `--env-arg` |  | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental) |
| `--env-args-file` |  | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental) |
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
# Run a command in the environment declared in the current directory
  sbx env exec go test ./...

  # Open a shell
  sbx env exec -it -- bash

  # Run against explicitly merged environment files
  sbx env exec sbxenv.yaml override.yaml -- npm test
```
