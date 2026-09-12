> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchaseappstorereviewscreenshots](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseappstorereviewscreenshots)

# Create an in-app purchase review screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Reserve a review screenshot for an in-app purchase.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseAppStoreReviewScreenshots
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseAppStoreReviewScreenshotCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [Read in-app purchase review screenshot information](get-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Get information about a specific review screenshot for an in-app purchase.
- [Commit a review screenshot for an in-app purchase](patch-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an in-app purchase.
- [Delete a review screenshot for an in-app purchase](delete-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an in-app purchase.
