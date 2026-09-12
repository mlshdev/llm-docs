> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appscreenshotsets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appscreenshotsets-_id_)

# Read app screenshot set information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get an app screenshot set including its display target, language, and the screenshot it contains.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appScreenshotSets/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app screenshot set resource ID from the [List all app screenshot sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-appscreenshotsets.md) response.

## Query Parameters

- `fields[appScreenshotSets]` — `[string]`: Additional fields to include for each app screenshot set resource returned by the response.
  **Allowed values:** `screenshotDisplayType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `fields[appScreenshots]` — `[string]`: Additional fields to include for each app screenshot resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `assetToken`, `assetType`, `uploadOperations`, `assetDeliveryState`, `appScreenshotSet`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appScreenshots`
- `limit[appScreenshots]` — `integer`: The maximum number of related app screenshots resources to return.
  **Maximum:** `50`
- `fields[appCustomProductPageLocalizations]` — `[string]`: **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`
- `fields[appStoreVersionLocalizations]` — `[string]`: **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`

## Response Codes

- `200` OK — `AppScreenshotSetResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
