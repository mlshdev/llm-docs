> Pinned source for Docker main: [data/cli/engine/docker_node_demote.yaml](https://github.com/docker/docs/blob/71fa06427156ab4e87b88cdc9983d2efea8b7519/data/cli/engine/docker_node_demote.yaml)

# docker node demote

Demote one or more nodes from manager in the swarm

**Usage:** `docker node demote NODE [NODE...]`

## Description

Demotes an existing manager so that it is no longer a manager.

> \[!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the [Swarm mode
> section](https://docs.docker.com/engine/swarm/) in the documentation.

## Examples

```console
$ docker node demote <node name>
```
