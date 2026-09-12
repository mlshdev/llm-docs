> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimageupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimageupdaterequest/data-data.dictionary)

# InAppPurchaseImageUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The request body you use to update an in-app purchase image.

> This object is deprecated. Use [InAppPurchaseImageV2UpdateRequest](../inapppurchaseimagev2updaterequest.md) instead.

## Declaration

```
object InAppPurchaseImageUpdateRequest.Data
```

## Properties

- `attributes` — `InAppPurchaseImageUpdateRequest.Data.Attributes`: The resource’s attributes.
- `id` — `string` (required):
- `type` — `string` (required): The resource type.
  **Allowed values:** `inAppPurchaseImages`

## Topics

### Objects

- [InAppPurchaseImageUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe a subscription purchase image request resource.
