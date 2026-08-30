> Commit-pinned source for Docker main: [data/sbx_cli/sbx_setup.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/sbx_cli/sbx_setup.yaml)

# sbx setup

Detect host configuration and prepare Docker Sandboxes

**Usage:** `sbx setup [COMMAND]`

> [!NOTE]
> This command is experimental.

## Description

Detect what is already configured on your host and prepare Docker Sandboxes.

Agent secrets are detected from the built-in agent kit specs and the
env vars set on this host, and accepted secrets are imported into the global
secrets store (the same store as "sbx secret set").

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
