> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/delete-a-bundleid](https://developer.apple.com/documentation/enterpriseprogramapi/delete-a-bundleid)

# Delete a BundleId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Delete a bundle ID that is used for app development.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/bundleIds/{id}
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

### Modifying and Removing Bundle IDs

- [Modify a PassTypeId](modify-a-bundleid.md): Update a specific bundle ID’s name.
