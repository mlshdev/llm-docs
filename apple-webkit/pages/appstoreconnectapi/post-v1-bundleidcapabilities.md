> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-bundleidcapabilities](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-bundleidcapabilities)

# Enable a capability

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Enable a capability for a bundle ID.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/bundleIdCapabilities
```

## HTTP Body

Content type: `application/json`

Type: `BundleIdCapabilityCreateRequest`

## Response Codes

- `201` Created — `BundleIdCapabilityResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Enabling and Disabling Capabilities

- [Disable a capability](delete-v1-bundleidcapabilities-_id_.md): Disable a capability for a bundle ID.
