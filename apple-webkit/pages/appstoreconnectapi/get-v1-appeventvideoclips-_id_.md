> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appeventvideoclips-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appeventvideoclips-_id_)

# Read app event video clip information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Get information about a specific video clip for an in-app event.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appEventVideoClips/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event video clip resource ID from the [List all video clips for an app event localization](get-v1-appeventlocalizations-_id_-appeventvideoclips.md) response.

## Query Parameters

- `fields[appEventVideoClips]` — `[string]`: Additional fields to include for each app event video clip resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `previewFrameTimeCode`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appEventAssetType`, `appEventLocalization`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appEventLocalization`
- `fields[appEventLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `shortDescription`, `longDescription`, `appEvent`, `appEventScreenshots`, `appEventVideoClips`

## Response Codes

- `200` OK — `AppEventVideoClipResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Modify an app event video clip](patch-v1-appeventvideoclips-_id_.md): Commit an uploaded video clip asset for an in-app event.
- [Create an app event video clip](post-v1-appeventvideoclips.md): Reserve a video clip asset for an in-app event.
- [Delete an app event video clip](delete-v1-appeventvideoclips-_id_.md): Delete a specific video clip from an in-app event.
