> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-builduploads](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-builduploads)

# List all build uploads ids for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Get a list of all build upload Ids for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/buildUploads
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppBuildUploadsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing build uploads

- [List All Build Uploads for an App](get-v1-apps-_id_-builduploads.md): Get a list of all build uploads for a specific app.
- [Read Build Upload Information](get-v1-builduploads-_id_.md): Get details about a specific build upload file for an app.
- [Create a Build Upload](post-v1-builduploads.md): Add a new build upload to an app.
- [Remove a Build Upload](delete-v1-builduploads-_id_.md): Remove a specific build upload for an app.
