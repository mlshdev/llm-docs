> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseversioncreaterequest/data-data.dictionary

# InAppPurchaseVersionCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The request body you use to create a draft version of an In-App Purchase.

## Declaration

```
object InAppPurchaseVersionCreateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseVersions`
- `relationships` — `InAppPurchaseVersionCreateRequest.Data.Relationships` (required):

## Topics

### Objects

- [InAppPurchaseVersionCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
