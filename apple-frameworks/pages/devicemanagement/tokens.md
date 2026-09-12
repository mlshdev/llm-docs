> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/tokens](https://developer.apple.com/documentation/devicemanagement/tokens)

# Get the Device Token

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

The request for sending the device token details.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## Response Codes

- `200` OK — `TokensResponse`: The response object that contains the device token.

## Topics

### Supporting Object

- [TokensResponse](tokensresponse.md): The response object that contains the device token.

## See Also

### Declarative management

- [Declarative Management](declarative-management.md): Sends declarative management requests to the server.
- [Get Server Supported Declarations](declaration-items.md): Get a list of the declarations available on the server.
- [Get the Device Status](status.md): The request for getting the status of a device.
