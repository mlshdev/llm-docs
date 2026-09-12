> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-nominations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-nominations-_id_)

# Read Details for a Nomination

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Get information for a specific featuring nomination.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/nominations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the nomination resource ID from the [List Nominations](get-v1-nominations.md) response.

## Query Parameters

- `fields[nominations]` — `[string]`: **Allowed values:** `name`, `type`, `description`, `createdDate`, `lastModifiedDate`, `submittedDate`, `state`, `publishStartDate`, `publishEndDate`, `deviceFamilies`, `locales`, `supplementalMaterialsUris`, `hasInAppEvents`, `launchInSelectMarketsFirst`, `notes`, `preOrderEnabled`, `relatedApps`, `createdByActor`, `lastModifiedByActor`, `submittedByActor`, `inAppEvents`, `supportedTerritories`
- `include` — `[string]`: **Allowed values:** `relatedApps`, `createdByActor`, `lastModifiedByActor`, `submittedByActor`, `inAppEvents`, `supportedTerritories`
- `limit[inAppEvents]` — `integer`: **Maximum:** `50`
- `limit[relatedApps]` — `integer`: **Maximum:** `50`
- `limit[supportedTerritories]` — `integer`: **Maximum:** `200`
- `fields[actors]` — `[string]`: **Allowed values:** `actorType`, `userFirstName`, `userLastName`, `userEmail`, `apiKeyId`
- `fields[appEvents]` — `[string]`: **Allowed values:** `referenceName`, `badge`, `eventState`, `deepLink`, `purchaseRequirement`, `primaryLocale`, `priority`, `purpose`, `territorySchedules`, `archivedTerritorySchedules`, `localizations`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`

## Response Codes

- `200` OK — `NominationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing nominations

- [Create a Featuring Nomination](post-v1-nominations.md): Tell Apple about your upcoming app or feature.
- [List Nominations](get-v1-nominations.md): Get all featuring nominations.
- [Modify a Nomination](patch-v1-nominations-_id_.md): Update a specific featuring nomination.
- [Delete a Featuring Nomination](delete-v1-nominations-_id_.md): Remove a specific featuring nomination.
