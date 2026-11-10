> Pinned source for Podman v6.2.0: [docs/source/markdown/podman-system-connection-rename.1.md](https://github.com/podman-container-tools/podman/blob/055de046937d29450f310fce0fe3071485d8bed9/docs/source/markdown/podman-system-connection-rename.1.md)

# podman-system-connection-rename

## NAME

podman-system-connection-rename - Rename the destination for Podman service

## SYNOPSIS

**podman system connection rename** *old* *new*

## DESCRIPTION

Rename ssh destination from *old* to *new*.

## EXAMPLE

Rename the specified connection:

```
$ podman system connection rename laptop devel
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/055de046937d29450f310fce0fe3071485d8bed9/docs/source/markdown/podman.1.md)**, **[podman-system(1)](https://github.com/podman-container-tools/podman/blob/055de046937d29450f310fce0fe3071485d8bed9/docs/source/markdown/podman-system.1.md)**, **[podman-system-connection(1)](https://github.com/podman-container-tools/podman/blob/055de046937d29450f310fce0fe3071485d8bed9/docs/source/markdown/podman-system-connection.1.md)**

## HISTORY

July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)
