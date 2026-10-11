> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appeventscreenshots-_id_

# List the Images for an In-App Event

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+ (deprecated in 4.5)

> This endpoint is deprecated. Use [Read an app asset library image](get-v1-appassetlibraryimages-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appEventScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event screenshot resource ID from the [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md) response.

## Query Parameters

- `fields[appEventScreenshots]` — `[string]`: Additional fields to include for each app event screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `assetToken`, `uploadOperations`, `assetDeliveryState`, `appEventAssetType`, `appEventLocalization`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appEventLocalization`
- `fields[appEventLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `shortDescription`, `longDescription`, `appEvent`, `appEventScreenshots`, `appEventVideoClips`, `placements`

## Response Codes

- `200` OK — `AppEventScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Update an app event screenshot](patch-v1-appeventscreenshots-_id_.md): Deprecated.
- [Create an app event screenshot](post-v1-appeventscreenshots.md): Deprecated.
- [Delete an app event screenshot](delete-v1-appeventscreenshots-_id_.md): Deprecated. Delete a specific screenshot from an in-app event.
