> Pinned source for Docker main: [data/cli/offload/docker_offload_rm.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/cli/offload/docker_offload_rm.yaml)

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
