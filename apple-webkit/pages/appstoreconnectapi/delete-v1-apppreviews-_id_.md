> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-apppreviews-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-apppreviews-_id_)

# Delete an app preview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app preview within a preview set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appPreviews/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview resource ID from the [List all app previews for an app preview set](get-v1-apppreviewsets-_id_-apppreviews.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting App Previews

- [Create an app preview](post-v1-apppreviews.md): Add a new app preview to a preview set.
- [Modify an app preview](patch-v1-apppreviews-_id_.md): Commit the app preview after uploading it, and update the poster frame timecode.
