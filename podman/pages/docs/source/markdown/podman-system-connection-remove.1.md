> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-system-connection-remove.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-system-connection-remove.1.md)

# podman-system-connection-remove

## NAME

podman-system-connection-remove - Delete named destination

## SYNOPSIS

**podman system connection remove** \[*options*] *name*

## DESCRIPTION

Delete named ssh destination.

## OPTIONS

#### **--all**, **-a**

Remove all connections.

## EXAMPLE

Remove the specified system connection:

```
$ podman system connection remove production
```

Remove all system connections:

```
$ podman system connection remove --all
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-system(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-system.1.md)**, **[podman-system-connection(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-system-connection.1.md)**

## HISTORY

July 2020, Originally compiled by Jhon Honce (jhonce at redhat dot com)
