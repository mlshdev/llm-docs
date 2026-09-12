> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-appstorereviewscreenshot](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-appstorereviewscreenshot)

# Read review screenshot information for a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about review screenshot for a specific auto-renewable subscription.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/appStoreReviewScreenshot
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `subscription`
- `fields[subscriptions]` — `[string]`: **Allowed values:** `name`, `productId`, `familySharable`, `state`, `subscriptionPeriod`, `reviewNote`, `groupLevel`, `subscriptionLocalizations`, `appStoreReviewScreenshot`, `group`, `introductoryOffers`, `promotionalOffers`, `offerCodes`, `prices`, `pricePoints`, `promotedPurchase`, `subscriptionAvailability`, `winBackOffers`, `images`, `planAvailabilities`, `versions`
- `include` — `[string]`: **Allowed values:** `subscription`

## Response Codes

- `200` OK — `SubscriptionAppStoreReviewScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting the App Store review screenshot

- [Get the App Store review screenshot ID for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-appstorereviewscreenshot.md)
