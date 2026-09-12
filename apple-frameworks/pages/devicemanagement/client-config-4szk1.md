> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/client-config-4szk1](https://developer.apple.com/documentation/devicemanagement/client-config-4szk1)

# Client Config

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Store client-specific information on the server.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/client/config
```

## HTTP Body

Content type: `application/json`

Type: `ClientConfigRequest`

missing

## Response Codes

- `200` OK — `ClientConfigResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

## Mentioned In

- [Getting started with the management API](getting-started-with-the-management-api.md)
- [Managing assets](managing-assets.md)
- [Managing users](managing-users.md)
- [Subscribing to notifications](subscribing-to-notifications.md)
- [Upgrading to the new management API](upgrading-to-the-new-management-api.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
    "mdmInfo": {
        "id": "522d5c43-44ca-4f7e-ba7a-53570cf60765",
        "name": "Apple Configurator 2",
        "metadata": "2.13.3"
    },
    "notificationAuthToken": "SUp3rS3Cr3t",
    "notificationUrl": "https://www.next.com/notification",
    "notificationTypes": [
        "ASSET_COUNT",
        "ASSET_MANAGEMENT",
        "USER_MANAGEMENT",
        "USER_ASSOCIATED"
    ]
}
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

### Request and Response

- [ClientConfigRequest](clientconfigrequest.md): The request for the client configuration.
- [ClientConfigResponse](clientconfigresponse.md): The response that contains the client configuration.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

### Read-Only

- [Client Config](client-config-71glv.md): Read client-specific information from the server.

## See Also

### Configuration management

- [Service Config](service-config.md): Provides the full list of web service URLs, notification types, request limits, and possible error codes.
