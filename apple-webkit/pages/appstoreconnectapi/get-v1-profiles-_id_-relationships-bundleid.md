> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-profiles-_id_-relationships-bundleid](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-profiles-_id_-relationships-bundleid)

# Get the bundle ID for a profile

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/profiles/{id}/relationships/bundleId
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `ProfileBundleIdLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Related Data

- [Read the bundle id in a profile](get-v1-profiles-_id_-bundleid.md): Get the bundle ID information for a specific provisioning profile.
- [List all certificates in a profile](get-v1-profiles-_id_-certificates.md): Get a list of all certificates and their data for a specific provisioning profile.
- [List certificate IDs for a profile](get-v1-profiles-_id_-relationships-certificates.md)
- [List all devices in a profile](get-v1-profiles-_id_-devices.md): Get a list of all devices for a specific provisioning profile.
- [List device IDs for a profile](get-v1-profiles-_id_-relationships-devices.md)
