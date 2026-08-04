> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-farm.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm.1.md)

# podman-farm

## NAME

podman-farm - Farm out builds to machines running podman for different architectures

## SYNOPSIS

**podman farm** *subcommand*

## DESCRIPTION

Farm out builds to machines running Podman for different architectures.

Manage farms by creating, updating, and removing them.

Note: All farm machines must have a minimum podman version of v4.9.0.

Podman manages the farms by writing and reading the `podman-connections.json` file located under
`$XDG_CONFIG_HOME/containers` or if the env is not set it defaults to `$HOME/.config/containers`.
Or the `PODMAN_CONNECTIONS_CONF` environment variable can be set to a full file path which podman
will use instead.
This file is managed by the podman commands and should never be edited by users directly. To manually
configure the farms use the `[farm]` section in containers.conf.

If the ReadWrite column in the **podman farm list** output is set to true the farm is stored in the
`podman-connections.json` file otherwise it is stored in containers.conf and can therefore not be
edited with the **podman farm remove/update** commands. It can still be used with **podman farm build**.

## COMMANDS

| Command | Man Page                                                                                                                                                              | Description                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| build   | [podman-farm-build(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm-build.1.md.in) | Build images on farm nodes, then bundle them into a manifest list |
| create  | [podman-farm-create(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm-create.1.md)  | Create a new farm                                                 |
| list    | [podman-farm-list(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm-list.1.md)      | List the existing farms                                           |
| remove  | [podman-farm-remove(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm-remove.1.md)  | Delete one or more farms                                          |
| update  | [podman-farm-update(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-farm-update.1.md)  | Update an existing farm                                           |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**

## HISTORY

July 2023, Originally compiled by Urvashi Mohnani (umohnani at redhat dot com)
