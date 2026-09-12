> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-inapppurchases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-inapppurchases-_id_)

# Read in-app purchase information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get information about a specific in-app purchase.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/inAppPurchases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `include` — `[string]`: **Allowed values:** `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `fields[inAppPurchaseAvailabilities]` — `[string]`: **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[inAppPurchaseAppStoreReviewScreenshots]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `inAppPurchaseV2`
- `fields[inAppPurchaseContents]` — `[string]`: **Allowed values:** `fileName`, `fileSize`, `url`, `lastModifiedDate`, `inAppPurchaseV2`
- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `inAppPurchase`
- `fields[inAppPurchaseLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `state`, `inAppPurchaseV2`
- `fields[inAppPurchaseOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `productionCodeCount`, `sandboxCodeCount`, `active`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[inAppPurchasePricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `territory`, `equalizations`
- `fields[inAppPurchasePriceSchedules]` — `[string]`: **Allowed values:** `baseTerritory`, `manualPrices`, `automaticPrices`
- `fields[inAppPurchaseVersions]` — `[string]`: **Allowed values:** `version`, `state`, `inAppPurchase`, `image`, `images`, `localizations`
- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `fields[promotedPurchases]` — `[string]`: **Allowed values:** `visibleForAllUsers`, `enabled`, `state`, `inAppPurchaseV2`, `subscription`
- `limit[images]` — `integer`: **Maximum:** `50`
- `limit[inAppPurchaseLocalizations]` — `integer`: **Maximum:** `50`
- `limit[offerCodes]` — `integer`: **Maximum:** `50`
- `limit[pricePoints]` — `integer`: **Maximum:** `8000`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchaseV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.4 release notes](app-store-connect-api-2-4-release-notes.md)
- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Endpoints

- [Create an in-app purchase](post-v2-inapppurchases.md): Create an in-app purchase, including a consumable, non-consumable, or non-renewing subscription.
- [List all in-app purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md): Get a list of the in-app purchases for a specific app.
- [Modify an in-app purchase](patch-v2-inapppurchases-_id_.md): Update the reference name of a specific in-app purchase.
- [Delete an in-app purchase](delete-v2-inapppurchases-_id_.md): Delete a specific in-app purchase from your app.
- [List all price points for an in-app purchase](get-v2-inapppurchases-_id_-pricepoints.md): Get a list of possible price points for an in-app purchase.
- [List price point IDs for an in-app purchase](get-v2-inapppurchases-_id_-relationships-pricepoints.md): Get a list of price point IDs for a specific in-app purchase.
- [List All In-App Purchase Price Point Equalizations](get-v1-inapppurchasepricepoints-_id_-equalizations.md): Get a list of in-app purchase price points and their equivalent in a specified currency.
- [List equalization IDs for an in-app purchase price point](get-v1-inapppurchasepricepoints-_id_-relationships-equalizations.md)
- [Read promoted purchase information for an in-app purchase](get-v2-inapppurchases-_id_-promotedpurchase.md): Get details about the promoted purchase of an in-app purchase.
- [Read the promoted purchase ID for an in-app purchase](get-v2-inapppurchases-_id_-relationships-promotedpurchase.md): Get the promoted purchase ID for a specific in-app purchase.
- [List all localizations for an in-app purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific in-app purchase.
- [List localization IDs for an in-app purchase](get-v2-inapppurchases-_id_-relationships-inapppurchaselocalizations.md): Deprecated. Get a list of localization IDs for a specific in-app purchase.
- [Read review screenshot information for an in-app purchase](get-v2-inapppurchases-_id_-appstorereviewscreenshot.md): Get information about a review screenshot for a specific in-app purchase.
- [Read the App Store review screenshot ID for an in-app purchase](get-v2-inapppurchases-_id_-relationships-appstorereviewscreenshot.md): Get the App Store review screenshot ID for a specific in-app purchase.
- [Create a review submission for an in-app purchase](post-v1-inapppurchasesubmissions.md): Deprecated. Create an in-app purchase submission for review.
