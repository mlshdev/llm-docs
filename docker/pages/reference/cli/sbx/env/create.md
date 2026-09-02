> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_create.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_env_create.yaml)

# sbx env create

Create a sandbox environment from .sbxenv.yaml

**Usage:** `sbx env create [PATH...] [flags]`

> [!NOTE]
> This command is experimental.

## Description

Read the environment file from PATH (default: current directory),
provision its declared secrets at the sandbox scope, merge its credential
bindings, and create the sandbox. Use "sbx env run" to attach.

Each PATH may be a directory (the file is <PATH>/.sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics): later files override earlier ones.
Values may reference environment variables with ${VAR} / $VAR (and
${VAR:-default}); see the docs for the full syntax.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--clone` |  | Override workspace.clone in .sbxenv.yaml (see 'sbx create --clone') |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
