> Pinned source for Docker main: [data/sbx_cli/sbx_env_rm.yaml](https://github.com/docker/docs/blob/09d7cacc04ae5b1298b811fa31cfb830f3ef194f/data/sbx_cli/sbx_env_rm.yaml)

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

A directory PATH selects sbxenv.yaml; a file PATH selects that file.
With no PATH, \~/.sbxenv.yaml supplies shared defaults when present.
Explicit PATHs skip those defaults. Later files override earlier values;
lists such as ports and mcp.servers are concatenated.

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

## Examples

```console
sbx env rm

  # Also remove the credential bindings the environment created
  sbx env rm --force --prune-bindings ./project
```
