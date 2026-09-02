> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-image-exists.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-image-exists.1.md)

# podman-image-exists

## NAME

podman-image-exists - Check if an image exists in local storage

## SYNOPSIS

**podman image exists** *image*

## DESCRIPTION

**podman image exists** checks if an image exists in local storage. The **ID** or **Name**
of the image may be used as input.  Podman returns an exit code
of `0` when the image is found.  A `1` is returned otherwise. An exit code of `125` indicates there
was an issue accessing the local storage.

## OPTIONS

#### **--help**, **-h**

Print usage statement

## EXAMPLES

Check if an image called `webclient` exists in local storage (the image does actually exist):

```
$ podman image exists webclient
$ echo $?
0
```

Check if an image called `webbackend` exists in local storage (the image does not actually exist):

```
$ podman image exists webbackend
$ echo $?
1
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-image(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-image.1.md)**

## HISTORY

November 2018, Originally compiled by Brent Baude (bbaude at redhat dot com)
