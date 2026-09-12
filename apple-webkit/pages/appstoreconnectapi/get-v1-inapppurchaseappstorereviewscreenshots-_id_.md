> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseappstorereviewscreenshots-_id_)

# Read in-app purchase review screenshot information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific review screenshot for an in-app purchase.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseAppStoreReviewScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[inAppPurchaseAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `inAppPurchaseV2`
- `include` — `[string]`: **Allowed values:** `inAppPurchaseV2`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`

## Response Codes

- `200` OK — `InAppPurchaseAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [Create an in-app purchase review screenshot](post-v1-inapppurchaseappstorereviewscreenshots.md): Reserve a review screenshot for an in-app purchase.
- [Commit a review screenshot for an in-app purchase](patch-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an in-app purchase.
- [Delete a review screenshot for an in-app purchase](delete-v1-inapppurchaseappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an in-app purchase.
