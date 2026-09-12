> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-apppreviewsets-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-apppreviewsets-_id_)

# Delete an app preview set

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app preview set and all of its previews.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appPreviewSets/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app preview set resource ID from the [List all app preview sets for an app store version localization](get-v1-appstoreversionlocalizations-_id_-apppreviewsets.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating and Deleting Preview Sets

- [Create an app preview set](post-v1-apppreviewsets.md): Add a new app preview set to an App Store version localization for a specific app preview type and display size.
