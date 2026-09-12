> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-inapppurchases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-inapppurchases-_id_)

# Read in-app purchase information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

Get information about an in-app purchase.

> Use [Read in-app purchase information](get-v2-inapppurchases-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/inAppPurchases/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[inAppPurchases]` — `[string]`: **Allowed values:** `referenceName`, `productId`, `inAppPurchaseType`, `state`, `apps`
- `include` — `[string]`: **Allowed values:** `apps`
- `limit[apps]` — `integer`: **Maximum:** `50`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `InAppPurchaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/inAppPurchases/6446998023
```

**Response**

```json
{
  "data": [
    {
      "type": "inAppPurchases",
      "id": "6447027998",
      "attributes": {
        "name": "YNC1",
        "productId": "YNCNC1",
        "inAppPurchaseType": "NON_CONSUMABLE",
        "state": "MISSING_METADATA",
        "reviewNote": null,
        "familySharable": false,
        "contentHosting": false,
        "availableInAllTerritories": true
      },
      "relationships": {
        "inAppPurchaseLocalizations": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/inAppPurchaseLocalizations",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/inAppPurchaseLocalizations"
          }
        },
        "pricePoints": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/pricePoints",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/pricePoints"
          }
        },
        "content": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/content",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/content"
          }
        },
        "appStoreReviewScreenshot": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/appStoreReviewScreenshot",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/appStoreReviewScreenshot"
          }
        },
        "promotedPurchase": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/promotedPurchase",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/promotedPurchase"
          }
        },
        "iapPriceSchedule": {
          "links": {
            "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/relationships/iapPriceSchedule",
            "related": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998/iapPriceSchedule"
          }
        }
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v2/inAppPurchases/6447027998"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/apps/6446998023/inAppPurchasesV2"
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

- [List all promoted purchases for an app](get-v1-apps-_id_-promotedpurchases.md): Get a list of promoted in-app purchases, including promoted auto-renewable subscriptions, for an app.
- [List all in-app purchases for an app v1](get-v1-apps-_id_-inapppurchases.md): Deprecated. List the in-app purchases that are available for your app.
