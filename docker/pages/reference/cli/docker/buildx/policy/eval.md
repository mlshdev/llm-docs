> Commit-pinned source for Docker main: [data/cli/buildx/docker_buildx_policy_eval.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/cli/buildx/docker_buildx_policy_eval.yaml)

# docker buildx policy eval

Evaluate policy for a source

**Usage:** `docker buildx policy eval [OPTIONS] source`

## Description

Evaluate policy for a source

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--fields` |  | Fields to evaluate |
| `-f`, `--file` | `Dockerfile` | Policy filename to evaluate |
| `--platform` |  | Target platform for policy evaluation |
| `--print` |  | Print policy output |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--builder` |  | Override the configured builder instance |
| `-D`, `--debug` |  | Enable debug logging |
