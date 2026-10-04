> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimageresponse

# InAppPurchaseImageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response containing a single image for an In-App Purchase.

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

- [InAppPurchaseImage](inapppurchaseimage.md): Deprecated. A screenshot or image associated with an In-App Purchase or subscription, displayed on the App Store product page.
- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an In-App Purchase image reservation.
- [InAppPurchaseImageUpdateRequest](inapppurchaseimageupdaterequest.md): Deprecated. The request body for updating the upload state or file content of an In-App Purchase image.
- [InAppPurchaseImagesResponse](inapppurchaseimagesresponse.md): Deprecated. A response containing a list of images for an In-App Purchase.
