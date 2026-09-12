> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-prereleaseversions-_id_-relationships-builds](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-prereleaseversions-_id_-relationships-builds)

# List build IDs for a prerelease version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/preReleaseVersions/{id}/relationships/builds
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `PrereleaseVersionBuildsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Information

- [List all builds of a prerelease version](get-v1-prereleaseversions-_id_-builds.md): Get a list of builds of a specific prerelease version.
