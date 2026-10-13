> Pinned source for Docker main: [data/cli/engine/docker_network_disconnect.yaml](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/data/cli/engine/docker_network_disconnect.yaml)

# docker network disconnect

Disconnect a container from a network

**Usage:** `docker network disconnect [OPTIONS] NETWORK CONTAINER`

## Description

Disconnects a container from a network. The container must be running to
disconnect it from the network.

## Options

| Option          | Default | Description                                      |
| --------------- | ------- | ------------------------------------------------ |
| `-f`, `--force` |         | Force the container to disconnect from a network |

## Examples

````console
```console
$ docker network disconnect multi-host-network container1
````

```
```
