> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationcreaterequest/data-data.dictionary)

# BetaAppLocalizationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaAppLocalizationCreateRequest.Data
```

## Properties

- `attributes` — `BetaAppLocalizationCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `BetaAppLocalizationCreateRequest.Data.Relationships` (required): Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppLocalizations`

## Topics

### Objects

- [BetaAppLocalizationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new resource.
- [BetaAppLocalizationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
