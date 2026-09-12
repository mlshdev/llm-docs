> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apppreviewsets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apppreviewsets-_id_)

# Read app preview set information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get an app preview set that includes its display target, language, and the previews it contains.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appPreviewSets/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview set resource ID from the [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md) response.

## Query Parameters

- `fields[appPreviewSets]` — `[string]`: Additional fields to include for each app preview set resource returned by the response.
  **Allowed values:** `previewType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `fields[appPreviews]` — `[string]`: Additional fields to include for each app preview resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `previewFrameTimeCode`, `mimeType`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appPreviewSet`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `limit[appPreviews]` — `integer`: The maximum number of related app previews resources to return.
  **Maximum:** `50`
- `fields[appCustomProductPageLocalizations]` — `[string]`: **Allowed values:** `locale`, `promotionalText`, `appCustomProductPageVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`
- `fields[appStoreVersionExperimentTreatmentLocalizations]` — `[string]`: **Allowed values:** `locale`, `appStoreVersionExperimentTreatment`, `appScreenshotSets`, `appPreviewSets`
- `fields[appStoreVersionLocalizations]` — `[string]`: **Allowed values:** `description`, `locale`, `keywords`, `marketingUrl`, `promotionalText`, `supportUrl`, `whatsNew`, `appStoreVersion`, `appScreenshotSets`, `appPreviewSets`, `searchKeywords`

## Response Codes

- `200` OK — `AppPreviewSetResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:
