> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/metadata/remotemaxstreamsunidirectional](https://developer.apple.com/documentation/network/nwprotocolquic/metadata/remotemaxstreamsunidirectional)

# remoteMaxStreamsUnidirectional

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The maximum number of unidirectional streams advertised by peer that the connection is allowed to create.

## Declaration

```swift
var remoteMaxStreamsUnidirectional: Int { get }
```

## See Also

### Inspecting Connection State

- [negotiatedALPN](negotiatedalpn.md): The Application-Layer Protocol Negotiation value used when establishing the connection.
- [localMaxStreamsBidirectional](localmaxstreamsbidirectional.md): The maximum number of bidirectional streams that the peer can create on a QUIC connection.
- [localMaxStreamsUnidirectional](localmaxstreamsunidirectional.md): The maximum number of unidirectional streams that the peer can create on a QUIC connection.
- [remoteMaxStreamsBidirectional](remotemaxstreamsbidirectional.md): The maximum number of bidirectional streams advertised by peer that the connection is allowed to create.
- [remoteIdleTimeout](remoteidletimeout.md): The idle timeout value from the peer’s transport parameters, in milliseconds.
- [securityProtocolMetadata](securityprotocolmetadata.md): The result of the QUIC handshake.
