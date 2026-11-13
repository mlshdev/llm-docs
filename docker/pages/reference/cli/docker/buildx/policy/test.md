> Pinned source for Docker main: [data/cli/buildx/docker_buildx_policy_test.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/cli/buildx/docker_buildx_policy_test.yaml)

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
