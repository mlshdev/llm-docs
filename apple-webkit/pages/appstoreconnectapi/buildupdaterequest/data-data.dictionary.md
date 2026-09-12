> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildupdaterequest/data-data.dictionary)

# BuildUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BuildUpdateRequest.Data
```

## Properties

- `attributes` — `BuildUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `BuildUpdateRequest.Data.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `builds`

## Topics

### Objects

- [BuildUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
- [BuildUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
