> Release-pinned source for Podman v6.0.2: [docs/source/markdown/podman-artifact-rm.1.md](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-artifact-rm.1.md)

# podman-artifact-rm

## NAME

podman-artifact-rm - Remove one or more OCI artifacts from local storage

## SYNOPSIS

**podman artifact rm** \[*options*] *name*

## DESCRIPTION

Remove one or more artifacts from the local artifact store.  The input may be the fully
qualified artifact name or a full or partial artifact digest.

## OPTIONS

#### **--all**, **-a**

Remove all artifacts in the local store.  The use of this option conflicts with
providing a name or digest of the artifact.

#### **--ignore**, **-i**

Remove artifacts in the local store, ignoring errors when trying to remove artifacts that do not exist.

## EXAMPLES

Remove an artifact by name.

```
$ podman artifact rm quay.io/artifact/foobar2:test
Deleted: e7b417f49fc24fc7ead6485da0ebd5bc4419d8a3f394c169fee5a6f38faa4056
```

Remove multiple artifacts by their shortened IDs.

```
$ podman artifact rm c4dfb1609ee2 93fd78260bd1 c0ed59d05ff7
```

Remove an artifact by partial digest.

```
$ podman artifact rm e7b417f49fc
Deleted: e7b417f49fc24fc7ead6485da0ebd5bc4419d8a3f394c169fee5a6f38faa4056
```

Remove all artifacts in local storage.

```
$ podman artifact rm -a
Deleted: cee15f7c5ce3e86ae6ce60d84bebdc37ad34acfa9a2611cf47501469ac83a1ab
Deleted: 72875f8f6f78d5b8ba98b2dd2c0a6f395fde8f05ff63a1df580d7a88f5afa97b
```

Remove artifacts ignoring the errors if the artifact does not exist.

```
$ podman artifact rm -i 3f78d5b8ba98b2
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman.1.md)**, **[podman-artifact(1)](https://github.com/podman-container-tools/podman/blob/b28edb9ad70ce4317dc762ee9ce0a6d081d154e9/docs/source/markdown/podman-artifact.1.md)**

## HISTORY

Jan 2025, Originally compiled by Brent Baude <bbaude@redhat.com>
