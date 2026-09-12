> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/create-a-bundleidcapability](https://developer.apple.com/documentation/enterpriseprogramapi/create-a-bundleidcapability)

# Modify a Capability Configuration

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Enable a capability for a bundle ID.

## URL

```http
POST https://api.enterprise.developer.apple.com/v1/bundleIdCapabilities
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

<a id="overview"></a>

## Overview

- HTTPBody

## See Also

### Enabling and Disabling Capabilities

- [Disable a Capability](delete-a-bundleidcapability.md): Disable a capability for a bundle ID.
