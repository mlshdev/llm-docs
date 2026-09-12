> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/streamprotocol](https://developer.apple.com/documentation/network/streamprotocol)

# StreamProtocol

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Types that conform to the StreamProtocol protocol expose methods for sending and receiving byte streams.

## Declaration

```swift
protocol StreamProtocol : OneToOneProtocol
```

## Relationships

### Inherits From

- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)

### Conforming Types

- [QUICStream](quicstream.md)
- [TCP](tcp.md)
- [TLS](tls.md)
