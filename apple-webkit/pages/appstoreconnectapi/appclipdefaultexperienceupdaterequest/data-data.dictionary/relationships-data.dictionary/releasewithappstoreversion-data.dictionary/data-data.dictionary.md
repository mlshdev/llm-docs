> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest/data-data.dictionary/relationships-data.dictionary/releasewithappstoreversion-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest/data-data.dictionary/relationships-data.dictionary/releasewithappstoreversion-data.dictionary/data-data.dictionary)

# AppClipDefaultExperienceUpdateRequest.Data.Relationships.ReleaseWithAppStoreVersion.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The type and ID of the App Store Versions resource that you’re relating with the Default App Clip Experiences resource you’re updating.

## Declaration

```
object AppClipDefaultExperienceUpdateRequest.Data.Relationships.ReleaseWithAppStoreVersion.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related App Store Versions resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appStoreVersions`
