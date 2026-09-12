> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiences-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiences-_id_)

# Modify a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Update a default App Clip experience.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the default App Clip experience resource ID from the [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppClipDefaultExperienceUpdateRequest`

The request body you use to update a default App Clip experience.

## Response Codes

- `200` OK — `AppClipDefaultExperienceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Default App Clip Experiences

- [Create a default app clip experience](post-v1-appclipdefaultexperiences.md): Configure a new default App Clip experience.
- [Modify the related app store version for a default app clip experience](patch-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Update the relationship between a default App Clip experience and an App Store Version.
- [Delete a default app clip experience](delete-v1-appclipdefaultexperiences-_id_.md): Delete a specific default App Clip experience.
