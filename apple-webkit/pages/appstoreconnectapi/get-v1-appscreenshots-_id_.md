> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appscreenshots-_id_

# Read app screenshot information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 4.5)

Get information about an app screenshot and its upload and processing status.

> This endpoint is deprecated. Use [Read an app asset library image](get-v1-appassetlibraryimages-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appScreenshots/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot resource ID from the [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md) response.

## Query Parameters

- `fields[appScreenshots]` — `[string]`: Additional fields to include for each app screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `appScreenshotSet`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appScreenshotSet`
- `fields[appScreenshotSets]` — `[string]`: **Allowed values:** `screenshotDisplayType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`

## Response Codes

- `200` OK — `AppScreenshotResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Screenshots and Reading Information

- [List all app screenshots for an app screenshot set](get-v1-appscreenshotsets-_id_-appscreenshots.md): Deprecated. List all ordered screenshots in a screenshot set.
