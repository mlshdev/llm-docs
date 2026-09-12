> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-buildbetadetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-buildbetadetail)

# Get the build beta detail ID for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/buildBetaDetail
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BuildBuildBetaDetailLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Information Associated with Builds

- [Read the build beta details information of a build](get-v1-builds-_id_-buildbetadetail.md): Get the beta test details for a specific build.
- [Read the app encryption declaration of a build](get-v1-builds-_id_-appencryptiondeclaration.md): Read an app encryption declaration associated with a specific build.
- [Get the app encryption declaration id for a build](get-v1-builds-_id_-relationships-appencryptiondeclaration.md): Get the beta app encryption declaration resource ID associated with a build.
- [List all beta build localizations of a build](get-v1-builds-_id_-betabuildlocalizations.md): Get a list of localized beta test information for a specific build.
- [List beta build localization IDs for a build](get-v1-builds-_id_-relationships-betabuildlocalizations.md)
- [List all diagnostic signatures for a build](get-v1-builds-_id_-diagnosticsignatures.md): List the aggregate backtrace signatures captured for a specific build.
- [List all icons for a build](get-v1-builds-_id_-icons.md): List all the icons for various platforms delivered with a build.
- [List icon IDs for a build](get-v1-builds-_id_-relationships-icons.md)
- [List diagnostic signature IDs for a build](get-v1-builds-_id_-relationships-diagnosticsignatures.md)
- [Get the App Store version ID for a build](get-v1-builds-_id_-relationships-appstoreversion.md)
