> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apppreviewsets-_id_-apppreviews](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apppreviewsets-_id_-apppreviews)

# List all app previews for an app preview set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

List all ordered app previews in a preview set.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appPreviewSets/{id}/appPreviews
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview set resource ID from the [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md) response.

## Query Parameters

- `fields[appPreviews]` — `[string]`: Additional fields to include for each app preview resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `previewFrameTimeCode`, `mimeType`, `videoUrl`, `previewFrameImage`, `previewImage`, `uploadOperations`, `assetDeliveryState`, `videoDeliveryState`, `appPreviewSet`
- `limit` — `integer`: The maximum number of app preview resources to return.
  **Maximum:** `200`
- `fields[appPreviewSets]` — `[string]`: Additional fields to include for each app preview set resource returned by the response.
  **Allowed values:** `previewType`, `appStoreVersionLocalization`, `appCustomProductPageLocalization`, `appStoreVersionExperimentTreatmentLocalization`, `appPreviews`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appPreviewSet`

## Response Codes

- `200` OK — `AppPreviewsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Listing and Reordering All Previews in a Set

- [Get all app preview ids for an app preview set](get-v1-apppreviewsets-_id_-relationships-apppreviews.md): Get the ordered app preview IDs in a preview set.
- [Replace all app previews for an app preview set](patch-v1-apppreviewsets-_id_-relationships-apppreviews.md): Change the order of the app previews in a preview set.
