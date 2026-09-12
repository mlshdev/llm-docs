> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appscreenshots](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appscreenshots)

# Create an app screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Add a new screenshot to a screenshot set.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appScreenshots
```

## HTTP Body

Content type: `application/json`

Type: `AppScreenshotCreateRequest`

## Response Codes

- `201` Created — `AppScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Deleting Screenshots

- [Modify an app screenshot](patch-v1-appscreenshots-_id_.md): Commit an app screenshot after uploading it.
- [Delete an app screenshot](delete-v1-appscreenshots-_id_.md): Delete an app screenshot that is associated with a screenshot set.
