> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-apppreviews-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-apppreviews-_id_)

# Modify an app preview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Commit the app preview after uploading it, and update the poster frame timecode.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appPreviews/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview resource ID from the [List all app previews for an app preview set](get-v1-apppreviewsets-_id_-apppreviews.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppPreviewUpdateRequest`

## Response Codes

- `200` OK — `AppPreviewResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting App Previews

- [Create an app preview](post-v1-apppreviews.md): Add a new app preview to a preview set.
- [Delete an app preview](delete-v1-apppreviews-_id_.md): Delete an app preview within a preview set.
