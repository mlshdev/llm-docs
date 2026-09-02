> Commit-pinned source for Docker main: [data/cli/engine/docker_checkpoint_create.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/cli/engine/docker_checkpoint_create.yaml)

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
