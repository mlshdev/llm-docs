> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassets-_id_-versions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassets-_id_-versions)

# Read Version Details for a Background Asset

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get details about a specific background asset version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssets/{id}/versions
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssets` resource ID from the [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md) response.

## Query Parameters

- `fields[backgroundAssetVersionAppStoreReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssetVersionExternalBetaReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssetVersionInternalBetaReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssetVersions]` — `[string]`: **Allowed values:** `createdDate`, `platforms`, `state`, `stateDetails`, `version`, `locale`, `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`, `backgroundAssetUploadFiles`
- `filter[appStoreRelease.state]` — `[string]`: **Allowed values:** `PREPARE_FOR_SUBMISSION`, `READY_FOR_REVIEW`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `ACCEPTED`, `REJECTED`, `PROCESSING_FOR_DISTRIBUTION`, `READY_FOR_DISTRIBUTION`, `SUPERSEDED`
- `filter[externalBetaRelease.state]` — `[string]`: **Allowed values:** `READY_FOR_BETA_SUBMISSION`, `WAITING_FOR_REVIEW`, `IN_REVIEW`, `REJECTED`, `PROCESSING_FOR_TESTING`, `READY_FOR_TESTING`, `SUPERSEDED`
- `filter[internalBetaRelease.state]` — `[string]`: **Allowed values:** `READY_FOR_TESTING`, `SUPERSEDED`
- `filter[state]` — `[string]`: **Allowed values:** `AWAITING_UPLOAD`, `PROCESSING`, `FAILED`, `COMPLETE`
- `filter[version]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `version`, `-version`
- `fields[backgroundAssetUploadFiles]` — `[string]`: **Allowed values:** `assetDeliveryState`, `assetToken`, `assetType`, `fileName`, `fileSize`, `sourceFileChecksum`, `sourceFileChecksums`, `uploadOperations`
- `fields[backgroundAssets]` — `[string]`: **Allowed values:** `archived`, `assetPackIdentifier`, `createdDate`, `usedBytes`, `app`, `versions`, `appStoreVersion`, `internalBetaVersion`, `externalBetaVersion`
- `filter[locale]` — `[string]`:
- `filter[platforms]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`, `TV_OS`, `VISION_OS`

## Response Codes

- `200` OK — `BackgroundAssetVersionsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading background asset information

- [List all background assets for an app](get-v1-apps-_id_-backgroundassets.md): Get information about the Apple-hosted background assets for a specific app.
- [List the assets packs ids for an app](get-v1-apps-_id_-relationships-backgroundassets.md): Get a list of the Apple hosted background asset IDs for a specific app.
- [Read Background Assets Information](get-v1-backgroundassets-_id_.md): Get details about a specific background asset.
- [Read version ids for a background asset](get-v1-backgroundassets-_id_-relationships-versions.md): Get version IDs about a specific background asset version.
