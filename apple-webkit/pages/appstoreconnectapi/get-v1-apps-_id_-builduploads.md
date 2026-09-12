> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-builduploads](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-builduploads)

# List All Build Uploads for an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Get a list of all build uploads for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/buildUploads
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[buildUploadFiles]` — `[string]`: **Allowed values:** `assetDeliveryState`, `assetToken`, `assetType`, `fileName`, `fileSize`, `sourceFileChecksums`, `uploadOperations`, `uti`
- `fields[buildUploads]` — `[string]`: **Allowed values:** `cfBundleShortVersionString`, `cfBundleVersion`, `createdDate`, `state`, `platform`, `uploadedDate`, `build`, `assetFile`, `assetDescriptionFile`, `assetSpiFile`, `buildUploadFiles`
- `fields[builds]` — `[string]`: **Allowed values:** `version`, `uploadedDate`, `expirationDate`, `expired`, `minOsVersion`, `lsMinimumSystemVersion`, `computedMinMacOsVersion`, `computedMinVisionOsVersion`, `iconAssetToken`, `processingState`, `buildAudienceType`, `usesNonExemptEncryption`, `preReleaseVersion`, `individualTesters`, `betaGroups`, `betaBuildLocalizations`, `appEncryptionDeclaration`, `betaAppReviewSubmission`, `app`, `buildBetaDetail`, `appStoreVersion`, `icons`, `buildBundles`, `buildUpload`, `perfPowerMetrics`, `diagnosticSignatures`
- `filter[cfBundleShortVersionString]` — `[string]`:
- `filter[cfBundleVersion]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`
- `filter[state]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `build`, `assetFile`, `assetDescriptionFile`, `assetSpiFile`
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `cfBundleVersion`, `-cfBundleVersion`, `uploadedDate`, `-uploadedDate`

## Response Codes

- `200` OK — `BuildUploadsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing build uploads

- [List all build uploads ids for an app](get-v1-apps-_id_-relationships-builduploads.md): Get a list of all build upload Ids for a specific app.
- [Read Build Upload Information](get-v1-builduploads-_id_.md): Get details about a specific build upload file for an app.
- [Create a Build Upload](post-v1-builduploads.md): Add a new build upload to an app.
- [Remove a Build Upload](delete-v1-builduploads-_id_.md): Remove a specific build upload for an app.
