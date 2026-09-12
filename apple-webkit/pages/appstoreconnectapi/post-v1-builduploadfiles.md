> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-builduploadfiles](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-builduploadfiles)

# Create a Reservation for a Build Upload File

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Reserve a build upload file for a specific build upload.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/buildUploadFiles
```

## HTTP Body

Content type: `application/json`

Type: `BuildUploadFileCreateRequest`

## Response Codes

- `201` Created — `BuildUploadFileResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
- `400` Bad Request — `ErrorResponse`:

## See Also

### Reading and uploading build files

- [Read Build Upload File Information](get-v1-builduploadfiles-_id_.md): Get details about a specific build upload file for a build upload.
- [Read build upload file information for a build upload](get-v1-builduploads-_id_-builduploadfiles.md): Get build upload file information for a specific build upload.
- [Read the build upload file id for a build upload](get-v1-builduploads-_id_-relationships-builduploadfiles.md): Get the build upload file ID for a specific build upload.
- [Commit a Build Upload File](patch-v1-builduploadfiles-_id_.md): Commit a build upload file to a specific build upload.
