> Pinned source for Podman v6.1.3: [docs/source/markdown/podman-volume-import.1.md](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-volume-import.1.md)

# podman-volume-import

## NAME

podman-volume-import - Import tarball contents into an existing podman volume

## SYNOPSIS

**podman volume import** *volume* \[*source*]

## DESCRIPTION

**podman volume import** imports the contents of a tarball into the podman volume's mount point.
The contents of the volume is merged with the content of the tarball with the latter taking precedence.
**podman volume import** can consume piped input when using `-` as source path.

The given volume must already exist and is not created by podman volume import.

#### **--help**

Print usage statement

## EXAMPLES

Import named volume content from the specified file.

```
$ podman volume import myvol test.tar
```

Import named volume content from stdin.

```
$ gunzip -c hello.tar.gz | podman volume import myvol -
```

Export the content from named volume and pipe it into the named volume via stdin.

```
$ podman volume export oldmyvol | podman volume import myvol -
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman.1.md)**, **[podman-volume(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-volume.1.md)**, **[podman-volume-export(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-volume-export.1.md)**
