> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/modify-a-registered-device](https://developer.apple.com/documentation/enterpriseprogramapi/modify-a-registered-device)

# Modify a Registered Device

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Update the name or status of a specific device.

## URL

```http
PATCH https://api.enterprise.developer.apple.com/v1/devices/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `DeviceUpdateRequest`

## Response Codes

- `200` OK — `DeviceResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- HTTPBody
