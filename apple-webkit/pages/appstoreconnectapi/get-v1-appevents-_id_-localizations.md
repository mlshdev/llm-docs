> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appevents-_id_-localizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appevents-_id_-localizations)

# List all localizations for an in-app event

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Get a list of all localizations for a specific in-app event.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appEvents/{id}/localizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event resource ID from the [List all in-app events for an app](get-v1-apps-_id_-appevents.md) response.

## Query Parameters

- `fields[appEventLocalizations]` — `[string]`: Additional fields to include for each app event localization resource returned by the response.
  **Allowed values:** `locale`, `name`, `shortDescription`, `longDescription`, `appEvent`, `appEventScreenshots`, `appEventVideoClips`
- `fields[appEventScreenshots]` — `[string]`: Additional fields to include for each app event screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `assetToken`, `uploadOperations`, `assetDeliveryState`, `appEventAssetType`, `appEventLocalization`
- `fields[appEventVideoClips]` — `[string]`: Additional fields to include for each app event video clip resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `previewFrameTimeCode`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appEventAssetType`, `appEventLocalization`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appEvent`, `appEventScreenshots`, `appEventVideoClips`
- `limit` — `integer`: The maximum number of app event localization resources to return.
  **Maximum:** `200`
- `limit[appEventScreenshots]` — `integer`: The maximum number of related app event screenshots resources to return.
  **Maximum:** `50`
- `limit[appEventVideoClips]` — `integer`: The maximum number of related app event video clips resources to return.
  **Maximum:** `50`
- `fields[appEvents]` — `[string]`: Additional fields to include for each app event resource returned by the response.
  **Allowed values:** `referenceName`, `badge`, `eventState`, `deepLink`, `purchaseRequirement`, `primaryLocale`, `priority`, `purpose`, `territorySchedules`, `archivedTerritorySchedules`, `localizations`

## Response Codes

- `200` OK — `AppEventLocalizationsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read In-App Event Information](get-v1-appevents-_id_.md): Get information about a specific in-app event.
- [List localization IDs for an app event](get-v1-appevents-_id_-relationships-localizations.md)
- [List all in-app events for an app](get-v1-apps-_id_-appevents.md): Get a list of in-app events for a specific app.
- [Modify an in-app event](patch-v1-appevents-_id_.md): Update the metadata for a specific in-app event.
- [Create an in-app event](post-v1-appevents.md): Create a new in-app event for your app.
- [Delete an app event](delete-v1-appevents-_id_.md): Delete an in-app event and its related metadata.
