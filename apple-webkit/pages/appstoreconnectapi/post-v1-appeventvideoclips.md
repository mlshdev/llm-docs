> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appeventvideoclips](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appeventvideoclips)

# Create an app event video clip

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Reserve a video clip asset for an in-app event.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEventVideoClips
```

## HTTP Body

Content type: `application/json`

Type: `AppEventVideoClipCreateRequest`

## Response Codes

- `201` Created — `AppEventVideoClipResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app event video clip information](get-v1-appeventvideoclips-_id_.md): Get information about a specific video clip for an in-app event.
- [Modify an app event video clip](patch-v1-appeventvideoclips-_id_.md): Commit an uploaded video clip asset for an in-app event.
- [Delete an app event video clip](delete-v1-appeventvideoclips-_id_.md): Delete a specific video clip from an in-app event.
