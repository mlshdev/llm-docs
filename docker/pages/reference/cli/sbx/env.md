> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env.yaml](https://github.com/docker/docs/blob/f6dc902a4d40c625f5f2c23a5c1eb735ffe7b570/data/sbx_cli/sbx_env.yaml)

# sbx env

Manage sandboxes declaratively from a .sbxenv.yaml file

**Usage:** `sbx env COMMAND`

> [!NOTE]
> This command is experimental.

## Description

Manage a sandbox environment declared in a .sbxenv.yaml file.

The file describes the agent, optional mixin kits, workspace mounts,
environment variables, secrets to provision, and per-service credential
bindings. Secrets are provisioned at the environment's sandbox scope so
`sbx env rm` can remove everything it created.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
