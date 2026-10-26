> Pinned source for Docker main: [data/sbx_cli/sbx_kit_push.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_kit_push.yaml)

# sbx kit push

Push a kit artifact to an OCI registry

**Usage:** `sbx kit push DIRECTORY REFERENCE [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Package a kit directory containing spec.yaml and push it to an OCI registry.
Use a registry/repo:tag reference. The kit's schema selects the artifact format.

Every push attaches provenance. Use --sign to also sign the manifest and
provenance; signing is keyless unless --key is supplied.

For Docker Hub, the sbx login session takes priority. Other registries use
secrets set with sbx secret set --registry. Both fall back to Docker credentials.
The registry must support HTTPS.

## Options

| Option                  | Default | Description                                                                                                     |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `--identity-token`      |         | OIDC identity token for keyless signing; defaults to the ambient CI provider, then an interactive browser login |
| `--identity-token-file` |         | File holding the OIDC identity token; keeps it out of the process arguments                                     |
| `--key`                 |         | Private key for key-based signing (PEM); omit for keyless signing                                               |
| `--sign`                |         | Sign the pushed kit and attach the signature as an OCI referrer                                                 |
| `--tlog-upload`         | `true`  | Upload the keyless signature to the Rekor transparency log; set false for private kits                          |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx kit push ./my-kit ghcr.io/myorg/my-kit:1.0

  # Sign the pushed kit (keyless)
  sbx kit push ./my-kit ghcr.io/myorg/my-kit:1.0 --sign
```
