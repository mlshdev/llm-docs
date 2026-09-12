> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/sync-devices](https://developer.apple.com/documentation/devicemanagement/sync-devices)

# Sync the List of Devices

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get updates about the list of devices the server manages.

## URL

```http
POST https://mdmenrollment.apple.com/devices/sync
```

## HTTP Body

Content type: `application/json`

Type: `SyncDeviceRequest`

The request to sync the list of devices.

## Response Codes

- `200` OK — `FetchDeviceResponse`:
- `400` Bad Request: - `CURSOR_REQUIRED`: `The cursor value was not provided in the request body.`
  - `INVALID_CURSOR`: An invalid cursor value was provided.
  - `EXHAUSTED_CURSOR`: The cursor had returned all devices in previous calls.
  - `EXPIRED_CURSOR`: The provided cursor is older than 7 days.
  - `USER_AGENT_INVALID:`  The `User-Agent` header is invalid.
  - `USER_AGENT_MISSING:`  The `User-Agent` header is missing or has no assigned value.

<a id="Discussion"></a>

## Discussion

The sync service depends on a cursor returned by the fetch device service. It returns a list of all modifications (additions or deletions) since the specified cursor. The cursor passed to this endpoint should not be older than 7 days.

This service may return the same device more than once. You must resolve duplicates by matching on the device serial number and the `op_type` and `op_date` fields. The record with the latest `op_date` indicates the last known state of the device in ADE.

## Topics

### Request

- [SyncDeviceRequest](syncdevicerequest.md): The request to sync the list of devices.

## See Also

### Device management

- [Activation Lock a Device](activation-lock-devices.md): Enable activation lock on a remote device.
- [Get Device Details](device-details.md): Get the details on a set of devices.
- [Get a List of Devices](fetch-devices.md): Get a list of devices that are managed by the server.
- [Disown Devices](disown-devices.md): Notify Apple’s servers that your organization no longer owns the specified devices.
- [Get Replacement Details](get-replacement-details.md): Get information about the device that a replacement device replaces.
- [Get Beta Enrollment Tokens](get-beta-enrollment-tokens.md): Retrieves the beta enrollment tokens available for the organization.
