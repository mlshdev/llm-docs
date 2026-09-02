> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-machine-stop.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-machine-stop.1.md)

# podman-machine-stop

## NAME

podman-machine-stop - Stop a virtual machine

## SYNOPSIS

**podman machine stop** \[*name*]

## DESCRIPTION

Stops a virtual machine.

The default machine name is `podman-machine-default`. If a machine name is not specified as an argument,
then `podman-machine-default` will be stopped.

Rootless only.

Podman on MacOS and Windows requires a virtual machine. This is because containers are Linux -
containers do not run on any other OS because containers' core functionality are
tied to the Linux kernel. Podman machine must be used to manage MacOS and Windows machines,
but can be optionally used on Linux.

**podman machine stop** stops a Linux virtual machine where containers are run.

## OPTIONS

#### **--help**

Print usage statement.

## EXAMPLES

Stop a podman machine named myvm.

```
$ podman machine stop myvm
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-machine(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-machine.1.md)**

## HISTORY

March 2021, Originally compiled by Ashley Cui <acui@redhat.com>
