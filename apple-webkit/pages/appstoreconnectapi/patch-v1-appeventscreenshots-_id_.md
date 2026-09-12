> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appeventscreenshots-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appeventscreenshots-_id_)

# Update an app event screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appEventScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event screenshot resource ID from the [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppEventScreenshotUpdateRequest`

## Response Codes

- `200` OK — `AppEventScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List the Images for an In-App Event](get-v1-appeventscreenshots-_id_.md)
- [Create an app event screenshot](post-v1-appeventscreenshots.md)
- [Delete an app event screenshot](delete-v1-appeventscreenshots-_id_.md): Delete a specific screenshot from an in-app event.
