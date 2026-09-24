> Pinned source for Docker main: [data/sbx_cli/sbx_kit_builder_history.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_kit_builder_history.yaml)

# sbx kit builder history

Inspect kit build history in the builder sandbox

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
