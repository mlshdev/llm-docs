> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_attestation_list.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/data/cli/scout/docker_scout_attestation_list.yaml)

# docker scout attestation list

List attestations for image

**Usage:** `docker scout attestation list OPTIONS IMAGE`

**Aliases:** docker scout attestation list, docker scout attest list

> [!NOTE]
> This command is experimental.

## Description

The docker scout attestation list command lists attestations for images.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--format` | `list` | Output format: - list: list of attestations of the image - json: json representation of the attestation list (default "json") |
| `--org` |  | Namespace of the Docker organization |
| `-o`, `--output` |  | Write the report to a file |
| `--platform` |  | Platform of image to analyze |
| `--predicate-type` |  | Predicate-type for attestations |
| `--ref` |  | Reference to use if the provided tarball contains multiple references. Can only be used with archive |
