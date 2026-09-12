> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betatesters](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betatesters)

# List beta testers

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list beta testers for all apps, builds, and beta groups.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaTesters
```

## Query Parameters

- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[betaGroups]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `name`, `createdDate`, `isInternalGroup`, `hasAccessToAllBuilds`, `publicLinkEnabled`, `publicLinkId`, `publicLinkLimitEnabled`, `publicLinkLimit`, `publicLink`, `feedbackEnabled`, `iosBuildsAvailableForAppleSiliconMac`, `iosBuildsAvailableForAppleVision`, `app`, `builds`, `betaTesters`, `betaRecruitmentCriteria`, `betaRecruitmentCriterionCompatibleBuildCheck`
- `fields[betaTesters]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `firstName`, `lastName`, `email`, `inviteType`, `state`, `appDevices`, `apps`, `betaGroups`, `builds`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `filter[apps]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[betaGroups]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[builds]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[email]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[firstName]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[inviteType]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `EMAIL`, `PUBLIC_LINK`
- `filter[lastName]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `apps`, `betaGroups`, `builds`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `limit[apps]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `limit[betaGroups]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `limit[builds]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `firstName`, `-firstName`, `lastName`, `-lastName`, `email`, `-email`, `inviteType`, `-inviteType`, `state`, `-state`
- `filter[id]` — `[string]`:

## Response Codes

- `200` OK — `BetaTestersResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Beta Tester Information

- [Read beta tester information](get-v1-betatesters-_id_.md): Get a specific beta tester.
