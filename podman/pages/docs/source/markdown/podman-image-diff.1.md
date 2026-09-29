> Pinned source for Podman v6.1.3: [docs/source/markdown/podman-image-diff.1.md](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-image-diff.1.md)

# podman-image-diff

## NAME

podman-image-diff - Inspect changes on an image's filesystem

## SYNOPSIS

**podman image diff** \[*options*] *image* \[*image*]

## DESCRIPTION

Displays changes on an image's filesystem.  The image is compared to its parent layer or the second argument when given.

The output is prefixed with the following symbols:

| Symbol | Description                      |
| ------ | -------------------------------- |
| A      | A file or directory was added.   |
| D      | A file or directory was deleted. |
| C      | A file or directory was changed. |

## OPTIONS

#### **--format**

Alter the output into a different format.  The only valid format for **podman image diff** is `json`.

## EXAMPLES

Display image differences from images parent layer:

```
$ podman image diff redis:old
C /usr
C /usr/local
C /usr/local/bin
A /usr/local/bin/docker-entrypoint.sh
```

Display image differences between two different images in JSON format:

```
$ podman image diff --format json redis:old redis:alpine
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

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman.1.md)**, **[podman-image(1)](https://github.com/podman-container-tools/podman/blob/85b994955e0b4e30fbce9c8351cab85676140ede/docs/source/markdown/podman-image.1.md)**

## HISTORY

August 2017, Originally compiled by Ryan Cole <rycole@redhat.com>
