> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstoreversions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstoreversions-_id_)

# Delete an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete an app store version that is associated with an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating and Modifying App Store Versions

- [Create an app store version](post-v1-appstoreversions.md): Add a new App Store version or platform to an app.
- [Modify an app store version](patch-v1-appstoreversions-_id_.md): Update the App Store version for a specific app.
