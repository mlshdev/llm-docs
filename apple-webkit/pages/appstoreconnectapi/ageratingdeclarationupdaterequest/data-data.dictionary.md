> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ageratingdeclarationupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ageratingdeclarationupdaterequest/data-data.dictionary)

# AgeRatingDeclarationUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data element of the request body.

## Declaration

```
object AgeRatingDeclarationUpdateRequest.Data
```

## Properties

- `attributes` — `AgeRatingDeclarationUpdateRequest.Data.Attributes`: The attributes you change as part of the update request.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ageRatingDeclarations`

## Topics

### Objects

- [AgeRatingDeclarationUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
