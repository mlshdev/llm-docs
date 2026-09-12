> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic](https://developer.apple.com/documentation/network/quic)

# QUIC

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the QUIC protocol.

## Declaration

```swift
struct QUIC
```

<a id="overview"></a>

## Overview

Conforms to MultiplexProtocol, exposing configuration for a multiplexing instance of QUIC, which in turn exposes the ability to handle multiple streams of data over QUIC.

## Topics

### Classes

- [QUIC.Datagrams](quic/datagrams.md)
- [QUIC.Stream](quic/stream.md)

### Structures

- [QUIC.TLS](quic/tls-swift.struct.md): The set of TLS options available when using QUIC.

### Initializers

- [init(alpn:)](quic/init%28alpn_%29.md): Create a QUIC protocol for use in a protocol stack.
- [init(alpn:\_:)](quic/init%28alpn___%29.md)

### Instance Properties

- [tls](quic/tls-swift.property.md): Configure TLS when used within QUIC.

### Instance Methods

- [idleTimeout(\_:)](quic/idletimeout%28__%29.md): Set the idle timeout for the QUIC connection, in milliseconds.
- [initialMaxBidirectionalStreams(\_:)](quic/initialmaxbidirectionalstreams%28__%29.md): Set the initial_max_streams_bidi transport parameter on a QUIC connection.
- [initialMaxData(\_:)](quic/initialmaxdata%28__%29.md): Set the initial_max_data transport parameter on a QUIC connection.
- [initialMaxStreamDataBidirectionalLocal(\_:)](quic/initialmaxstreamdatabidirectionallocal%28__%29.md): Set the initial_max_stream_data_bidi_local transport parameter on a QUIC connection.
- [initialMaxStreamDataBidirectionalRemote(\_:)](quic/initialmaxstreamdatabidirectionalremote%28__%29.md): Set the initial_max_stream_data_bidi_remote transport parameter on a QUIC connection.
- [initialMaxStreamDataUnidirectional(\_:)](quic/initialmaxstreamdataunidirectional%28__%29.md): Set the initial_max_stream_data_uni transport parameter on a QUIC connection.
- [initialMaxUnidirectionalStreams(\_:)](quic/initialmaxunidirectionalstreams%28__%29.md): Set the initial_max_stream_data_uni transport parameter on a QUIC connection.
- [maxDatagramFrameSize(\_:)](quic/maxdatagramframesize%28__%29.md): Set the max_datagram_frame_size transport parameter on a QUIC connection.
- [maxUDPPayloadSize(\_:)](quic/maxudppayloadsize%28__%29.md): Set the maximum length of a QUIC packet that you are willing to receive on a connection, in bytes.

## Relationships

### Conforms To

- [MultiplexProtocol](multiplexprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
