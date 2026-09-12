> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-appclipdefaultexperience](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-appclipdefaultexperience)

# Get the default app clip experiences resource id for an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Get the ID of an app’s related default App Clip experience.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/appClipDefaultExperience
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the App Store Versions resource.

## Response Codes

- `200` OK — `AppStoreVersionAppClipDefaultExperienceLinkageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Attaching a Default App Clip Experience to a Version

- [Get the default app clip experience for an app store version](get-v1-appstoreversions-_id_-appclipdefaultexperience.md): Get the default App Clip experience for an App Store version of your app.
- [Modify the default app clip experience of an app store version](patch-v1-appstoreversions-_id_-relationships-appclipdefaultexperience.md): Update the relationship between an App Store version and a default App Clip experience.
