> Commit-pinned source for Docker main: [data/cli/engine/docker_swarm_unlock.yaml](https://github.com/docker/docs/blob/14df09affa43a67a6a8f7927a3578a4e4ff1bc28/data/cli/engine/docker_swarm_unlock.yaml)

# docker swarm unlock

Unlock swarm

**Usage:** `docker swarm unlock`

## Description

Unlocks a locked manager using a user-supplied unlock key. This command must be
used to reactivate a manager after its Docker daemon restarts if the autolock
setting is turned on. The unlock key is printed at the time when autolock is
enabled, and is also available from the `docker swarm unlock-key` command.

> [!NOTE]
> This is a cluster management command, and must be executed on a swarm
> manager node. To learn about managers and workers, refer to the
> [Swarm mode section](/engine/swarm/) in the
> documentation.

## Examples

```console
$ docker swarm unlock
Enter unlock key:
```
