> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-bundleidcapabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-bundleidcapabilities-_id_)

# Disable a capability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Disable a capability for a bundle ID.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/bundleIdCapabilities/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Enabling and Disabling Capabilities

- [Enable a capability](post-v1-bundleidcapabilities.md): Enable a capability for a bundle ID.
