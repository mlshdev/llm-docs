> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolquic/metadata](https://developer.apple.com/documentation/network/nwprotocolquic/metadata)

# NWProtocolQUIC.Metadata

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A handle you can use to inspect a connection’s QUIC state.

## Declaration

```swift
class Metadata
```

## Topics

### Inspecting Connection State

- [negotiatedALPN](metadata/negotiatedalpn.md): The Application-Layer Protocol Negotiation value used when establishing the connection.
- [localMaxStreamsBidirectional](metadata/localmaxstreamsbidirectional.md): The maximum number of bidirectional streams that the peer can create on a QUIC connection.
- [localMaxStreamsUnidirectional](metadata/localmaxstreamsunidirectional.md): The maximum number of unidirectional streams that the peer can create on a QUIC connection.
- [remoteMaxStreamsBidirectional](metadata/remotemaxstreamsbidirectional.md): The maximum number of bidirectional streams advertised by peer that the connection is allowed to create.
- [remoteMaxStreamsUnidirectional](metadata/remotemaxstreamsunidirectional.md): The maximum number of unidirectional streams advertised by peer that the connection is allowed to create.
- [remoteIdleTimeout](metadata/remoteidletimeout.md): The idle timeout value from the peer’s transport parameters, in milliseconds.
- [securityProtocolMetadata](metadata/securityprotocolmetadata.md): The result of the QUIC handshake.

### Inspecting Stream State

- [streamIdentifier](metadata/streamidentifier.md): The QUIC stream identifier.
- [usableDatagramFrameSize](metadata/usabledatagramframesize.md): The maximum usable size of a datagram frame on a QUIC datagram flow.

### Handling Errors

- [applicationError](metadata/applicationerror.md): The QUIC application error code to send for the connection, or received from the peer.
- [NWProtocolQUIC.ApplicationError](applicationerror.md): A QUIC application error code.
- [streamApplicationErrorCode](metadata/streamapplicationerrorcode.md): The QUIC application error code to send for the stream, or received from the peer.

### Configuring Keepalives

- [keepAlive](metadata/keepalive.md): The QUIC connection keepalive behavior.
- [NWProtocolQUIC.Metadata.KeepAliveBehavior](metadata/keepalivebehavior.md): A QUIC connection keepalive behavior.

## Relationships

### Inherits From

- [NWProtocolMetadata](../nwprotocolmetadata.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
