> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-all-profiles-for-a-bundleid](https://developer.apple.com/documentation/enterpriseprogramapi/list-all-profiles-for-a-bundleid)

# List All Profiles for a BundleId

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get a list of all profiles for a specific bundle ID.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/bundleIds/{id}/profiles
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[profiles]` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `createdDate`, `devices`, `expirationDate`, `name`, `platform`, `profileContent`, `profileState`, `profileType`, `uuid`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `ProfilesWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Related Data

- [List All Bundle Id Capabilities for a BundleId](list-all-bundle-id-capabilities-for-a-bundleid.md): Get a list of all capabilities for a specific bundle ID.
