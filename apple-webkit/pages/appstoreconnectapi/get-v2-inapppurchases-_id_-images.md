> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-33695ec62253; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-images

# List In-App Purchase images

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.4.1)

List all images for a specific In-App Purchase.

> This endpoint is deprecated. Use [List images for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-images.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/inAppPurchases/{id}/images
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `inAppPurchases` resource ID from the [List all In-App Purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md) response.

## Query Parameters

- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `inAppPurchase`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `include` — `[string]`: **Allowed values:** `inAppPurchase`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `InAppPurchaseImagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an image for an In-App Purchase (v1)](post-v1-inapppurchaseimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing an In-App Purchase.
- [Read In-App Purchase image information (v1)](get-v1-inapppurchaseimages-_id_.md): Deprecated. Read details about a specific In-App Purchase image.
- [Commit an image for an In-App Purchase (v1)](patch-v1-inapppurchaseimages-_id_.md): Deprecated. Commit an uploaded image asset for an In-App Purchase.
- [Delete an In-App Purchase image (v1)](delete-v1-inapppurchaseimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents an In-App Purchase.
