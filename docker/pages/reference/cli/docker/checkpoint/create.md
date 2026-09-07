> Commit-pinned source for Docker main: [data/cli/engine/docker_checkpoint_create.yaml](https://github.com/docker/docs/blob/571f478dda32a3f19f8451bdf199633a8d1e3578/data/cli/engine/docker_checkpoint_create.yaml)

# docker checkpoint create

Create a checkpoint from a running container

**Usage:** `docker checkpoint create [OPTIONS] CONTAINER CHECKPOINT`

> [!NOTE]
> This command is experimental.

## Description

Create a checkpoint from a running container

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--checkpoint-dir` |  | Use a custom checkpoint storage directory |
| `--leave-running` |  | Leave the container running after checkpoint |
