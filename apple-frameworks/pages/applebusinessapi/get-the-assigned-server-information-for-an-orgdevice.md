> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-the-assigned-server-information-for-an-orgdevice](https://developer.apple.com/documentation/applebusinessapi/get-the-assigned-server-information-for-an-orgdevice)

# Get the Assigned Device Management Service Information for a Device

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get the assigned device management service information for a device.

## URL

```http
GET https://api-business.apple.com/v1/orgDevices/{id}/assignedServer
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[mdmServers]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `serverName`, `serverType`, `createdDateTime`, `updatedDateTime`, `devices`

## Response Codes

- `200` OK — `MdmServerResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/orgDevices/{id}/assignedServer" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
  {
    "data": {
      "type": "mdmServers",
      "id": "1F97349736CF4614A94F624E705841AD",
      "attributes": {
        "serverName": "Test Device Management Service",
        "serverType": "APPLE_CONFIGURATOR",
        "createdDateTime": "2025-05-01T03:21:44.685Z",
        "updatedDateTime": "2025-05-01T03:21:46.284Z"
      },
      "relationships": {
        "devices": {
          "links": {
            "self": "https://api-business.apple.com/v1/mdmServers/1F97349736CF4614A94F624E705841AD/relationships/devices"
          }
        }
      }
    },
    "links": {
      "self": "https://api-business.apple.com/v1/orgDevices/DVVS36G1YD3JKQNI/assignedServer"
    }
  }
```

## Topics

### Responses

- [MdmServerResponse](mdmserverresponse.md): A response that contains a single device management service resource.

## See Also

### Device Management Services

- [Get Device Management Services](get-mdm-servers.md): Get a list of device management services in an organization.
- [Get Device Management Service Information](get-mdmserver-information.md): Get the information for a specific device management service.
- [Create a Device Management Service](create-an-mdmserver.md): Create a new device management service in an organization.
- [Update a Device Management Service](update-an-mdmserver.md): Update an existing device management service in an organization.
- [Delete a Device Management Service](delete-an-mdmserver.md): Delete a device management service from an organization.
- [Get the Device Serial Numbers for a Device Management Service](get-all-device-ids-for-an-mdmserver.md): Get a list of device serial numbers assigned to a device management service.
- [Get the Assigned Device Management Service ID for a Device](get-the-assigned-server-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Assign or Unassign Devices to a Device Management Service or Release Devices](create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, manage a device management service migration for devices, or release devices from an organization.
- [Get Organization Device Activity Information](get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assign or unassign, creates.
