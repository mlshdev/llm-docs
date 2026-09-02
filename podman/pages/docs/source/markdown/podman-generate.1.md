> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-generate.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-generate.1.md)

# podman-generate

## NAME

podman-generate - Generate structured data based on containers, pods or volumes

## SYNOPSIS

**podman generate** *subcommand*

## DESCRIPTION

The generate command creates structured output (like YAML) based on a container, pod or volume.

## COMMANDS

| Command | Man Page                                                                                                                                                                       | Description                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| kube    | [podman-kube-generate(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-kube-generate.1.md)       | Generate Kubernetes YAML based on containers, pods or volumes.      |
| spec    | [podman-generate-spec(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-generate-spec.1.md)       | Generate Specgen JSON based on containers or pods.                  |
| systemd | [podman-generate-systemd(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-generate-systemd.1.md) | \[DEPRECATED] Generate systemd unit file(s) for a container or pod. |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod.1.md)**, **[podman-container(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-container.1.md)**
