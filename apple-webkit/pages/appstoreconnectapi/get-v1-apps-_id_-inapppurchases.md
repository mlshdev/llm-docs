> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-inapppurchases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-inapppurchases)

# List all in-app purchases for an app v1

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 2.0)

List the in-app purchases that are available for your app.

> Use [List all in-app purchases for an app](get-v1-apps-_id_-inapppurchasesv2.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/inAppPurchases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[apps]` — `[string]`: Additional fields to include for each app resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[inAppPurchases]` — `[string]`: Additional fields to include for each in-app purchase resource returned by the response.
  **Allowed values:** `referenceName`, `productId`, `inAppPurchaseType`, `state`, `apps`
- `filter[canBeSubmitted]` — `[string]`: Filter the returned in-app purchases by whether they can be submitted.
- `filter[inAppPurchaseType]` — `[string]`: Filter the returned in-app purchases by in-app purchase type.
  **Allowed values:** `AUTOMATICALLY_RENEWABLE_SUBSCRIPTION`, `NON_CONSUMABLE`, `CONSUMABLE`, `NON_RENEWING_SUBSCRIPTION`, `FREE_SUBSCRIPTION`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `apps`
- `limit` — `integer`: The maximum number of in-app purchase resources to return.
  **Maximum:** `200`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `referenceName`, `-referenceName`, `productId`, `-productId`, `inAppPurchaseType`, `-inAppPurchaseType`
- `limit[apps]` — `integer`: The maximum number of related apps resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `InAppPurchasesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.0 release notes](app-store-connect-api-2-0-release-notes.md)
- [App Store Connect API 2.2 release notes](app-store-connect-api-2-2-release-notes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/apps/6446998023/inAppPurchases
```

**Response**

```json
{
    "data": [
        {
            "type": "inAppPurchases",
            "id": "ca38ea26-b7d5-4989-9615-c678cb05aabd",
            "attributes": {
                "referenceName": "YNC1",
                "productId": "YNCNC1",
                "inAppPurchaseType": "NON_CONSUMABLE",
                "state": "WAITING_FOR_SCREENSHOT"
            },
            "links": {
                "self": "https://api.appstoreconnect.apple.com/v1/inAppPurchases/ca38ea26-b7d5-4989-9615-c678cb05aabd"
            }
        }
    ],
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/apps/6446998023/inAppPurchases"
    },
    "meta": {
        "paging": {
            "total": 1,
            "limit": 50
        }
    }
}

```

## See Also

### Getting in-app purchase information

- [Read in-app purchase information](get-v1-inapppurchases-_id_.md): Deprecated. Get information about an in-app purchase.
- [List all promoted purchases for an app](get-v1-apps-_id_-promotedpurchases.md): Get a list of promoted in-app purchases, including promoted auto-renewable subscriptions, for an app.
