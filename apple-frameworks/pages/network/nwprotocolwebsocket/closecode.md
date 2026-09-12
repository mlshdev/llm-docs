> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/closecode](https://developer.apple.com/documentation/network/nwprotocolwebsocket/closecode)

# NWProtocolWebSocket.CloseCode

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Types of codes used upon closing a WebSocket connection.

## Declaration

```swift
enum CloseCode
```

## Topics

### Close Code Types

- [init(rawValue:)](closecode/init%28rawvalue_%29.md): Initializes a close code with a raw value.
- [NWProtocolWebSocket.CloseCode.protocolCode(\_:)](closecode/protocolcode%28__%29.md): A well-known close code reserved by the protocol (values 1000-2999).
- [NWProtocolWebSocket.CloseCode.Defined](closecode/defined.md): Well-known close code values.
- [NWProtocolWebSocket.CloseCode.applicationCode(\_:)](closecode/applicationcode%28__%29.md): A close code in the range reserved for applications and frameworks (3000-3999).
- [NWProtocolWebSocket.CloseCode.privateCode(\_:)](closecode/privatecode%28__%29.md): A close code in the private-use range (4000-4999).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending Messages

- [init(opcode:)](metadata/init%28opcode_%29.md): Initializes a WebSocket message with a specific type code.
- [NWProtocolWebSocket.Opcode](opcode.md): Types of messages that you send and receive on a WebSocket connection.
- [setPongHandler(\_:handler:)](metadata/setponghandler%28__handler_%29.md): Sets a handler on a Ping message to be invoked when the corresponding Pong message is received.
- [closeCode](metadata/closecode.md): The close code on a WebSocket message.
