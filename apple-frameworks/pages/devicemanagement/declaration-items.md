> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declaration-items](https://developer.apple.com/documentation/devicemanagement/declaration-items)

# Get Server Supported Declarations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

Get a list of the declarations available on the server.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## Response Codes

- `200` OK — `DeclarationItemsResponse`:

## Topics

### Response

- [DeclarationItemsResponse](declarationitemsresponse.md): The set of available declarations on the server.

## See Also

### Declarative management

- [Declarative Management](declarative-management.md): Sends declarative management requests to the server.
- [Get the Device Status](status.md): The request for getting the status of a device.
- [Get the Device Token](tokens.md): The request for sending the device token details.
