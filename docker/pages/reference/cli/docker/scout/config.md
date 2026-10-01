> Pinned source for Docker main: [data/cli/scout/docker_scout_config.yaml](https://github.com/docker/docs/blob/4d3cbcd0f78327cfc6ec5f357e3af512fcbe53f3/data/cli/scout/docker_scout_config.yaml)

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
