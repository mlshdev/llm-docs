> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_rm.yaml](https://github.com/docker/docs/blob/56ff4df658450553e83cf962aeba536b246d51c8/data/sbx_cli/sbx_env_rm.yaml)

# sbx env rm

Remove a sandbox environment and its scoped resources

**Usage:** `sbx env rm [PATH...] [flags]`

> [!NOTE]
> This command is experimental.

## Description

Remove the sandbox declared in sbxenv.yaml along with the
secret values provisioned at its sandbox scope (service, custom, and registry
credentials). Global credential bindings are left in place by default since
they are user-wide and may be shared with other sandboxes; pass
--prune-bindings to also remove the bindings this environment declares.

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
PATH skips the layer. It may not set "name:" or "workspace:", each of which
identifies a single project. Changing its "agent:" changes the derived
<agent>-<directory-basename> sandbox name, leaving sandboxes created under
the previous name for "sbx env rm" to miss.

A list such as "ports" or "mcp.servers" concatenates across layers rather
than overriding, so an entry declared in both appears twice.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--env-arg` |  | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental) |
| `--env-args-file` |  | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental) |
| `-f`, `--force` |  | Skip confirmation prompts and delete even if in use (e.g. an open SSH connection) |
| `--prune-bindings` |  | Also remove this environment's bindings from the global credentials.yaml |
| `--skip-host-commands` |  | Skip the host lifecycle commands the environment declares |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
