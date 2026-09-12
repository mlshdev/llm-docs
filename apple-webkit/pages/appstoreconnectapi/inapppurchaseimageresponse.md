> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimageresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimageresponse)

# InAppPurchaseImageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response containing a single image for an in-app purchase.

> This object is deprecated. Use [InAppPurchaseImageV2Response](inapppurchaseimagev2response.md) instead.

## Declaration

```
object InAppPurchaseImageResponse
```

## Properties

- `data` — `InAppPurchaseImage` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [InAppPurchaseImage](inapppurchaseimage.md): Deprecated. A screenshot or image associated with an in-app purchase or subscription, displayed on the App Store product page.
- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an in-app purchase image reservation.
- [InAppPurchaseImageUpdateRequest](inapppurchaseimageupdaterequest.md): Deprecated. The request body for updating the upload state or file content of an in-app purchase image.
- [InAppPurchaseImagesResponse](inapppurchaseimagesresponse.md): Deprecated. A response containing a list of images for an in-app purchase.
