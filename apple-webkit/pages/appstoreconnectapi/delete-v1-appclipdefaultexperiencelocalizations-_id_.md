> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appclipdefaultexperiencelocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appclipdefaultexperiencelocalizations-_id_)

# Delete a default app clip experience localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Delete localized metadata that appears on the App Clip card of a default App Clip experience.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appClipDefaultExperienceLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience localization resource ID from the [Read localization information for a default app clip experience](get-v1-appclipdefaultexperiences-_id_-appclipdefaultexperiencelocalizations.md) response.

## Response Codes

- `204` No Content: The request completed successfully and the specific Default App Clip Experience Localizations resource was deleted.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Managing Your Default App Clip Experience’s Metadata

- [Create the localized metadata for a default app clip experience](post-v1-appclipdefaultexperiencelocalizations.md): Provide localized metadata that appears on the App Clip card of a default App Clip experience.
- [Modify the localization for a default app clip experience](patch-v1-appclipdefaultexperiencelocalizations-_id_.md): Update localized metadata for a specific default App Clip experience.
