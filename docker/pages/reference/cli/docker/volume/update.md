> Pinned source for Docker main: [data/cli/engine/docker_volume_update.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/cli/engine/docker_volume_update.yaml)

# docker volume update

Update a volume (cluster volumes only)

**Usage:** `docker volume update [OPTIONS] [VOLUME]`

## Description

Update a volume (cluster volumes only)

## Options

| Option           | Default  | Description                                                          |
| ---------------- | -------- | -------------------------------------------------------------------- |
| `--availability` | `active` | Cluster Volume availability (`active`, `pause`, `drain`) (API 1.42+) |
