> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/response](https://developer.apple.com/documentation/network/nwprotocolwebsocket/response)

# NWProtocolWebSocket.Response

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A WebSocket handshake reponse sent from a server to a client.

## Declaration

```swift
struct Response
```

## Topics

### Sending Handshake Responses

- [init(status:subprotocol:additionalHeaders:)](response/init%28status_subprotocol_additionalheaders_%29.md): Initializes a WebSocket server response with a status, selected subprotocol, and additional HTTP headers.
- [NWProtocolWebSocket.Response.Status](response/status-swift.enum.md): Status values that are sent with a WebSocket server response.
- [status](response/status-swift.property.md): The status of a WebSocket server response.
- [subprotocol](response/subprotocol.md): The selected subprotocol in a WebSocket server response.
- [additionalHeaders](response/additionalheaders.md): Any additional HTTP headers in a WebSocket server response.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Server Handshakes

- [setClientRequestHandler(\_:handler:)](options/setclientrequesthandler%28__handler_%29.md): Sets a handler to react to as a server to inbound WebSocket client handshakes.
