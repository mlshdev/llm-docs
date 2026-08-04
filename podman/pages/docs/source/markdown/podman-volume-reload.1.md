> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-volume-reload.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-volume-reload.1.md)

# podman-volume-reload

## NAME

podman-volume-reload - Reload all volumes from volumes plugins

## SYNOPSIS

**podman volume reload**

## DESCRIPTION

**podman volume reload** checks all configured volume plugins and updates the libpod database with all available volumes.
Existing volumes are also removed from the database when they are no longer present in the plugin.

This command it is best effort and cannot guarantee a perfect state because plugins can be modified from the outside at any time.

Note: This command is not supported with podman-remote.

## EXAMPLES

Reload the volume plugins.

```
$ podman volume reload
Added:
vol6
Removed:
t3
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-volume(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-volume.1.md)**
