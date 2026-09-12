> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiencelocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiencelocalizations-_id_)

# Modify the localization for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Update localized metadata for a specific default App Clip experience.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipDefaultExperienceLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience localization resource ID from the [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppClipDefaultExperienceLocalizationUpdateRequest`

The request body you use to update a default App Clip experience localization.

## Response Codes

- `200` OK — `AppClipDefaultExperienceLocalizationResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Your Default App Clip Experience’s Metadata

- [Create the localized metadata for a default app clip experience](post-v1-appclipdefaultexperiencelocalizations.md): Provide localized metadata that appears on the App Clip card of a default App Clip experience.
- [Delete a default app clip experience localization](delete-v1-appclipdefaultexperiencelocalizations-_id_.md): Delete localized metadata that appears on the App Clip card of a default App Clip experience.
