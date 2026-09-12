> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassetversions-_id_-relationships-backgroundassetuploadfiles](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassetversions-_id_-relationships-backgroundassetuploadfiles)

# Get the background asset upload files resource id for a background asset version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the ID for an uploaded asset pack Apple hosted background asset version

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssetVersions/{id}/relationships/backgroundAssetUploadFiles
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssetVersions` resource ID from the [Read Version Details for a Background Asset](get-v1-backgroundassets-_id_-versions.md) response.

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BackgroundAssetVersionBackgroundAssetUploadFilesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading background asset version information

- [Read background asset version app store releases information](get-v1-backgroundassetversionappstorereleases-_id_.md): Get the state of a background asset version App Store release.
- [Read Background Assets External Beta Release Information](get-v1-backgroundassetversionexternalbetareleases-_id_.md): Get the state of a background asset version external beta release.
- [Read Background Assets Internal Beta Release Information](get-v1-backgroundassetversioninternalbetareleases-_id_.md): Get the state of a background asset version internal beta release.
- [Read background asset version information](get-v1-backgroundassetversions-_id_.md): Get details about a specific background asset version.
- [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md): Get details about a background asset upload file for a specific background asset version.
