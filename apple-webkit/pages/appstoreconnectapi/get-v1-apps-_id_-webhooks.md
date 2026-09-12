> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-webhooks](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-webhooks)

# Read Webhook Information for an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Read webhook configuration details for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/webhooks
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[webhooks]` — `[string]`: **Allowed values:** `enabled`, `eventTypes`, `name`, `url`, `app`, `deliveries`
- `include` — `[string]`: **Allowed values:** `app`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `WebhooksResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)

## See Also

### Managing webhook notifications

- [Read Webhook Information](get-v1-webhooks-_id_.md): Read configuration details for a specific webhook.
- [Create a Webhook Configuration](post-v1-webhooks.md): Add a new webhook configuration.
- [Modify a Webhook Configuration](patch-v1-webhooks-_id_.md): Update details for a specific webhook.
- [Delete a Webhook](delete-v1-webhooks-_id_.md): Remove a specific webhook configuration.
