> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimage](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimage)

# InAppPurchaseImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A screenshot or image associated with an in-app purchase or subscription, displayed on the App Store product page.

> This object is deprecated. Use [InAppPurchaseImageV2](inapppurchaseimagev2.md) instead.

## Declaration

```
object InAppPurchaseImage
```

## Properties

- `attributes` — `InAppPurchaseImage.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `InAppPurchaseImage.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `inAppPurchaseImages`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [InAppPurchaseImage.Attributes](inapppurchaseimage/attributes-data.dictionary.md): Deprecated. Attributes that describe a subscription image resource.
- [InAppPurchaseImage.Relationships](inapppurchaseimage/relationships-data.dictionary.md): Deprecated. The relationships for an in-app purchase image, linking it to its associated in-app purchase.

## See Also

### Objects

- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an in-app purchase image reservation.
- [InAppPurchaseImageResponse](inapppurchaseimageresponse.md): Deprecated. A response containing a single image for an in-app purchase.
- [InAppPurchaseImageUpdateRequest](inapppurchaseimageupdaterequest.md): Deprecated. The request body for updating the upload state or file content of an in-app purchase image.
- [InAppPurchaseImagesResponse](inapppurchaseimagesresponse.md): Deprecated. A response containing a list of images for an in-app purchase.
