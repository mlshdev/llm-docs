> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/get-all-applecare-coverage-for-an-orgdevice](https://developer.apple.com/documentation/appleschoolmanagerapi/get-all-applecare-coverage-for-an-orgdevice)

# Get AppleCare Coverage Information for a Device

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service Endpoint  
**Availability:** Apple School Manager API 1.6+

Get a list of AppleCare coverage resources for an organization device.

## URL

```http
GET https://api-school.apple.com/v1/orgDevices/{id}/appleCareCoverage
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource. For example, the device’s serial number.

## Query Parameters

- `fields[appleCareCoverage]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `status`, `paymentType`, `description`, `agreementNumber`, `startDateTime`, `endDateTime`, `isRenewable`, `isCanceled`, `contractCancelDateTime`
- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `AppleCareCoverageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/v1/orgDevices/{id}/appleCareCoverage" \
-H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
    "data": [
      {
        "type": "appleCareCoverage",
        "id": "XABC123X0ABC123X0",
        "attributes": {
          "contractCancelDateTime": null,
          "startDateTime": "2025-02-02T00:00:00Z",
          "isRenewable": false,
          "isCanceled": false,
          "description": "Limited Warranty",
          "agreementNumber": null,
          "endDateTime": "2026-02-02T00:00:00Z",
          "status": "ACTIVE",
          "paymentType": "NONE"
        }
      },
      {
        "type": "appleCareCoverage",
        "id": "0000000001",
        "attributes": {
          "contractCancelDateTime": null,
          "startDateTime": "2025-04-17T00:00:00Z",
          "isRenewable": true,
          "isCanceled": false,
          "description": "AppleCare+",
          "agreementNumber": "0000000001",
          "endDateTime": "2026-04-17T00:00:00Z",
          "status": "ACTIVE",
          "paymentType": "SUBSCRIPTION"
        }
      },
      {
        "type": "appleCareCoverage",
        "id": "abe-XABC123X0ABC123X0",
        "attributes": {
          "contractCancelDateTime": null,
          "startDateTime": "2025-04-17T00:00:00Z",
          "isRenewable": true,
          "isCanceled": false,
          "description": "AppleCare+ for Business",
          "agreementNumber": null,
          "endDateTime": null,
          "status": "ACTIVE",
          "paymentType": "ABE_SUBSCRIPTION"
        }
      }
    ],
    "links": {
      "self": "https://api-school.apple.com/v1/orgDevices/XABC123X0ABC123X0/appleCareCoverage"
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

- [AppleCareCoverageResponse](applecarecoverageresponse.md): A response that contains a list of AppleCare coverage resources that belongs to an organization device.

## See Also

### Devices

- [Get Organization Devices](get-org-devices.md): Get a list of devices in an organization that enroll using Automated Device Enrollment.
- [Get Device Information](get-orgdevice-information.md): Get information about a device in an organization.
