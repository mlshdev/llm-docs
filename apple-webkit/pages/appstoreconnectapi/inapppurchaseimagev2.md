> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimagev2](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimagev2)

# InAppPurchaseImageV2

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.4.1+

A promotion image attached to an in-app purchase configured with the v2 API.

## Declaration

```
object InAppPurchaseImageV2
```

## Properties

- `type` — `string` (required): **Allowed values:** `inAppPurchaseImages`
- `id` — `string` (required):
- `attributes` — `InAppPurchaseImageV2.Attributes`:
- `links` — `ResourceLinks`:

## Topics

### Objects and types

- [InAppPurchaseImageV2.Attributes](inapppurchaseimagev2/attributes-data.dictionary.md): Attributes that describe an in-app purchase image resource.

## See Also

### Objects

- [InAppPurchaseImageV2CreateRequest](inapppurchaseimagev2createrequest.md): The request body you use to create an in-app purchase image with the v2 API.
- [InAppPurchaseImageV2Response](inapppurchaseimagev2response.md): The response body for endpoints that create, read, or modify an in-app purchase image with the v2 API.
- [InAppPurchaseImageV2UpdateRequest](inapppurchaseimagev2updaterequest.md): The request body you use to commit an upload for an in-app purchase image with the v2 API.
- [InAppPurchaseImagesV2Response](inapppurchaseimagesv2response.md): The response body for endpoints that list in-app purchase images configured with the v2 API.
