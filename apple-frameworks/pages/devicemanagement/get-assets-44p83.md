> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/get-assets-44p83](https://developer.apple.com/documentation/devicemanagement/get-assets-44p83)

# Get Assets

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 1.0+

Get the set of assets managed by your organization.

> This legacy API is currently in maintenance mode. Apple won’t add any new functionality to it.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/getVPPAssetsSrv
```

## HTTP Body

Content type: `application/json`

Type: `GetVppAssetRequest`

missing

## Response Codes

- `200` OK — `GetVppAssetResponse`:

## Mentioned In

- [Upgrading to Apple School Manager and Apple Business](upgrading-to-apple-school-manager-and-apple-business.md)
- [Handling error responses](handling-error-responses.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
  "sToken": "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2 a5Rlopo4KDn3MrFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ=",
  "includeLicenseCounts": true,
  "pricingParam": null
}
```

**Response**

```json
{
  "assets": [
    {
      "adamIdStr": "748057890",
      "assignedCount": 0,
      "availableCount": 25,
      "deviceAssignable": true,
      "isIrrevocable": false,
      "pricingParam": "STDQ",
      "productTypeId": 8,
      "productTypeName": "Application",
      "retiredCount": 0,
      "totalCount": 25
    },
    {
      "adamIdStr": "635851129",
      "assignedCount": 0,
      "availableCount": 40,
      "deviceAssignable": true,
      "isIrrevocable": false,
      "pricingParam": "STDQ",
      "productTypeId": 8,
      "productTypeName": "Application",
      "retiredCount": 0,
      "totalCount": 40
    },
    {
      "adamIdStr": "284035177",
      "assignedCount": 0,
      "availableCount": 0,
      "deviceAssignable": false,
      "isIrrevocable": false,
      "pricingParam": "STDQ",
      "productTypeId": 8,
      "productTypeName": "Application",
      "retiredCount": 10,
      "totalCount": 0
    }
  ],
  "clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
   "location": {
    "locationId": 22222222222,
    "locationName": "LocationName"
  },
  "expirationMillis": 1898103480266,
  "status": 0,
  "totalCount": 3,
  "uId": "103614"
}
```

<a id="Example-Request-and-Response-with-a-Legacy-Token"></a>

### Example Request and Response with a Legacy Token

**Request**

```
{
  "sToken": "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2 a5Rlopo4KDn3MrFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ=",
  "includeLicenseCounts": true,
  "pricingParam": null
}
```

**Response**

```json
{
  "assets": [
    {
      "adamIdStr": "748057890",
      "assignedCount": 0,
      "availableCount": 10,
      "deviceAssignable": true,
      "isIrrevocable": false,
      "pricingParam": "STDQ",
      "productTypeId": 8,
      "productTypeName": "Application",
      "retiredCount": 0,
      "totalCount": 10
    }
  ],
  "clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
  "expirationMillis": 1898103480266,
  "status": 0,
  "totalCount": 1,
  "uId": "103299"
}
```

## Topics

### Request and Response

- [GetVppAssetRequest](getvppassetrequest.md): The request for an asset.
- [GetVppAssetResponse](getvppassetresponse.md): The response with the asset.

## See Also

### Asset and license management

- [Get Assignments](get-assignments-158kc.md): Deprecated. Get a list of assignments currently assigned to a user or device.
- [Get Licenses](get-licenses.md): Deprecated. Get the set of licenses managed by your organization.
- [Manage Licenses](manage-licenses.md): Deprecated. Associate and disassociate licenses with users and devices.
