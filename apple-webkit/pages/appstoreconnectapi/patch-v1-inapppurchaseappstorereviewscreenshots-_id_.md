> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-inapppurchaseappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-inapppurchaseappstorereviewscreenshots-_id_)

# Commit a review screenshot for an in-app purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Commit an uploaded image asset as a review screenshot for an in-app purchase.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseAppStoreReviewScreenshotUpdateRequest`

## Response Codes

- `200` OK — `InAppPurchaseAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [Read in-app purchase review screenshot information](get-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Get information about a specific review screenshot for an in-app purchase.
- [Create an in-app purchase review screenshot](post-v1-inapppurchaseappstorereviewscreenshots.md): Reserve a review screenshot for an in-app purchase.
- [Delete a review screenshot for an in-app purchase](delete-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an in-app purchase.
