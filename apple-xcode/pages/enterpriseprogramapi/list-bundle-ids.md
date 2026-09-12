> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-bundle-ids](https://developer.apple.com/documentation/enterpriseprogramapi/list-bundle-ids)

# List Bundle Ids

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Find and list bundle IDs that are registered to your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/bundleIds
```

## Query Parameters

- `fields[bundleIdCapabilities]` — `[string]`: **Allowed values:** `bundleId`, `capabilityType`, `settings`
- `fields[bundleIds]` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `identifier`, `name`, `platform`, `profiles`, `seedId`
- `fields[profiles]` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `createdDate`, `devices`, `expirationDate`, `name`, `platform`, `profileContent`, `profileState`, `profileType`, `uuid`
- `filter[id]` — `[string]`:
- `filter[identifier]` — `[string]`:
- `filter[name]` — `[string]`:
- `filter[platform]` — `[string]`: **Allowed values:** `IOS`, `MAC_OS`
- `filter[seedId]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `profiles`
- `limit` — `integer`: **Maximum:** `200`
- `limit[bundleIdCapabilities]` — `integer`: **Maximum:** `50`
- `limit[profiles]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `id`, `-id`, `identifier`, `-identifier`, `name`, `-name`, `platform`, `-platform`, `seedId`, `-seedId`

## Response Codes

- `200` OK — `BundleIdsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

## Mentioned In

- [Generating Tokens for API Requests](generating-tokens-for-api-requests.md)

## See Also

### Getting Bundle ID Information

- [Read BundleId Information](read-bundleid-information.md): Get information about a specific bundle ID.
