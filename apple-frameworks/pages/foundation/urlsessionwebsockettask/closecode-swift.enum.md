> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/closecode-swift.enum](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/closecode-swift.enum)

# URLSessionWebSocketTask.CloseCode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A code that indicates why a WebSocket connection closed.

## Declaration

```swift
enum CloseCode
```

<a id="overview"></a>

## Overview

The WebSocket close codes follow the close codes defined in [RFC 6455](https://tools.ietf.org/html/rfc6455#section-7.4.1).

## Topics

### Close codes

- [URLSessionWebSocketTask.CloseCode.abnormalClosure](closecode-swift.enum/abnormalclosure.md): A reserved code that indicates the connection closed without a close control frame.
- [URLSessionWebSocketTask.CloseCode.goingAway](closecode-swift.enum/goingaway.md): A code that indicates an endpoint is going away.
- [URLSessionWebSocketTask.CloseCode.internalServerError](closecode-swift.enum/internalservererror.md): A code that indicates the server terminated the connection because it encountered an unexpected condition.
- [URLSessionWebSocketTask.CloseCode.invalid](closecode-swift.enum/invalid.md): A code that indicates the connection is still open.
- [URLSessionWebSocketTask.CloseCode.invalidFramePayloadData](closecode-swift.enum/invalidframepayloaddata.md): A code that indicates the server terminated the connection because it received data inconsistent with the message’s type.
- [URLSessionWebSocketTask.CloseCode.mandatoryExtensionMissing](closecode-swift.enum/mandatoryextensionmissing.md): A code that indicates the client terminated the connection because the server didn’t negotiate a required extension.
- [URLSessionWebSocketTask.CloseCode.messageTooBig](closecode-swift.enum/messagetoobig.md): A code that indicates an endpoint is terminating the connection because it received a message too big for it to process.
- [URLSessionWebSocketTask.CloseCode.noStatusReceived](closecode-swift.enum/nostatusreceived.md): A reserved code that indicates an endpoint expected a status code and didn’t receive one.
- [URLSessionWebSocketTask.CloseCode.normalClosure](closecode-swift.enum/normalclosure.md): A code that indicates normal connection closure.
- [URLSessionWebSocketTask.CloseCode.policyViolation](closecode-swift.enum/policyviolation.md): A code that indicates an endpoint terminated the connection because it received a message that violates its policy.
- [URLSessionWebSocketTask.CloseCode.protocolError](closecode-swift.enum/protocolerror.md): A code that indicates an endpoint terminated the connection due to a protocol error.
- [URLSessionWebSocketTask.CloseCode.tlsHandshakeFailure](closecode-swift.enum/tlshandshakefailure.md): A reserved code that indicates the connection closed due to the failure to perform a TLS handshake.
- [URLSessionWebSocketTask.CloseCode.unsupportedData](closecode-swift.enum/unsupporteddata.md): A code that indicates an endpoint terminated the connection after receiving a type of data it can’t accept.

### Initializers

- [init(rawValue:)](closecode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Closing the connection

- [cancel(with:reason:)](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.

# NSURLSessionWebSocketCloseCode (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A code that indicates why a WebSocket connection closed.

## Declaration

```objectivec
enum NSURLSessionWebSocketCloseCode : NSInteger;
```

<a id="overview"></a>

## Overview

The WebSocket close codes follow the close codes defined in [RFC 6455](https://tools.ietf.org/html/rfc6455#section-7.4.1).

## Topics

### Close codes

- [NSURLSessionWebSocketCloseCodeAbnormalClosure](closecode-swift.enum/abnormalclosure.md): A reserved code that indicates the connection closed without a close control frame.
- [NSURLSessionWebSocketCloseCodeGoingAway](closecode-swift.enum/goingaway.md): A code that indicates an endpoint is going away.
- [NSURLSessionWebSocketCloseCodeInternalServerError](closecode-swift.enum/internalservererror.md): A code that indicates the server terminated the connection because it encountered an unexpected condition.
- [NSURLSessionWebSocketCloseCodeInvalid](closecode-swift.enum/invalid.md): A code that indicates the connection is still open.
- [NSURLSessionWebSocketCloseCodeInvalidFramePayloadData](closecode-swift.enum/invalidframepayloaddata.md): A code that indicates the server terminated the connection because it received data inconsistent with the message’s type.
- [NSURLSessionWebSocketCloseCodeMandatoryExtensionMissing](closecode-swift.enum/mandatoryextensionmissing.md): A code that indicates the client terminated the connection because the server didn’t negotiate a required extension.
- [NSURLSessionWebSocketCloseCodeMessageTooBig](closecode-swift.enum/messagetoobig.md): A code that indicates an endpoint is terminating the connection because it received a message too big for it to process.
- [NSURLSessionWebSocketCloseCodeNoStatusReceived](closecode-swift.enum/nostatusreceived.md): A reserved code that indicates an endpoint expected a status code and didn’t receive one.
- [NSURLSessionWebSocketCloseCodeNormalClosure](closecode-swift.enum/normalclosure.md): A code that indicates normal connection closure.
- [NSURLSessionWebSocketCloseCodePolicyViolation](closecode-swift.enum/policyviolation.md): A code that indicates an endpoint terminated the connection because it received a message that violates its policy.
- [NSURLSessionWebSocketCloseCodeProtocolError](closecode-swift.enum/protocolerror.md): A code that indicates an endpoint terminated the connection due to a protocol error.
- [NSURLSessionWebSocketCloseCodeTLSHandshakeFailure](closecode-swift.enum/tlshandshakefailure.md): A reserved code that indicates the connection closed due to the failure to perform a TLS handshake.
- [NSURLSessionWebSocketCloseCodeUnsupportedData](closecode-swift.enum/unsupporteddata.md): A code that indicates an endpoint terminated the connection after receiving a type of data it can’t accept.

## See Also

### Closing the connection

- [cancelWithCloseCode:reason:](cancel%28with_reason_%29.md): Sends a close frame with the given close code and optional close reason.
- [closeCode](closecode-swift.property.md): A code that indicates the reason a connection closed.
- [closeReason](closereason.md): A block of data that provides further information about why a connection closed.
