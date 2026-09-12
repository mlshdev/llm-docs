> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchaseimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchaseimages-_id_)

# Read in-app purchase image information (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Read details about a specific in-app purchase image.

> This endpoint is deprecated. Use [Read in-app purchase image information](get-v2-inapppurchaseimages-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchaseImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `inAppPurchaseImages` resource ID from the [List in-app purchase images](get-v2-inapppurchases-_id_-images.md) response.

## Query Parameters

- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `inAppPurchase`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `include` — `[string]`: **Allowed values:** `inAppPurchase`

## Response Codes

- `200` OK — `InAppPurchaseImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an image for an in-app purchase (v1)](post-v1-inapppurchaseimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing an in-app purchase.
- [List in-app purchase images](get-v2-inapppurchases-_id_-images.md): Deprecated. List all images for a specific in-app purchase.
- [Commit an image for an in-app purchase (v1)](patch-v1-inapppurchaseimages-_id_.md): Deprecated. Commit an uploaded image asset for an in-app purchase.
- [Delete an in-app purchase image (v1)](delete-v1-inapppurchaseimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents an in-app purchase.
