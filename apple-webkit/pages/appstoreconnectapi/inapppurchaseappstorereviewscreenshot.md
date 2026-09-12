> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/inapppurchaseappstorereviewscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/inapppurchaseappstorereviewscreenshot)

# InAppPurchaseAppStoreReviewScreenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

A screenshot of the in-app purchase flow submitted alongside an in-app purchase for App Store review.

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

- [InAppPurchaseAppStoreReviewScreenshot.Attributes](inapppurchaseappstorereviewscreenshot/attributes-data.dictionary.md): Attributes that describe an in-app purchase App Store review screenshot resource.
- [InAppPurchaseAppStoreReviewScreenshot.Relationships](inapppurchaseappstorereviewscreenshot/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [InAppPurchaseAppStoreReviewScreenshotCreateRequest](inapppurchaseappstorereviewscreenshotcreaterequest.md): The request body you use to create an in-app purchase App Store review screenshot.
- [InAppPurchaseAppStoreReviewScreenshotResponse](inapppurchaseappstorereviewscreenshotresponse.md): A response containing a single App Store review screenshot for an in-app purchase.
- [InAppPurchaseAppStoreReviewScreenshotUpdateRequest](inapppurchaseappstorereviewscreenshotupdaterequest.md): The request body you use to update an in-app purchase App Store review screenshot update request.
