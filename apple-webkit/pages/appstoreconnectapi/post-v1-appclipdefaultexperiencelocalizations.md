> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipdefaultexperiencelocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipdefaultexperiencelocalizations)

# Create the localized metadata for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Provide localized metadata that appears on the App Clip card of a default App Clip experience.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipDefaultExperienceLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `AppClipDefaultExperienceLocalizationCreateRequest`

The request body you use to create a default App Clip experience localization.

## Response Codes

- `201` Created — `AppClipDefaultExperienceLocalizationResponse`: The request completed successfully and a new Default App Clip Experience Localizations resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Your Default App Clip Experience’s Metadata

- [Modify the localization for a default app clip experience](patch-v1-appclipdefaultexperiencelocalizations-_id_.md): Update localized metadata for a specific default App Clip experience.
- [Delete a default app clip experience localization](delete-v1-appclipdefaultexperiencelocalizations-_id_.md): Delete localized metadata that appears on the App Clip card of a default App Clip experience.
