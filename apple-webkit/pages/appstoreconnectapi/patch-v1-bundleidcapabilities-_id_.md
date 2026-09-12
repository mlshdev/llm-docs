> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-bundleidcapabilities-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-bundleidcapabilities-_id_)

# Modify a capability configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Update the configuration of a specific capability.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/bundleIdCapabilities/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `BundleIdCapabilityUpdateRequest`

## Response Codes

- `200` OK — `BundleIdCapabilityResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
