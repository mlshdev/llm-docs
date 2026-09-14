> Pinned source for Docker main: [data/cli/engine/docker_node_demote.yaml](https://github.com/docker/docs/blob/5541c4e3130a6de70be53bba50dfef4f203e4026/data/cli/engine/docker_node_demote.yaml)

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
