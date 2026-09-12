> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betabuildlocalizationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betabuildlocalizationcreaterequest/data-data.dictionary)

# BetaBuildLocalizationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The data element of the request body.

## Declaration

```
object BetaBuildLocalizationCreateRequest.Data
```

## Properties

- `attributes` — `BetaBuildLocalizationCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `BetaBuildLocalizationCreateRequest.Data.Relationships` (required): Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaBuildLocalizations`

## Topics

### Objects

- [BetaBuildLocalizationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that you set that describe the new resource.
- [BetaBuildLocalizationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
