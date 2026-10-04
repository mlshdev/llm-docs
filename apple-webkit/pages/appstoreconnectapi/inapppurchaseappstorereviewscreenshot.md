> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseappstorereviewscreenshot

# InAppPurchaseAppStoreReviewScreenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A screenshot of the In-App Purchase flow submitted alongside an In-App Purchase for App Store review.

## Declaration

```
object InAppPurchaseAppStoreReviewScreenshot
```

## Properties

- `attributes` — `InAppPurchaseAppStoreReviewScreenshot.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `InAppPurchaseAppStoreReviewScreenshot.Relationships`:
- `type` — `string` (required): **Allowed values:** `inAppPurchaseAppStoreReviewScreenshots`

## Topics

### Objects

- [InAppPurchaseAppStoreReviewScreenshot.Attributes](inapppurchaseappstorereviewscreenshot/attributes-data.dictionary.md): Attributes that describe an In-App Purchase App Store review screenshot resource.
- [InAppPurchaseAppStoreReviewScreenshot.Relationships](inapppurchaseappstorereviewscreenshot/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseAppStoreReviewScreenshotCreateRequest](inapppurchaseappstorereviewscreenshotcreaterequest.md): The request body you use to create an In-App Purchase App Store review screenshot.
- [InAppPurchaseAppStoreReviewScreenshotResponse](inapppurchaseappstorereviewscreenshotresponse.md): A response containing a single App Store review screenshot for an In-App Purchase.
- [InAppPurchaseAppStoreReviewScreenshotUpdateRequest](inapppurchaseappstorereviewscreenshotupdaterequest.md): The request body you use to update an In-App Purchase App Store review screenshot update request.
