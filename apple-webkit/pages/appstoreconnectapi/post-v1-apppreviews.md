> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-apppreviews](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-apppreviews)

# Create an app preview

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add a new app preview to a preview set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appPreviews
```

## HTTP Body

Content type: `application/json`

Type: `AppPreviewCreateRequest`

## Response Codes

- `201` Created — `AppPreviewResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting App Previews

- [Modify an app preview](patch-v1-apppreviews-_id_.md): Commit the app preview after uploading it, and update the poster frame timecode.
- [Delete an app preview](delete-v1-apppreviews-_id_.md): Delete an app preview within a preview set.
