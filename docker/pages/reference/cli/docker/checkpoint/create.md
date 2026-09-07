> Commit-pinned source for Docker main: [data/cli/engine/docker_checkpoint_create.yaml](https://github.com/docker/docs/blob/389c95117e11ce9c45348290463964caaca3c75b/data/cli/engine/docker_checkpoint_create.yaml)

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
