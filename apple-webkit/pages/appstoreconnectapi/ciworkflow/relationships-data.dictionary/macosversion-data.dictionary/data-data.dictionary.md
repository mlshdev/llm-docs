> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/macosversion-data.dictionary/data-data.dictionary

# CiWorkflow.Relationships.MacOsVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related macOS Versions resource.

## Declaration

```
object CiWorkflow.Relationships.MacOsVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related macOS Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciMacOsVersions`
