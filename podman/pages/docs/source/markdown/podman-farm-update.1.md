> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-farm-update.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-farm-update.1.md)

# podman-farm-update

## NAME

podman-farm-update - Update an existing farm

## SYNOPSIS

**podman farm update** \[*options*] *name*

## DESCRIPTION

Update a farm by either adding connections to it, removing connections from it, or setting it as the new
default farm.

## OPTIONS

#### **--add**, **-a**

Add new connections to an existing farm. Multiple connections can be added at once.

#### **--default**, **-d**

Set the current farm as the default.

#### **--remove**, **-r**

Remove one or more connections from an existing farm.

## EXAMPLE

Add two connections to specified farm:

```
$ podman farm update --add f35,f38 farm1
```

Add connection to specified farm:

```
$ podman farm update --remove f35 farm1
```

Change specified farm to be default:

```
$ podman farm update --default farm2
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**, **[podman-farm(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-farm.1.md)**

## HISTORY

July 2023, Originally compiled by Urvashi Mohnani (umohnani at redhat dot com)s
