> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appencryptiondeclarations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appencryptiondeclarations)

# List app encryption declarations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Find and list all available app encryption declarations.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations
```

## Query Parameters

- `fields[appEncryptionDeclarations]` — `[string]`: Additional fields to include for each app encryption declaration resource returned by the response.
  **Allowed values:** `appDescription`, `createdDate`, `usesEncryption`, `exempt`, `containsProprietaryCryptography`, `containsThirdPartyCryptography`, `availableOnFrenchStore`, `platform`, `uploadedDate`, `documentUrl`, `documentName`, `documentType`, `appEncryptionDeclarationState`, `codeValue`, `app`, `builds`, `appEncryptionDeclarationDocument`
- `fields[apps]` — `[string]`: Additional fields to include for each app resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `filter[app]` — `[string]`: Filter the returned app encryption declarations by app.
- `filter[builds]` — `[string]`: Filter the returned app encryption declarations by builds.
- `filter[platform]` — `[string]`: Filter the returned app encryption declarations by platform.
  **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `app`, `builds`, `appEncryptionDeclarationDocument`
- `limit` — `integer`: The maximum number of app encryption declaration resources to return.
  **Maximum:** `200`
- `fields[appEncryptionDeclarationDocuments]` — `[string]`: Additional fields to include for each app encryption declaration document resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `assetToken`, `downloadUrl`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`
- `limit[builds]` — `integer`: The maximum number of related builds resources to return.
  **Maximum:** `50`
- `fields[builds]` — `[string]`: **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`

## Response Codes

- `200` OK — `AppEncryptionDeclarationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations
```

**Response**

```json
{
  "data" : [ {
    "type" : "appEncryptionDeclarations",
    "id" : "69ab60b8-2f7a-91d4-e053-5b8c7c110c82",
    "attributes" : {
      "usesEncryption" : true,
      "exempt" : false,
      "containsProprietaryCryptography" : true,
      "containsThirdPartyCryptography" : false,
      "availableOnFrenchStore" : true,
      "platform" : "ios",
      "uploadedDate" : "2017-04-22T12:16:46-07:00",
      "documentUrl" : "https://misc-assets.itunes.apple.com/itunes-assets/Purple122/v4/d7/95/a7/d795a76e-3979-1f01-7bfb-5e5f2743af01/pr_source.pdf?accessKey=1674989852_5815487785871584203_rgx8Q2A%2FXuJnhGaTuJk%2BBnCwNzpw7w%2FcSQ6kpIInhgjnJSDJMGHM%2Bgz1odkC8QCXZ9lV6eM36nYEFc0rNGFmnQx%2Be6mnAkyLITUdSlu6jXlLZMWcwSu%2BX5c5CxAZeCTokQospQSEQ6dOylZFYtBRg%2ByXMfyZt9M91kcynxGhiec%3D",
      "documentName" : "ECDoc.pdf",
      "documentType" : "pdf",
      "appEncryptionDeclarationState" : "APPROVED",
      "codeValue" : "1c9a2aa8-d0f6-466a-b5dd-d87d881c18c6"
    },
    "relationships" : {
      "app" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations/69ab60b8-2f7a-91d4-e053-5b8c7c110c82/relationships/app",
          "related" : "https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations/69ab60b8-2f7a-91d4-e053-5b8c7c110c82/app"
        }
      },
      "builds" : {
        "links" : {
          "self" : "https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations/69ab60b8-2f7a-91d4-e053-5b8c7c110c82/relationships/builds"
        }
      }
    },
    "links" : {
      "self" : "https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations/69ab60b8-2f7a-91d4-e053-5b8c7c110c82"
    }
  } ],
  "links" : {
    "self" : "https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations"
  },
  "meta" : {
    "paging" : {
      "total" : 1,
      "limit" : 50
    }
  }
}

```

## See Also

### Getting App Encryption Declarations

- [Read app encryption declaration information](get-v1-appencryptiondeclarations-_id_.md): Get information about a specific app encryption declaration.
- [Read an app’s encryption declarations](get-v1-apps-_id_-appencryptiondeclarations.md): Find and list all available app encryption declarations.
- [Read an app’s encryption declaration ids](get-v1-apps-_id_-relationships-appencryptiondeclarations.md): Find and list all available app encryption declaration IDs for a specific app.
- [Read the app information of an app encryption declaration](get-v1-appencryptiondeclarations-_id_-app.md): Deprecated. Get the app information from a specific app encryption declaration.
- [Read the App ID of an App Encryption Declaration](get-v1-appencryptiondeclarations-_id_-relationships-app.md): Deprecated. Get the app id from a specific app encryption declaration.
- [Read a specific app encryption declaration document](get-v1-appencryptiondeclarationdocuments-_id_.md): Get detailed information about a specified App Encryption Declaration document.
- [Read the declaration document for an app encryption declaration](get-v1-appencryptiondeclarations-_id_-appencryptiondeclarationdocument.md): Read the associated document for a specific App Encryption Declaration.
- [Read the App ID of an App Encryption Declaration](get-v1-appencryptiondeclarations-_id_-relationships-app.md): Deprecated. Get the app id from a specific app encryption declaration.
- [Read the ID of the Document for an App Encryption Declaration](get-v1-appencryptiondeclarations-_id_-relationships-appencryptiondeclarationdocument.md): Get the document id associated with a specific app encryption declaration.
