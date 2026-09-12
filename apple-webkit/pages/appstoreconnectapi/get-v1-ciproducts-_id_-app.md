> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciproducts-_id_-app](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciproducts-_id_-app)

# Read app information for an xcode cloud product

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get the app in App Store Connect that’s related to an Xcode Cloud product.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciProducts/{id}/app
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Products resource.

## Query Parameters

- `fields[appInfos]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `appStoreState`, `state`, `appStoreAgeRating`, `australiaAgeRating`, `brazilAgeRating`, `brazilAgeRatingV2`, `franceAgeRating`, `koreaAgeRating`, `kidsAgeBand`, `app`, `ageRatingDeclaration`, `appInfoLocalizations`, `primaryCategory`, `primarySubcategoryOne`, `primarySubcategoryTwo`, `secondaryCategory`, `secondarySubcategoryOne`, `secondarySubcategoryTwo`, `territoryAgeRatings`
- `fields[appStoreVersions]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[apps]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[betaAppLocalizations]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `feedbackEmail`, `marketingUrl`, `privacyPolicyUrl`, `tvOsPrivacyPolicy`, `description`, `locale`, `app`
- `fields[betaGroups]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `name`, `createdDate`, `isInternalGroup`, `hasAccessToAllBuilds`, `publicLinkEnabled`, `publicLinkId`, `publicLinkLimitEnabled`, `publicLinkLimit`, `publicLink`, `feedbackEnabled`, `iosBuildsAvailableForAppleSiliconMac`, `iosBuildsAvailableForAppleVision`, `app`, `builds`, `betaTesters`, `betaRecruitmentCriteria`, `betaRecruitmentCriterionCompatibleBuildCheck`
- `fields[builds]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `fields[gameCenterEnabledVersions]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `iconAsset`, `compatibleVersions`, `app`
- `fields[inAppPurchases]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `referenceName`, `productId`, `inAppPurchaseType`, `state`, `apps`, `name`, `reviewNote`, `familySharable`, `contentHosting`, `inAppPurchaseLocalizations`, `pricePoints`, `content`, `appStoreReviewScreenshot`, `promotedPurchase`, `iapPriceSchedule`, `inAppPurchaseAvailability`, `images`, `offerCodes`, `versions`
- `fields[preReleaseVersions]` — `[string]`: Additional fields to include for each Apps resource returned by the response.
  **Allowed values:** `version`, `platform`, `builds`, `app`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaGroups`, `appStoreVersions`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `endUserLicenseAgreement`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `androidToIosAppMappingDetails`
- `limit[appInfos]` — `integer`: The number of included Apps resources to return if the app info relationship is included.
  **Maximum:** `50`
- `limit[appStoreVersions]` — `integer`: The number of included Apps resources to return if the App Store versions relationship is included.
  **Maximum:** `50`
- `limit[betaAppLocalizations]` — `integer`: The number of included Apps resources to return if the beta app localizations relationship is included.
  **Maximum:** `50`
- `limit[betaGroups]` — `integer`: The number of included Apps resources to return if the beta groups relationship is included.
  **Maximum:** `50`
- `limit[builds]` — `integer`: The number of included Apps resources to return if the builds relationship is included.
  **Maximum:** `50`
- `limit[gameCenterEnabledVersions]` — `integer`: The number of included Apps resources to return if the Game Center enabled versions relationship is included.
  **Maximum:** `50`
- `limit[inAppPurchases]` — `integer`: The number of included Apps resources to return if the in-app purchases relationship is included.
  **Maximum:** `50`
- `limit[preReleaseVersions]` — `integer`: The number of included Apps resources to return if the pre-release versions relationship is included.
  **Maximum:** `50`
- `limit[appClips]` — `integer`: **Maximum:** `50`
- `fields[appClips]` — `[string]`: **Allowed values:** `bundleId`, `app`, `appClipDefaultExperiences`, `appClipAdvancedExperiences`
- `fields[reviewSubmissions]` — `[string]`: **Allowed values:** `platform`, `submittedDate`, `state`, `app`, `items`, `appStoreVersionForReview`, `submittedByActor`, `lastUpdatedByActor`
- `fields[appCustomProductPages]` — `[string]`: **Allowed values:** `name`, `url`, `visible`, `app`, `appCustomProductPageVersions`
- `fields[appEvents]` — `[string]`: **Allowed values:** `referenceName`, `badge`, `eventState`, `deepLink`, `purchaseRequirement`, `primaryLocale`, `priority`, `purpose`, `territorySchedules`, `archivedTerritorySchedules`, `localizations`
- `limit[appCustomProductPages]` — `integer`: **Maximum:** `50`
- `limit[appEvents]` — `integer`: **Maximum:** `50`
- `limit[reviewSubmissions]` — `integer`: **Maximum:** `50`
- `fields[betaLicenseAgreements]` — `[string]`: **Allowed values:** `agreementText`, `app`
- `fields[betaAppReviewDetails]` — `[string]`: **Allowed values:** `contactFirstName`, `contactLastName`, `contactPhone`, `contactEmail`, `demoAccountName`, `demoAccountPassword`, `demoAccountRequired`, `notes`, `app`
- `fields[ciProducts]` — `[string]`: **Allowed values:** `name`, `createdDate`, `productType`, `app`, `bundleId`, `workflows`, `primaryRepositories`, `additionalRepositories`, `buildRuns`
- `fields[endUserLicenseAgreements]` — `[string]`: **Allowed values:** `agreementText`, `app`, `territories`
- `fields[subscriptionGracePeriods]` — `[string]`: **Allowed values:** `optIn`, `sandboxOptIn`, `duration`, `renewalType`
- `fields[subscriptionGroups]` — `[string]`: **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`
- `fields[promotedPurchases]` — `[string]`: **Allowed values:** `visibleForAllUsers`, `enabled`, `state`, `inAppPurchaseV2`, `subscription`
- `limit[subscriptionGroups]` — `integer`: **Maximum:** `50`
- `limit[inAppPurchasesV2]` — `integer`: **Maximum:** `50`
- `limit[promotedPurchases]` — `integer`: **Maximum:** `50`
- `fields[appStoreVersionExperiments]` — `[string]`: **Allowed values:** `name`, `platform`, `trafficProportion`, `state`, `reviewRequired`, `startDate`, `endDate`, `app`, `latestControlVersion`, `controlVersions`, `appStoreVersionExperimentTreatments`
- `limit[appStoreVersionExperimentsV2]` — `integer`: **Maximum:** `50`
- `fields[appEncryptionDeclarations]` — `[string]`: **Allowed values:** `appDescription`, `createdDate`, `usesEncryption`, `exempt`, `containsProprietaryCryptography`, `containsThirdPartyCryptography`, `availableOnFrenchStore`, `platform`, `uploadedDate`, `documentUrl`, `documentName`, `documentType`, `appEncryptionDeclarationState`, `codeValue`, `app`, `builds`, `appEncryptionDeclarationDocument`
- `limit[appEncryptionDeclarations]` — `integer`: **Maximum:** `50`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[androidToIosAppMappingDetails]` — `[string]`: **Allowed values:** `packageName`, `appSigningKeyPublicCertificateSha256Fingerprints`
- `fields[buildIcons]` — `[string]`: **Allowed values:** `iconAsset`, `iconType`, `masked`, `name`
- `limit[androidToIosAppMappingDetails]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `AppResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Xcode Cloud Products

- [List all xcode cloud products](get-v1-ciproducts.md): Get a list of all products you created in Xcode Cloud.
- [Read xcode cloud product information](get-v1-ciproducts-_id_.md): Get information about a specific Xcode Cloud product.
- [List all additional repositories for an xcode cloud product](get-v1-ciproducts-_id_-additionalrepositories.md): List all additional Git repositories you associated with an Xcode Cloud product.
- [List additional repository IDs for a CI product](get-v1-ciproducts-_id_-relationships-additionalrepositories.md)
- [Get the app ID for a CI product](get-v1-ciproducts-_id_-relationships-app.md)
- [List all xcode cloud builds for an xcode cloud product](get-v1-ciproducts-_id_-buildruns.md): List all builds Xcode Cloud performed for a specific product.
- [List build run IDs for a CI product](get-v1-ciproducts-_id_-relationships-buildruns.md)
- [List all primary git repositories for an xcode cloud product](get-v1-ciproducts-_id_-primaryrepositories.md): List all primary Git repositories for a specific Xcode Cloud product.
- [List primary repository IDs for a CI product](get-v1-ciproducts-_id_-relationships-primaryrepositories.md)
- [List all workflows for an xcode cloud product](get-v1-ciproducts-_id_-workflows.md): List all workflows for a specific Xcode Cloud product.
- [List workflow IDs for a CI product](get-v1-ciproducts-_id_-relationships-workflows.md)
- [Read the xcode cloud product for an app](get-v1-apps-_id_-ciproduct.md): Get the Xcode Cloud product information for an app you build with Xcode Cloud.
