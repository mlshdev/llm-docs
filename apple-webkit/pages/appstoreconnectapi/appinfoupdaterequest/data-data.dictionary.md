> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appinfoupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appinfoupdaterequest/data-data.dictionary)

# AppInfoUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AppInfoUpdateRequest.Data
```

## Properties

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.
- `relationships` — `AppInfoUpdateRequest.Data.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appInfos`

## Topics

### Objects

- [AppInfoUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
