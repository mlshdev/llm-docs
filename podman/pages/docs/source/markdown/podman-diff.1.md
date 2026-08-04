> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-diff.1.md.in](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-diff.1.md.in)

# podman-diff

## NAME

podman-diff - Inspect changes on a container or image's filesystem

## SYNOPSIS

**podman diff** \[*options*] *container|image* \[*container|image*]

## DESCRIPTION

Displays changes on a container or image's filesystem.  The container or image is compared to its parent layer or the second argument when given.

The output is prefixed with the following symbols:

| Symbol | Description                      |
| ------ | -------------------------------- |
| A      | A file or directory was added.   |
| D      | A file or directory was deleted. |
| C      | A file or directory was changed. |

## OPTIONS

#### **--format**

Alter the output into a different format.  The only valid format for **podman diff** is `json`.

#### **--latest**, **-l**

Instead of providing the container name or ID, use the last created container.
Note: the last started container can be from other users of Podman on the host machine.
(This option is not available with the remote Podman client, including Mac and Windows
(excluding WSL2) machines)

## EXAMPLES

Show container-modified files versus the container's image:

```
$ podman diff container1
A /myscript.sh
```

Show container-modified files versus the container's image in JSON format:

```
$ podman diff --format json myimage
{
  "changed": [
    "/usr",
    "/usr/local",
    "/usr/local/bin"
  ],
  "added": [
    "/usr/local/bin/docker-entrypoint.sh"
  ]
}
```

Show the difference between the specified container and the image:

```
$ podman diff container1 image1
A /test
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-container-diff(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-container-diff.1.md.in)**, **[podman-image-diff(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-diff.1.md)**

## HISTORY

August 2017, Originally compiled by Ryan Cole <rycole@redhat.com>
