> Pinned source for Docker main: [data/cli/buildx/docker_buildx_history_open.yaml](https://github.com/docker/docs/blob/53581df94e05ad4116a8d31e47ea098289fa5498/data/cli/buildx/docker_buildx_history_open.yaml)

# docker buildx history open

Open a build record in Docker Desktop

**Usage:** `docker buildx history open [OPTIONS] [REF]`

## Description

Open a build record in Docker Desktop for visual inspection. This requires
Docker Desktop to be installed and running on the host machine.

## Global options

| Option          | Default | Description                              |
| --------------- | ------- | ---------------------------------------- |
| `--builder`     |         | Override the configured builder instance |
| `-D`, `--debug` |         | Enable debug logging                     |

## Examples

````console
### Open the most recent build in Docker Desktop

```console
docker buildx history open
````

By default, this opens the most recent build on the current builder.

### Open a specific build

```console
# Using a build ID
docker buildx history open qu2gsuo8ejqrwdfii23xkkckt

# Or using a relative offset
docker buildx history open ^1
```

```
```
