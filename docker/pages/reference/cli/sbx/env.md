> Pinned source for Docker main: [data/sbx_cli/sbx_env.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/sbx_cli/sbx_env.yaml)

# sbx env

Manage sandboxes declaratively from an sbxenv.yaml file

**Usage:** `sbx env COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Manage a sandbox declared in an sbxenv.yaml file. The file selects the agent,
kits, workspace mounts, environment variables, secrets, and credential bindings.

Use create to provision the sandbox, run to start or join its agent session,
exec to run a command, and rm to remove it and its provisioned secrets.
Use plan to preview changes. Changes require approval; --force skips the prompt.

Lifecycle commands, command-based secrets, and command-backed MCP servers execute
on the host with your permissions. Keep secret helpers and their dependencies
outside writable sandbox mounts, and use absolute helper paths.

MCP command approval persists across sandbox and daemon restarts. Use
\--skip-host-commands to skip lifecycle commands and disable owned host MCP
commands until a later "sbx env run" without the flag. If initialize creates
a missing MCP executable or changes its resolved path, a second approval is
required before registration or sandbox creation.

The environment file is mounted read-only by default when shared with the
sandbox. Set sandboxOptions.writableEnvFiles only when you trust the agent
to change what future invocations run on the host.

With --cloud, manage a cloud sandbox from the same file. Host workspace mounts,
host port bindings, MCP definitions, registry credentials, and unsnapshotted
dynamic secret sources are unsupported. Clone the project inside the sandbox instead.

Secrets and bindings are provisioned at creation; changes require recreating
the sandbox. Removal deletes secrets provisioned by this environment; bindings
are retained unless --prune-bindings is passed. Use the same cloud target,
identity, and ordered files for subsequent commands.

For file syntax and workflows, see:
<https://docs.docker.com/ai/sandboxes/configuration/environment-files/>

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
