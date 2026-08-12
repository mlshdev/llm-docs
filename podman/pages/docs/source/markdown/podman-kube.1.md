> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-kube.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube.1.md)

# podman-kube

## NAME

podman-kube - Play containers, pods or volumes based on a structured input file

## SYNOPSIS

**podman kube** *subcommand*

## DESCRIPTION

The kube command recreates containers, pods or volumes based on the input from a structured (like YAML)
file input.  Containers are automatically started.

Note: The kube commands in podman focus on simplifying the process of moving containers from podman to a Kubernetes
environment and from a Kubernetes environment back to podman. Podman is not replicating the kubectl CLI. Once containers
are deployed to a Kubernetes cluster from podman, please use `kubectl` to manage the workloads in the cluster.

## COMMANDS

| Command  | Man Page                                                                                                                                                                 | Description                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| apply    | [podman-kube-apply(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-apply.1.md)       | Apply Kubernetes YAML based on containers, pods, or volumes to a Kubernetes cluster |
| down     | [podman-kube-down(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-down.1.md.in)      | Remove containers and pods based on Kubernetes YAML.                                |
| generate | [podman-kube-generate(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-generate.1.md) | Generate Kubernetes YAML based on containers, pods or volumes.                      |
| play     | [podman-kube-play(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-play.1.md.in)      | Create containers, pods and volumes based on Kubernetes YAML.                       |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-pod.1.md)**, **[podman-container(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-container.1.md)**, **[podman-kube-play(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-play.1.md.in)**, **[podman-kube-down(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-down.1.md.in)**, **[podman-kube-generate(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-generate.1.md)**, **[podman-kube-apply(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-kube-apply.1.md)**

## HISTORY

December 2018, Originally compiled by Brent Baude (bbaude at redhat dot com)
