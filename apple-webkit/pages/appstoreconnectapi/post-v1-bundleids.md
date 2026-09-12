> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-bundleids](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-bundleids)

# Register a new bundle id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Register a new bundle ID for app development.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/bundleIds
```

## HTTP Body

Content type: `application/json`

Type: `BundleIdCreateRequest`

## Response Codes

- `201` Created — `BundleIdResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
