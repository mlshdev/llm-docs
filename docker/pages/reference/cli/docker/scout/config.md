> Pinned source for Docker main: [data/cli/scout/docker_scout_config.yaml](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/data/cli/scout/docker_scout_config.yaml)

# docker scout config

Manage Docker Scout configuration

**Usage:** `docker scout config [KEY] [VALUE]`

## Description

`docker scout config` allows you to list, get and set Docker Scout configuration.

Available configuration key:

- `organization`: Namespace of the Docker organization to be used by default.

## Examples

````console
### List existing configuration

```console
$ docker scout config
organization=my-org-namespace
````

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

```
```
