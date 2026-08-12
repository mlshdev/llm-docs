> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-container.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container.1.md)

# podman-container

## NAME

podman-container - Manage containers

## SYNOPSIS

**podman container** *subcommand*

## DESCRIPTION

The container command allows management of containers

## COMMANDS

| Command    | Man Page                                                                                                                                                                               | Description                                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| attach     | [podman-attach(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-attach.1.md.in)                          | Attach to a running container.                                              |
| checkpoint | [podman-container-checkpoint(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-checkpoint.1.md) | Checkpoint one or more running containers.                                  |
| cleanup    | [podman-container-cleanup(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-cleanup.1.md)       | Clean up the container's network and mountpoints.                           |
| clone      | [podman-container-clone(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-clone.1.md.in)        | Create a copy of an existing container.                                     |
| commit     | [podman-commit(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-commit.1.md)                             | Create new image based on the changed container.                            |
| cp         | [podman-cp(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-cp.1.md)                                     | Copy files/folders between a container and the local filesystem.            |
| create     | [podman-create(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-create.1.md.in)                          | Create a new container.                                                     |
| diff       | [podman-container-diff(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-diff.1.md.in)          | Inspect changes on a container's filesystem                                 |
| exec       | [podman-exec(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-exec.1.md.in)                              | Execute a command in a running container.                                   |
| exists     | [podman-container-exists(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-exists.1.md)         | Check if a container exists in local storage                                |
| export     | [podman-export(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-export.1.md)                             | Export a container's filesystem contents as a tar archive.                  |
| init       | [podman-init(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-init.1.md.in)                              | Initialize a container                                                      |
| inspect    | [podman-container-inspect(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-inspect.1.md.in)    | Display a container's configuration.                                        |
| kill       | [podman-kill(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kill.1.md.in)                              | Kill the main process in one or more containers.                            |
| list       | [podman-ps(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-ps.1.md.in)                                  | List the containers on the system.(alias ls)                                |
| logs       | [podman-logs(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-logs.1.md.in)                              | Display the logs of a container.                                            |
| mount      | [podman-mount(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-mount.1.md.in)                            | Mount a working container's root filesystem.                                |
| pause      | [podman-pause(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pause.1.md.in)                            | Pause one or more containers.                                               |
| port       | [podman-port(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-port.1.md.in)                              | List port mappings for the container.                                       |
| prune      | [podman-container-prune(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-prune.1.md)           | Remove all stopped containers from local storage.                           |
| ps         | [podman-ps(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-ps.1.md.in)                                  | Print out information about containers.                                     |
| rename     | [podman-rename(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-rename.1.md)                             | Rename an existing container.                                               |
| restart    | [podman-restart(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-restart.1.md.in)                        | Restart one or more containers.                                             |
| restore    | [podman-container-restore(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-restore.1.md)       | Restore one or more containers from a checkpoint.                           |
| rm         | [podman-rm(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-rm.1.md.in)                                  | Remove one or more containers.                                              |
| run        | [podman-run(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-run.1.md.in)                                | Run a command in a container.                                               |
| runlabel   | [podman-container-runlabel(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container-runlabel.1.md.in)  | Execute a command as described by a container-image label.                  |
| start      | [podman-start(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-start.1.md.in)                            | Start one or more containers.                                               |
| stats      | [podman-stats(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-stats.1.md.in)                            | Display a live stream of one or more container's resource usage statistics. |
| stop       | [podman-stop(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-stop.1.md.in)                              | Stop one or more running containers.                                        |
| top        | [podman-top(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-top.1.md.in)                                | Display the running processes of a container.                               |
| unmount    | [podman-unmount(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-unmount.1.md.in)                        | Unmount a working container's root filesystem.(Alias unmount)               |
| unpause    | [podman-unpause(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-unpause.1.md.in)                        | Unpause one or more containers.                                             |
| update     | [podman-update(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-update.1.md.in)                          | Update the cgroup configuration of a given container.                       |
| wait       | [podman-wait(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-wait.1.md.in)                              | Wait on one or more containers to stop and print their exit codes.          |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-exec(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-exec.1.md.in)**, **[podman-run(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-run.1.md.in)**
