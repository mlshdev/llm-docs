> Pinned source for Docker main: [data/cli/buildx/docker_buildx_stop.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/cli/buildx/docker_buildx_stop.yaml)

# docker buildx stop

Stop builder instance

**Usage:** `docker buildx stop [NAME]`

## Description

Stops the specified or current builder. This does not prevent buildx build to
restart the builder. The implementation of stop depends on the driver.

## Global options

| Option          | Default | Description                              |
| --------------- | ------- | ---------------------------------------- |
| `--builder`     |         | Override the configured builder instance |
| `-D`, `--debug` |         | Enable debug logging                     |

## Examples

### Override the configured builder instance (--builder) {#builder}

Same as [`buildx --builder`](https://docs.docker.com/reference/cli/docker/buildx/#builder).
