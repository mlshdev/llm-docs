> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionwebsockettask/closecode-swift.enum/abnormalclosure](https://developer.apple.com/documentation/foundation/urlsessionwebsockettask/closecode-swift.enum/abnormalclosure)

# URLSessionWebSocketTask.CloseCode.abnormalClosure (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reserved code that indicates the connection closed without a close control frame.

## Declaration

```swift
case abnormalClosure
```

## See Also

### Close codes

- [URLSessionWebSocketTask.CloseCode.goingAway](goingaway.md): A code that indicates an endpoint is going away.
- [URLSessionWebSocketTask.CloseCode.internalServerError](internalservererror.md): A code that indicates the server terminated the connection because it encountered an unexpected condition.
- [URLSessionWebSocketTask.CloseCode.invalid](invalid.md): A code that indicates the connection is still open.
- [URLSessionWebSocketTask.CloseCode.invalidFramePayloadData](invalidframepayloaddata.md): A code that indicates the server terminated the connection because it received data inconsistent with the message’s type.
- [URLSessionWebSocketTask.CloseCode.mandatoryExtensionMissing](mandatoryextensionmissing.md): A code that indicates the client terminated the connection because the server didn’t negotiate a required extension.
- [URLSessionWebSocketTask.CloseCode.messageTooBig](messagetoobig.md): A code that indicates an endpoint is terminating the connection because it received a message too big for it to process.
- [URLSessionWebSocketTask.CloseCode.noStatusReceived](nostatusreceived.md): A reserved code that indicates an endpoint expected a status code and didn’t receive one.
- [URLSessionWebSocketTask.CloseCode.normalClosure](normalclosure.md): A code that indicates normal connection closure.
- [URLSessionWebSocketTask.CloseCode.policyViolation](policyviolation.md): A code that indicates an endpoint terminated the connection because it received a message that violates its policy.
- [URLSessionWebSocketTask.CloseCode.protocolError](protocolerror.md): A code that indicates an endpoint terminated the connection due to a protocol error.
- [URLSessionWebSocketTask.CloseCode.tlsHandshakeFailure](tlshandshakefailure.md): A reserved code that indicates the connection closed due to the failure to perform a TLS handshake.
- [URLSessionWebSocketTask.CloseCode.unsupportedData](unsupporteddata.md): A code that indicates an endpoint terminated the connection after receiving a type of data it can’t accept.

# NSURLSessionWebSocketCloseCodeAbnormalClosure (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reserved code that indicates the connection closed without a close control frame.

## Declaration

```objectivec
NSURLSessionWebSocketCloseCodeAbnormalClosure
```

## See Also

### Close codes

- [NSURLSessionWebSocketCloseCodeGoingAway](goingaway.md): A code that indicates an endpoint is going away.
- [NSURLSessionWebSocketCloseCodeInternalServerError](internalservererror.md): A code that indicates the server terminated the connection because it encountered an unexpected condition.
- [NSURLSessionWebSocketCloseCodeInvalid](invalid.md): A code that indicates the connection is still open.
- [NSURLSessionWebSocketCloseCodeInvalidFramePayloadData](invalidframepayloaddata.md): A code that indicates the server terminated the connection because it received data inconsistent with the message’s type.
- [NSURLSessionWebSocketCloseCodeMandatoryExtensionMissing](mandatoryextensionmissing.md): A code that indicates the client terminated the connection because the server didn’t negotiate a required extension.
- [NSURLSessionWebSocketCloseCodeMessageTooBig](messagetoobig.md): A code that indicates an endpoint is terminating the connection because it received a message too big for it to process.
- [NSURLSessionWebSocketCloseCodeNoStatusReceived](nostatusreceived.md): A reserved code that indicates an endpoint expected a status code and didn’t receive one.
- [NSURLSessionWebSocketCloseCodeNormalClosure](normalclosure.md): A code that indicates normal connection closure.
- [NSURLSessionWebSocketCloseCodePolicyViolation](policyviolation.md): A code that indicates an endpoint terminated the connection because it received a message that violates its policy.
- [NSURLSessionWebSocketCloseCodeProtocolError](protocolerror.md): A code that indicates an endpoint terminated the connection due to a protocol error.
- [NSURLSessionWebSocketCloseCodeTLSHandshakeFailure](tlshandshakefailure.md): A reserved code that indicates the connection closed due to the failure to perform a TLS handshake.
- [NSURLSessionWebSocketCloseCodeUnsupportedData](unsupporteddata.md): A code that indicates an endpoint terminated the connection after receiving a type of data it can’t accept.
