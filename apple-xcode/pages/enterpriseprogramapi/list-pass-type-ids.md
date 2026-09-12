> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-pass-type-ids](https://developer.apple.com/documentation/enterpriseprogramapi/list-pass-type-ids)

# List Pass Type Ids

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Find and list pass type IDs that are registered to your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/passTypeIds
```

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[passTypeIds]` — `[string]`: **Allowed values:** `certificates`, `identifier`, `name`
- `filter[id]` — `[string]`:
- `filter[identifier]` — `[string]`:
- `filter[name]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit` — `integer`: **Maximum:** `200`
- `limit[certificates]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `id`, `-id`, `identifier`, `-identifier`, `name`, `-name`

## Response Codes

- `200` OK — `PassTypeIdsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## See Also

### Managing Pass Type Ids

- [Create a PassTypeId](create-a-passtypeid.md): Create a new identifier for use with a pass type ID certificate using a certificate signing request.
- [Read PassTypeId Information](read-passtypeid-information.md): Get information about a specific pass type ID.
- [List All Certificates for a PassTypeId](list-all-certificates-for-a-passtypeid.md): List all certificates for a specific pass type ID.
- [Modify a PassTypeId](modify-a-passtypeid.md): Update a specific pass type ID’s name.
- [Delete a PassTypeId](delete-a-passtypeid.md): Delete a pass type ID that is used for app development.
