> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaapplocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaapplocalizations)

# List beta app localizations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list beta app localizations for all apps and locales.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppLocalizations
```

## Query Parameters

- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[betaAppLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `feedbackEmail`, `marketingUrl`, `privacyPolicyUrl`, `tvOsPrivacyPolicy`, `description`, `locale`, `app`
- `filter[app]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[locale]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `app`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `BetaAppLocalizationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting Localization Information

- [Read beta app localization information](get-v1-betaapplocalizations-_id_.md): Get localized beta app information for a specific app and locale.
- [Read the app information of a beta app localization](get-v1-betaapplocalizations-_id_-app.md): Get the app information associated with a specific beta app localization.
- [Get the app ID for a beta app localization](get-v1-betaapplocalizations-_id_-relationships-app.md)
