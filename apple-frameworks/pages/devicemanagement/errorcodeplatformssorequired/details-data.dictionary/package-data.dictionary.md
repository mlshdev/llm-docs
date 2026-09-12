> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodeplatformssorequired/details-data.dictionary/package-data.dictionary](https://developer.apple.com/documentation/devicemanagement/errorcodeplatformssorequired/details-data.dictionary/package-data.dictionary)

# ErrorCodePlatformSSORequired.Details.Package

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

A dictionary that specifies the package that the device uses to install an app with the SSO app extension used for Platform SSO.

## Declaration

```
object ErrorCodePlatformSSORequired.Details.Package
```

## Properties

- `ManifestURL` — `string` (required): The URL of the app manifest, which needs to begin with `https:`.
- `PinningCerts` — `[data]`: An array of DER-encoded certificates to pin the connection when fetching the `ManifestURL`.
- `PinningRevocationCheckRequired` — `boolean`: If `true`, certificate revocation checks require a positive response when using certificate pinning with `PinningCerts`.
  **Default:** `false`
