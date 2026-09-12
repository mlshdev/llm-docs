> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchases-_id_-versions)

# List the versions of an in-app purchase

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

List the draft versions of an in-app purchase configured with the v2 API.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/inAppPurchases/{id}/versions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `filter[state]` — `[string]`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `APPROVED`, `REPLACED_WITH_NEW_VERSION`, `REJECTED`, `DEVELOPER_REJECTED`
- `fields[inAppPurchaseVersions]` — `[string]`: **Allowed values:** `version`, `state`, `inAppPurchase`, `image`, `images`, `localizations`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `assetToken`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `fields[inAppPurchaseLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `version`
- `limit` — `integer`: **Maximum:** `200`
- `include` — `[string]`: **Allowed values:** `inAppPurchase`, `image`, `images`, `localizations`
- `limit[images]` — `integer`: **Maximum:** `50`
- `limit[localizations]` — `integer`: **Maximum:** `50`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `InAppPurchaseVersionsResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Managing in-app purchases](managing-in-app-purchases.md)
- [Working with in-app purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Create an in-app purchase version](post-v1-inapppurchaseversions.md): Create a draft version of an in-app purchase, capturing its current localized metadata and review images for App Review submission.
- [Read in-app purchase version information](get-v1-inapppurchaseversions-_id_.md): Get information about a specific draft version of an in-app purchase.
- [Read the image for an in-app purchase version](get-v1-inapppurchaseversions-_id_-image.md): Get the review image attached to a draft version of an in-app purchase.
- [List images for an in-app purchase version](get-v1-inapppurchaseversions-_id_-images.md): List the review images attached to a draft version of an in-app purchase.
- [List localizations for an in-app purchase version](get-v1-inapppurchaseversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an in-app purchase.
- [Read the image ID for an in-app purchase version](get-v1-inapppurchaseversions-_id_-relationships-image.md): Get the related resource ID for the review image attached to a draft version of an in-app purchase.
- [List image IDs for an in-app purchase version](get-v1-inapppurchaseversions-_id_-relationships-images.md): Get the related resource IDs for the review images attached to a draft version of an in-app purchase.
- [List localization IDs for an in-app purchase version](get-v1-inapppurchaseversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of an in-app purchase.
- [Get the resource IDs of the versions of an in-app purchase](get-v2-inapppurchases-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of an in-app purchase configured with the v2 API.
