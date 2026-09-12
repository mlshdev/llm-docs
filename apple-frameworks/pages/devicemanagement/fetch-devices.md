> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-devices](https://developer.apple.com/documentation/devicemanagement/fetch-devices)

# Get a List of Devices

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Get a list of devices that are managed by the server.

## URL

```http
POST https://mdmenrollment.apple.com/server/devices
```

## HTTP Body

Content type: `application/json`

Type: `FetchDeviceRequest`

The request for a list of devices.

## Response Codes

- `200` OK — `FetchDeviceResponse`:
- `400` Bad Request: - `INVALID_CURSOR`: An invalid cursor value was provided.
  - `EXHAUSTED_CURSOR`: The cursor had returned all devices in previous calls.
  - `USER_AGENT_INVALID:`  The `User-Agent` header is invalid.
  - `USER_AGENT_MISSING:`  The `User-Agent` header is missing or has no assigned value.

<a id="Discussion"></a>

## Discussion

This request fetches a list of all devices that are assigned to this MDM server at the time of the request. This service should be used for loading an initial list of devices into the MDM server’s data store. Once the list of devices is loaded, [Sync the List of Devices](sync-devices.md) to update the list.

This request provides a limited number of entries per request, using cursors to provide position information across requests.

## Topics

### Request and Response

- [FetchDeviceRequest](fetchdevicerequest.md): The request for a list of devices.
- [FetchDeviceResponse](fetchdeviceresponse.md): The response that contains a list of devices.

## See Also

### Device management

- [Activation Lock a Device](activation-lock-devices.md): Enable activation lock on a remote device.
- [Get Device Details](device-details.md): Get the details on a set of devices.
- [Sync the List of Devices](sync-devices.md): Get updates about the list of devices the server manages.
- [Disown Devices](disown-devices.md): Notify Apple’s servers that your organization no longer owns the specified devices.
- [Get Replacement Details](get-replacement-details.md): Get information about the device that a replacement device replaces.
- [Get Beta Enrollment Tokens](get-beta-enrollment-tokens.md): Retrieves the beta enrollment tokens available for the organization.
