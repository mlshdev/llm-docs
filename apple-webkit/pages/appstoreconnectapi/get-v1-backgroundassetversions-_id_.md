> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassetversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassetversions-_id_)

# Read background asset version information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get details about a specific background asset version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssetVersions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssetVersions` resource ID from the [Read Version Details for a Background Asset](get-v1-backgroundassets-_id_-versions.md) response.

## Query Parameters

- `fields[backgroundAssetVersions]` — `[string]`: **Allowed values:** `createdDate`, `platforms`, `state`, `stateDetails`, `version`, `locale`, `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`, `backgroundAssetUploadFiles`
- `include` — `[string]`: **Allowed values:** `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`
- `fields[backgroundAssetUploadFiles]` — `[string]`: **Allowed values:** `assetDeliveryState`, `assetToken`, `assetType`, `fileName`, `fileSize`, `sourceFileChecksum`, `sourceFileChecksums`, `uploadOperations`
- `fields[backgroundAssetVersionAppStoreReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssetVersionExternalBetaReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssetVersionInternalBetaReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `fields[backgroundAssets]` — `[string]`: **Allowed values:** `archived`, `assetPackIdentifier`, `createdDate`, `usedBytes`, `app`, `versions`, `appStoreVersion`, `internalBetaVersion`, `externalBetaVersion`

## Response Codes

- `200` OK — `BackgroundAssetVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md)

## See Also

### Reading background asset version information

- [Read background asset version app store releases information](get-v1-backgroundassetversionappstorereleases-_id_.md): Get the state of a background asset version App Store release.
- [Read Background Assets External Beta Release Information](get-v1-backgroundassetversionexternalbetareleases-_id_.md): Get the state of a background asset version external beta release.
- [Read Background Assets Internal Beta Release Information](get-v1-backgroundassetversioninternalbetareleases-_id_.md): Get the state of a background asset version internal beta release.
- [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md): Get details about a background asset upload file for a specific background asset version.
- [Get the background asset upload files resource id for a background asset version](get-v1-backgroundassetversions-_id_-relationships-backgroundassetuploadfiles.md): Get the ID for an uploaded asset pack Apple hosted background asset version
