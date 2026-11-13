> Pinned source for Docker main: [data/cli/offload/docker_offload.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/cli/offload/docker_offload.yaml)

# docker offload

Control Docker Offload from the CLI

**Usage:** `docker offload`

## Description

Control Docker Offload from the CLI.

There are two versions of Docker Offload, and some commands belong to only
one of them.

| Command                   | Docker Offload | Docker Offload v1 |
| ------------------------- | -------------- | ----------------- |
| `docker offload create`   | Yes            | No                |
| `docker offload rm`       | Yes            | No                |
| `docker offload start`    | No             | Yes               |
| `docker offload stop`     | Yes            | Yes               |
| `docker offload status`   | Yes            | Yes               |
| `docker offload diagnose` | No             | Yes               |
| `docker offload version`  | Yes            | Yes               |

Running a command that belongs to the other version reports an error telling
you which setting to change. For more information, see [Docker
Offload](https://docs.docker.com/offload/) and [Docker Offload
v1](https://docs.docker.com/offload/v1/).

## Subcommands

- [`docker offload create`](https://docs.docker.com/reference/cli/docker/offload/create/)
- [`docker offload diagnose`](https://docs.docker.com/reference/cli/docker/offload/diagnose/)
- [`docker offload rm`](https://docs.docker.com/reference/cli/docker/offload/rm/)
- [`docker offload start`](https://docs.docker.com/reference/cli/docker/offload/start/)
- [`docker offload status`](https://docs.docker.com/reference/cli/docker/offload/status/)
- [`docker offload stop`](https://docs.docker.com/reference/cli/docker/offload/stop/)
- [`docker offload version`](https://docs.docker.com/reference/cli/docker/offload/version/)
