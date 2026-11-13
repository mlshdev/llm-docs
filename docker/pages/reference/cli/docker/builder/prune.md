> Pinned source for Docker main: [data/cli/engine/docker_builder_prune.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/cli/engine/docker_builder_prune.yaml)

# docker builder prune

Remove build cache

**Usage:** `docker builder prune`

## Description

Remove build cache

## Options

| Option           | Default | Description                                           |
| ---------------- | ------- | ----------------------------------------------------- |
| `-a`, `--all`    |         | Remove all unused build cache, not just dangling ones |
| `--filter`       |         | Provide filter values (e.g. `until=24h`)              |
| `-f`, `--force`  |         | Do not prompt for confirmation                        |
| `--keep-storage` |         | Amount of disk space to keep for cache                |
