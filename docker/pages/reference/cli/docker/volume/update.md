> Pinned source for Docker main: [data/cli/engine/docker_volume_update.yaml](https://github.com/docker/docs/blob/9643ba0813ea4290a7ab1f206dddaf7683f39edd/data/cli/engine/docker_volume_update.yaml)

# docker volume update

Update a volume (cluster volumes only)

**Usage:** `docker volume update [OPTIONS] [VOLUME]`

## Description

Update a volume (cluster volumes only)

## Options

| Option           | Default  | Description                                                          |
| ---------------- | -------- | -------------------------------------------------------------------- |
| `--availability` | `active` | Cluster Volume availability (`active`, `pause`, `drain`) (API 1.42+) |
