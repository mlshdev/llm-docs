> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-inapppurchasesv2](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-inapppurchasesv2)

# List all in-app purchases for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get a list of the in-app purchases for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/inAppPurchasesV2
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[inAppPurchaseAppStoreReviewScreenshots]` — `[string]`: Additional fields to include for each in-app purchase App Store review screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `inAppPurchaseV2`
- `fields[inAppPurchaseContents]` — `[string]`: Additional fields to include for each in-app purchase content resource returned by the response.
  **Allowed values:** `fileName`, `fileSize`, `url`, `lastModifiedDate`, `inAppPurchaseV2`
- `fields[inAppPurchaseLocalizations]` — `[string]`: Additional fields to include for each in-app purchase localization resource returned by the response.
  **Allowed values:** `name`, `locale`, `description`, `state`, `inAppPurchaseV2`
- `fields[inAppPurchases]` — `[string]`: Additional fields to include for each in-app purchase resource returned by the response.
  **Allowed values:** `name`, `productId`, `inAppPurchaseType`, `state`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `fields[promotedPurchases]` — `[string]`: Additional fields to include for each promoted purchase resource returned by the response.
  **Allowed values:** `visibleForAllUsers`, `enabled`, `state`, `inAppPurchaseV2`, `subscription`
- `filter[inAppPurchaseType]` — `[string]`: Filter the returned in-app purchases by in-app purchase type.
  **Allowed values:** `CONSUMABLE`, `NON_CONSUMABLE`, `NON_RENEWING_SUBSCRIPTION`
- `filter[name]` — `[string]`: Filter the returned in-app purchases by name.
- `filter[productId]` — `[string]`: Filter the returned in-app purchases by product ID.
- `filter[state]` — `[string]`: Filter the returned in-app purchases by state.
  **Allowed values:** `MISSING_METADATA`, `WAITING_FOR_UPLOAD`, `PROCESSING_CONTENT`, `READY_TO_SUBMIT`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `DEVELOPER_ACTION_NEEDED`, `PENDING_BINARY_APPROVAL`, `APPROVED`, `DEVELOPER_REMOVED_FROM_SALE`, `REMOVED_FROM_SALE`, `REJECTED`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `inAppPurchaseLocalizations`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `limit` — `integer`: The maximum number of in-app purchase resources to return.
  **Maximum:** `200`
- `limit[inAppPurchaseLocalizations]` — `integer`: The maximum number of related in-app purchase localizations resources to return.
  **Maximum:** `50`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `name`, `-name`, `inAppPurchaseType`, `-inAppPurchaseType`
- `fields[inAppPurchasePriceSchedules]` — `[string]`: Additional fields to include for each in-app purchase price schedule resource returned by the response.
  **Allowed values:** `baseTerritory`, `manualPrices`, `automaticPrices`
- `fields[inAppPurchaseAvailabilities]` — `[string]`: Additional fields to include for each in-app purchase availability resource returned by the response.
  **Allowed values:** `availableInNewTerritories`, `availableTerritories`
- `fields[inAppPurchaseImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `assetToken`, `imageAsset`, `uploadOperations`, `state`, `inAppPurchase`
- `fields[inAppPurchaseOfferCodes]` — `[string]`: **Allowed values:** `name`, `customerEligibilities`, `productionCodeCount`, `sandboxCodeCount`, `active`, `oneTimeUseCodes`, `customCodes`, `prices`
- `fields[inAppPurchaseVersions]` — `[string]`: **Allowed values:** `version`, `state`, `inAppPurchase`, `image`, `images`, `localizations`
- `limit[images]` — `integer`: **Maximum:** `50`
- `limit[offerCodes]` — `integer`: **Maximum:** `50`
- `limit[versions]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchasesV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.0 release notes](app-store-connect-api-2-0-release-notes.md)
- [App Store Connect API 2.2 release notes](app-store-connect-api-2-2-release-notes.md)
- [App Store Connect API 2.4 release notes](app-store-connect-api-2-4-release-notes.md)
- [Managing in-app purchases](managing-in-app-purchases.md)

## See Also

### Getting in-app purchase information

- [GET /v1/apps/{id}/relationships/inAppPurchasesV2](get-v1-apps-_id_-relationships-inapppurchasesv2.md)
- [List all in-app purchases for an app v1](get-v1-apps-_id_-inapppurchases.md): Deprecated. List the in-app purchases that are available for your app.
- [List in-app purchases ids for an app v1](get-v1-apps-_id_-relationships-inapppurchases.md): Deprecated. Get a list of all in-app purchases IDs for a specific app V1.
