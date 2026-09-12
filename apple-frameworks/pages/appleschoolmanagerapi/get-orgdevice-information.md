> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/get-orgdevice-information](https://developer.apple.com/documentation/appleschoolmanagerapi/get-orgdevice-information)

# Get Device Information

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service Endpoint  
**Availability:** Apple School Manager API 1.6+

Get information about a device in an organization.

## URL

```http
GET https://api-school.apple.com/v1/orgDevices/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[orgDevices]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `serialNumber`, `addedToOrgDateTime`, `releasedFromOrgDateTime`, `updatedDateTime`, `deviceModel`, `productFamily`, `productType`, `deviceCapacity`, `partNumber`, `orderNumber`, `color`, `status`, `orderDateTime`, `imei`, `meid`, `eid`, `wifiMacAddress`, `bluetoothMacAddress`, `ethernetMacAddress`, `purchaseSourceId`, `purchaseSourceType`, `assignedServer`, `appleCareCoverage`

## Response Codes

- `200` OK — `OrgDeviceResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/v1/orgDevices/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
      "data": {
        "type": "orgDevices",
        "id": "XABC123X0ABC123X0",
        "attributes": {
          "addedToOrgDateTime": "2025-04-30T22:05:14.192Z",
          "releasedFromOrgDateTime": "2025-06-01T15:33:54.164Z",
          "updatedDateTime": "2025-05-01T15:33:54.164Z",
          "deviceModel": "iMac 21.5\"",
          "productFamily": "Mac",
          "productType": "iMac16,2",
          "deviceCapacity": "750GB",
          "partNumber": "FD311LL/A",
          "orderNumber": "1234567890",
          "color": "",
          "status": "UNASSIGNED",
          "orderDateTime": "2011-08-15T07:00:00Z",
          "imei": [
            "123456789012345",
            "123456789012346"
          ],
          "meid": [
            "123456789012347"
          ],
          "eid": "89049037640158663184237812557346",
          "purchaseSourceUid": "-2085650007946880",
          "purchaseSourceType": "APPLE"
        },
        "relationships": {
          "assignedServer": {
            "links": {
              "self": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0/relationships/assignedServer",
              "related": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0/assignedServer"
            }
          },
          "appleCareCoverage": {
            "links": {
              "related": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0/appleCareCoverage"
            }
          }
        },
        "links": {
          "self": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0"
        }
      },
      "links": {
        "self": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0"
      }
    }
```

## Topics

### Responses

- [OrgDeviceResponse](orgdeviceresponse.md): A response that contains a single organization device resource.

## See Also

### Devices

- [Get Organization Devices](get-org-devices.md): Get a list of devices in an organization that enroll using Automated Device Enrollment.
- [Get AppleCare Coverage Information for a Device](get-all-applecare-coverage-for-an-orgdevice.md): Get a list of AppleCare coverage resources for an organization device.
