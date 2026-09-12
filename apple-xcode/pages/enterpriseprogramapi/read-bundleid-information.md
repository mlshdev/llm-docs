> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-bundleid-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-bundleid-information)

# Read BundleId Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information about a specific bundle ID.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/bundleIds/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[bundleIdCapabilities]` — `[string]`: **Allowed values:** `bundleId`, `capabilityType`, `settings`
- `fields[bundleIds]` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `identifier`, `name`, `platform`, `profiles`, `seedId`
- `fields[profiles]` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `createdDate`, `devices`, `expirationDate`, `name`, `platform`, `profileContent`, `profileState`, `profileType`, `uuid`
- `include` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `profiles`
- `limit[bundleIdCapabilities]` — `integer`: **Maximum:** `50`
- `limit[profiles]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `BundleIdResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Bundle ID Information

- [List Bundle Ids](list-bundle-ids.md): Find and list bundle IDs that are registered to your team.
