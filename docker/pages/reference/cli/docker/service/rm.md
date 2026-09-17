> Pinned source for Docker main: [data/cli/engine/docker_service_rm.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/cli/engine/docker_service_rm.yaml)

# docker service rm

Remove one or more services

**Usage:** `docker service rm SERVICE [SERVICE...]`

**Aliases:** docker service rm, docker service remove

## Description

Removes the specified services from the swarm.

> \[!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](https://docs.docker.com/engine/swarm/) in the
> documentation.

## Examples

Remove the `redis` service:

```console
$ docker service rm redis

redis

$ docker service ls

ID  NAME  MODE  REPLICAS  IMAGE
```

> \[!WARNING]
> Unlike `docker rm`, this command does not ask for confirmation before removing
> a running service.
