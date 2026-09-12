> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/status](https://developer.apple.com/documentation/devicemanagement/status)

# Get the Device Status

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

The request for getting the status of a device.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/json`

Type: `StatusReport`

A status report of the device’s current state.

## Response Codes

- `204` No Content:

## See Also

### Declarative management

- [Declarative Management](declarative-management.md): Sends declarative management requests to the server.
- [Get Server Supported Declarations](declaration-items.md): Get a list of the declarations available on the server.
- [Get the Device Token](tokens.md): The request for sending the device token details.
