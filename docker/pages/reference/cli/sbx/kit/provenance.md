> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_provenance.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/data/sbx_cli/sbx_kit_provenance.yaml)

# sbx kit provenance

Show the SLSA provenance attached to a kit

**Usage:** `sbx kit provenance REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Print the SLSA provenance attestation attached to an OCI kit.

Provenance is attached by `sbx kit push` as an OCI referrer of the kit
manifest. It records the kit's content digests, the sandbox image its spec
declares, and the source git commit the kit was pushed from.

Provenance pushed without --sign is unsigned: it is printed but marked
UNSIGNED, because anyone with push access to the repository could have
written it. To verify a signed attestation, pass --key for a key-based
signature, or --certificate-identity (or --certificate-identity-regexp)
together with --certificate-oidc-issuer (or its regexp form) for a keyless
one; only attestations that verify and whose subject matches the kit's own
digest are reported as VERIFIED.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--certificate-identity` |  | Exact keyless signer identity (certificate SAN) |
| `--certificate-identity-regexp` |  | Keyless signer identity regexp (certificate SAN) |
| `--certificate-oidc-issuer` |  | Exact keyless OIDC issuer |
| `--certificate-oidc-issuer-regexp` |  | Keyless OIDC issuer regexp |
| `--insecure-ignore-tlog` |  | Do not require a Rekor transparency-log entry (for private keyless signatures) |
| `--key` |  | Public key for key-based verification (PEM) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Show provenance (unsigned attestations are printed as-is)
  sbx kit provenance ghcr.io/org/my-kit:1.0

  # Verify a signed attestation before printing it
  sbx kit provenance \
    --certificate-identity user@example.com \
    --certificate-oidc-issuer https://accounts.google.com \
    ghcr.io/org/my-kit:1.0
```
