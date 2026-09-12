> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apppreviews-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apppreviews-_id_)

# Read app preview information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get information about an app preview and its upload and processing status.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appPreviews/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview resource ID from the [List all app previews for an app preview set](get-v1-apppreviewsets-_id_-apppreviews.md) response.

## Query Parameters

- `fields[appPreviews]` — `[string]`: Additional fields to include for each app preview resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `previewFrameTimeCode`, `mimeType`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appPreviewSet`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appPreviewSet`
- `fields[appPreviewSets]` — `[string]`: **Allowed values:** `previewType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`

## Response Codes

- `200` OK — `AppPreviewResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing App Previews and Reading Information

- [List all app previews for an app preview set](get-v1-apppreviewsets-_id_-apppreviews.md): List all ordered app previews in a preview set.
