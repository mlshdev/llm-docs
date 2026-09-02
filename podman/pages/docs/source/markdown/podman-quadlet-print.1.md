> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-quadlet-print.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-quadlet-print.1.md)

# podman-quadlet-print

## NAME

podman-quadlet-print - Display the contents of a quadlet

## SYNOPSIS

**podman quadlet print** *quadlet*

**podman quadlet cat** *quadlet*

## DESCRIPTION

Print the contents of a Quadlet, displaying the file including all comments.

## EXAMPLES

Using `podman quadlet print` to display the contents of a quadlet named `myquadlet.container`:

```
$ podman quadlet print myquadlet.container
[Container]
Image=alpine
Exec=sh -c "echo LIFECYCLE TEST STARTED; trap 'exit' SIGTERM; while :; do echo running; sleep 1; done"
LogDriver=passthrough
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-quadlet(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-quadlet.1.md)**, **[podman-systemd.unit(5)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-systemd.unit.5.md)**
