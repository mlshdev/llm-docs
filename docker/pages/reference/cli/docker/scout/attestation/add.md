> Pinned source for Docker main: [data/cli/scout/docker_scout_attestation_add.yaml](https://github.com/docker/docs/blob/e169d1082ba3fa27684fe5a67d8109a788aa84a9/data/cli/scout/docker_scout_attestation_add.yaml)

# docker scout attestation add

Add attestation to image

**Usage:** `docker scout attestation add OPTIONS IMAGE [IMAGE...]`

**Aliases:** docker scout attestation add, docker scout attest add

> \[!NOTE]
> This command is experimental.

## Description

The docker scout attestation add command adds attestations to images.

## Options

| Option                  | Default                     | Description                                  |
| ----------------------- | --------------------------- | -------------------------------------------- |
| `--file`                |                             | File location of attestations to attach      |
| `--org`                 |                             | Namespace of the Docker organization         |
| `--predicate-type`      |                             | Predicate-type for attestations              |
| `--referrer`            |                             | Use OCI referrer API for pushing attestation |
| `--referrer-repository` | `registry.scout.docker.com` | Repository to push referrer to               |
