> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionappstorereviewscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionappstorereviewscreenshots-_id_)

# Read subscription review screenshot information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get the information about a review screenshot for an auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionAppStoreReviewScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `subscription`
- `include` — `[string]`: **Allowed values:** `subscription`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`

## Response Codes

- `200` OK — `SubscriptionAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Submitting subscriptions and subscription groups for App Review](submitting-subscriptions-and-subscription-groups-for-app-review.md)

## See Also

### Endpoints

- [Create a review screenshot for an auto-renewable subscription](post-v1-subscriptionappstorereviewscreenshots.md): Reserve a review screenshot for an auto-renewable subscription.
- [Commit a review screenshot for an auto-renewable subscription](patch-v1-subscriptionappstorereviewscreenshots-_id_.md): Commit an uploaded image asset as a review screenshot for an auto-renewable subscription.
- [Delete a review screenshot for an auto-renewable subscription](delete-v1-subscriptionappstorereviewscreenshots-_id_.md): Delete an image that you uploaded for review of an auto-renewable subscription.
