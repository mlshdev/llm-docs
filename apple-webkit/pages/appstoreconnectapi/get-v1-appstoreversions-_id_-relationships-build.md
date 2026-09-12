> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-build](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-build)

# Get the build id for an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get the ID of the build that is attached to a specific App Store version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/build
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Response Codes

- `200` OK — `AppStoreVersionBuildLinkageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Attaching a Build to a Version

- [Read the build information of an app store version](get-v1-appstoreversions-_id_-build.md): Get the build that is attached to a specific App Store version.
- [Modify the build for an app store version](patch-v1-appstoreversions-_id_-relationships-build.md): Change the build that is attached to a specific App Store version.
