> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-bundleids](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-bundleids)

# List bundle ids

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Find and list bundle IDs that are registered to your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/bundleIds
```

## Query Parameters

- `fields[bundleIds]` — `[string]`: **Allowed values:** `name`, `platform`, `identifier`, `seedId`, `profiles`, `bundleIdCapabilities`, `app`
- `fields[profiles]` — `[string]`: **Allowed values:** `name`, `platform`, `profileType`, `profileState`, `profileContent`, `uuid`, `createdDate`, `expirationDate`, `bundleId`, `devices`, `certificates`
- `filter[id]` — `[string]`:
- `filter[identifier]` — `[string]`:
- `filter[name]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`, `UNIVERSAL`
- `filter[seedId]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `profiles`, `bundleIdCapabilities`, `app`
- `limit` — `integer`: **Maximum:** `200`
- `limit[profiles]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `name`, `-name`, `platform`, `-platform`, `identifier`, `-identifier`, `seedId`, `-seedId`, `id`, `-id`
- `fields[bundleIdCapabilities]` — `[string]`: **Allowed values:** `capabilityType`, `settings`
- `limit[bundleIdCapabilities]` — `integer`: **Maximum:** `50`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `BundleIdsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Bundle ID Information

- [Read bundle id information](get-v1-bundleids-_id_.md): Get information about a specific bundle ID.
