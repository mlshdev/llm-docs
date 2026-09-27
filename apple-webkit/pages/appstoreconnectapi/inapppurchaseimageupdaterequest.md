> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimageupdaterequest

# InAppPurchaseImageUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

The request body for updating the upload state or file content of an In-App Purchase image.

> This object is deprecated. Use [InAppPurchaseImageV2UpdateRequest](inapppurchaseimagev2updaterequest.md) instead.

## Declaration

```
object InAppPurchaseImageUpdateRequest
```

## Properties

- `data` — `InAppPurchaseImageUpdateRequest.Data` (required):

## Topics

### Objects

- [InAppPurchaseImageUpdateRequest.Data](inapppurchaseimageupdaterequest/data-data.dictionary.md): Deprecated. The request body you use to update an In-App Purchase image.

## See Also

### Objects

- [InAppPurchaseImage](inapppurchaseimage.md): Deprecated. A screenshot or image associated with an In-App Purchase or subscription, displayed on the App Store product page.
- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an In-App Purchase image reservation.
- [InAppPurchaseImageResponse](inapppurchaseimageresponse.md): Deprecated. A response containing a single image for an In-App Purchase.
- [InAppPurchaseImagesResponse](inapppurchaseimagesresponse.md): Deprecated. A response containing a list of images for an In-App Purchase.
