> Pinned source for Docker main: [data/sbx_cli/sbx_kit_validate.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_kit_validate.yaml)

# sbx kit validate

Validate a kit artifact

**Usage:** `sbx kit validate REFERENCE [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Validate that a directory or ZIP file is a valid kit artifact.

The reference can be a local directory, ZIP file path, or git repository.

A kit that declares required arguments is invalid until they are
supplied, so pass the same --kit-arg values you would pass to sbx
create.

## Options

| Option            | Default | Description                                                                                                                    |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `--json`          |         | Output in JSON format                                                                                                          |
| `--kit-arg`       |         | Value for an argument the kit declares, as name=value for every kit or kit.name=value for one (can be repeated) (Experimental) |
| `--kit-args-file` |         | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental)                           |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
