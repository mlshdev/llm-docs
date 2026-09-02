> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_run.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/sbx_cli/sbx_env_run.yaml)

# sbx env run

Create (if needed) and attach to a sandbox environment

**Usage:** `sbx env run [PATH...] [flags]`

> [!NOTE]
> This command is experimental.

## Description

Read the environment file from PATH (default: current directory)
and drop into the sandbox shell. If the sandbox already exists it is started
and re-attached without re-provisioning; otherwise it is created first
(provisioning secrets and bindings) and then attached.

Each PATH may be a directory (the file is <PATH>/.sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics): later files override earlier ones.
Values may reference environment variables with ${VAR} / $VAR (and
${VAR:-default}); see the docs for the full syntax.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--clone` |  | Override workspace.clone in .sbxenv.yaml (see 'sbx create --clone') |
| `-d`, `--detached` |  | Create/start the sandbox without attaching |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
