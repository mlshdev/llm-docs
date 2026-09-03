> Commit-pinned source for Docker main: [data/cli/secrets/docker_pass_plugins.yaml](https://github.com/docker/docs/blob/0dd94985910d2b70122891c8cf9173087f7460a8/data/cli/secrets/docker_pass_plugins.yaml)

# docker pass plugins

Manage secrets engine plugins.

**Usage:** `docker pass plugins`

> [!NOTE]
> This command is experimental.

## Description

Manage the plugins that the secrets engine uses to resolve secret references.

Each plugin declares its scope through a pattern, and the engine routes every lookup to the plugins whose pattern matches the requested identifier. A plugin registered with `**` receives every request, while a plugin scoped to `docker/auth/**` only serves Docker auth lookups.

Use the subcommands to inspect which plugins are registered and their current status, to enable or disable configurable plugins at runtime, and to set up or tear down plugin-specific credentials (such as the 1Password service account token).

## Subcommands

- [`docker pass plugins 1password`](https://docs.docker.com/reference/cli/docker/pass/plugins/1password/)
- [`docker pass plugins disable`](https://docs.docker.com/reference/cli/docker/pass/plugins/disable/)
- [`docker pass plugins enable`](https://docs.docker.com/reference/cli/docker/pass/plugins/enable/)
- [`docker pass plugins ls`](https://docs.docker.com/reference/cli/docker/pass/plugins/ls/)

## Examples

List all registered plugins and their status:

```sh
docker pass plugins ls
```

Enable or disable a configurable plugin:

```sh
docker pass plugins enable 1password-cli
docker pass plugins disable 1password-cli
```
