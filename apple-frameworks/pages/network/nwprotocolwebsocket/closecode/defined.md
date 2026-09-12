> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/closecode/defined](https://developer.apple.com/documentation/network/nwprotocolwebsocket/closecode/defined)

# NWProtocolWebSocket.CloseCode.Defined

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Well-known close code values.

## Declaration

```swift
enum Defined
```

## Topics

### Defined Close Codes

- [NWProtocolWebSocket.CloseCode.Defined.normalClosure](defined/normalclosure.md): A normal closure occurred with no errors.
- [NWProtocolWebSocket.CloseCode.Defined.goingAway](defined/goingaway.md): An endpoint is no longer available, such as when a server is down.
- [NWProtocolWebSocket.CloseCode.Defined.protocolError](defined/protocolerror.md): An endpoint is terminating the connection due to a protocol error.
- [NWProtocolWebSocket.CloseCode.Defined.unsupportedData](defined/unsupporteddata.md): An endpoint is terminating the connection because it received a type of data it cannot accept.
- [NWProtocolWebSocket.CloseCode.Defined.noStatusReceived](defined/nostatusreceived.md): This value is reserved for local errors and indicates that no Close code was received.
- [NWProtocolWebSocket.CloseCode.Defined.abnormalClosure](defined/abnormalclosure.md): This value is reserved for local errors and indicates that no Close message was received.
- [NWProtocolWebSocket.CloseCode.Defined.invalidFramePayloadData](defined/invalidframepayloaddata.md): An endpoint is terminating the connection because it received data within a message that was inconsistent with the message type.
- [NWProtocolWebSocket.CloseCode.Defined.policyViolation](defined/policyviolation.md): An endpoint is terminating the connection because it received a message that violates its policy.
- [NWProtocolWebSocket.CloseCode.Defined.messageTooBig](defined/messagetoobig.md): An endpoint is terminating the connection because it received a message that is too big for it to process.
- [NWProtocolWebSocket.CloseCode.Defined.mandatoryExtension](defined/mandatoryextension.md): The WebSocket client expected the server to negotiate one or more extensions that were not negotiated.
- [NWProtocolWebSocket.CloseCode.Defined.internalServerError](defined/internalservererror.md): The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.
- [NWProtocolWebSocket.CloseCode.Defined.tlsHandshake](defined/tlshandshake.md): This value is reserved for local errors and indicates that the TLS handshake failed.

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

### Close Code Types

- [init(rawValue:)](init%28rawvalue_%29.md): Initializes a close code with a raw value.
- [NWProtocolWebSocket.CloseCode.protocolCode(\_:)](protocolcode%28__%29.md): A well-known close code reserved by the protocol (values 1000-2999).
- [NWProtocolWebSocket.CloseCode.applicationCode(\_:)](applicationcode%28__%29.md): A close code in the range reserved for applications and frameworks (3000-3999).
- [NWProtocolWebSocket.CloseCode.privateCode(\_:)](privatecode%28__%29.md): A close code in the private-use range (4000-4999).
