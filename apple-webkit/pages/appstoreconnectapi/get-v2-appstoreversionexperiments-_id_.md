> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-appstoreversionexperiments-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-appstoreversionexperiments-_id_)

# Read app store experiment information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.4+

Get information for a specific App Store version experiment.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List all experiments for an app store version](get-v1-appstoreversions-_id_-appstoreversionexperimentsv2.md) response.

## Query Parameters

- `fields[appStoreVersionExperimentTreatments]` — `[string]`: Additional fields to include for each App Store version experiment treatment resource returned by the response.
  **Allowed values:** `name`, `appIcon`, `appIconName`, `promotedDate`, `appStoreVersionExperiment`, `appStoreVersionExperimentV2`, `appStoreVersionExperimentTreatmentLocalizations`
- `fields[appStoreVersionExperiments]` — `[string]`: Additional fields to include for each App Store version experiment resource returned by the response.
  **Allowed values:** `name`, `platform`, `trafficProportion`, `state`, `reviewRequired`, `startDate`, `endDate`, `app`, `latestControlVersion`, `controlVersions`, `appStoreVersionExperimentTreatments`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `app`, `latestControlVersion`, `controlVersions`, `appStoreVersionExperimentTreatments`
- `limit[appStoreVersionExperimentTreatments]` — `integer`: The maximum number of related App Store version experiment treatment resources to return.
  **Maximum:** `50`
- `limit[controlVersions]` — `integer`: The maximum number of related control version resources to return.
  **Maximum:** `50`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`

## Response Codes

- `200` OK — `AppStoreVersionExperimentV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 2.4 release notes](app-store-connect-api-2-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/1a22d9a7-f574-4669-b1ca-1ba88f786c19
```

**Response**

```json
{
  “data” : {
    “type” : “appStoreVersionExperiments”,
    “id” : “1a22d9a7-f574-4669-b1ca-1ba88f786c19”,
    “attributes” : {
      “name” : “PPO Test 1”,
      “platform” : “IOS”,
      “trafficProportion” : 50,
      “state” : “PREPARE_FOR_SUBMISSION”,
      “reviewRequired” : true,
      “startDate” : null,
      “endDate” : null
    },
    “relationships” : {
      “appStoreVersionExperimentTreatments” : {
        “links” : {
          “self” : “https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/1a22d9a7-f574-4669-b1ca-1ba88f786c19/relationships/appStoreVersionExperimentTreatments”,
          “related” : “https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/1a22d9a7-f574-4669-b1ca-1ba88f786c19/appStoreVersionExperimentTreatments”
        }
      }
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/1a22d9a7-f574-4669-b1ca-1ba88f786c19”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v2/appStoreVersionExperiments/1a22d9a7-f574-4669-b1ca-1ba88f786c19”
  }
}
```

## See Also

### Managing App Store version experiments

- [List all experiments for an app store version v1](get-v1-appstoreversions-_id_-appstoreversionexperiments.md): Deprecated. Get a list of all experiments for an App Store version of an app across all platforms.
- [List all experiments ids for an app store version v1](get-v1-appstoreversions-_id_-relationships-appstoreversionexperiments.md): Deprecated. Get a list of all experiments IDs for an App Store version of an app across all platforms.
- [List all experiments for an app store version](get-v1-appstoreversions-_id_-appstoreversionexperimentsv2.md): Get a list of all experiments for an App Store version of an app across all platforms.
- [List all experiment ids for an app store version](get-v1-appstoreversions-_id_-relationships-appstoreversionexperimentsv2.md): Get a list of all experiments IDs for an App Store version across all platforms.
- [List all treatments for an app store experiment](get-v2-appstoreversionexperiments-_id_-appstoreversionexperimenttreatments.md): Get a list of all treatments for a specific App Store version experiment.
- [List treatment IDs for an app store version experiment](get-v2-appstoreversionexperiments-_id_-relationships-appstoreversionexperimenttreatments.md): Get a list of experiment treatment IDs for a specific App Store version experiment.
- [Create an app store experiment](post-v2-appstoreversionexperiments.md): Add a new experiment to an App Store version.
- [Modify an app store experiment](patch-v2-appstoreversionexperiments-_id_.md): Update the name, the started state, and the proportion of traffic to send to an App Store experiment.
- [Delete an app store experiment](delete-v2-appstoreversionexperiments-_id_.md): Delete a specific App Store version experiment before it starts.
- [Read app store experiment information v1](get-v1-appstoreversionexperiments-_id_.md): Deprecated. Get information for a specific App Store version experiment.
- [List all treatments for an app store experiment v1](get-v1-appstoreversionexperiments-_id_-appstoreversionexperimenttreatments.md): Deprecated. Get a list of all treatments for a specific App Store version experiment.
- [List treatment IDs for an App Store version experiment](get-v1-appstoreversionexperiments-_id_-relationships-appstoreversionexperimenttreatments.md): Deprecated.
- [Modify an app store experiment v1](patch-v1-appstoreversionexperiments-_id_.md): Deprecated. Update the name, the started state, and the proportion of traffic to send to an App Store experiment.
- [Create an app store experiment v1](post-v1-appstoreversionexperiments.md): Deprecated. Add a new experiment to an App Store version.
- [Delete an app store version experiment v1](delete-v1-appstoreversionexperiments-_id_.md): Deprecated. Delete a specific App Store version experiment before it starts.
