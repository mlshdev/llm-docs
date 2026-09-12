> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builduploadfiles-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builduploadfiles-_id_)

# Read Build Upload File Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Get details about a specific build upload file for a build upload.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildUploadFiles/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[buildUploadFiles]` — `[string]`: **Allowed values:** `assetDeliveryState`, `assetToken`, `assetType`, `fileName`, `fileSize`, `sourceFileChecksums`, `uploadOperations`, `uti`

## Response Codes

- `200` OK — `BuildUploadFileResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:
- `400` Bad Request — `ErrorResponse`:

## See Also

### Reading and uploading build files

- [Read build upload file information for a build upload](get-v1-builduploads-_id_-builduploadfiles.md): Get build upload file information for a specific build upload.
- [Read the build upload file id for a build upload](get-v1-builduploads-_id_-relationships-builduploadfiles.md): Get the build upload file ID for a specific build upload.
- [Create a Reservation for a Build Upload File](post-v1-builduploadfiles.md): Reserve a build upload file for a specific build upload.
- [Commit a Build Upload File](patch-v1-builduploadfiles-_id_.md): Commit a build upload file to a specific build upload.
