> Pinned source for Docker main: [data/cli/offload/docker_offload_rm.yaml](https://github.com/docker/docs/blob/16e452c8eaea26cec842cbf1065037fb2015001f/data/cli/offload/docker_offload_rm.yaml)

# docker offload rm

Remove the Docker Offload cloud sandbox

**Usage:** `docker offload rm [OPTIONS]`

## Description

The cloud sandbox is deleted with everything in it, running or paused. Every
machine on the account uses the same sandbox, so `rm` deletes it for all of
them. To keep the sandbox for later, use `docker offload stop` instead.

## Options

| Option          | Default | Description                            |
| --------------- | ------- | -------------------------------------- |
| `-f`, `--force` |         | Remove without asking for confirmation |

## Examples

````console
### Remove the sandbox

Asks for confirmation first:

```console
$ docker offload rm
````

### Remove the sandbox without confirmation

```console
$ docker offload rm --force
```

```
```
