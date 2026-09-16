> Pinned source for Docker main: [data/cli/engine/docker_volume_update.yaml](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/data/cli/engine/docker_volume_update.yaml)

# docker volume update

Update a volume (cluster volumes only)

**Usage:** `docker volume update [OPTIONS] [VOLUME]`

## Description

Update a volume (cluster volumes only)

## Options

| Option           | Default  | Description                                                          |
| ---------------- | -------- | -------------------------------------------------------------------- |
| `--availability` | `active` | Cluster Volume availability (`active`, `pause`, `drain`) (API 1.42+) |
