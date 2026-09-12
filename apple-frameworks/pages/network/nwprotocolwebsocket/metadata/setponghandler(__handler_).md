> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/metadata/setponghandler(_:handler:)](https://developer.apple.com/documentation/network/nwprotocolwebsocket/metadata/setponghandler(_:handler:))

# setPongHandler(\_:handler:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a handler on a Ping message to be invoked when the corresponding Pong message is received.

## Declaration

```swift
@preconcurrency func setPongHandler(_ queue: DispatchQueue, handler: @escaping @Sendable (NWError?) -> Void)
```

## See Also

### Sending Messages

- [init(opcode:)](init%28opcode_%29.md): Initializes a WebSocket message with a specific type code.
- [NWProtocolWebSocket.Opcode](../opcode.md): Types of messages that you send and receive on a WebSocket connection.
- [closeCode](closecode.md): The close code on a WebSocket message.
- [NWProtocolWebSocket.CloseCode](../closecode.md): Types of codes used upon closing a WebSocket connection.
