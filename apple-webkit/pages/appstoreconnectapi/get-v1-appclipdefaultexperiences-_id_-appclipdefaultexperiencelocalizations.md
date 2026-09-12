> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations)

# Read localization information for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get localized metadata that appears on the App Clip card for a specific default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}/appClipDefaultExperienceLocalizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience resource ID from the [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md) response.

## Query Parameters

- `fields[appClipDefaultExperienceLocalizations]` — `[string]`: Additional fields to include for each default App Clip experience localization resource returned by the response.
  **Allowed values:** `locale`, `subtitle`, `appClipDefaultExperience`, `appClipHeaderImage`
- `filter[locale]` — `[string]`: Filter the returned default App Clip experience localizations using the experience’s locale.
- `limit` — `integer`: The maximum number of default App Clip experience localization resources to return.
  **Maximum:** `200`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClipDefaultExperience`, `appClipHeaderImage`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each default App Clip experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `fields[appClipHeaderImages]` — `[string]`: Additional fields to include for each app clip header image resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `appClipDefaultExperienceLocalization`

## Response Codes

- `200` OK — `AppClipDefaultExperienceLocalizationsResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Default App Clip Experience Information

- [Read default app clip experience information](get-v1-appclipdefaultexperiences-_id_.md): Get a specific default App Clip experience.
- [Read the app store review detail for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail.md): Get App Store Review details for a specific default App Clip experience.
- [Get the App Store review detail ID for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipappstorereviewdetail.md)
- [List localization IDs for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipdefaultexperiencelocalizations.md)
- [Read app store version information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-releasewithappstoreversion.md): Get App Store Version information for a default App Clip experience.
- [Get the app store versions resource id for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Get IDs for App Store Versions related to a default App Clip experience.
