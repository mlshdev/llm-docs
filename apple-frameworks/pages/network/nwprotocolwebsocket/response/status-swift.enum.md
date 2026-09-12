> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/response/status-swift.enum](https://developer.apple.com/documentation/network/nwprotocolwebsocket/response/status-swift.enum)

# NWProtocolWebSocket.Response.Status

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Status values that are sent with a WebSocket server response.

## Declaration

```swift
enum Status
```

## Topics

### Handshake Status Values

- [NWProtocolWebSocket.Response.Status.accept](status-swift.enum/accept.md): The client request is being accepted.
- [NWProtocolWebSocket.Response.Status.reject](status-swift.enum/reject.md): The client request is being rejected.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending Handshake Responses

- [init(status:subprotocol:additionalHeaders:)](init%28status_subprotocol_additionalheaders_%29.md): Initializes a WebSocket server response with a status, selected subprotocol, and additional HTTP headers.
- [status](status-swift.property.md): The status of a WebSocket server response.
- [subprotocol](subprotocol.md): The selected subprotocol in a WebSocket server response.
- [additionalHeaders](additionalheaders.md): Any additional HTTP headers in a WebSocket server response.
