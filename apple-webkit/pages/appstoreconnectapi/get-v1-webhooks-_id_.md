> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-webhooks-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-webhooks-_id_)

# Read Webhook Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Read configuration details for a specific webhook.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/webhooks/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the webhooks resource ID from the [Read Webhook Information for an App](get-v1-apps-_id_-webhooks.md) response.

## Query Parameters

- `fields[webhooks]` — `[string]`: **Allowed values:** `enabled`, `eventTypes`, `name`, `url`, `app`, `deliveries`
- `include` — `[string]`: **Allowed values:** `app`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `WebhookResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)

## See Also

### Managing webhook notifications

- [Read Webhook Information for an App](get-v1-apps-_id_-webhooks.md): Read webhook configuration details for a specific app.
- [Create a Webhook Configuration](post-v1-webhooks.md): Add a new webhook configuration.
- [Modify a Webhook Configuration](patch-v1-webhooks-_id_.md): Update details for a specific webhook.
- [Delete a Webhook](delete-v1-webhooks-_id_.md): Remove a specific webhook configuration.
