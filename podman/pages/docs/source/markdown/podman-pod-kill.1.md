> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-pod-kill.1.md.in](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-pod-kill.1.md.in)

# podman-pod-kill

## NAME

podman-pod-kill - Kill the main process of each container in one or more pods

## SYNOPSIS

**podman pod kill** \[*options*] *pod* ...

## DESCRIPTION

The main process of each container inside the pods specified is sent SIGKILL, or any signal specified with option --signal.

## OPTIONS

#### **--all**, **-a**

Sends signal to all containers associated with a pod.

#### **--latest**, **-l**

Instead of providing the pod name or ID, use the last created pod.
Note: the last started pod can be from other users of Podman on the host machine.
(This option is not available with the remote Podman client, including Mac and Windows
(excluding WSL2) machines)

#### **--signal**, **-s**=**signal**

Signal to send to the containers in the pod. For more information on Linux signals, refer to *signal(7)*.
The default is **SIGKILL**.

## EXAMPLE

Kill pod with a given name:

```
podman pod kill mywebserver
```

Kill pod with a given ID:

```
podman pod kill 860a4b23
```

Terminate pod by sending `TERM` signal:

```
podman pod kill --signal TERM 860a4b23
```

Kill the latest pod. (This option is not available with the remote Podman client, including Mac and Windows (excluding WSL2) machines):

```
podman pod kill --latest
```

Terminate all pods by sending `KILL` signal:

```
podman pod kill --all
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-pod(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-pod.1.md)**, **[podman-pod-stop(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-pod-stop.1.md.in)**

## HISTORY

July 2018, Originally compiled by Peter Hunt <pehunt@redhat.com>
