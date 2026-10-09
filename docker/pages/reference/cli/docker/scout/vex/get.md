> Pinned source for Docker main: [data/cli/scout/docker_scout_vex_get.yaml](https://github.com/docker/docs/blob/18bbfeeb249da011f359d558dba84c4b6dc3a335/data/cli/scout/docker_scout_vex_get.yaml)

# docker scout vex get

Get VEX attestation for image

**Usage:** `docker scout vex get OPTIONS IMAGE`

> \[!NOTE]
> This command is experimental.

## Description

The docker scout vex get command gets a VEX attestation for images.

## Options

| Option           | Default                                                    | Description                                                                                          |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--key`          | `https://registry.scout.docker.com/keyring/dhi/latest.pub` | Signature key to use for verification                                                                |
| `--org`          |                                                            | Namespace of the Docker organization                                                                 |
| `-o`, `--output` |                                                            | Write the report to a file                                                                           |
| `--platform`     |                                                            | Platform of image to analyze                                                                         |
| `--ref`          |                                                            | Reference to use if the provided tarball contains multiple references. Can only be used with archive |
| `--skip-tlog`    |                                                            | Skip signature verification against public transaction log                                           |
| `--verify`       |                                                            | Verify the signature on the attestation                                                              |
