> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/delete-a-bundleidcapability](https://developer.apple.com/documentation/enterpriseprogramapi/delete-a-bundleidcapability)

# Disable a Capability

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Disable a capability for a bundle ID.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/bundleIdCapabilities/{id}
```

## Path Parameters

- `id` — `string` (required): \[missing\]

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.

## See Also

### Enabling and Disabling Capabilities

- [Modify a Capability Configuration](create-a-bundleidcapability.md): Enable a capability for a bundle ID.
