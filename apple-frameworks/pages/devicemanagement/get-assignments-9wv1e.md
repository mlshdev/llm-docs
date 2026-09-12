> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/get-assignments-9wv1e](https://developer.apple.com/documentation/devicemanagement/get-assignments-9wv1e)

# Get Assignments

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Get the set of current assignments for users or devices.

## URL

```http
GET https://vpp.itunes.apple.com/mdm/v2/assignments
```

## Query Parameters

- `adamId` — `string`: The filter for the assignment product’s unique identifier.
- `clientUserId` — `string`: The filter for the unique identifier of assigned users in your organization.
- `excludeInactiveUsers` — `boolean`:
- `includeUserState` — `boolean`:
- `pageIndex` — `int32`: The requested page index.
- `pricingParam` — `string`: **Allowed values:** `STDQ`, `PLUS`
- `serialNumber` — `string`: The filter for the unique identifier of assigned devices in your organization.
- `sinceVersionId` — `string`: The filter for modified assignments since the specified version identifier.

## Response Codes

- `200` OK — `GetAssignmentsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

## Mentioned In

- [Getting started with the management API](getting-started-with-the-management-api.md)
- [Upgrading to the new management API](upgrading-to-the-new-management-api.md)
- [Using paginated endpoints](using-paginated-endpoints.md)
- [Managing assets](managing-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
?adamId=408709785
```

**Response**

```json
{
    "assignments": [
        {
            "adamId": "408709785",
            "clientUserId": "client-1",
            "pricingParam": "STDQ"
        },
        {
            "adamId": "408709785",
            "serialNumber": "serial-1",
            "pricingParam": "STDQ"
        }
    ],
    "size": 2,
    "currentPageIndex": 0,
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "totalPages": 1,
    "uId": "2049025000431439",
    "versionId": "009061cb-87d1-4ea8-ae4c-7849dc49224e"
}
```

## Topics

### Response

- [GetAssignmentsResponse](getassignmentsresponse.md): The paginated response that contains requested assignments.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

## See Also

### Asset management

- [Get Assets](get-assets-4ski1.md): Get the set of assets that your organization manages.
- [Associate Assets](associate-assets.md): Associate assets with client user IDs and serial numbers.
- [Disassociate Assets](disassociate-assets.md): Disassociate assets from client user IDs and serial numbers.
- [Revoke Assets](revoke-assets.md): Revoke assets from client user IDs and serial numbers.
