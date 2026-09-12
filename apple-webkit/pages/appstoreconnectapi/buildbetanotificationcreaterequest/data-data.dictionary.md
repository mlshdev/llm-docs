> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbetanotificationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildbetanotificationcreaterequest/data-data.dictionary)

# BuildBetaNotificationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BuildBetaNotificationCreateRequest.Data
```

## Properties

- `relationships` — `BuildBetaNotificationCreateRequest.Data.Relationships` (required): The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBetaNotifications`

## Topics

### Objects

- [BuildBetaNotificationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
