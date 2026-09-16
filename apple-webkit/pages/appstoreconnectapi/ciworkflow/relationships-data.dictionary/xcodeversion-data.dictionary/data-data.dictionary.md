> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/xcodeversion-data.dictionary/data-data.dictionary

# CiWorkflow.Relationships.XcodeVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Xcode Versions resource.

## Declaration

```
object CiWorkflow.Relationships.XcodeVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Xcode Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciXcodeVersions`
