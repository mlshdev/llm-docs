> Commit-pinned source for Docker main: [data/sbx_cli/sbx_setup.yaml](https://github.com/docker/docs/blob/432aa8fa3c1b4c3500e6795ee5090f427ce28efb/data/sbx_cli/sbx_setup.yaml)

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
