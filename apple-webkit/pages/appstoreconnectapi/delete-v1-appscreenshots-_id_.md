> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appscreenshots-_id_)

# Delete an app screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app screenshot that is associated with a screenshot set.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot resource ID from the [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Screenshots

- [Create an app screenshot](post-v1-appscreenshots.md): Add a new screenshot to a screenshot set.
- [Modify an app screenshot](patch-v1-appscreenshots-_id_.md): Commit an app screenshot after uploading it.
