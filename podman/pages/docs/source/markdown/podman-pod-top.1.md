> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-pod-top.1.md.in](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod-top.1.md.in)

# podman-pod-top

## NAME

podman-pod-top - Display the running processes of containers in a pod

## SYNOPSIS

**podman pod top** \[*options*] *pod* \[*format-descriptors*]

## DESCRIPTION

Display the running processes of containers in a pod. The *format-descriptors* are ps (1) compatible AIX format
descriptors but extended to print additional information, such as the seccomp mode or the effective capabilities
of a given process. The descriptors can either be passed as separate arguments or as a single comma-separated argument.

## OPTIONS

#### **--help**, **-h**

Print usage statement

#### **--latest**, **-l**

Instead of providing the pod name or ID, use the last created pod.
Note: the last started pod can be from other users of Podman on the host machine.
(This option is not available with the remote Podman client, including Mac and Windows
(excluding WSL2) machines)

## FORMAT DESCRIPTORS

For a full list of available descriptors, see podman-top(1)

## EXAMPLES

Print top data for the specified pod.
By default, `podman-pod-top` prints data similar to `ps -ef`:

```
$ podman pod top b031293491cc
USER   PID   PPID   %CPU    ELAPSED             TTY   TIME   COMMAND
root   1     0      0.000   2h5m38.737137571s   ?     0s     top
root   8     0      0.000   2h5m15.737228361s   ?     0s     top
```

The output can be controlled by specifying format descriptors as arguments after the pod.

Print the pod top data fields pid,seccomp, args and %C on the latest pod created. (This -l option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines)

```
$ podman pod top -l pid seccomp args %C
PID   SECCOMP   COMMAND   %CPU
1     filter    top       0.000
1     filter    /bin/sh   0.000
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-pod.1.md)**, **ps(1)**, **seccomp(2)**, **proc(5)**, **capabilities(7)**

## HISTORY

August 2018, Originally compiled by Peter Hunt <pehunt@redhat.com>
