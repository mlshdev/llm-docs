> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_config.yaml](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/data/cli/scout/docker_scout_config.yaml)

# docker scout config

Manage Docker Scout configuration

**Usage:** `docker scout config [KEY] [VALUE]`

## Description

`docker scout config` allows you to list, get and set Docker Scout configuration.

Available configuration key:

- `organization`: Namespace of the Docker organization to be used by default.

## Examples

### List existing configuration

```console
$ docker scout config
organization=my-org-namespace
```

### Print configuration value

```console
$ docker scout config organization
my-org-namespace
```

### Set configuration value

```console
$ docker scout config organization my-org-namespace
    ✓ Successfully set organization to my-org-namespace
```
