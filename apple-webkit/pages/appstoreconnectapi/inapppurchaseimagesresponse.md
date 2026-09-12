> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseimagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseimagesresponse)

# InAppPurchaseImagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

A response containing a list of images for an in-app purchase.

> This object is deprecated. Use [InAppPurchaseImagesV2Response](inapppurchaseimagesv2response.md) instead.

## Declaration

```
object InAppPurchaseImagesResponse
```

## Properties

- `data` — `[InAppPurchaseImage]` (required):
- `included` — `[InAppPurchaseV2]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [InAppPurchaseImage](inapppurchaseimage.md): Deprecated. A screenshot or image associated with an in-app purchase or subscription, displayed on the App Store product page.
- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an in-app purchase image reservation.
- [InAppPurchaseImageResponse](inapppurchaseimageresponse.md): Deprecated. A response containing a single image for an in-app purchase.
- [InAppPurchaseImageUpdateRequest](inapppurchaseimageupdaterequest.md): Deprecated. The request body for updating the upload state or file content of an in-app purchase image.
