> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appscreenshots-_id_)

# Modify an app screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Commit an app screenshot after uploading it.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot resource ID from the [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppScreenshotUpdateRequest`

## Response Codes

- `200` OK — `AppScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Screenshots

- [Create an app screenshot](post-v1-appscreenshots.md): Add a new screenshot to a screenshot set.
- [Delete an app screenshot](delete-v1-appscreenshots-_id_.md): Delete an app screenshot that is associated with a screenshot set.
