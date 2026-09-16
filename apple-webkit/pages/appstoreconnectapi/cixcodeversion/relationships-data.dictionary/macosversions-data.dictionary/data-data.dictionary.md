> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversion/relationships-data.dictionary/macosversions-data.dictionary/data-data.dictionary

# CiXcodeVersion.Relationships.MacOsVersions.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related macOS Versions resource.

## Declaration

```
object CiXcodeVersion.Relationships.MacOsVersions.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related macOS Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciMacOsVersions`
