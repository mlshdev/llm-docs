> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_repo_disable.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/scout/docker_scout_repo_disable.yaml)

# docker scout repo disable

Disable Docker Scout

**Usage:** `docker scout repo disable [REPOSITORY]`

## Description

The docker scout repo disable command disables Docker Scout on repositories.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Disable all repositories of the organization. Can not be used with --filter. |
| `--filter` |  | Regular expression to filter repositories by name |
| `--integration` |  | Name of the integration to use for enabling an image |
| `--org` |  | Namespace of the Docker organization |
| `--registry` |  | Container Registry |

## Examples

### Disable a specific repository

```console
$ docker scout repo disable my/repository
```

### Disable all repositories of the organization

```console
$ docker scout repo disable --all
```

### Disable some repositories based on a filter

```console
$ docker scout repo disable --filter namespace/backend
```

### Disable a repository from a specific registry

```console
$ docker scout repo disable my/repository --registry 123456.dkr.ecr.us-east-1.amazonaws.com
```
