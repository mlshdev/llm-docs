> Pinned source for Podman v6.1.2: [docs/source/markdown/podman-system-connection-default.1.md](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman-system-connection-default.1.md)

# podman-system-connection-default

## NAME

podman-system-connection-default - Set named destination as default for the Podman service

## SYNOPSIS

**podman system connection default** *name*

## DESCRIPTION

Set named ssh destination as default destination for the Podman service.

## EXAMPLE

Set the specified connection as default:

```
$ podman system connection default production
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman.1.md)**, **[podman-system(1)](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman-system.1.md)**, **[podman-system-connection(1)](https://github.com/podman-container-tools/podman/blob/04f3aa430e6df81bea059978bc5bafbc846ba3e7/docs/source/markdown/podman-system-connection.1.md)**

## HISTORY

July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)
