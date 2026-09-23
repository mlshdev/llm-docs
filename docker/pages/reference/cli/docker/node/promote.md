> Pinned source for Docker main: [data/cli/engine/docker_node_promote.yaml](https://github.com/docker/docs/blob/b62199cbc77c551cd38bae7ffdeda67c88a06d1d/data/cli/engine/docker_node_promote.yaml)

# docker node promote

Promote one or more nodes to manager in the swarm

**Usage:** `docker node promote NODE [NODE...]`

## Description

Promotes a node to manager. This command can only be executed on a manager node.

> \[!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](https://docs.docker.com/engine/swarm/) in the
> documentation.

## Examples

````console
```console
$ docker node promote <node name>
````

```
```
