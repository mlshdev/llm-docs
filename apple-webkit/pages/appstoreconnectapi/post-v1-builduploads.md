> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-builduploads](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-builduploads)

# Create a Build Upload

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Add a new build upload to an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/buildUploads
```

## HTTP Body

Content type: `application/json`

Type: `BuildUploadCreateRequest`

## Response Codes

- `201` Created — `BuildUploadResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
- `400` Bad Request — `ErrorResponse`:

## See Also

### Managing build uploads

- [List All Build Uploads for an App](get-v1-apps-_id_-builduploads.md): Get a list of all build uploads for a specific app.
- [List all build uploads ids for an app](get-v1-apps-_id_-relationships-builduploads.md): Get a list of all build upload Ids for a specific app.
- [Read Build Upload Information](get-v1-builduploads-_id_.md): Get details about a specific build upload file for an app.
- [Remove a Build Upload](delete-v1-builduploads-_id_.md): Remove a specific build upload for an app.
