> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/options/maxdatagramframesize](https://developer.apple.com/documentation/network/nwprotocolquic/options/maxdatagramframesize)

# maxDatagramFrameSize

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A QUIC connection’s maximum DATAGRAM frame size.

## Declaration

```swift
var maxDatagramFrameSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the value of the `max_datagram_frame_size` transport parameter.

## See Also

### Customizing Connection Options

- [init(alpn:)](init%28alpn_%29.md): Initializes a default set of QUIC options along with a set of supported Application-Layer Protocol Negotiation values.
- [init()](init%28%29.md): Initializes a default set of QUIC options, without specifying a set of supported Application-Layer Protocol Negotiation values.
- [alpn](alpn.md): A set of supported Application-Layer Protocol Negotiation values.
- [idleTimeout](idletimeout.md): The idle timeout for the QUIC connection, in milliseconds.
- [initialMaxData](initialmaxdata.md): A QUIC connection’s initial maximum data transport parameter.
- [initialMaxStreamDataBidirectionalLocal](initialmaxstreamdatabidirectionallocal.md): A QUIC connection’s initial maximum stream data limit for locally-initiated bidirectional streams.
- [initialMaxStreamDataBidirectionalRemote](initialmaxstreamdatabidirectionalremote.md): A QUIC connection’s initial maximum stream data limit for remote-initiated bidirectional streams.
- [initialMaxStreamDataUnidirectional](initialmaxstreamdataunidirectional.md): A QUIC connection’s initial maximum stream data limit for unidirectional streams.
- [initialMaxStreamsBidirectional](initialmaxstreamsbidirectional.md): A QUIC connection’s initial maximum number of bidirectional streams.
- [initialMaxStreamsUnidirectional](initialmaxstreamsunidirectional.md): A QUIC connection’s initial maximum number of unidirectional streams.
- [maxUDPPayloadSize](maxudppayloadsize.md): The maximum length of a QUIC packet that can be received on a connection, in bytes.
- [securityProtocolOptions](securityprotocoloptions.md): The handshake security options QUIC uses.
