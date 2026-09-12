> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/response/status-swift.property](https://developer.apple.com/documentation/network/nwprotocolwebsocket/response/status-swift.property)

# status

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The status of a WebSocket server response.

## Declaration

```swift
let status: NWProtocolWebSocket.Response.Status
```

## See Also

### Sending Handshake Responses

- [init(status:subprotocol:additionalHeaders:)](init%28status_subprotocol_additionalheaders_%29.md): Initializes a WebSocket server response with a status, selected subprotocol, and additional HTTP headers.
- [NWProtocolWebSocket.Response.Status](status-swift.enum.md): Status values that are sent with a WebSocket server response.
- [subprotocol](subprotocol.md): The selected subprotocol in a WebSocket server response.
- [additionalHeaders](additionalheaders.md): Any additional HTTP headers in a WebSocket server response.
