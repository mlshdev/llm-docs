> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/register-a-new-device](https://developer.apple.com/documentation/enterpriseprogramapi/register-a-new-device)

# Register a New Device

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Register a new device for app development.

## URL

```http
POST https://api.enterprise.developer.apple.com/v1/devices
```

## HTTP Body

Content type: `application/json`

Type: `DeviceCreateRequest`

## Response Codes

- `201` Created — `DeviceResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- HTTPBody
