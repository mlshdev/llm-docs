> Commit-pinned source for Docker main: [data/cli/engine/docker_node_promote.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/cli/engine/docker_node_promote.yaml)

# docker node promote

Promote one or more nodes to manager in the swarm

**Usage:** `docker node promote NODE [NODE...]`

## Description

Promotes a node to manager. This command can only be executed on a manager node.

> [!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](/engine/swarm/) in the
> documentation.

## Examples

```console
$ docker node promote <node name>
```
