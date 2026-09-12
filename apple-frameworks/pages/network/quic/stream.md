> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/stream](https://developer.apple.com/documentation/network/quic/stream)

# QUIC.Stream

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
final class Stream<ApplicationProtocol> where ApplicationProtocol : NetworkProtocolOptions
```

## Topics

### Instance Properties

- [directionality](stream/directionality.md): The directionality of this stream, either bidirectional or unidirectional.
- [initiator](stream/initiator.md): The initiator of this QUIC stream, either client or server.
- [parent](stream/parent.md)
- [streamApplicationErrorCode](stream/streamapplicationerrorcode.md): The QUIC application error code to send for the stream, or received from the peer.
- [streamID](stream/streamid.md): The QUIC stream identifier.

## Relationships

### Inherits From

- [NetworkChannel](../networkchannel.md)

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
