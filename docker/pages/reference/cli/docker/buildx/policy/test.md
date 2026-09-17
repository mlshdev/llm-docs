> Pinned source for Docker main: [data/cli/buildx/docker_buildx_policy_test.yaml](https://github.com/docker/docs/blob/ae6b9eeae1463ed0dc5fd03d3ca5ffd2c29d6383/data/cli/buildx/docker_buildx_policy_test.yaml)

# docker buildx policy test

Run policy tests

**Usage:** `docker buildx policy test <path>`

## Description

Run policy tests

## Options

| Option       | Default      | Description                                        |
| ------------ | ------------ | -------------------------------------------------- |
| `--filename` | `Dockerfile` | Name of the Dockerfile to validate                 |
| `--run`      |              | Run only tests with name containing this substring |

## Global options

| Option          | Default | Description                              |
| --------------- | ------- | ---------------------------------------- |
| `--builder`     |         | Override the configured builder instance |
| `-D`, `--debug` |         | Enable debug logging                     |
