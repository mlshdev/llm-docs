> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipheaderimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipheaderimages-_id_)

# Read the app clip card image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get the image that appears on the App Clip card of a default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipHeaderImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app clip header image resource ID from the [Create an app clip card image for a default app clip experience](post-v1-appclipheaderimages.md) response.

## Query Parameters

- `fields[appClipHeaderImages]` — `[string]`: Additional fields to include for each app clip header image resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `appClipDefaultExperienceLocalization`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClipDefaultExperienceLocalization`
- `fields[appClipDefaultExperienceLocalizations]` — `[string]`: **Allowed values:** `locale`, `subtitle`, `appClipDefaultExperience`, `appClipHeaderImage`

## Response Codes

- `200` OK — `AppClipHeaderImageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing App Clip Card Images

- [Create an app clip card image for a default app clip experience](post-v1-appclipheaderimages.md): Reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [Modify an app clip card image](patch-v1-appclipheaderimages-_id_.md): Change the image that appears on the App Clip card of a default App Clip experience.
- [Delete a default app clip experience image](delete-v1-appclipheaderimages-_id_.md): Delete the image asset that appears on the App Clip card for a default App Clip experience.
