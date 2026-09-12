> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipdefaultexperiences-_id_-relationships-releasewithappstoreversion)

# Modify the related app store version for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Update the relationship between a default App Clip experience and an App Store Version.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipDefaultExperiences/{id}/relationships/releaseWithAppStoreVersion
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Default App Clip Experiences resource.

## HTTP Body

Content type: `application/json`

Type: `AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest`

The request body you use to update the relationship between a default App Clip experience and an App Store version.

## Response Codes

- `204` No Content: The request completed successfully and the relationship with the specific App Store Versions resource was updated.
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Default App Clip Experiences

- [Create a default app clip experience](post-v1-appclipdefaultexperiences.md): Configure a new default App Clip experience.
- [Modify a default app clip experience](patch-v1-appclipdefaultexperiences-_id_.md): Update a default App Clip experience.
- [Delete a default app clip experience](delete-v1-appclipdefaultexperiences-_id_.md): Delete a specific default App Clip experience.
