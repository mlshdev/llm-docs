> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/datagramprotocol](https://developer.apple.com/documentation/network/datagramprotocol)

# DatagramProtocol

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Types that conform to DatagramProtocol send and receive messages with minimal or no metadata, usually constrained to a fixed maximum size.

## Declaration

```swift
protocol DatagramProtocol : MessageProtocol
```

## Relationships

### Inherits From

- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)

### Conforming Types

- [DTLS](dtls.md)
- [QUICDatagram](quicdatagram.md)
- [UDP](udp.md)
