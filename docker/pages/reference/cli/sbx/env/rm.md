> Pinned source for Docker main: [data/sbx_cli/sbx_env_rm.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_env_rm.yaml)

# sbx env rm

Remove a sandbox environment and its scoped resources

**Usage:** `sbx env rm [PATH...] [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Remove the sandbox declared in sbxenv.yaml along with the
secret values provisioned at its sandbox scope (service, custom, and registry
credentials). Global credential bindings are left in place by default since
they are user-wide and may be shared with other sandboxes; pass
\--prune-bindings to also remove the bindings this environment declares.

Each PATH may be a directory (the file is <PATH>/sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics), so the same set used to create the
environment resolves to the same sandbox on removal.

A directory resolves to the sbxenv.yaml in it and to no other name; any
other file is read only when a PATH names it. The hidden .sbxenv.yaml was once
read as a directory's own environment too, so a project still holding one now
reads as having none.

With no PATH, an existing .sbxenv.yaml in your home directory is merged
underneath as a base layer for defaults shared across projects; naming any
PATH skips the layer. It may not set "name:", which identifies a single
project, and its "workspace:" must be rooted at ${{ env.projectDir }} — for
the base that is always the directory the invocation runs from, since naming
any PATH skips it — so the base mounts each project's own directory rather
than one directory under all of them. Changing its "agent:"
changes the derived <agent>-<directory-basename> sandbox name, leaving
sandboxes created under the previous name for "sbx env rm" to miss.

A list such as "ports" or "mcp.servers" concatenates across layers rather
than overriding, so an entry declared in both appears twice.

## Options

| Option                 | Default | Description                                                                                                                                                            |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--env-arg`            |         | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental)                                                                    |
| `--env-args-file`      |         | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental)                                                           |
| `-f`, `--force`        |         | Skip confirmation prompts and delete even if in use (e.g. an open SSH connection)                                                                                      |
| `--name`               |         | Name for the sandbox, overriding 'name:' in sbxenv.yaml and the derived <agent>-<directory> (every 'sbx env' command addressing this environment needs the same value) |
| `--prune-bindings`     |         | Also remove this environment's bindings from the global credentials.yaml                                                                                               |
| `--skip-host-commands` |         | Skip the host lifecycle commands the environment declares                                                                                                              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
