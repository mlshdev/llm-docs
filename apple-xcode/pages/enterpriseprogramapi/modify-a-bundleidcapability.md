> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/modify-a-bundleidcapability](https://developer.apple.com/documentation/enterpriseprogramapi/modify-a-bundleidcapability)

# Modify a BundleIdCapability

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Update the configuration of a specific capability.

## URL

```http
PATCH https://api.enterprise.developer.apple.com/v1/bundleIdCapabilities/{id}
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

<a id="overview"></a>

## Overview

- HTTPBody
