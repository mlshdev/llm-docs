> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-pod-start.1.md.in](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod-start.1.md.in)

# podman-pod-start

## NAME

podman-pod-start - Start one or more pods

## SYNOPSIS

**podman pod start** \[*options*] *pod* ...

## DESCRIPTION

Start containers in one or more pods.  You may use pod IDs or names as input. The pod must have a container attached
to be started.

## OPTIONS

#### **--all**, **-a**

Starts all pods

#### **--latest**, **-l**

Instead of providing the pod name or ID, use the last created pod.
Note: the last started pod can be from other users of Podman on the host machine.
(This option is not available with the remote Podman client, including Mac and Windows
(excluding WSL2) machines)

#### **--pod-id-file**=*file*

Read pod ID from the specified *file* and start the pod. Can be specified multiple times.

## EXAMPLE

Start pod with a given name:

```
podman pod start mywebserverpod
```

Start pods with given IDs:

```
podman pod start 860a4b23 5421ab4
```

Start the latest pod. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines):

```
podman pod start --latest
```

Start all pods:

```
podman pod start --all
```

Start pod using ID specified in a given file:

```
podman pod start --pod-id-file /path/to/id/file
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod.1.md)**, **[podman-pod-stop(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod-stop.1.md.in)**

## HISTORY

July 2018, Adapted from podman start man page by Peter Hunt <pehunt@redhat.com>
