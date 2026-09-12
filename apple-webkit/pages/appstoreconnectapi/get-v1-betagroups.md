> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betagroups](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betagroups)

# List beta groups

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list beta groups for all apps.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaGroups
```

## Query Parameters

- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[betaGroups]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `name`, `createdDate`, `isInternalGroup`, `hasAccessToAllBuilds`, `publicLinkEnabled`, `publicLinkId`, `publicLinkLimitEnabled`, `publicLinkLimit`, `publicLink`, `feedbackEnabled`, `iosBuildsAvailableForAppleSiliconMac`, `iosBuildsAvailableForAppleVision`, `app`, `builds`, `betaTesters`, `betaRecruitmentCriteria`, `betaRecruitmentCriterionCompatibleBuildCheck`
- `fields[betaRecruitmentCriteria]` — `[string]`: **Allowed values:** `lastModifiedDate`, `deviceFamilyOsVersionFilters`
- `fields[betaTesters]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `firstName`, `lastName`, `email`, `inviteType`, `state`, `appDevices`, `apps`, `betaGroups`, `builds`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `filter[app]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[builds]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[id]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[isInternalGroup]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[name]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[publicLinkEnabled]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[publicLinkLimitEnabled]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[publicLink]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `app`, `builds`, `betaTesters`, `betaRecruitmentCriteria`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `limit[betaTesters]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `limit[builds]` — `integer`: Number of included related resources to return.
  **Maximum:** `1000`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `name`, `-name`, `createdDate`, `-createdDate`, `publicLinkEnabled`, `-publicLinkEnabled`, `publicLinkLimit`, `-publicLinkLimit`

## Response Codes

- `200` OK — `BetaGroupsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Beta Group Information

- [Read beta group information](get-v1-betagroups-_id_.md): Get a specific beta group.
- [Read the app information of a beta group](get-v1-betagroups-_id_-app.md): Get the app information for a specific beta group.
- [Get the app ID for a beta group](get-v1-betagroups-_id_-relationships-app.md)
- [Read Metrics for Beta Testers in a Beta Group](get-v1-betagroups-_id_-metrics-betatesterusages.md): Get beta tester usage metrics for a beta group.
- [Read Recruitment Criteria for a Beta Group](get-v1-betagroups-_id_-betarecruitmentcriteria.md): Get the recruitment criteria information for a specific beta group.
- [List beta recruitment criterion IDs for a beta group](get-v1-betagroups-_id_-relationships-betarecruitmentcriteria.md)
- [Read build compatibility for a beta group](get-v1-betagroups-_id_-betarecruitmentcriterioncompatiblebuildcheck.md): Get the build compatibility information for a specific beta group.
- [Get the compatible build check ID for a beta group recruitment criterion](get-v1-betagroups-_id_-relationships-betarecruitmentcriterioncompatiblebuildcheck.md)
