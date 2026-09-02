> Commit-pinned source for Docker main: [data/cli/engine/docker_container_unpause.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/cli/engine/docker_container_unpause.yaml)

# docker container unpause

Unpause all processes within one or more containers

**Usage:** `docker container unpause CONTAINER [CONTAINER...]`

**Aliases:** docker container unpause, docker unpause

## Description

The `docker unpause` command un-suspends all processes in the specified containers.
On Linux, it does this using the freezer cgroup.

See the
[freezer cgroup documentation](https://www.kernel.org/doc/Documentation/cgroup-v1/freezer-subsystem.txt)
for further details.

## Examples

```console
$ docker unpause my_container
my_container
```
