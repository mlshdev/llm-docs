> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperience/relationships-data.dictionary/releasewithappstoreversion-data.dictionary/data-data.dictionary

# AppClipDefaultExperience.Relationships.ReleaseWithAppStoreVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The type and ID of a related App Store Versions resource.

## Declaration

```
object AppClipDefaultExperience.Relationships.ReleaseWithAppStoreVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related App Store Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appStoreVersions`
