> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_repo_enable.yaml](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/data/cli/scout/docker_scout_repo_enable.yaml)

# docker scout repo enable

Enable Docker Scout

**Usage:** `docker scout repo enable [REPOSITORY]`

## Description

The docker scout repo enable command enables Docker Scout on repositories.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--all` |  | Enable all repositories of the organization. Can not be used with --filter. |
| `--filter` |  | Regular expression to filter repositories by name |
| `--integration` |  | Name of the integration to use for enabling an image |
| `--org` |  | Namespace of the Docker organization |
| `--registry` |  | Container Registry |

## Examples

### Enable a specific repository

```console
$ docker scout repo enable my/repository
```

### Enable all repositories of the organization

```console
$ docker scout repo enable --all
```

### Enable some repositories based on a filter

```console
$ docker scout repo enable --filter namespace/backend
```

### Enable a repository from a specific registry

```console
$ docker scout repo enable my/repository --registry 123456.dkr.ecr.us-east-1.amazonaws.com
```
