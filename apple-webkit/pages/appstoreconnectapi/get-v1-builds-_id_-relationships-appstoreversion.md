> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-appstoreversion](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-appstoreversion)

# Get the App Store version ID for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/appStoreVersion
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BuildAppStoreVersionLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [List builds](get-v1-builds.md): Find and list builds for all apps in App Store Connect.
- [Read build information](get-v1-builds-_id_.md): Get information about a specific build.
- [Read the app information of a build](get-v1-builds-_id_-app.md): Get the app information for a specific build.
- [Read the app id of a build](get-v1-builds-_id_-relationships-app.md): Get the app ID for a specific build.
- [Read the app store version information of a build](get-v1-builds-_id_-appstoreversion.md): Get the App Store version of a specific build.
- [Read the prerelease version of a build](get-v1-builds-_id_-prereleaseversion.md): Get the prerelease version for a specific build.
- [Get the prerelease version ID for a build](get-v1-builds-_id_-relationships-prereleaseversion.md)
- [Read Usage Metrics for a Beta Build](get-v1-builds-_id_-metrics-betabuildusages.md): Get usage metrics for a specific build.
