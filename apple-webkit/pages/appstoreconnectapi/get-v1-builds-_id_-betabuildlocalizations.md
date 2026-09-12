> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-betabuildlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-betabuildlocalizations)

# List all beta build localizations of a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of localized beta test information for a specific build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/betaBuildLocalizations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[betaBuildLocalizations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `whatsNew`, `locale`, `build`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `BetaBuildLocalizationsWithoutIncludesResponse`:
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
- [Get the app encryption declaration id for a build](get-v1-builds-_id_-relationships-appencryptiondeclaration.md): Get the beta app encryption declaration resource ID associated with a build.
- [List beta build localization IDs for a build](get-v1-builds-_id_-relationships-betabuildlocalizations.md)
- [List all diagnostic signatures for a build](get-v1-builds-_id_-diagnosticsignatures.md): List the aggregate backtrace signatures captured for a specific build.
- [List all icons for a build](get-v1-builds-_id_-icons.md): List all the icons for various platforms delivered with a build.
- [List icon IDs for a build](get-v1-builds-_id_-relationships-icons.md)
- [List diagnostic signature IDs for a build](get-v1-builds-_id_-relationships-diagnosticsignatures.md)
- [Get the App Store version ID for a build](get-v1-builds-_id_-relationships-appstoreversion.md)
