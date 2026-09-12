> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/get-device-management-services](https://developer.apple.com/documentation/appleschoolmanagerapi/get-device-management-services)

# Get Device Management Services

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service Endpoint  
**Availability:** Apple School Manager API 1.6+

Get a list of device management services in an organization.

## URL

```http
GET https://api-school.apple.com/v1/mdmServers
```

## Query Parameters

- `fields[mdmServers]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `serverName`, `enableMdmDisownFlag`, `defaultProductFamilies`, `status`, `serverType`, `deviceCount`, `lastConnectedDateTime`, `lastConnectedIp`, `createdDateTime`, `updatedDateTime`, `devices`
- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `MdmServersResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/v1/mdmServers?limit=1" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
  {
    "data": [
      {
        "type": "mdmServers",
        "id": "1F97349736CF4614A94F624E705841AD",
        "attributes": {
          "serverName": "Test Device Management Service",
          "serverType": "MDM",
          "createdDateTime": "2025-05-01T03:21:44.685Z",
          "updatedDateTime": "2025-05-01T03:21:46.284Z"
        },
        "relationships": {
          "devices": {
            "links": {
              "self": "https://api-school.apple.com/v1/mdmServers/1F97349736CF4614A94F624E705841AD/relationships/devices"
            }
          }
        }
      }
    ],
    "links": {
      "self": "https://api-school.apple.com/v1/mdmServers"
    },
    "meta": {
      "paging": {
        "limit": 100
      }
    }
  }
```

## Topics

### Responses

- [MdmServersResponse](mdmserversresponse.md): A response that contains a list of device management service resources.

## See Also

### Device Management Services

- [Get Device Management Service Information](get-mdmserver-information.md): Get the information for a specific device management service.
- [Get All Device IDs for a Device Management Service](get-all-device-ids-for-a-device-management-service.md)
- [Get the Assigned Device Management Service ID for a Device](get-the-assigned-device-management-service-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Get the Assigned Device Management Service Information for a Device](get-the-assigned-device-management-service-information-for-an-orgdevice.md): Get the assigned device management service information for a device.
- [Assign or Unassign Devices to a Device Management Service](create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, or manage a device management service for devices.
- [Get Organization Device Activity Information](get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assigning or unassigning, creates.
