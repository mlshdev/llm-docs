> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/metadata/init(opcode:)](https://developer.apple.com/documentation/network/nwprotocolwebsocket/metadata/init(opcode:))

# init(opcode:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a WebSocket message with a specific type code.

## Declaration

```swift
init(opcode: NWProtocolWebSocket.Opcode)
```

## See Also

### Sending Messages

- [NWProtocolWebSocket.Opcode](../opcode.md): Types of messages that you send and receive on a WebSocket connection.
- [setPongHandler(\_:handler:)](setponghandler%28__handler_%29.md): Sets a handler on a Ping message to be invoked when the corresponding Pong message is received.
- [closeCode](closecode.md): The close code on a WebSocket message.
- [NWProtocolWebSocket.CloseCode](../closecode.md): Types of codes used upon closing a WebSocket connection.
