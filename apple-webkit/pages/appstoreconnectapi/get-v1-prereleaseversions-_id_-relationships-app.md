> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-prereleaseversions-_id_-relationships-app](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-prereleaseversions-_id_-relationships-app)

# Get the app ID for a prerelease version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/preReleaseVersions/{id}/relationships/app
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `PrereleaseVersionAppLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Prerelease Version Information

- [List prerelease versions](get-v1-prereleaseversions.md): Get a list of prerelease versions for all apps.
- [Read prerelease version information](get-v1-prereleaseversions-_id_.md): Get information about a specific prerelease version.
- [Read the app information of a prerelease version](get-v1-prereleaseversions-_id_-app.md): Get the app information for a specific prerelease version.
