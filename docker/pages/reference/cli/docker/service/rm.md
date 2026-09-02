> Commit-pinned source for Docker main: [data/cli/engine/docker_service_rm.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/cli/engine/docker_service_rm.yaml)

# docker service rm

Remove one or more services

**Usage:** `docker service rm SERVICE [SERVICE...]`

**Aliases:** docker service rm, docker service remove

## Description

Removes the specified services from the swarm.

> [!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](/engine/swarm/) in the
> documentation.

## Examples

Remove the `redis` service:

```console
$ docker service rm redis

redis

$ docker service ls

ID  NAME  MODE  REPLICAS  IMAGE
```

> [!WARNING]
> Unlike `docker rm`, this command does not ask for confirmation before removing
> a running service.
