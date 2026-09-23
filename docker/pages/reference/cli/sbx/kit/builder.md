> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/sbx_cli/sbx_kit_builder.yaml)

# sbx kit builder

Manage the kit builder sandbox

**Usage:** `sbx kit builder COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Manage the kit builder sandbox.

Source-form kit builds (a local directory or git reference) run inside a
shared builder sandbox named sbx-kit-builder, created on first
use. Its Docker engine store doubles as the kit build cache, so removing
the builder is how the cache is reclaimed; the next source-form build
recreates it.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
