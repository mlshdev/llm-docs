> Commit-pinned source for Docker main: [data/cli/engine/docker_container_port.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/cli/engine/docker_container_port.yaml)

# docker container port

List port mappings or a specific mapping for the container

**Usage:** `docker container port CONTAINER [PRIVATE_PORT[/PROTO]]`

**Aliases:** docker container port, docker port

## Description

List port mappings or a specific mapping for the container

## Examples

### Show all mapped ports

You can find out all the ports mapped by not specifying a `PRIVATE_PORT`, or
just a specific mapping:

```console
$ docker ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                                            NAMES
b650456536c7        busybox:latest      top                 54 minutes ago      Up 54 minutes       0.0.0.0:1234->9876/tcp, 0.0.0.0:4321->7890/tcp   test

$ docker port test

7890/tcp -> 0.0.0.0:4321
9876/tcp -> 0.0.0.0:1234

$ docker port test 7890/tcp

0.0.0.0:4321

$ docker port test 7890/udp

2014/06/24 11:53:36 Error: No public port '7890/udp' published for test

$ docker port test 7890

0.0.0.0:4321
```
