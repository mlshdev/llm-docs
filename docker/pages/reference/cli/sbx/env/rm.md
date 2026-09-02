> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_rm.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/sbx_cli/sbx_env_rm.yaml)

# sbx env rm

Remove a sandbox environment and its scoped resources

**Usage:** `sbx env rm [PATH...] [flags]`

> [!NOTE]
> This command is experimental.

## Description

Remove the sandbox declared in .sbxenv.yaml along with the
secret values provisioned at its sandbox scope (service, custom, and registry
credentials). Global credential bindings are left in place by default since
they are user-wide and may be shared with other sandboxes; pass
--prune-bindings to also remove the bindings this environment declares.

Each PATH may be a directory (the file is <PATH>/.sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics), so the same set used to create the
environment resolves to the same sandbox on removal.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Skip confirmation prompts |
| `--prune-bindings` |  | Also remove this environment's bindings from the global credentials.yaml |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
