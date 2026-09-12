> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-gamecenterenabledversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-gamecenterenabledversions)

# List all game center enabled versions for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

Get a list of Game Center enabled versions for a specific app.

> Use [Read compatibility version information](get-v1-gamecenterappversions-_id_-compatibilityversions.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/gameCenterEnabledVersions
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[gameCenterEnabledVersions]` — `[string]`: Additional fields to include for each Game Center enabled version resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `iconAsset`, `compatibleVersions`, `app`
- `filter[id]` — `[string]`: Filter the returned Game Center enabled versions by ID.
- `filter[platform]` — `[string]`: Filter the returned Game Center enabled versions by platform.
  **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`
- `filter[versionString]` — `[string]`: Filter the returned Game Center enabled versions by version string.
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `compatibleVersions`, `app`
- `limit` — `integer`: The maximum number of Game Center enabled version resources to return.
  **Maximum:** `200`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `versionString`, `-versionString`
- `limit[compatibleVersions]` — `integer`: The maximum number of related compatible versions resources to return.
  **Maximum:** `50`
- `fields[apps]` — `[string]`: Additional fields to include for each app resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `GameCenterEnabledVersionsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing Versions

- [List all compatible versions for a game center enabled version](get-v1-gamecenterenabledversions-_id_-compatibleversions.md): Deprecated.
