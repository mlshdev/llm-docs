> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/relationships-data.dictionary/appclip-data.dictionary/data-data.dictionary

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
