> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipadvancedexperiences-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipadvancedexperiences-_id_)

# Read advanced app clip experience information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get information about a specific advanced App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipAdvancedExperiences/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the advanced App Clip experience resource ID from the [List all advanced app clip experiences for an app clip](get-v1-appclips-_id_-appclipadvancedexperiences.md) response.

## Query Parameters

- `fields[appClipAdvancedExperiences]` — `[string]`: Additional fields to include for each advanced App Clip experiences resource returned by the response.
  **Allowed values:** `link`, `version`, `status`, `action`, `isPoweredBy`, `place`, `placeStatus`, `businessCategory`, `defaultLanguage`, `appClip`, `headerImage`, `localizations`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appClip`, `headerImage`, `localizations`
- `limit[localizations]` — `integer`: The maximum number of related localizations resources to return.
  **Maximum:** `50`
- `fields[appClipAdvancedExperienceImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `imageAsset`, `uploadOperations`, `assetDeliveryState`
- `fields[appClipAdvancedExperienceLocalizations]` — `[string]`: **Allowed values:** `language`, `title`, `subtitle`
- `fields[appClips]` — `[string]`: **Allowed values:** `bundleId`, `app`, `appClipDefaultExperiences`, `appClipAdvancedExperiences`

## Response Codes

- `200` OK — `AppClipAdvancedExperienceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting and Managing Advanced App Clip Experiences

- [Create an advanced app clip experience](post-v1-appclipadvancedexperiences.md): Configure a new advanced App Clip experience.
- [Modify and delete an advanced app clip experience](patch-v1-appclipadvancedexperiences-_id_.md): Update and delete an existing advanced App Clip experience.
