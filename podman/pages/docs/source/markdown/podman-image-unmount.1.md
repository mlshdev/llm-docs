> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-image-unmount.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-unmount.1.md)

# podman-image-unmount

## NAME

podman-image-unmount - Unmount an image's root filesystem

## SYNOPSIS

**podman image unmount** \[*options*] *image* \[...]

**podman image umount** \[*options*] *image* \[...]

## DESCRIPTION

Unmounts the specified images' root file system, if no other processes
are using it.

Image storage increments a mount counter each time an image is mounted.
When an image is unmounted, the mount counter is decremented, and the
image's root filesystem is physically unmounted only when the mount
counter reaches zero indicating no other processes are using the mount.
An unmount can be forced with the --force flag.

## OPTIONS

#### **--all**, **-a**

All of the currently mounted images are unmounted.

#### **--force**, **-f**

Force the unmounting of specified images' root file system, even if other
processes have mounted it.

Note: Other processes using the file system can fail if the mount point is removed without their knowledge.

## EXAMPLE

Unmount image with a given ID:

```
podman image unmount imageID
```

Unmount multiple images with given IDs:

```
podman image unmount imageID1 imageID2 imageID3
```

Unmount all images:

```
podman image unmount --all
```

Force unmount image with a given ID:

```
podman image unmount --force imageID
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-image-mount(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-image-mount.1.md)**, **[podman-mount(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-mount.1.md.in)**
