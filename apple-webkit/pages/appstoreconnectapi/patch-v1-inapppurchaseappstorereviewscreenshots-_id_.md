> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-inapppurchaseappstorereviewscreenshots-_id_

# Commit a review screenshot for an In-App Purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Commit an uploaded image asset as a review screenshot for an In-App Purchase.

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

- [Managing In-App Purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [Read In-App Purchase review screenshot information](get-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Get information about a specific review screenshot for an In-App Purchase.
- [Create an In-App Purchase review screenshot](post-v1-inapppurchaseappstorereviewscreenshots.md): Reserve a review screenshot for an In-App Purchase.
- [Delete a review screenshot for an In-App Purchase](delete-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an In-App Purchase.
