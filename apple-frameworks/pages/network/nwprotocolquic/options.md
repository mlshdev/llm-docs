> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/options](https://developer.apple.com/documentation/network/nwprotocolquic/options)

# NWProtocolQUIC.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A container of options that configure the use of QUIC on a connection.

## Declaration

```swift
class Options
```

## Topics

### Customizing Connection Options

- [init(alpn:)](options/init%28alpn_%29.md): Initializes a default set of QUIC options along with a set of supported Application-Layer Protocol Negotiation values.
- [init()](options/init%28%29.md): Initializes a default set of QUIC options, without specifying a set of supported Application-Layer Protocol Negotiation values.
- [alpn](options/alpn.md): A set of supported Application-Layer Protocol Negotiation values.
- [idleTimeout](options/idletimeout.md): The idle timeout for the QUIC connection, in milliseconds.
- [initialMaxData](options/initialmaxdata.md): A QUIC connection’s initial maximum data transport parameter.
- [initialMaxStreamDataBidirectionalLocal](options/initialmaxstreamdatabidirectionallocal.md): A QUIC connection’s initial maximum stream data limit for locally-initiated bidirectional streams.
- [initialMaxStreamDataBidirectionalRemote](options/initialmaxstreamdatabidirectionalremote.md): A QUIC connection’s initial maximum stream data limit for remote-initiated bidirectional streams.
- [initialMaxStreamDataUnidirectional](options/initialmaxstreamdataunidirectional.md): A QUIC connection’s initial maximum stream data limit for unidirectional streams.
- [initialMaxStreamsBidirectional](options/initialmaxstreamsbidirectional.md): A QUIC connection’s initial maximum number of bidirectional streams.
- [initialMaxStreamsUnidirectional](options/initialmaxstreamsunidirectional.md): A QUIC connection’s initial maximum number of unidirectional streams.
- [maxDatagramFrameSize](options/maxdatagramframesize.md): A QUIC connection’s maximum DATAGRAM frame size.
- [maxUDPPayloadSize](options/maxudppayloadsize.md): The maximum length of a QUIC packet that can be received on a connection, in bytes.
- [securityProtocolOptions](options/securityprotocoloptions.md): The handshake security options QUIC uses.

### Customizing Stream Options

- [direction](options/direction-swift.property.md): The direction of the QUIC stream.
- [NWProtocolQUIC.Options.Direction](options/direction-swift.enum.md): A directionality of a QUIC stream.
- [isDatagram](options/isdatagram.md): A Boolean that indicates that this is a QUIC datagram flow, not a stream of bytes.

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating QUIC Connections

- [definition](definition.md): The system definition of the QUIC transport protocol.
