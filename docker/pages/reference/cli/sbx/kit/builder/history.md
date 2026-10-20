> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history.yaml](https://github.com/docker/docs/blob/d8edfe0d28dd00fa8ab175d94fe3375731689d4f/data/sbx_cli/sbx_kit_builder_history.yaml)

# sbx kit builder history

Show kit build history in the builder sandbox

**Usage:** `sbx kit builder history COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Inspect kit build history in the builder sandbox.

Each subcommand runs the matching docker buildx history command inside
the builder sandbox, against the buildx instance kit builds use. Flags
and arguments pass through verbatim.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
