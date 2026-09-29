> Pinned source for Podman v6.1.3: [docs/source/markdown/podman-system-connection-default.1.md](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-system-connection-default.1.md)

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

**[podman(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman.1.md)**, **[podman-system(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-system.1.md)**, **[podman-system-connection(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-system-connection.1.md)**

## HISTORY

July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)
