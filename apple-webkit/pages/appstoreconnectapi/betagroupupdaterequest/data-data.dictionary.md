> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betagroupupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betagroupupdaterequest/data-data.dictionary)

# BetaGroupUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaGroupUpdateRequest.Data
```

## Properties

- `attributes` — `BetaGroupUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaGroups`

## Topics

### Objects

- [BetaGroupUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the beta group update request.
