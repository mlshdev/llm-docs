> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-farm-remove.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-farm-remove.1.md)

# podman-farm-remove

## NAME

podman-farm-remove - Delete one or more farms

## SYNOPSIS

**podman farm remove** \[*options*] *name*

**podman farm rm** \[*options*] *name*

## DESCRIPTION

Delete one or more farms.

## OPTIONS

#### **--all**, **-a**

Remove all farms.

## EXAMPLE

Remove specified farm:

```
$ podman farm remove farm1
```

Remove all farms:

```
$ podman farm rm --all
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-farm(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-farm.1.md)**

## HISTORY

July 2023, Originally compiled by Urvashi Mohnani (umohnani at redhat dot com)s
