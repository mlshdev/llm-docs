> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/metadata](https://developer.apple.com/documentation/network/nwprotocolwebsocket/metadata)

# NWProtocolWebSocket.Metadata

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A WebSocket message you configure when sending and receiving packets.

## Declaration

```swift
class Metadata
```

## Topics

### Sending Messages

- [init(opcode:)](metadata/init%28opcode_%29.md): Initializes a WebSocket message with a specific type code.
- [NWProtocolWebSocket.Opcode](opcode.md): Types of messages that you send and receive on a WebSocket connection.
- [setPongHandler(\_:handler:)](metadata/setponghandler%28__handler_%29.md): Sets a handler on a Ping message to be invoked when the corresponding Pong message is received.
- [closeCode](metadata/closecode.md): The close code on a WebSocket message.
- [NWProtocolWebSocket.CloseCode](closecode.md): Types of codes used upon closing a WebSocket connection.

### Receiving Messages

- [opcode](metadata/opcode.md): The type code of a WebSocket message.
- [closeCode](metadata/closecode.md): The close code on a WebSocket message.
- [NWProtocolWebSocket.CloseCode](closecode.md): Types of codes used upon closing a WebSocket connection.

### Inspecting Handshake Results

- [selectedSubprotocol](metadata/selectedsubprotocol.md): The subprotocol selected by the server during the WebSocket handshake.
- [additionalServerHeaders](metadata/additionalserverheaders.md): Additional HTTP headers sent by the server during the WebSocket handshake.

## Relationships

### Inherits From

- [NWProtocolMetadata](../nwprotocolmetadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
