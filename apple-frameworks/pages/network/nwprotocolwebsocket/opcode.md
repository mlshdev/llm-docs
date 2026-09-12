> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/opcode](https://developer.apple.com/documentation/network/nwprotocolwebsocket/opcode)

# NWProtocolWebSocket.Opcode

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Types of messages that you send and receive on a WebSocket connection.

## Declaration

```swift
enum Opcode
```

## Topics

### Data Types

- [NWProtocolWebSocket.Opcode.binary](opcode/binary.md): A binary data message.
- [NWProtocolWebSocket.Opcode.text](opcode/text.md): A text data message.
- [NWProtocolWebSocket.Opcode.cont](opcode/cont.md): A continuation message.

### Control Types

- [NWProtocolWebSocket.Opcode.ping](opcode/ping.md): A Ping message, which requests a Pong from the peer.
- [NWProtocolWebSocket.Opcode.pong](opcode/pong.md): A Pong message in response to a Ping from the peer.
- [NWProtocolWebSocket.Opcode.close](opcode/close.md): A message indicating a close of the connection.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending Messages

- [init(opcode:)](metadata/init%28opcode_%29.md): Initializes a WebSocket message with a specific type code.
- [setPongHandler(\_:handler:)](metadata/setponghandler%28__handler_%29.md): Sets a handler on a Ping message to be invoked when the corresponding Pong message is received.
- [closeCode](metadata/closecode.md): The close code on a WebSocket message.
- [NWProtocolWebSocket.CloseCode](closecode.md): Types of codes used upon closing a WebSocket connection.
