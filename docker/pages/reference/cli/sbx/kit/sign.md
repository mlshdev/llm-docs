> Commit-pinned source for Docker main: [data/sbx_cli/sbx_kit_sign.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/sbx_cli/sbx_kit_sign.yaml)

# sbx kit sign

Sign a kit artifact

**Usage:** `sbx kit sign REFERENCE [flags]`

> [!NOTE]
> This command is experimental.

## Description

Sign a kit artifact with cosign-compatible Sigstore signatures.

For a local directory, a detached signature bundle is written to
kit.sig.bundle next to spec.yaml. For an OCI reference, the
signature is attached to the kit manifest as an OCI referrer.

Signing is keyless by default (Fulcio + Rekor), which requires an OIDC
identity token. In CI the token is minted automatically by the detected
platform (GitHub Actions, Buildkite, GCP, SPIFFE, or a projected
service-account token on disk). Elsewhere, supply one with
--identity-token-file or --identity-token, or complete an interactive
browser login. Prefer the file form: process arguments are readable by
other local users and are recorded in shell history. A token is never
read from SIGSTORE_ID_TOKEN, so it cannot be chosen by anything that can
set an environment variable. Use --key for key-based signing with an
unencrypted PEM private key.

For private kits whose signing event must not leak to a public log, pass
--tlog-upload=false to skip the Rekor transparency log. This only affects
keyless signing (key-based signing never uploads to Rekor) and requires
the signing config to provide a timestamp authority so the signature stays
verifiable after the short-lived certificate expires. For fully offline,
private signing, prefer key-based signing with --key.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--identity-token` |  | OIDC identity token for keyless signing; defaults to the ambient CI provider, then an interactive browser login |
| `--identity-token-file` |  | File holding the OIDC identity token; keeps it out of the process arguments |
| `--key` |  | Private key for key-based signing (PEM); omit for keyless signing |
| `--tlog-upload` | `true` | Upload the keyless signature to the Rekor transparency log; set false for private kits |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Keyless-sign a local kit directory
  sbx kit sign ./my-kit/

  # Key-based sign an OCI kit
  sbx kit sign --key cosign.key ghcr.io/org/my-kit:1.0

  # Keyless-sign without uploading to the public transparency log
  sbx kit sign --tlog-upload=false ghcr.io/org/private-kit:1.0
```
