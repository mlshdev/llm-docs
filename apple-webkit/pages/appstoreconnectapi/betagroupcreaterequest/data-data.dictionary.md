> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betagroupcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betagroupcreaterequest/data-data.dictionary)

# BetaGroupCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaGroupCreateRequest.Data
```

## Properties

- `attributes` — `BetaGroupCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `BetaGroupCreateRequest.Data.Relationships` (required): Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaGroups`

## Topics

### Objects

- [BetaGroupCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new beta group resource.
- [BetaGroupCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
