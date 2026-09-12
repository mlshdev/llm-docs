> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-profiles-_id_-bundleid](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-profiles-_id_-bundleid)

# Read the bundle id in a profile

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Get the bundle ID information for a specific provisioning profile.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/profiles/{id}/bundleId
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[bundleIds]` — `[string]`: **Allowed values:** `name`, `platform`, `identifier`, `seedId`, `profiles`, `bundleIdCapabilities`, `app`

## Response Codes

- `200` OK — `BundleIdWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Getting Related Data

- [Get the bundle ID for a profile](get-v1-profiles-_id_-relationships-bundleid.md)
- [List all certificates in a profile](get-v1-profiles-_id_-certificates.md): Get a list of all certificates and their data for a specific provisioning profile.
- [List certificate IDs for a profile](get-v1-profiles-_id_-relationships-certificates.md)
- [List all devices in a profile](get-v1-profiles-_id_-devices.md): Get a list of all devices for a specific provisioning profile.
- [List device IDs for a profile](get-v1-profiles-_id_-relationships-devices.md)
