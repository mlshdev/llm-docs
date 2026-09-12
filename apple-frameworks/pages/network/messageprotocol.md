> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/messageprotocol](https://developer.apple.com/documentation/network/messageprotocol)

# MessageProtocol

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Types that conform to MessageProtocol send and receive messages. The conforming type is responsible for specifying its message-specific metadata.

## Declaration

```swift
protocol MessageProtocol : OneToOneProtocol
```

## Topics

### Associated Types

- [ContentType](messageprotocol/contenttype.md)
- [LegacyMessage](messageprotocol/legacymessage.md)

## Relationships

### Inherits From

- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)

### Inherited By

- [DatagramProtocol](datagramprotocol.md)

### Conforming Types

- [Coder](coder.md)
- [DTLS](dtls.md)
- [Framer](framer.md)
- [QUICDatagram](quicdatagram.md)
- [TLV](tlv.md)
- [UDP](udp.md)
- [WebSocket](websocket.md)
