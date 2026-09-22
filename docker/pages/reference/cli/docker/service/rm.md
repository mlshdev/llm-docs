> Pinned source for Docker main: [data/cli/engine/docker_service_rm.yaml](https://github.com/docker/docs/blob/c69ce0fd3851270bba5473502268ff7661887b2a/data/cli/engine/docker_service_rm.yaml)

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

````console
Remove the `redis` service:

```console
$ docker service rm redis

redis

$ docker service ls

ID  NAME  MODE  REPLICAS  IMAGE
````

> \[!WARNING]
> Unlike `docker rm`, this command does not ask for confirmation before removing
> a running service.

```
```
