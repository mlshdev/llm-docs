> Pinned source for Docker main: [data/cli/engine/docker_node_promote.yaml](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/data/cli/engine/docker_node_promote.yaml)

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
