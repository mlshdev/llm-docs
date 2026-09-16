> Pinned source for Podman v6.1.2: [docs/source/markdown/podman-pod-exists.1.md](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman-pod-exists.1.md)

# podman-pod-exists

## NAME

podman-pod-exists - Check if a pod exists in local storage

## SYNOPSIS

**podman pod exists** *pod*

## DESCRIPTION

**podman pod exists** checks if a pod exists in local storage. The **ID** or **Name**
of the pod may be used as input.  Podman returns an exit code
of `0` when the pod is found.  A `1` is returned otherwise. An exit code of `125` indicates there
was an issue accessing the local storage.

## EXAMPLES

Check if specified pod exists in local storage (the pod does actually exist):

```
$ sudo podman pod exists web; echo $?
0
```

Check if specified pod exists in local storage (the pod does not actually exist):

```
$ sudo podman pod exists backend; echo $?
1
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman-pod.1.md)**

## HISTORY

December 2018, Originally compiled by Brent Baude (bbaude at redhat dot com)
