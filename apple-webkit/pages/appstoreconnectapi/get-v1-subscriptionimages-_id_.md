> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionimages-_id_)

# Read subscription image information (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+ (deprecated in 4.4.1)

Read details about a specific subscription image.

> This endpoint is deprecated. Use [Read subscription image information](get-v2-subscriptionimages-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `subscriptionImages` resource ID from the [List Subscription Images](get-v1-subscriptions-_id_-images.md) response.

## Query Parameters

- `fields[subscriptionImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `subscription`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `include` — `[string]`: **Allowed values:** `subscription`

## Response Codes

- `200` OK — `SubscriptionImageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create an image for a subscription (v1)](post-v1-subscriptionimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing a subscription.
- [List Subscription Images](get-v1-subscriptions-_id_-images.md): Deprecated. List all images for a specific subscription.
- [List subscription image ids](get-v1-subscriptions-_id_-relationships-images.md): Deprecated. List all images IDs for a specific subscription.
- [Commit a subscription image (v1)](patch-v1-subscriptionimages-_id_.md): Deprecated. Commit an uploaded subscription image.
- [Delete a subscription image (v1)](delete-v1-subscriptionimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents a subscription.
