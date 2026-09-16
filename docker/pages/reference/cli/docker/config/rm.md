> Pinned source for Docker main: [data/cli/engine/docker_config_rm.yaml](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/data/cli/engine/docker_config_rm.yaml)

# docker config rm

Remove one or more configs

**Usage:** `docker config rm CONFIG [CONFIG...]`

**Aliases:** docker config rm, docker config remove

## Description

Removes the specified configs from the Swarm.

For detailed information about using configs, refer to [store configuration data using Docker Configs](https://docs.docker.com/engine/swarm/configs/).

> \[!NOTE]
> This is a cluster management command, and must be executed on a Swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](https://docs.docker.com/engine/swarm/) in the
> documentation.

## Examples

This example removes a config:

```console
$ docker config rm my_config
sapth4csdo5b6wz2p5uimh5xg
```

> \[!WARNING]
> This command doesn't ask for confirmation before removing a config.
