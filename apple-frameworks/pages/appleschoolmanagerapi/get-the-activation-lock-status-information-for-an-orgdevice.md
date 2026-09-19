> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/get-the-activation-lock-status-information-for-an-orgdevice

# Get the Activation Lock Status for a Device

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service Endpoint  
**Availability:** Apple School Manager API 1.7+

Get the Activation Lock status of an organization device.

## URL

```http
GET https://api-school.apple.com/v1/orgDevices/{id}/activationLockStatus
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource. For example, the device’s serial number.

## Query Parameters

- `fields[activationLockStatus]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `isLocked`, `lockType`

## Response Codes

- `200` OK — `ActivationLockStatusResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: The org doesn’t manage a device with the requested serial number.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Note**

> The request can also fail with an unexpected server error if the device reports an internal-only lock state that isn’t valid for a managed device.

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/v1/orgDevices/{id}/activationLockStatus" \
-H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": {
    "type": "activationLockStatus",
    "id": "C39J8W1H3VG5",
    "attributes": {
      "isLocked": true,
      "lockType": "MDM"
    }
  },
  "links": {
    "self": "https://api-school.apple.com/v1/orgDevices/C39J8W1H3VG5/activationLockStatus"
  }
}
```

## Topics

### Responses

- [ActivationLockStatusResponse](activationlockstatusresponse.md): A response that contains the Activation Lock status of an organization device.
