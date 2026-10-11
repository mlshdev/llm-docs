> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appscreenshots

# Create an app screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

Add a new screenshot to a screenshot set.

> This endpoint is deprecated. Use [Create an app asset library image](post-v1-appassetlibraryimages.md) instead.

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

- [Modify an app screenshot](patch-v1-appscreenshots-_id_.md): Deprecated. Commit an app screenshot after uploading it.
- [Delete an app screenshot](delete-v1-appscreenshots-_id_.md): Deprecated. Delete an app screenshot that is associated with a screenshot set.
