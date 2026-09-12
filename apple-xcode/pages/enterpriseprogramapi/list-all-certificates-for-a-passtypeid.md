> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-all-certificates-for-a-passtypeid](https://developer.apple.com/documentation/enterpriseprogramapi/list-all-certificates-for-a-passtypeid)

# List All Certificates for a PassTypeId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

List all certificates for a specific pass type ID.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/passTypeIds/{id}/certificates
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `filter[certificateType]` — `[string]`: **Allowed values:** `IOS_DEVELOPMENT`, `IOS_DISTRIBUTION`, `MAC_APP_DISTRIBUTION`, `MAC_INSTALLER_DISTRIBUTION`, `MAC_APP_DEVELOPMENT`, `DEVELOPER_ID_KEXT`, `DEVELOPER_ID_APPLICATION`, `DEVELOPMENT`, `DISTRIBUTION`, `PASS_TYPE_ID`, `PASS_TYPE_ID_WITH_NFC`
- `filter[displayName]` — `[string]`:
- `filter[id]` — `[string]`:
- `filter[serialNumber]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `passTypeId`
- `limit` — `integer`: **Maximum:** `200`
- `sort` — `[string]`: **Allowed values:** `certificateType`, `-certificateType`, `displayName`, `-displayName`, `id`, `-id`, `serialNumber`, `-serialNumber`

## Response Codes

- `200` OK — `CertificatesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:

## See Also

### Managing Pass Type Ids

- [Create a PassTypeId](create-a-passtypeid.md): Create a new identifier for use with a pass type ID certificate using a certificate signing request.
- [List Pass Type Ids](list-pass-type-ids.md): Find and list pass type IDs that are registered to your team.
- [Read PassTypeId Information](read-passtypeid-information.md): Get information about a specific pass type ID.
- [Modify a PassTypeId](modify-a-passtypeid.md): Update a specific pass type ID’s name.
- [Delete a PassTypeId](delete-a-passtypeid.md): Delete a pass type ID that is used for app development.
