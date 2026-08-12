> Release-pinned source for Podman v6.1.0: [docs/source/markdown/podman-untag.1.md](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman-untag.1.md)

# podman-untag

## NAME

podman-untag - Remove one or more names from a locally-stored image

## SYNOPSIS

**podman untag** *image* \[*name*\[:*tag*]...]

**podman image untag** *image* \[*name*\[:*tag*]...]

## DESCRIPTION

Remove one or more names from an image in the local storage.  The image can be referred to by ID or reference.  If no name is specified, all names are removed from the image.  If a specified name is a short name and does not include a registry, `localhost/` is prefixed (e.g., `fedora` -> `localhost/fedora`). If a specified name does not include a tag, `:latest` is appended (e.g., `localhost/fedora` -> `localhost/fedora:latest`).

## OPTIONS

#### **--help**, **-h**

Print usage statement

## EXAMPLES

Remove all tags from the specified image.

```
$ podman untag 0e3bbc2
```

Remove tag from specified image.

```
$ podman untag imageName:latest otherImageName:latest
```

Remove multiple tags from the specified image.

```
$ podman untag httpd myhttpd myregistryhost:5000/fedora/httpd:v2
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/cade97a52ebdf9dbf9e81de8009015776837a074/docs/source/markdown/podman.1.md)**

## HISTORY

December 2019, Originally compiled by Sascha Grunert <sgrunert@suse.com>
