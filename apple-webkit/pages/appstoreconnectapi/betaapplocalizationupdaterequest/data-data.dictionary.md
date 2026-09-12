> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betaapplocalizationupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betaapplocalizationupdaterequest/data-data.dictionary)

# BetaAppLocalizationUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaAppLocalizationUpdateRequest.Data
```

## Properties

- `attributes` — `BetaAppLocalizationUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaAppLocalizations`

## Topics

### Objects

- [BetaAppLocalizationUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes whose values you’re changing as part of the update request.
