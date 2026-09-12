> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/get-assets-4ski1](https://developer.apple.com/documentation/devicemanagement/get-assets-4ski1)

# Get Assets

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Get the set of assets that your organization manages.

## URL

```http
GET https://vpp.itunes.apple.com/mdm/v2/assets
```

## Query Parameters

- `pageIndex` — `int32`: The requested page index.
- `productType` — `string`: The filter for the asset product type.
  **Allowed values:** `App`, `Book`
- `pricingParam` — `string`: The filter for the asset product quality.
  **Allowed values:** `STDQ`, `PLUS`
- `revocable` — `boolean`: The filter for asset revocability.
- `deviceAssignable` — `boolean`: The filter for asset device assignability.
- `maxAvailableCount` — `int32`: The filter for the maximum inclusive assets available count.
- `minAvailableCount` — `int32`: The filter for the minimum inclusive assets available count.
- `maxAssignedCount` — `int32`: The filter for the maximum inclusive assets assigned count.
- `minAssignedCount` — `int32`: The filter for the minimum inclusive assets assigned count.
- `adamId` — `string`: The filter for the asset product unique identifier.
- `unlimited` — `boolean`:

## Response Codes

- `200` OK — `GetAssetsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

## Mentioned In

- [Using paginated endpoints](using-paginated-endpoints.md)
- [Getting started with the management API](getting-started-with-the-management-api.md)
- [Upgrading to the new management API](upgrading-to-the-new-management-api.md)
- [Managing assets](managing-assets.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
?pageIndex=0&pricingParam=STDQ&productType=App
```

**Response**

```json
{
    "assets": [
        {
            "adamId": "408709785",
            "assignedCount": 5000,
            "availableCount": 10000,
            "deviceAssignable": true,
            "pricingParam": "STDQ",
            "productType": "App",
            "retiredCount": 0,
            "revocable": true,
            "supportedPlatforms": ["iOS"],
            "totalCount": 15000
        },
        {
            "adamId": "377298193",
            "assignedCount": 5000,
            "availableCount": 10000,
            "deviceAssignable": true,
            "pricingParam": "STDQ",
            "productType": "App",
            "retiredCount": 0,
            "revocable": true,
            "supportedPlatforms": ["iOS"],
            "totalCount": 15000
        },
        {
            "adamId": "361309726",
            "assignedCount": 5000,
            "availableCount": 10000,
            "deviceAssignable": true,
            "pricingParam": "STDQ",
            "productType": "App",
            "retiredCount": 0,
            "revocable": true,
            "supportedPlatforms": ["iOS"],
            "totalCount": 15000
        },
        {
            "adamId": "361304891",
            "assignedCount": 5000,
            "availableCount": 10000,
            "deviceAssignable": true,
            "pricingParam": "STDQ",
            "productType": "App",
            "retiredCount": 0,
            "revocable": true,
            "supportedPlatforms": ["iOS"],
            "totalCount": 15000
        },
        {
            "adamId": "361285480",
            "assignedCount": 5000,
            "availableCount": 10000,
            "deviceAssignable": true,
            "pricingParam": "STDQ",
            "productType": "App",
            "retiredCount": 0,
            "revocable": true,
            "supportedPlatforms": ["iOS"],
            "totalCount": 15000
        }
    ],
    "currentPageIndex": 0,
    "size": 5,
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "totalPages": 1,
    "uId": "2049025000431439",
    "versionId": "70e8c740-514c-11eb-bb63-a90b882fcd52"
}
```

## Topics

### Response

- [GetAssetsResponse](getassetsresponse.md): The paginated response that contains the requested assets.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

### Content Metadata

- [Apps and books metadata for organizations](apps-and-books-metadata-for-organizations.md): Get metadata for apps and books your organization owns.

## See Also

### Asset management

- [Associate Assets](associate-assets.md): Associate assets with client user IDs and serial numbers.
- [Disassociate Assets](disassociate-assets.md): Disassociate assets from client user IDs and serial numbers.
- [Revoke Assets](revoke-assets.md): Revoke assets from client user IDs and serial numbers.
- [Get Assignments](get-assignments-9wv1e.md): Get the set of current assignments for users or devices.
