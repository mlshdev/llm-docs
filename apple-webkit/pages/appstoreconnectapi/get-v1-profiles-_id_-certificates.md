> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-profiles-_id_-certificates](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-profiles-_id_-certificates)

# List all certificates in a profile

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Get a list of all certificates and their data for a specific provisioning profile.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/profiles/{id}/certificates
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`
- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`

## Response Codes

- `200` OK — `CertificatesWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Related Data

- [Read the bundle id in a profile](get-v1-profiles-_id_-bundleid.md): Get the bundle ID information for a specific provisioning profile.
- [Get the bundle ID for a profile](get-v1-profiles-_id_-relationships-bundleid.md)
- [List certificate IDs for a profile](get-v1-profiles-_id_-relationships-certificates.md)
- [List all devices in a profile](get-v1-profiles-_id_-devices.md): Get a list of all devices for a specific provisioning profile.
- [List device IDs for a profile](get-v1-profiles-_id_-relationships-devices.md)
