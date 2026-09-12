> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/get-all-device-ids-for-a-device-management-service](https://developer.apple.com/documentation/appleschoolmanagerapi/get-all-device-ids-for-a-device-management-service)

# Get All Device IDs for a Device Management Service

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service Endpoint  
**Availability:** Apple School Manager API 1.6+

## URL

```http
GET https://api-school.apple.com/v1/mdmServers/{id}/relationships/devices
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `1000`

## Response Codes

- `200` OK — `MdmServerDevicesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Device Management Services

- [Get Device Management Services](get-device-management-services.md): Get a list of device management services in an organization.
- [Get Device Management Service Information](get-mdmserver-information.md): Get the information for a specific device management service.
- [Get the Assigned Device Management Service ID for a Device](get-the-assigned-device-management-service-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Get the Assigned Device Management Service Information for a Device](get-the-assigned-device-management-service-information-for-an-orgdevice.md): Get the assigned device management service information for a device.
- [Assign or Unassign Devices to a Device Management Service](create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, or manage a device management service for devices.
- [Get Organization Device Activity Information](get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assigning or unassigning, creates.
