> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appinfos-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appinfos-_id_)

# Read app info information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Read App Store information including your App Store state, age ratings, Brazil age rating, and kids’ age band.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appInfos/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `appInfo` resource ID from the [List all app infos for an app](get-v1-apps-_id_-appinfos.md) response.

## Query Parameters

- `fields[appCategories]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `platforms`, `subcategories`, `parent`
- `fields[appInfoLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `locale`, `name`, `subtitle`, `privacyPolicyUrl`, `privacyChoicesUrl`, `privacyPolicyText`, `appInfo`
- `fields[appInfos]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `appStoreState`, `state`, `appStoreAgeRating`, `australiaAgeRating`, `brazilAgeRating`, `brazilAgeRatingV2`, `franceAgeRating`, `koreaAgeRating`, `kidsAgeBand`, `app`, `ageRatingDeclaration`, `appInfoLocalizations`, `primaryCategory`, `primarySubcategoryOne`, `primarySubcategoryTwo`, `secondaryCategory`, `secondarySubcategoryOne`, `secondarySubcategoryTwo`, `territoryAgeRatings`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `app`, `ageRatingDeclaration`, `appInfoLocalizations`, `primaryCategory`, `primarySubcategoryOne`, `primarySubcategoryTwo`, `secondaryCategory`, `secondarySubcategoryOne`, `secondarySubcategoryTwo`
- `limit[appInfoLocalizations]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`
- `fields[ageRatingDeclarations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `advertising`, `alcoholTobaccoOrDrugUseOrReferences`, `contests`, `gambling`, `gamblingSimulated`, `gunsOrOtherWeapons`, `healthOrWellnessTopics`, `kidsAgeBand`, `lootBox`, `medicalOrTreatmentInformation`, `messagingAndChat`, `parentalControls`, `profanityOrCrudeHumor`, `ageAssurance`, `sexualContentGraphicAndNudity`, `sexualContentOrNudity`, `socialMedia`, `socialMediaAgeRestricted`, `horrorOrFearThemes`, `matureOrSuggestiveThemes`, `unrestrictedWebAccess`, `userGeneratedContent`, `violenceCartoonOrFantasy`, `violenceRealisticProlongedGraphicOrSadistic`, `violenceRealistic`, `ageRatingOverride`, `ageRatingOverrideV2`, `koreaAgeRatingOverride`, `developerAgeRatingInfoUrl`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `AppInfoResponse`: Request succeeded.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)
- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

<a id="Discussion"></a>

## Discussion

For request and response examples for reading an age rating declaration, see [Read the age-rating declaration](get-v1-appinfos-_id_-ageratingdeclaration.md).

## See Also

### Reading App Information

- [List all app infos for an app](get-v1-apps-_id_-appinfos.md): Get information about an app that is currently live on App Store, or that goes live with the next version.
- [List all app info localizations for an app info](get-v1-appinfos-_id_-appinfolocalizations.md): Get a list of localized, app-level information for an app.
