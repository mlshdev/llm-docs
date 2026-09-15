> Pinned source for Docker main: [data/cli/engine/docker_container_wait.yaml](https://github.com/docker/docs/blob/2465b5136acea8373d5c6a27e4672f4acf26c935/data/cli/engine/docker_container_wait.yaml)

# docker container wait

Block until one or more containers stop, then print their exit codes

**Usage:** `docker container wait CONTAINER [CONTAINER...]`

**Aliases:** docker container wait, docker wait

## Description

Block until one or more containers stop, then print their exit codes

## Examples

Start a container in the background.

```console
$ docker run -dit --name=my_container ubuntu bash
```

Run `docker wait`, which should block until the container exits.

```console
$ docker wait my_container
```

In another terminal, stop the first container. The `docker wait` command above
returns the exit code.

```console
$ docker stop my_container
```

This is the same `docker wait` command from above, but it now exits, returning
`0`.

```console
$ docker wait my_container

0
```
