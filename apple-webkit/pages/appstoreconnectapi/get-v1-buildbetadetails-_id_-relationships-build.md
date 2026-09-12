> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-buildbetadetails-_id_-relationships-build](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-buildbetadetails-_id_-relationships-build)

# Get the build ID for a build beta detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/buildBetaDetails/{id}/relationships/build
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BuildBetaDetailBuildLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Build Beta Details Information

- [List build beta details](get-v1-buildbetadetails.md): Find and list build beta details for all builds.
- [Read build beta detail information](get-v1-buildbetadetails-_id_.md): Get a specific build beta details resource.
- [Read the build information of a build beta detail](get-v1-buildbetadetails-_id_-build.md): Get the build information for a specific build beta details resource.
