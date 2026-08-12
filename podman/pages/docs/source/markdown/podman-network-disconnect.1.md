> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-network-disconnect.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-network-disconnect.1.md)

# podman-network-disconnect

## NAME

podman-network-disconnect - Disconnect a container from a network

## SYNOPSIS

**podman network disconnect** \[*options*] network container

## DESCRIPTION

Disconnects a container from a network. A container can be disconnected from a network by name or by ID.
If all networks are disconnected from the container, it behaves like a container created with `--network=none`
and it does not have network connectivity until a network is connected again.

## OPTIONS

#### **--force**, **-f**

Force the container to disconnect from a network

## EXAMPLE

Disconnect container from specified network:

```
podman network disconnect test web
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-network(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-network.1.md)**, **[podman-network-connect(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-network-connect.1.md)**

## HISTORY

November 2020, Originally compiled by Brent Baude <bbaude@redhat.com>
