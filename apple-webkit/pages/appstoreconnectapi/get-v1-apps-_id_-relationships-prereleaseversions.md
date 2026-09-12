> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-prereleaseversions](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-prereleaseversions)

# List prerelease version IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/preReleaseVersions
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppPreReleaseVersionsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting app build and prerelease version information

- [List all builds of an app](get-v1-apps-_id_-builds.md): Get a list of builds associated with a specific app.
- [List build IDs for an app](get-v1-apps-_id_-relationships-builds.md)
- [List all prerelease versions for an app](get-v1-apps-_id_-prereleaseversions.md): Get a list of prerelease versions associated with a specific app.
