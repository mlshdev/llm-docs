> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-appencryptiondeclaration](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-relationships-appencryptiondeclaration)

# Get the app encryption declaration id for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get the beta app encryption declaration resource ID associated with a build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/appEncryptionDeclaration
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Response Codes

- `200` OK — `BuildAppEncryptionDeclarationLinkageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Information Associated with Builds

- [Read the build beta details information of a build](get-v1-builds-_id_-buildbetadetail.md): Get the beta test details for a specific build.
- [Get the build beta detail ID for a build](get-v1-builds-_id_-relationships-buildbetadetail.md)
- [Read the app encryption declaration of a build](get-v1-builds-_id_-appencryptiondeclaration.md): Read an app encryption declaration associated with a specific build.
- [List all beta build localizations of a build](get-v1-builds-_id_-betabuildlocalizations.md): Get a list of localized beta test information for a specific build.
- [List beta build localization IDs for a build](get-v1-builds-_id_-relationships-betabuildlocalizations.md)
- [List all diagnostic signatures for a build](get-v1-builds-_id_-diagnosticsignatures.md): List the aggregate backtrace signatures captured for a specific build.
- [List all icons for a build](get-v1-builds-_id_-icons.md): List all the icons for various platforms delivered with a build.
- [List icon IDs for a build](get-v1-builds-_id_-relationships-icons.md)
- [List diagnostic signature IDs for a build](get-v1-builds-_id_-relationships-diagnosticsignatures.md)
- [Get the App Store version ID for a build](get-v1-builds-_id_-relationships-appstoreversion.md)
