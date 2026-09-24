> Pinned source for Docker main: [data/cli/buildx/docker_buildx_policy_test.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/cli/buildx/docker_buildx_policy_test.yaml)

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
