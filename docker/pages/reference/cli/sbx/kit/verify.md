> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_verify.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/sbx_cli/sbx_kit_verify.yaml)

# sbx kit verify

Verify a kit artifact's signature

**Usage:** `sbx kit verify REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Verify a kit artifact's cosign-compatible signature.

For a local directory, the kit.sig.bundle sidecar is checked
against the kit's content. For a git reference, the repository is cloned and
its committed kit.sig.bundle sidecar is checked the same way.
For an OCI reference, signatures attached as OCI referrers are checked against
the kit manifest.

Use --key to verify a key-based signature against a PEM public key. For
keyless signatures, supply the accepted signer identity with
--certificate-identity (or --certificate-identity-regexp) and
--certificate-oidc-issuer (or --certificate-oidc-issuer-regexp).

Pass --insecure-ignore-tlog to verify a private keyless signature made
with --tlog-upload=false: it drops the requirement for a Rekor
transparency-log entry and relies on the timestamp-authority timestamp
instead. It has no effect on key-based verification.

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
# Verify a key-based signature
  sbx kit verify --key cosign.pub ghcr.io/org/my-kit:1.0

  # Verify a keyless signature by identity
  sbx kit verify \
    --certificate-identity user@example.com \
    --certificate-oidc-issuer https://accounts.google.com \
    ./my-kit/
```
