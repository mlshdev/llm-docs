> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-network-update.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-network-update.1.md)

# podman-network-update

## NAME

podman-network-update - Update an existing Podman network

## SYNOPSIS

**podman network update**  \[*options*] *network*

## DESCRIPTION

Allow changes to existing container networks. At present, only changes to the DNS servers in use by a network is supported.

NOTE: Only supported with the netavark network backend.

## OPTIONS

#### **--dns-add**

Accepts array of DNS resolvers and add it to the existing list of resolvers configured for a network.

#### **--dns-drop**

Accepts array of DNS resolvers and removes them from the existing list of resolvers configured for a network.

## EXAMPLE

Update a network:

```
$ podman network update network1 --dns-add 8.8.8.8,1.1.1.1
```

Update a network and add/remove dns servers:

```
$ podman network update network1 --dns-drop 8.8.8.8 --dns-add 3.3.3.3
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-network(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-network.1.md)**, **[podman-network-inspect(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-network-inspect.1.md)**, **[podman-network-ls(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-network-ls.1.md.in)**
