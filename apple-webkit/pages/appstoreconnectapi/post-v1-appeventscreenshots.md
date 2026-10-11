> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appeventscreenshots

# Create an app event screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

> This endpoint is deprecated. Use [Create an app asset library image](post-v1-appassetlibraryimages.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEventScreenshots
```

## HTTP Body

Content type: `application/json`

Type: `AppEventScreenshotCreateRequest`

## Response Codes

- `201` Created — `AppEventScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List the Images for an In-App Event](get-v1-appeventscreenshots-_id_.md): Deprecated.
- [Update an app event screenshot](patch-v1-appeventscreenshots-_id_.md): Deprecated.
- [Delete an app event screenshot](delete-v1-appeventscreenshots-_id_.md): Deprecated. Delete a specific screenshot from an in-app event.
