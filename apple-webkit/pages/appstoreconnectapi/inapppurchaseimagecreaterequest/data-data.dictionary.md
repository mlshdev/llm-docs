> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimagecreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimagecreaterequest/data-data.dictionary)

# InAppPurchaseImageCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The request body you use to create a subscription purchase image reservation.

> This object is deprecated. Use [InAppPurchaseImageV2CreateRequest](../inapppurchaseimagev2createrequest.md) instead.

## Declaration

```
object InAppPurchaseImageCreateRequest.Data
```

## Properties

- `attributes` — `InAppPurchaseImageCreateRequest.Data.Attributes` (required): The resource’s attributes.
- `relationships` — `InAppPurchaseImageCreateRequest.Data.Relationships` (required): Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `inAppPurchaseImages`

## Topics

### Objects

- [InAppPurchaseImageCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Deprecated. Attributes that describe a subscription purchase image request resource.
- [InAppPurchaseImageCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.
