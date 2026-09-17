> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimagev2updaterequest/data-data.dictionary

# InAppPurchaseImageV2UpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The request body you use to modify an in-app purchase image with the v2 API.

## Declaration

```
object InAppPurchaseImageV2UpdateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseImages`
- `id` — `string` (required):
- `attributes` — `InAppPurchaseImageV2UpdateRequest.Data.Attributes`:

## Topics

### Objects

- [InAppPurchaseImageV2UpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe an in-app purchase image update request resource.
