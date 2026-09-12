> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipdefaultexperiences](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipdefaultexperiences)

# Create a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Configure a new default App Clip experience.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences
```

## HTTP Body

Content type: `application/json`

Type: `AppClipDefaultExperienceCreateRequest`

The request body you use to create a default App Clip experience.

## Response Codes

- `201` Created — `AppClipDefaultExperienceResponse`: The request completed successfully and a new default App Clip experience has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Default App Clip Experiences

- [Modify a default app clip experience](patch-v1-appclipdefaultexperiences-_id_.md): Update a default App Clip experience.
- [Modify the related app store version for a default app clip experience](patch-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion.md): Update the relationship between a default App Clip experience and an App Store Version.
- [Delete a default app clip experience](delete-v1-appclipdefaultexperiences-_id_.md): Delete a specific default App Clip experience.
