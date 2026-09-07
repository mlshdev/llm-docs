> Commit-pinned source for Docker main: [data/cli/engine/docker_builder_prune.yaml](https://github.com/docker/docs/blob/b3f9d60b1b26476298cfc2db3dd70e74c915869f/data/cli/engine/docker_builder_prune.yaml)

# docker builder prune

Remove build cache

**Usage:** `docker builder prune`

## Description

Remove build cache

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-a`, `--all` |  | Remove all unused build cache, not just dangling ones |
| `--filter` |  | Provide filter values (e.g. `until=24h`) |
| `-f`, `--force` |  | Do not prompt for confirmation |
| `--keep-storage` |  | Amount of disk space to keep for cache |
