> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_attestation_get.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/dhi/docker_dhi_attestation_get.yaml)

# docker dhi attestation get

Get attestation for a Docker Hardened Image

**Usage:** `docker dhi attestation get <image> <digest>`

## Description

Get an attestation attached to a Docker Hardened Image.

Returns the in-toto statement extracted from the attestation referrer.
The referrer digest must be provided to select which attestation to retrieve.
Use 'docker dhi attestation list' to discover available attestation digests.

The image can be specified as:
  - name:tag (e.g., nginx:1.27)
  - namespace/name:tag (e.g., dhi/nginx:1.27)
  - name@sha256:digest (e.g., nginx@sha256:abc123...)

Examples:
  # Get attestation by referrer digest
  docker dhi attestation get dhi/nginx:1.27 sha256:abc123...

  # Save attestation to a file
  docker dhi attestation get dhi/nginx:1.27 sha256:abc123... -o provenance.json

  # Extract only the predicate using jq
  docker dhi attestation get dhi/nginx:1.27 sha256:abc123... | jq .predicate

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-o`, `--output` |  | Write output to file instead of stdout |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
