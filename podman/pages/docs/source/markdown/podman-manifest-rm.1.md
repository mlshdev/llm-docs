> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-manifest-rm.1.md](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-manifest-rm.1.md)

# podman-manifest-rm

## NAME

podman-manifest-rm - Remove manifest list or image index from local storage

## SYNOPSIS

**podman manifest rm** \[*options*] *list-or-index* \[...]

## DESCRIPTION

Removes one or more locally stored manifest lists.

## OPTIONS

#### **--ignore**, **-i**

If a specified manifest does not exist in the local storage, ignore it and do not throw an error.

## EXAMPLES

```
podman manifest rm listid
```

```
podman manifest rm --ignore listid1 listid2
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-manifest(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-manifest.1.md)**,  **[containers-storage.conf(5)](https://github.com/containers/storage/blob/main/docs/containers-storage.conf.5.md)**
