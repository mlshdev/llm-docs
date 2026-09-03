> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_repo_list.yaml](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/data/cli/scout/docker_scout_repo_list.yaml)

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
