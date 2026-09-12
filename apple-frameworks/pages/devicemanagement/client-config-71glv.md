> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/client-config-71glv](https://developer.apple.com/documentation/devicemanagement/client-config-71glv)

# Client Config

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Read client-specific information from the server.

## URL

```http
GET https://vpp.itunes.apple.com/mdm/v2/client/config
```

## Response Codes

- `200` OK — `ClientConfigResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Response"></a>

### Example Response

**Request**

```

```

**Response**

```json
{
    "countryISO2ACode": "US",
    "defaultPlatform": "volumestore",
    "locationName": "PS01",
    "mdmInfo": {
        "id": "522d5c43-44ca-4f7e-ba7a-53570cf60765", 
        "name": "Apple Configurator 2", 
        "metadata": "2.13.3"
    },
    "notificationAuthToken": "SUp3rS3Cr3t",
    "notificationUrl": "https://www.next.com/notification",
    "subscribedNotificationTypes": [
        "ASSET_COUNT",
        "ASSET_MANAGEMENT",
        "USER_MANAGEMENT",
        "USER_ASSOCIATED"
    ],
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439",
    "websiteURL": "https://school.apple.com"
}
```

## Topics

### Response

- [ClientConfigResponse](clientconfigresponse.md): The response that contains the client configuration.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
