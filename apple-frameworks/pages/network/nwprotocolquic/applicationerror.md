> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/applicationerror](https://developer.apple.com/documentation/network/nwprotocolquic/applicationerror)

# NWProtocolQUIC.ApplicationError

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A QUIC application error code.

## Declaration

```swift
struct ApplicationError
```

## Topics

### Configuring Application Errors

- [init(code:reason:)](applicationerror/init%28code_reason_%29.md): Initializes a QUIC application error with an error code and an optional reason.

### Inspecting Application Errors

- [code](applicationerror/code.md): The QUIC application error code.
- [reason](applicationerror/reason.md): The QUIC application error reason.

## Relationships

### Conforms To

- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Errors

- [applicationError](metadata/applicationerror.md): The QUIC application error code to send for the connection, or received from the peer.
- [streamApplicationErrorCode](metadata/streamapplicationerrorcode.md): The QUIC application error code to send for the stream, or received from the peer.
