> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appeventlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appeventlocalizations-_id_)

# Modify an app event localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Update the localized metadata for a specific in-app event.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appEventLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event localization resource ID from the [List all localizations for an in-app event](get-v1-appevents-_id_-localizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppEventLocalizationUpdateRequest`

## Response Codes

- `200` OK — `AppEventLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read app event localization information](get-v1-appeventlocalizations-_id_.md): Get information about a specific app event localization.
- [List all video clips for an app event localization](get-v1-appeventlocalizations-_id_-appeventvideoclips.md): Get a list of video clips for a specific app event localization.
- [List app event video clip IDs for an app event localization](get-v1-appeventlocalizations-_id_-relationships-appeventvideoclips.md)
- [List all screenshots for an app event localization](get-v1-appeventlocalizations-_id_-appeventscreenshots.md): Get a list of screenshots for a specific app event localization.
- [List app event screenshot IDs for an app event localization](get-v1-appeventlocalizations-_id_-relationships-appeventscreenshots.md)
- [Create an app event localization](post-v1-appeventlocalizations.md): Add a new localization for an in-app event.
- [Delete an app event localization](delete-v1-appeventlocalizations-_id_.md): Delete localized metadata that you configured for an in-app event.
