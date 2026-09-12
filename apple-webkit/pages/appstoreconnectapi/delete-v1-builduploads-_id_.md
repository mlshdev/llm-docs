> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-builduploads-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-builduploads-_id_)

# Remove a Build Upload

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Remove a specific build upload for an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/buildUploads/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing build uploads

- [List All Build Uploads for an App](get-v1-apps-_id_-builduploads.md): Get a list of all build uploads for a specific app.
- [List all build uploads ids for an app](get-v1-apps-_id_-relationships-builduploads.md): Get a list of all build upload Ids for a specific app.
- [Read Build Upload Information](get-v1-builduploads-_id_.md): Get details about a specific build upload file for an app.
- [Create a Build Upload](post-v1-builduploads.md): Add a new build upload to an app.
