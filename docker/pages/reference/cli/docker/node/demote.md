> Pinned source for Docker main: [data/cli/engine/docker_node_demote.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/cli/engine/docker_node_demote.yaml)

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

````console
```console
$ docker node demote <node name>
````

```
```
