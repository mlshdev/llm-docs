> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/userupdaterequest/data-data.dictionary)

# UserUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object UserUpdateRequest.Data
```

## Properties

- `attributes` — `UserUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `UserUpdateRequest.Data.Relationships`: The types and IDs of the related data to update.
- `type` — `string` (required): The resource type.
  **Allowed values:** `users`

## Topics

### Objects

- [UserUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
- [UserUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
