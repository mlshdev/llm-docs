> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-backgroundassetuploadfiles-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-backgroundassetuploadfiles-_id_)

# Read Information for an Uploaded Asset Pack

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get details about an uploaded asset pack for Apple hosted background asset.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/backgroundAssetUploadFiles/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `backgroundAssetVersions` resource ID from the [Read Background Asset Upload File Information for a Background Asset Version](get-v1-backgroundassetversions-_id_-backgroundassetuploadfiles.md) response.

## Query Parameters

- `fields[backgroundAssetUploadFiles]` — `[string]`: **Allowed values:** `assetDeliveryState`, `assetToken`, `assetType`, `fileName`, `fileSize`, `sourceFileChecksum`, `sourceFileChecksums`, `uploadOperations`

## Response Codes

- `200` OK — `BackgroundAssetUploadFileResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Uploading background asset files

- [Create a Reservation for an Asset Pack Upload](post-v1-backgroundassetuploadfiles.md): Begin the process of uploading an asset pack for Apple-hosted background assets.
- [Commit an Uploaded Asset Pack to a Background Asset Version](patch-v1-backgroundassetuploadfiles-_id_.md): Associate an uploaded asset pack with a background asset version to finish the upload process.
