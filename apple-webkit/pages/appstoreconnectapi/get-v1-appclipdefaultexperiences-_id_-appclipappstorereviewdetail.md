> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail)

# Read the app store review detail for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get App Store Review details for a specific default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}/appClipAppStoreReviewDetail
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience resource ID from the [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md) response.

## Query Parameters

- `fields[appClipAppStoreReviewDetails]` — `[string]`: Additional fields to include for each app clip App Store review detail resource returned by the response.
  **Allowed values:** `invocationUrls`, `appClipDefaultExperience`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each default App Clip experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClipDefaultExperience`

## Response Codes

- `200` OK — `AppClipAppStoreReviewDetailResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Default App Clip Experience Information

- [Read default app clip experience information](get-v1-appclipdefaultexperiences-_id_.md): Get a specific default App Clip experience.
- [Get the App Store review detail ID for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipappstorereviewdetail.md)
- [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md): Get localized metadata that appears on the App Clip card for a specific default App Clip experience.
- [List localization IDs for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipdefaultexperiencelocalizations.md)
- [Read app store version information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-releasewithappstoreversion.md): Get App Store Version information for a default App Clip experience.
- [Get the app store versions resource id for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Get IDs for App Store Versions related to a default App Clip experience.
