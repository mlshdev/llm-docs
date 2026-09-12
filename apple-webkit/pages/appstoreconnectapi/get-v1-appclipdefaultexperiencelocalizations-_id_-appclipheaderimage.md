> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiencelocalizations-_id_-appclipheaderimage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiencelocalizations-_id_-appclipheaderimage)

# Read app clip card image information for a localized default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get the image that appears on the App Clip card, specific to a locale, for a default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience localization resource ID from the [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md) response.

## Query Parameters

- `fields[appClipHeaderImages]` — `[string]`: Additional fields to include for each app clip header image resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `appClipDefaultExperienceLocalization`
- `fields[appClipDefaultExperienceLocalizations]` — `[string]`: Additional fields to include for each default App Clip experience localization resource returned by the response.
  **Allowed values:** `locale`, `subtitle`, `appClipDefaultExperience`, `appClipHeaderImage`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClipDefaultExperienceLocalization`

## Response Codes

- `200` OK — `AppClipHeaderImageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Metadata for Your Default App Clip Experience

- [Read localization information of a default app clip experience](get-v1-appclipdefaultexperiencelocalizations-_id_.md): Get localized metadata that appears on the App Clip card of a specific default App Clip experience.
- [Get the header image ID for an App Clip default experience localization](get-v1-appclipdefaultexperiencelocalizations-_id_-relationships-appclipheaderimage.md)
