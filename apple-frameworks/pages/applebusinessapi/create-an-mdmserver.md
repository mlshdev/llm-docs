> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/create-an-mdmserver](https://developer.apple.com/documentation/applebusinessapi/create-an-mdmserver)

# Create a Device Management Service

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Create a new device management service in an organization.

## URL

```http
POST https://api-business.apple.com/v1/mdmServers
```

## HTTP Body

Content type: `application/json`

Type: `MdmServerCreateRequest`

## Response Codes

- `201` Created — `MdmServerResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: Request entity error(s).
- `422` — `ErrorResponse`: Unprocessable request entity error(s).
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Note**

> The `serverName` and `serverCertificate` attributes are required.

<a id="Example"></a>

### Example

**Request**

```
curl -X POST "https://api-business.apple.com/v1/mdmServers" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
      "data": {
        "type": "mdmServers",
        "attributes": {
          "serverName": "Marketing Team MDM",
          "serverCertificate": {
            "name": "marketing-mdm.cer",
            "data": "MIIDXTCCAkWgAwIBAgIJALxxxxxxx..."
          },
          "enableMdmDisownFlag": true
        }
      }
    }'
```

**Response**

```json
{
  "data": {
    "type": "mdmServers",
    "id": "2A87349736CF4614A94F624E705841BE",
    "attributes": {
      "serverName": "Marketing Team MDM",
      "serverType": "MDM",
      "enableMdmDisownFlag": true,
      "status": "ACTIVE",
      "deviceCount": 0,
      "createdDateTime": "2026-06-01T10:30:00Z",
      "updatedDateTime": "2026-06-01T10:30:00Z"
    },
    "relationships": {
      "devices": {
        "links": {
          "self": "https://api-business.apple.com/v1/mdmServers/2A87349736CF4614A94F624E705841BE/relationships/devices"
        }
      }
    },
    "links": {
      "self": "https://api-business.apple.com/v1/mdmServers/2A87349736CF4614A94F624E705841BE"
    }
  },
  "links": {
    "self": "https://api-business.apple.com/v1/mdmServers/2A87349736CF4614A94F624E705841BE"
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
- [Update a Device Management Service](update-an-mdmserver.md): Update an existing device management service in an organization.
- [Delete a Device Management Service](delete-an-mdmserver.md): Delete a device management service from an organization.
- [Get the Device Serial Numbers for a Device Management Service](get-all-device-ids-for-an-mdmserver.md): Get a list of device serial numbers assigned to a device management service.
- [Get the Assigned Device Management Service ID for a Device](get-the-assigned-server-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Get the Assigned Device Management Service Information for a Device](get-the-assigned-server-information-for-an-orgdevice.md): Get the assigned device management service information for a device.
- [Assign or Unassign Devices to a Device Management Service or Release Devices](create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, manage a device management service migration for devices, or release devices from an organization.
- [Get Organization Device Activity Information](get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assign or unassign, creates.
