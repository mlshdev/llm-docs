> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetanotificationcreaterequest/data-data.dictionary/relationships-data.dictionary/build-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildbetanotificationcreaterequest/data-data.dictionary/relationships-data.dictionary/build-data.dictionary/data-data.dictionary)

# BuildBetaNotificationCreateRequest.Data.Relationships.Build.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The type and ID of the resource that you’re relating with the resource you’re creating.

## Declaration

```
object BuildBetaNotificationCreateRequest.Data.Relationships.Build.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The types and IDs of the related data to update.
  **Allowed values:** `builds`
