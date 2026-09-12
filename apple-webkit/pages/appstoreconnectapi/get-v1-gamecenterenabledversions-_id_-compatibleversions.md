> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterenabledversions-_id_-compatibleversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterenabledversions-_id_-compatibleversions)

# List all compatible versions for a game center enabled version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

> This endpoint is deprecated. Use [Read compatibility version information](get-v1-gamecenterappversions-_id_-compatibilityversions.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterEnabledVersions/{id}/compatibleVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterEnabledVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `iconAsset`, `compatibleVersions`, `app`
- `filter[app]` — `[string]`:
- `filter[id]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`
- `filter[versionString]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `compatibleVersions`, `app`
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `versionString`, `-versionString`
- `limit[compatibleVersions]` — `integer`: **Maximum:** `50`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `GameCenterEnabledVersionsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing Versions

- [List all game center enabled versions for an app](get-v1-apps-_id_-gamecenterenabledversions.md): Deprecated. Get a list of Game Center enabled versions for a specific app.
