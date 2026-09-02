> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_repo_list.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/cli/scout/docker_scout_repo_list.yaml)

# docker scout repo list

List Docker Scout repositories

**Usage:** `docker scout repo list`

## Description

The docker scout repo list command shows all repositories in an organization.

If ORG is not provided the default configured organization will be used.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--filter` |  | Regular expression to filter repositories by name |
| `--only-disabled` |  | Filter to disabled repositories only |
| `--only-enabled` |  | Filter to enabled repositories only |
| `--only-registry` |  | Filter to a specific registry only: - hub.docker.com - ecr (AWS ECR) |
| `--org` |  | Namespace of the Docker organization |
