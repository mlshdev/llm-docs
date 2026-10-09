> Pinned source for Docker main: [data/cli/buildx/docker_buildx_policy_test.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/cli/buildx/docker_buildx_policy_test.yaml)

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
