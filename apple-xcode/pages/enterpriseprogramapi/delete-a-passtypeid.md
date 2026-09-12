> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/delete-a-passtypeid](https://developer.apple.com/documentation/enterpriseprogramapi/delete-a-passtypeid)

# Delete a PassTypeId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Delete a pass type ID that is used for app development.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/passTypeIds/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.

## See Also

### Managing Pass Type Ids

- [Create a PassTypeId](create-a-passtypeid.md): Create a new identifier for use with a pass type ID certificate using a certificate signing request.
- [List Pass Type Ids](list-pass-type-ids.md): Find and list pass type IDs that are registered to your team.
- [Read PassTypeId Information](read-passtypeid-information.md): Get information about a specific pass type ID.
- [List All Certificates for a PassTypeId](list-all-certificates-for-a-passtypeid.md): List all certificates for a specific pass type ID.
- [Modify a PassTypeId](modify-a-passtypeid.md): Update a specific pass type ID’s name.
