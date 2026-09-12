> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-prereleaseversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-prereleaseversions)

# List prerelease versions

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of prerelease versions for all apps.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/preReleaseVersions
```

## Query Parameters

- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `fields[preReleaseVersions]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `platform`, `builds`, `app`
- `filter[app]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[builds.expired]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[builds.processingState]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `PROCESSING`, `FAILED`, `INVALID`, `VALID`
- `filter[builds]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[platform]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`
- `filter[version]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `builds`, `app`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `limit[builds]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `version`, `-version`
- `filter[builds.version]` — `[string]`:
- `filter[builds.buildAudienceType]` — `[string]`: **Allowed values:** `INTERNAL_ONLY`, `APP_STORE_ELIGIBLE`

## Response Codes

- `200` OK — `PreReleaseVersionsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md)

## See Also

### Getting Prerelease Version Information

- [Read prerelease version information](get-v1-prereleaseversions-_id_.md): Get information about a specific prerelease version.
- [Read the app information of a prerelease version](get-v1-prereleaseversions-_id_-app.md): Get the app information for a specific prerelease version.
- [Get the app ID for a prerelease version](get-v1-prereleaseversions-_id_-relationships-app.md)
