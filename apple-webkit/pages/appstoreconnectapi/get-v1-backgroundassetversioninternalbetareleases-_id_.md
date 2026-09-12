> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassetversioninternalbetareleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassetversioninternalbetareleases-_id_)

# Read Background Assets Internal Beta Release Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the state of a background asset version internal beta release.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssetVersionInternalBetaReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[backgroundAssetVersionInternalBetaReleases]` — `[string]`: **Allowed values:** `state`, `backgroundAssetVersion`
- `include` — `[string]`: **Allowed values:** `backgroundAssetVersion`
- `fields[backgroundAssetVersions]` — `[string]`: **Allowed values:** `createdDate`, `platforms`, `state`, `stateDetails`, `version`, `locale`, `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`, `backgroundAssetUploadFiles`

## Response Codes

- `200` OK — `BackgroundAssetVersionInternalBetaReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading background asset version information

- [Read background asset version app store releases information](get-v1-backgroundassetversionappstorereleases-_id_.md): Get the state of a background asset version App Store release.
- [Read Background Assets External Beta Release Information](get-v1-backgroundassetversionexternalbetareleases-_id_.md): Get the state of a background asset version external beta release.
- [Read background asset version information](get-v1-backgroundassetversions-_id_.md): Get details about a specific background asset version.
- [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md): Get details about a background asset upload file for a specific background asset version.
- [Get the background asset upload files resource id for a background asset version](get-v1-backgroundassetversions-_id_-relationships-backgroundassetuploadfiles.md): Get the ID for an uploaded asset pack Apple hosted background asset version
