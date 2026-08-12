> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-pod.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod.1.md)

# podman-pod

## NAME

podman-pod - Management tool for groups of containers, called pods

## SYNOPSIS

**podman pod** *subcommand*

## DESCRIPTION

podman pod is a set of subcommands that manage pods, or groups of containers.

## SUBCOMMANDS

| Command | Man Page                                                                                                                                                                | Description                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| clone   | [podman-pod-clone(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-clone.1.md.in)     | Create a copy of an existing pod.                                                 |
| create  | [podman-pod-create(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-create.1.md.in)   | Create a new pod.                                                                 |
| exists  | [podman-pod-exists(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-exists.1.md)      | Check if a pod exists in local storage.                                           |
| inspect | [podman-pod-inspect(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-inspect.1.md.in) | Display information describing a pod.                                             |
| kill    | [podman-pod-kill(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-kill.1.md.in)       | Kill the main process of each container in one or more pods.                      |
| logs    | [podman-pod-logs(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-logs.1.md.in)       | Display logs for pod with one or more containers.                                 |
| pause   | [podman-pod-pause(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-pause.1.md)        | Pause one or more pods.                                                           |
| prune   | [podman-pod-prune(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-prune.1.md)        | Remove all stopped pods and their containers.                                     |
| ps      | [podman-pod-ps(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-ps.1.md.in)           | Print out information about pods.                                                 |
| restart | [podman-pod-restart(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-restart.1.md)    | Restart one or more pods.                                                         |
| rm      | [podman-pod-rm(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-rm.1.md.in)           | Remove one or more stopped pods and containers.                                   |
| start   | [podman-pod-start(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-start.1.md.in)     | Start one or more pods.                                                           |
| stats   | [podman-pod-stats(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-stats.1.md.in)     | Display a live stream of resource usage stats for containers in one or more pods. |
| stop    | [podman-pod-stop(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-stop.1.md.in)       | Stop one or more pods.                                                            |
| top     | [podman-pod-top(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-top.1.md.in)         | Display the running processes of containers in a pod.                             |
| unpause | [podman-pod-unpause(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod-unpause.1.md)    | Unpause one or more pods.                                                         |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**

## HISTORY

July 2018, Originally compiled by Peter Hunt <pehunt@redhat.com>
