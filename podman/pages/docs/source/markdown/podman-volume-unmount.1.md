> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-volume-unmount.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-volume-unmount.1.md)

# podman-volume-unmount

## NAME

podman-volume-unmount - Unmount a volume

## SYNOPSIS

**podman volume unmount** *volume* \[...]

**podman volume umount** *volume* \[...]

## DESCRIPTION

Unmounts the specified volume, if there are no other containers
using it.

Volume storage increments a mount counter each time a volume is mounted.
When a volume is unmounted, the mount counter is decremented, and the
volume's filesystem is physically unmounted only when the mount
counter reaches zero indicating no other processes are using the mount.

## EXAMPLE

Unmount volume with a given ID:

```
podman volume unmount volumeID
```

Unmount multiple volumes with given IDs:

```
podman volume unmount volumeID1 volumeID2 volumeID3
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-volume(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-volume.1.md)**, **[podman-volume-mount(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-volume-mount.1.md)**
