> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-apppreviewsets

# Create an app preview set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

Add a new app preview set to an App Store version localization for a specific app preview type and display size.

> This endpoint is deprecated. Use [Create an app asset library placement](post-v1-appassetlibraryplacements.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appPreviewSets
```

## HTTP Body

Content type: `application/json`

Type: `AppPreviewSetCreateRequest`

## Response Codes

- `201` Created — `AppPreviewSetResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Preview Sets

- [Delete an app preview set](delete-v1-apppreviewsets-_id_.md): Deprecated. Delete an app preview set and all of its previews.
