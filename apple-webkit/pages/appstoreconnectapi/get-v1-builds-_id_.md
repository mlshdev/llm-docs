> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_)

# Read build information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get information about a specific build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[appEncryptionDeclarations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `appDescription`, `createdDate`, `usesEncryption`, `exempt`, `containsProprietaryCryptography`, `containsThirdPartyCryptography`, `availableOnFrenchStore`, `platform`, `uploadedDate`, `documentUrl`, `documentName`, `documentType`, `appEncryptionDeclarationState`, `codeValue`, `app`, `builds`, `appEncryptionDeclarationDocument`
- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[betaTesters]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `firstName`, `lastName`, `email`, `inviteType`, `state`, `appDevices`, `apps`, `betaGroups`, `builds`
- `fields[builds]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `fields[preReleaseVersions]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `version`, `platform`, `builds`, `app`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`
- `fields[buildBetaDetails]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `autoNotifyEnabled`, `internalBuildState`, `externalBuildState`, `build`
- `fields[betaAppReviewSubmissions]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `betaReviewState`, `submittedDate`, `build`
- `fields[betaBuildLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `whatsNew`, `locale`, `build`
- `limit[individualTesters]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `limit[betaBuildLocalizations]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `limit[icons]` — `integer`: **Maximum:** `50`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[buildIcons]` — `[string]`: **Allowed values:** `iconAsset`, `iconType`, `masked`, `name`
- `limit[buildBundles]` — `integer`: **Maximum:** `50`
- `limit[betaGroups]` — `integer`: **Maximum:** `50`
- `fields[betaGroups]` — `[string]`: **Allowed values:** `name`, `createdDate`, `isInternalGroup`, `hasAccessToAllBuilds`, `publicLinkEnabled`, `publicLinkId`, `publicLinkLimitEnabled`, `publicLinkLimit`, `publicLink`, `feedbackEnabled`, `iosBuildsAvailableForAppleSiliconMac`, `iosBuildsAvailableForAppleVision`, `app`, `builds`, `betaTesters`, `betaRecruitmentCriteria`, `betaRecruitmentCriterionCompatibleBuildCheck`
- `fields[buildBundles]` — `[string]`: **Allowed values:** `bundleId`, `bundleType`, `sdkBuild`, `platformBuild`, `fileName`, `hasSirikit`, `hasOnDemandResources`, `hasPrerenderedIcon`, `usesLocationServices`, `isIosBuildMacAppStoreCompatible`, `includesSymbols`, `dSYMUrl`, `supportedArchitectures`, `requiredCapabilities`, `deviceProtocols`, `locales`, `entitlements`, `baDownloadAllowance`, `baMaxInstallSize`, `minimumOsVersion`, `appClipDomainCacheStatus`, `appClipDomainDebugStatus`, `betaAppClipInvocations`, `buildBundleFileSizes`
- `fields[buildUploads]` — `[string]`: **Allowed values:** `cfBundleShortVersionString`, `cfBundleVersion`, `createdDate`, `state`, `platform`, `uploadedDate`, `build`, `assetFile`, `assetDescriptionFile`, `assetSpiFile`, `buildUploadFiles`

## Response Codes

- `200` OK — `BuildResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [List builds](get-v1-builds.md): Find and list builds for all apps in App Store Connect.
- [Read the app information of a build](get-v1-builds-_id_-app.md): Get the app information for a specific build.
- [Read the app id of a build](get-v1-builds-_id_-relationships-app.md): Get the app ID for a specific build.
- [Read the app store version information of a build](get-v1-builds-_id_-appstoreversion.md): Get the App Store version of a specific build.
- [Get the App Store version ID for a build](get-v1-builds-_id_-relationships-appstoreversion.md)
- [Read the prerelease version of a build](get-v1-builds-_id_-prereleaseversion.md): Get the prerelease version for a specific build.
- [Get the prerelease version ID for a build](get-v1-builds-_id_-relationships-prereleaseversion.md)
- [Read Usage Metrics for a Beta Build](get-v1-builds-_id_-metrics-betabuildusages.md): Get usage metrics for a specific build.
