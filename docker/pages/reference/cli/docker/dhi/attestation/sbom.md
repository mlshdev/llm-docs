> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_attestation_sbom.yaml](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/data/cli/dhi/docker_dhi_attestation_sbom.yaml)

# docker dhi attestation sbom

Display the SPDX SBOM for a Docker Hardened Image

**Usage:** `docker dhi attestation sbom <image>`

## Description

Display the SPDX SBOM attestation attached to a Docker Hardened Image
in a human-readable format.

The command fetches the SPDX SBOM attestation from the OCI Referrers API,
extracts the SPDX document, and displays a summary with a package table.

The image can be specified as:
  - name:tag (e.g., nginx:1.27)
  - namespace/name:tag (e.g., dhi/nginx:1.27)
  - name@sha256:digest (e.g., nginx@sha256:abc123...)

Examples:
  # Display the SBOM for an image
  docker dhi attestation sbom dhi/nginx:1.27

  # Display the SBOM for a specific platform
  docker dhi attestation sbom dhi/nginx:1.27 --platform linux/amd64

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--platform` |  | Platform to filter by (e.g., linux/amd64). Defaults to the Docker daemon platform |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
