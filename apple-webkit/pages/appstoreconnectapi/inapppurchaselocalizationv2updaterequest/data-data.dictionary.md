> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationv2updaterequest/data-data.dictionary

# InAppPurchaseLocalizationV2UpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The request body you use to modify an In-App Purchase localization with the v2 API.

## Declaration

```
object InAppPurchaseLocalizationV2UpdateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseLocalizations`
- `id` — `string` (required):
- `attributes` — `InAppPurchaseLocalizationV2UpdateRequest.Data.Attributes`:

## Topics

### Objects

- [InAppPurchaseLocalizationV2UpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe an In-App Purchase localization update request resource.
