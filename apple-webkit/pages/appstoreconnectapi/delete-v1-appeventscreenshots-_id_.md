> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appeventscreenshots-_id_

# Delete an app event screenshot

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

Delete a specific screenshot from an in-app event.

> This endpoint is deprecated. Use [Delete an app asset library image](delete-v1-appassetlibraryimages-_id_.md) instead.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appEventScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event screenshot resource ID from the [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List the Images for an In-App Event](get-v1-appeventscreenshots-_id_.md): Deprecated.
- [Update an app event screenshot](patch-v1-appeventscreenshots-_id_.md): Deprecated.
- [Create an app event screenshot](post-v1-appeventscreenshots.md): Deprecated.
