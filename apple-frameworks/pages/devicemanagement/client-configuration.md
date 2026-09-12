> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/client-configuration](https://developer.apple.com/documentation/devicemanagement/client-configuration)

# Client Configuration

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 1.0+

Store client-specific information on the server.

> This legacy API is currently in maintenance mode. Apple won’t add any new functionality to it.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/VPPClientConfigSrv
```

## HTTP Body

Content type: `application/json`

Type: `VppClientConfigRequest`

missing

## Response Codes

- `200` OK — `VppClientConfigResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
	"apnToken": null,
	"clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
	"notificationToken": null,
	"notificationUrl": null,
	"sToken": "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2 a5Rlopo4KDn3MrFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ="
}
```

**Response**

```json
{
  "appleId": "testuser1@test.org",
  "clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
  "countryCode": "US",
  "defaultPlatform": "volumestore",
  "email": "testuser1@test.org",
  "expirationMillis": 1898103480266,
  "location": {
    "locationId": 22222222222,
    "locationName": "LocationName"
  },
  "organizationId": 2000000001630588,
  "organizationIdHash": "0420773fb70e423ef77916dee3b381987e6c3fb4d8f19d1fd071b0c48c0cd380",
  "status": 0,
  "uId": "103614"
}
```

<a id="Example-Request-and-Response-with-a-Legacy-Token"></a>

### Example Request and Response with a Legacy Token

**Request**

```
{
  "sToken": "h40Gte9aQnZFDNM39IUkRPCsQDxBxbZB4Wy34pxefOuQkeeb3h2 a5Rlopo4KDn3MrFKf4CM3OY+WGAoZ1cD6iZ6yzsMk1+5PVBNc66YS6ZQ="
}
```

**Response**

```json
{
   "apnToken": "4IbRbXpge3ySkchugcf",
   "appleId": "test1@test.org",
   "clientContext": "{\"guid\":\"b92\",\"hostname\":\"test.test.org\",\"ac2\":1}",
   "countryCode": "US",
   "defaultPlatform": "volumestore",
   "email": "test1@test.org",
   "expirationMillis": 1850914593288,
   "organizationId": 2222222222,
   "organizationIdHash":"2555009cd3e53bd69b50723d2baec9f49558cbd90de2a1aa420dacdbff12cc8e",
   "status": 0,
   "uId": "100682"
}
```

## Topics

### Request and Response

- [VppClientConfigRequest](vppclientconfigrequest.md): The request for the client configuration.
- [VppClientConfigResponse](vppclientconfigresponse.md): The response that contains the client configuration.

## See Also

### Configuration management

- [Service Configuration](service-configuration.md): Deprecated. Provides the full list of web service URLs and a list of possible error numbers.
