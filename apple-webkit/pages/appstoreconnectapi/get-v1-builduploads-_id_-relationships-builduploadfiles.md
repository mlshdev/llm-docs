> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builduploads-_id_-relationships-builduploadfiles](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builduploads-_id_-relationships-builduploadfiles)

# Read the build upload file id for a build upload

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Get the build upload file ID for a specific build upload.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildUploads/{id}/relationships/buildUploadFiles
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `BuildUploadBuildUploadFilesLinkagesResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:
- `400` Bad Request — `ErrorResponse`:

## See Also

### Reading and uploading build files

- [Read Build Upload File Information](get-v1-builduploadfiles-_id_.md): Get details about a specific build upload file for a build upload.
- [Read build upload file information for a build upload](get-v1-builduploads-_id_-builduploadfiles.md): Get build upload file information for a specific build upload.
- [Create a Reservation for a Build Upload File](post-v1-builduploadfiles.md): Reserve a build upload file for a specific build upload.
- [Commit a Build Upload File](patch-v1-builduploadfiles-_id_.md): Commit a build upload file to a specific build upload.
