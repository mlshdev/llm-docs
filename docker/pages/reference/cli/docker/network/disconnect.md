> Commit-pinned source for Docker main: [data/cli/engine/docker_network_disconnect.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/engine/docker_network_disconnect.yaml)

# docker network disconnect

Disconnect a container from a network

**Usage:** `docker network disconnect [OPTIONS] NETWORK CONTAINER`

## Description

Disconnects a container from a network. The container must be running to
disconnect it from the network.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Force the container to disconnect from a network |

## Examples

```console
$ docker network disconnect multi-host-network container1
```
