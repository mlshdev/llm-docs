> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-all-certificates-in-a-profile](https://developer.apple.com/documentation/enterpriseprogramapi/list-all-certificates-in-a-profile)

# List All Certificates in a Profile

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get a list of all certificates and their data for a specific provisioning profile.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/profiles/{id}/certificates
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `certificateContent`, `certificateType`, `csrContent`, `displayName`, `expirationDate`, `name`, `passTypeId`, `platform`, `serialNumber`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `CertificatesWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

## See Also

### Getting Related Data

- [Read the Bundle ID in a Profile](read-the-bundle-id-in-a-profile.md): Get the bundle ID information for a specific provisioning profile.
- [List All Devices in a Profile](list-all-devices-in-a-profile.md): Get a list of all devices for a specific provisioning profile.
