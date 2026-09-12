> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary/appclip-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary/appclip-data.dictionary/data-data.dictionary)

# AppClipAdvancedExperienceCreateRequest.Data.Relationships.AppClip.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The type and ID of the App Clips resource that you’re relating with the Advanced App Clip Experiences resource you’re creating.

## Declaration

```
object AppClipAdvancedExperienceCreateRequest.Data.Relationships.AppClip.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related App Clips resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClips`
