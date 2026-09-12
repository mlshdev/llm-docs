> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassets-_id_)

# Read Background Assets Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get details about a specific background asset.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssets/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssets` resource ID from the [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md) response.

## Query Parameters

- `fields[backgroundAssets]` — `[string]`: **Allowed values:** `archived`, `assetPackIdentifier`, `createdDate`, `usedBytes`, `app`, `versions`, `appStoreVersion`, `internalBetaVersion`, `externalBetaVersion`
- `include` — `[string]`: **Allowed values:** `app`, `appStoreVersion`, `internalBetaVersion`, `externalBetaVersion`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[backgroundAssetVersions]` — `[string]`: **Allowed values:** `createdDate`, `platforms`, `state`, `stateDetails`, `version`, `locale`, `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`, `backgroundAssetUploadFiles`

## Response Codes

- `200` OK — `BackgroundAssetResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [List the assets packs ids for an app](get-v1-apps-_id_-relationships-backgroundassets.md): Get a list of the Apple hosted background asset IDs for a specific app.
- [Read Version Details for a Background Asset](get-v1-backgroundassets-_id_-versions.md): Get details about a specific background asset version.
- [Read version ids for a background asset](get-v1-backgroundassets-_id_-relationships-versions.md): Get version IDs about a specific background asset version.
