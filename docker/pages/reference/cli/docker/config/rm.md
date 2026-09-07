> Commit-pinned source for Docker main: [data/cli/engine/docker_config_rm.yaml](https://github.com/docker/docs/blob/42a44992f49bda99e0caf2b015f0cfb0bb0c488c/data/cli/engine/docker_config_rm.yaml)

# docker config rm

Remove one or more configs

**Usage:** `docker config rm CONFIG [CONFIG...]`

**Aliases:** docker config rm, docker config remove

## Description

Removes the specified configs from the Swarm.

For detailed information about using configs, refer to [store configuration data using Docker Configs](/engine/swarm/configs/).

> [!NOTE]
> This is a cluster management command, and must be executed on a Swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](/engine/swarm/) in the
> documentation.

## Examples

This example removes a config:

```console
$ docker config rm my_config
sapth4csdo5b6wz2p5uimh5xg
```

> [!WARNING]
> This command doesn't ask for confirmation before removing a config.
