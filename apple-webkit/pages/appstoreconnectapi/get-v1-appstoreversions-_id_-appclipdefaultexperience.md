> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-appclipdefaultexperience](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-appclipdefaultexperience)

# Get the default app clip experience for an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get the default App Clip experience for an App Store version of your app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/appClipDefaultExperience
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Query Parameters

- `fields[appClipDefaultExperienceLocalizations]` — `[string]`: Additional fields to include for each App Clip default experience localization resource returned by the response.
  **Allowed values:** `locale`, `subtitle`, `appClipDefaultExperience`, `appClipHeaderImage`
- `fields[appClipDefaultExperiences]` — `[string]`: Additional fields to include for each App Clip default experience resource returned by the response.
  **Allowed values:** `action`, `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClip`, `releaseWithAppStoreVersion`, `appClipDefaultExperienceLocalizations`, `appClipAppStoreReviewDetail`
- `limit[appClipDefaultExperienceLocalizations]` — `integer`: The maximum number of related App Clip default experience localization resources to return.
  **Maximum:** `50`
- `fields[appClips]` — `[string]`: Additional fields to include for each App Clip resource returned by the response.
  **Allowed values:** `bundleId`, `app`, `appClipDefaultExperiences`, `appClipAdvancedExperiences`
- `fields[appClipAppStoreReviewDetails]` — `[string]`: Additional fields to include for each App Clip App Store review detail resource returned by the response.
  **Allowed values:** `invocationUrls`, `appClipDefaultExperience`
- `fields[appStoreVersions]` — `[string]`: Additional fields to include for each App Store version resource returned by the response.
  **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`

## Response Codes

- `200` OK — `AppClipDefaultExperienceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Attaching a Default App Clip Experience to a Version

- [Get the default app clip experiences resource id for an app store version](get-v1-appstoreversions-_id_-relationships-appclipdefaultexperience.md): Get the ID of an app’s related default App Clip experience.
- [Modify the default app clip experience of an app store version](patch-v1-appstoreversions-_id_-relationships-appclipdefaultexperience.md): Update the relationship between an App Store version and a default App Clip experience.
