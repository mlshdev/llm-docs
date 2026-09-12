> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_)

# Read app store version information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get information for a specific App Store version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `limit[appStoreVersionLocalizations]` — `integer`: The maximum number of related App Store version localization resources to return.
  **Maximum:** `50`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `alternativeDistributionPackage`
- `fields[appStoreVersions]` — `[string]`: Additional fields to include for each App Store version resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[appStoreVersionSubmissions]` — `[string]`: Additional fields to include for each App Store version submission resource returned by the response.
  **Allowed values:** `appStoreVersion`
- `fields[builds]` — `[string]`: Additional fields to include for each build resource returned by the response.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `fields[appStoreReviewDetails]` — `[string]`: Additional fields to include for each App Store review detail resource returned by the response.
  **Allowed values:** `contactFirstName`, `contactLastName`, `contactPhone`, `contactEmail`, `demoAccountName`, `demoAccountPassword`, `demoAccountRequired`, `notes`, `appStoreVersion`, `appStoreReviewAttachments`
- `fields[appStoreVersionPhasedReleases]` — `[string]`: Additional fields to include for each App Store version phased release resource returned by the response.
  **Allowed values:** `phasedReleaseState`, `startDate`, `totalPauseDuration`, `currentDayNumber`
- `fields[routingAppCoverages]` — `[string]`: Additional fields to include for each routing app coverage resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreVersion`
- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each App Clip default experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `fields[appStoreVersionExperiments]` — `[string]`: Additional fields to include for each App Store version experiment resource returned by the response.
  **Allowed values:** `name`, `trafficProportion`, `state`, `reviewRequired`, `startDate`, `endDate`, `appStoreVersion`, `appStoreVersionExperimentTreatments`, `platform`, `app`, `latestControlVersion`, `controlVersions`
- `limit[appStoreVersionExperiments]` — `integer`: The maximum number of related App Store version experiment resources to return.
  **Maximum:** `50`
- `limit[appStoreVersionExperimentsV2]` — `integer`: The maximum number of related App Store version experiment (v2) resources to return.
  **Maximum:** `50`
- `fields[alternativeDistributionPackages]` — `[string]`: Additional fields to include for each alternative distribution package resource returned by the response.
  **Allowed values:** `sourceFileChecksum`, `versions`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[gameCenterAppVersions]` — `[string]`: **Allowed values:** `enabled`, `compatibilityVersions`, `appStoreVersion`

## Response Codes

- `200` OK — `AppStoreVersionResponse`: Request succeeded.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)
- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)

## See Also

### Getting App Store Versions

- [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md): Get a list of all App Store versions of an app across all platforms.
