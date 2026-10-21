> Pinned source for Docker main: [data/sbx_cli/sbx_kit_pull.yaml](https://github.com/docker/docs/blob/226023fc89bdeb3f051c4c8c697d04ed5f5bcd2c/data/sbx_cli/sbx_kit_pull.yaml)

# sbx kit pull

Pull a kit artifact from an OCI registry

**Usage:** `sbx kit pull REFERENCE [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Pull a kit artifact from an OCI registry and save its payload to a file.
Use a registry/repo:tag or registry/repo\@sha256:digest reference.

The output extension follows the resolved artifact format: .zip for v1,
or .tar.gz for v2. Use --output to choose the file path.

For Docker Hub, the sbx login session takes priority. Other registries use
secrets set with sbx secret set --registry. Both fall back to Docker credentials.
The registry must support HTTPS.

## Options

| Option           | Default | Description                                                 |
| ---------------- | ------- | ----------------------------------------------------------- |
| `-o`, `--output` |         | Output file path (default: derived from reference + format) |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx kit pull ghcr.io/myorg/my-kit:1.0

  # Choose where to save the payload
  sbx kit pull ghcr.io/myorg/my-kit:1.0 --output my-kit.tar.gz
```
