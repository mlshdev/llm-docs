> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/revoke-a-certificate](https://developer.apple.com/documentation/enterpriseprogramapi/revoke-a-certificate)

# Revoke a Certificate

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Revoke a lost, stolen, compromised, or expiring signing certificate.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/certificates/{id}
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
