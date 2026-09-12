> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disassociate-assets](https://developer.apple.com/documentation/devicemanagement/disassociate-assets)

# Disassociate Assets

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Disassociate assets from client user IDs and serial numbers.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/assets/disassociate
```

## HTTP Body

Content type: `application/json`

Type: `ManageAssetsRequest`

missing

## Response Codes

- `200` OK — `EventResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

## Mentioned In

- [Upgrading to the new management API](upgrading-to-the-new-management-api.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
    "assets": [
        {
            "adamId": "408709785",
            "pricingParam": "STDQ"
        },
        {
            "adamId": "377298193",
            "pricingParam": "STDQ"
        }
    ],
    "clientUserIds": [
        "client-1",
        "client-2"
    ],
    "serialNumbers": [
        "serial-1",
        "serial-2"
    ]
}
```

**Response**

```json
{
    "eventId": "ed3edfc3-e617-465e-b309-a17925266e14",
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439"
}
```

## Topics

### Request and Response

- [ManageAssetsRequest](manageassetsrequest.md): The request for asset management.
- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

## See Also

### Asset management

- [Get Assets](get-assets-4ski1.md): Get the set of assets that your organization manages.
- [Associate Assets](associate-assets.md): Associate assets with client user IDs and serial numbers.
- [Revoke Assets](revoke-assets.md): Revoke assets from client user IDs and serial numbers.
- [Get Assignments](get-assignments-9wv1e.md): Get the set of current assignments for users or devices.
