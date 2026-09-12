> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-releasewithappstoreversion](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-releasewithappstoreversion)

# Read app store version information for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get App Store Version information for a default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}/releaseWithAppStoreVersion
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience resource ID from the [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md) response.

## Query Parameters

- `fields[appStoreVersionLocalizations]` — `[string]`: Additional fields to include for each App Store version localization resource returned by the response.
  **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appStoreVersions]` — `[string]`: Additional fields to include for each App Store version resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `alternativeDistributionPackage`
- `limit[appStoreVersionLocalizations]` — `integer`: The maximum number of related App Store version localizations resources to return.
  **Maximum:** `50`
- `fields[appStoreVersionExperiments]` — `[string]`: Additional fields to include for each App Store version experiment resource returned by the response.
  **Allowed values:** `name`, `trafficProportion`, `state`, `reviewRequired`, `startDate`, `endDate`, `appStoreVersion`, `appStoreVersionExperimentTreatments`, `platform`, `app`, `latestControlVersion`, `controlVersions`
- `limit[appStoreVersionExperiments]` — `integer`: The maximum number of related App Store version experiments resources to return.
  **Maximum:** `50`
- `fields[appStoreVersionSubmissions]` — `[string]`: Additional fields to include for each App Store version submission resource returned by the response.
  **Allowed values:** `appStoreVersion`
- `fields[appStoreReviewDetails]` — `[string]`: Additional fields to include for each App Store review detail resource returned by the response.
  **Allowed values:** `contactFirstName`, `contactLastName`, `contactPhone`, `contactEmail`, `demoAccountName`, `demoAccountPassword`, `demoAccountRequired`, `notes`, `appStoreVersion`, `appStoreReviewAttachments`
- `fields[apps]` — `[string]`: Additional fields to include for each app resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[routingAppCoverages]` — `[string]`: Additional fields to include for each routing app coverage resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreVersion`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each default App Clip experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `fields[appStoreVersionPhasedReleases]` — `[string]`: Additional fields to include for each App Store version phased release resource returned by the response.
  **Allowed values:** `phasedReleaseState`, `startDate`, `totalPauseDuration`, `currentDayNumber`
- `fields[builds]` — `[string]`: Additional fields to include for each build resource returned by the response.
  **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `limit[appStoreVersionExperimentsV2]` — `integer`: The maximum number of related App Store version experiments (v2) resources to return.
  **Maximum:** `50`
- `fields[alternativeDistributionPackages]` — `[string]`: Additional fields to include for each alternative distribution package resource returned by the response.
  **Allowed values:** `sourceFileChecksum`, `versions`
- `fields[gameCenterAppVersions]` — `[string]`: **Allowed values:** `enabled`, `compatibilityVersions`, `appStoreVersion`

## Response Codes

- `200` OK — `AppStoreVersionResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Default App Clip Experience Information

- [Read default app clip experience information](get-v1-appclipdefaultexperiences-_id_.md): Get a specific default App Clip experience.
- [Read the app store review detail for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail.md): Get App Store Review details for a specific default App Clip experience.
- [Get the App Store review detail ID for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipappstorereviewdetail.md)
- [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md): Get localized metadata that appears on the App Clip card for a specific default App Clip experience.
- [List localization IDs for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipdefaultexperiencelocalizations.md)
- [Get the app store versions resource id for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Get IDs for App Store Versions related to a default App Clip experience.
