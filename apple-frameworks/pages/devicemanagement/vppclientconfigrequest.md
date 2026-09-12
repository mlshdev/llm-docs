> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vppclientconfigrequest](https://developer.apple.com/documentation/devicemanagement/vppclientconfigrequest)

# VppClientConfigRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 1.0+

The request for the client configuration.

## Declaration

```
object VppClientConfigRequest
```

## Properties

- `clientContext` — `string`: Any JSON string under 256 bytes. The server stores the value of this field, and this value returns in all responses. To clear the field’s value, provide an empty string as the input value (””).
- `notificationToken` — `string`: The token to use when sending notifications through `notificationURL`.
- `sToken` — `string` (required): The authentication token. For more information, see [Authenticate with the web service](managing-apps-and-books-through-web-services-legacy.md#Authenticate-with-the-web-service).

## See Also

### Request and Response

- [VppClientConfigResponse](vppclientconfigresponse.md): The response that contains the client configuration.
