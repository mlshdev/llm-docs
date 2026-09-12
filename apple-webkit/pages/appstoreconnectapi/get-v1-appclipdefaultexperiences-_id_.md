> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiences-_id_)

# Read default app clip experience information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get a specific default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience resource ID from the [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md) response.

## Query Parameters

- `fields[appClipAppStoreReviewDetails]` — `[string]`: Additional fields to include for each app clip App Store review detail resource returned by the response.
  **Allowed values:** `invocationUrls`, `appClipDefaultExperience`
- `fields[appClipDefaultExperienceLocalizations]` — `[string]`: Additional fields to include for each default App Clip experience localization resource returned by the response.
  **Allowed values:** `locale`, `subtitle`, `appClipDefaultExperience`, `appClipHeaderImage`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each default App Clip experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `fields[appStoreVersions]` — `[string]`: Additional fields to include for each App Store version resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `limit[appClipDefaultExperienceLocalizations]` — `integer`: The maximum number of related default App Clip experience localizations resources to return.
  **Maximum:** `50`
- `fields[appClips]` — `[string]`: **Allowed values:** `bundleId`, `app`, `appClipDefaultExperiences`, `appClipAdvancedExperiences`

## Response Codes

- `200` OK — `AppClipDefaultExperienceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Default App Clip Experience Information

- [Read the app store review detail for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipappstorereviewdetail.md): Get App Store Review details for a specific default App Clip experience.
- [Get the App Store review detail ID for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipappstorereviewdetail.md)
- [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md): Get localized metadata that appears on the App Clip card for a specific default App Clip experience.
- [List localization IDs for an App Clip default experience](get-v1-appclipdefaultexperiences-_id_-relationships-appclipdefaultexperiencelocalizations.md)
- [Read app store version information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-releasewithappstoreversion.md): Get App Store Version information for a default App Clip experience.
- [Get the app store versions resource id for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Get IDs for App Store Versions related to a default App Clip experience.
