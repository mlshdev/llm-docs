> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-passtypeid-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-passtypeid-information)

# Read PassTypeId Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information about a specific pass type ID.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/passTypeIds/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit[certificates]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `PassTypeIdResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:

## See Also

### Managing Pass Type Ids

- [Create a PassTypeId](create-a-passtypeid.md): Create a new identifier for use with a pass type ID certificate using a certificate signing request.
- [List Pass Type Ids](list-pass-type-ids.md): Find and list pass type IDs that are registered to your team.
- [List All Certificates for a PassTypeId](list-all-certificates-for-a-passtypeid.md): List all certificates for a specific pass type ID.
- [Modify a PassTypeId](modify-a-passtypeid.md): Update a specific pass type ID’s name.
- [Delete a PassTypeId](delete-a-passtypeid.md): Delete a pass type ID that is used for app development.
