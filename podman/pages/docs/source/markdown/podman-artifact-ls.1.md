> Release-pinned source for Podman v6.1.1: [docs/source/markdown/podman-artifact-ls.1.md.in](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-artifact-ls.1.md.in)

# podman-artifact-ls

## NAME

podman-artifact-ls - List OCI artifacts in local store (alias list)

## SYNOPSIS

**podman artifact ls** \[*options*]

## DESCRIPTION

List all local artifacts in your local store.

## OPTIONS

#### **--format**

Print results with a Go template.

| **Placeholder** | **Description**                                 |
| --------------- | ----------------------------------------------- |
| .Created        | Elapsed time since the artifact was created     |
| .CreatedAt      | Full timestamp of when the artifact was created |
| .Digest         | The computed digest of the artifact's manifest  |
| .Repository     | Repository name of the artifact                 |
| .Size           | Size artifact in human readable units           |
| .Tag            | Tag of the artifact name                        |
| .VirtualSize    | Size of artifact in bytes                       |

#### **--no-trunc**

Do not truncate the output (default *false*).

#### **--noheading**, **-n**

Omit the table headings from the listing.

## EXAMPLES

List artifacts in the local store

```
$ podman artifact ls
REPOSITORY                TAG         DIGEST         CREATED          SIZE
quay.io/artifact/foobar1  latest      ab609fad386d   6 hours ago      2.097GB
quay.io/artifact/foobar2  special     cd734b558ceb   53 seconds ago   12.58MB
```

List artifacts in the local store without truncating the digest

```
$ podman artifact ls --no-trunc
REPOSITORY                TAG         DIGEST                                                              CREATED          SIZE
quay.io/artifact/foobar1  latest      ab609fad386df1433f461b0643d9cf575560baf633809dcc9c190da6cc3a3c29    6 hours ago      2.097GB
quay.io/artifact/foobar2  special     cd734b558ceb8ccc0281ca76530e1dea1eb479407d3163f75fb601bffb6f73d0    53 seconds ago   12.58MB
```

List artifacts in the local store without the title header

```
$ podman artifact ls --noheading
quay.io/artifact/foobar1  latest      ab609fad386d   6 hours ago      2.097GB
quay.io/artifact/foobar2  special     cd734b558ceb   53 seconds ago   12.58MB
```

List artifact digests and size using a --format

```
$ podman artifact ls --format "{{.Digest}} {{.Size}}"
ab609fad386d 2.097GB
cd734b558ceb 12.58MB
```

## SEE ALSO

**[podman(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman.1.md)**, **[podman-artifact(1)](https://github.com/podman-container-tools/podman/blob/8303f2e25b675ea7f82099d615c60969aec15870/docs/source/markdown/podman-artifact.1.md)**

## HISTORY

Jan 2025, Originally compiled by Brent Baude <bbaude@redhat.com>
