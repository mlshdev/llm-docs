> Commit-pinned source for Docker main: [data/cli/engine/docker_swarm_unlock.yaml](https://github.com/docker/docs/blob/b3f9d60b1b26476298cfc2db3dd70e74c915869f/data/cli/engine/docker_swarm_unlock.yaml)

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
