> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appeventlocalizations-_id_-relationships-appeventvideoclips

# List app event video clip IDs for an app event localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.5)

> This relationship is deprecated. Use the [AppAssetLibraryPlacement](appassetlibraryplacement.md) relationship instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appEventLocalizations/{id}/relationships/appEventVideoClips
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppEventLocalizationAppEventVideoClipsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app event localization information](get-v1-appeventlocalizations-_id_.md): Get information about a specific app event localization.
- [List all video clips for an app event localization](get-v1-appeventlocalizations-_id_-appeventvideoclips.md): Deprecated. Get a list of video clips for a specific app event localization.
- [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md): Deprecated. Get a list of screenshots for a specific app event localization.
- [List app event screenshot IDs for an app event localization](get-v1-appeventlocalizations-_id_-relationships-appeventscreenshots.md): Deprecated.
- [Modify an app event localization](patch-v1-appeventlocalizations-_id_.md): Update the localized metadata for a specific in-app event.
- [Create an app event localization](post-v1-appeventlocalizations.md): Add a new localization for an in-app event.
- [Delete an app event localization](delete-v1-appeventlocalizations-_id_.md): Delete localized metadata that you configured for an in-app event.
- [List related placements](get-v1-appeventlocalizations-_id_-placements.md): List the placements for an in-app event localization.
- [List the placement IDs for an in-app event localization](get-v1-appeventlocalizations-_id_-relationships-placements.md): Get a list of placement resource IDs for a specific in-app event localization.
