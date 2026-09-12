> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-and-download-profile-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-and-download-profile-information)

# Read and Download Profile Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information for a specific provisioning profile and download its data.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/profiles/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[bundleIds]` — `[string]`: **Allowed values:** `bundleIdCapabilities`, `identifier`, `name`, `platform`, `profiles`, `seedId`
- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `fields[devices]` — `[string]`: **Allowed values:** `addedDate`, `deviceClass`, `model`, `name`, `platform`, `status`, `udid`
- `fields[profiles]` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `createdDate`, `devices`, `expirationDate`, `name`, `platform`, `profileContent`, `profileState`, `profileType`, `uuid`
- `include` — `[string]`: **Allowed values:** `bundleId`, `certificates`, `devices`
- `limit[certificates]` — `integer`: **Maximum:** `50`
- `limit[devices]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `ProfileResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Provisioning Profile Information

- [List and Download Profiles](list-and-download-profiles.md): Find and list provisioning profiles and download their data.
