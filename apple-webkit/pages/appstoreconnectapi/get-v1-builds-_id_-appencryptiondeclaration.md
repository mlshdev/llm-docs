> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-builds-_id_-appencryptiondeclaration](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-builds-_id_-appencryptiondeclaration)

# Read the app encryption declaration of a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Read an app encryption declaration associated with a specific build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/builds/{id}/appEncryptionDeclaration
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[appEncryptionDeclarations]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `appDescription`, `createdDate`, `usesEncryption`, `exempt`, `containsProprietaryCryptography`, `containsThirdPartyCryptography`, `availableOnFrenchStore`, `platform`, `uploadedDate`, `documentUrl`, `documentName`, `documentType`, `appEncryptionDeclarationState`, `codeValue`, `app`, `builds`, `appEncryptionDeclarationDocument`

## Response Codes

- `200` OK — `AppEncryptionDeclarationWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Information Associated with Builds

- [Read the build beta details information of a build](get-v1-builds-_id_-buildbetadetail.md): Get the beta test details for a specific build.
- [Get the build beta detail ID for a build](get-v1-builds-_id_-relationships-buildbetadetail.md)
- [Get the app encryption declaration id for a build](get-v1-builds-_id_-relationships-appencryptiondeclaration.md): Get the beta app encryption declaration resource ID associated with a build.
- [List all beta build localizations of a build](get-v1-builds-_id_-betabuildlocalizations.md): Get a list of localized beta test information for a specific build.
- [List beta build localization IDs for a build](get-v1-builds-_id_-relationships-betabuildlocalizations.md)
- [List all diagnostic signatures for a build](get-v1-builds-_id_-diagnosticsignatures.md): List the aggregate backtrace signatures captured for a specific build.
- [List all icons for a build](get-v1-builds-_id_-icons.md): List all the icons for various platforms delivered with a build.
- [List icon IDs for a build](get-v1-builds-_id_-relationships-icons.md)
- [List diagnostic signature IDs for a build](get-v1-builds-_id_-relationships-diagnosticsignatures.md)
- [Get the App Store version ID for a build](get-v1-builds-_id_-relationships-appstoreversion.md)
