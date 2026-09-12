> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_)

# Read end user license agreement information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get the custom end user license agreement associated with an app, and the territories it applies to.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[endUserLicenseAgreements]` — `[string]`: **Allowed values:** `agreementText`, `app`, `territories`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`
- `include` — `[string]`: **Allowed values:** `app`, `territories`
- `limit[territories]` — `integer`: **Maximum:** `50`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `EndUserLicenseAgreementResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading EULA and Listing Territories

- [Read the end user license agreement information of an app](get-v1-apps-_id_-enduserlicenseagreement.md): Get the custom end user license agreement (EULA) for a specific app and the territories where the agreement applies.
- [List all territories for an end user license agreement](get-v1-enduserlicenseagreements-_id_-territories.md): List all the App Store territories to which a specific custom app license agreement applies.
- [List territory IDs for an end user license agreement](get-v1-enduserlicenseagreements-_id_-relationships-territories.md)
