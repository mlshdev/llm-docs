> Pinned source for Docker main: [data/cli/engine/docker_network_disconnect.yaml](https://github.com/docker/docs/blob/7ba25eeb0c4c594f79e6efadad1af5eaca0500a8/data/cli/engine/docker_network_disconnect.yaml)

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
