> Commit-pinned source for Docker main: [data/cli/scout/docker_scout_attestation_get.yaml](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/data/cli/scout/docker_scout_attestation_get.yaml)

# docker scout attestation get

Get attestation for image

**Usage:** `docker scout attestation get OPTIONS IMAGE [DIGEST]`

**Aliases:** docker scout attestation get, docker scout attest get

> [!NOTE]
> This command is experimental.

## Description

The docker scout attestation get command gets attestations for images.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--key` | `https://registry.scout.docker.com/keyring/dhi/latest.pub` | Signature key to use for verification |
| `--org` |  | Namespace of the Docker organization |
| `-o`, `--output` |  | Write the report to a file |
| `--platform` |  | Platform of image to analyze |
| `--predicate` |  | Get in-toto predicate only dropping the subject |
| `--predicate-type` |  | Predicate-type for attestation |
| `--ref` |  | Reference to use if the provided tarball contains multiple references. Can only be used with archive |
| `--skip-tlog` |  | Skip signature verification against public transaction log |
| `--verify` |  | Verify the signature on the attestation |
