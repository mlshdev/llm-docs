> Pinned source for Podman v6.1.3: [docs/source/markdown/podman-pod-unpause.1.md](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-pod-unpause.1.md)

# podman-pod-unpause

## NAME

podman-pod-unpause - Unpause one or more pods

## SYNOPSIS

**podman pod unpause** \[*options*] *pod* ...

## DESCRIPTION

Unpauses all the paused processes in the containers of one or more pods.  You may use pod IDs or names as input.

## OPTIONS

#### **--all**, **-a**

Unpause all pods.

#### **--latest**, **-l**

Instead of providing the pod name or ID, unpause the last created pod. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

## EXAMPLE

Unpause pod with a given name:

```
podman pod unpause mywebserverpod
```

Unpause pod with a given ID:

```
podman pod unpause 860a4b23
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-pod.1.md)**, **[podman-pod-pause(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-pod-pause.1.md)**

## HISTORY

July 2018, Originally compiled by Peter Hunt <pehunt@redhat.com>
