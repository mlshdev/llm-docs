> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaselocalizationv2createrequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaselocalizationv2createrequest/data-data.dictionary)

# InAppPurchaseLocalizationV2CreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

The request body you use to create an in-app purchase localization with the v2 API.

## Declaration

```
object InAppPurchaseLocalizationV2CreateRequest.Data
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseLocalizations`
- `attributes` — `InAppPurchaseLocalizationV2CreateRequest.Data.Attributes` (required):
- `relationships` — `InAppPurchaseLocalizationV2CreateRequest.Data.Relationships` (required):

## Topics

### Objects

- [InAppPurchaseLocalizationV2CreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe an in-app purchase localization create request resource.
- [InAppPurchaseLocalizationV2CreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
