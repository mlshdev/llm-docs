> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-image.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image.1.md)

# podman-image

## NAME

podman-image - Manage images

## SYNOPSIS

**podman image** *subcommand*

## DESCRIPTION

The image command allows the management of images

## COMMANDS

| Command | Man Page                                                                                                                                                                 | Description                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| build   | [podman-build(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-build.1.md.in)              | Build a container using a Dockerfile.                 |
| diff    | [podman-image-diff(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-diff.1.md)       | Inspect changes on an image's filesystem.             |
| exists  | [podman-image-exists(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-exists.1.md)   | Check if an image exists in local storage.            |
| history | [podman-history(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-history.1.md)             | Show the history of an image.                         |
| import  | [podman-import(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-import.1.md)               | Import a tarball and save it as a filesystem image.   |
| inspect | [podman-image-inspect(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-inspect.1.md) | Display an image's configuration.                     |
| list    | [podman-images(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-images.1.md.in)            | List the container images on the system.(alias ls)    |
| load    | [podman-load(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-load.1.md)                   | Load an image from the docker archive.                |
| mount   | [podman-image-mount(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-mount.1.md)     | Mount an image's root filesystem.                     |
| prune   | [podman-image-prune(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-prune.1.md)     | Remove all unused images from the local store.        |
| pull    | [podman-pull(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-pull.1.md.in)                | Pull an image from a registry.                        |
| push    | [podman-push(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-push.1.md.in)                | Push an image from local storage to elsewhere.        |
| rm      | [podman-rmi(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-rmi.1.md)                     | Remove one or more locally stored images.             |
| save    | [podman-save(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-save.1.md.in)                | Save an image to docker-archive or oci.               |
| scp     | [podman-image-scp(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-scp.1.md)         | Securely copy an image from one host to another.      |
| search  | [podman-search(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-search.1.md.in)            | Search a registry for an image.                       |
| sign    | [podman-image-sign(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-sign.1.md.in)    | Create a signature for an image.                      |
| tag     | [podman-tag(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-tag.1.md)                     | Add an additional name to a local image.              |
| tree    | [podman-image-tree(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-tree.1.md)       | Print layer hierarchy of an image in a tree format.   |
| trust   | [podman-image-trust(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-trust.1.md.in)  | Manage container registry image trust policy.         |
| unmount | [podman-image-unmount(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-unmount.1.md) | Unmount an image's root filesystem.                   |
| untag   | [podman-untag(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-untag.1.md)                 | Remove one or more names from a locally-stored image. |

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**
