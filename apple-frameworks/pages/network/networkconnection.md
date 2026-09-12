> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkconnection](https://developer.apple.com/documentation/network/networkconnection)

# NetworkConnection

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Connect to an endpoint on the network to send and receive data.

## Declaration

```swift
final class NetworkConnection<ApplicationProtocol> where ApplicationProtocol : NetworkProtocolOptions
```

<a id="overview"></a>

## Overview

A connection handles establishment of any transport, security, and application-level protocols required to transmit and receive user data. Connections may make multiple establishment attempts before the connection is ready.

## Topics

### Initializers

- [init(to:using:)](networkconnection/init%28to_using_%29-182om.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`.
- [init(to:using:)](networkconnection/init%28to_using_%29-51aq2.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. Create a new connection to an endpoint, with protocol stack.
- [init(to:using:)](networkconnection/init%28to_using_%29-5e864.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`.
- [init(to:using:)](networkconnection/init%28to_using_%29-69glf.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`.
- [init(to:using:)](networkconnection/init%28to_using_%29-6yzx9.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. Create a new outbound connection to an endpoint, with parameters. The parameters determine the protocols to be used for the connection, and their options.
- [init(to:using:)](networkconnection/init%28to_using_%29-7gprx.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`.
- [init(to:using:)](networkconnection/init%28to_using_%29-907m0.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`.
- [init(to:using:)](networkconnection/init%28to_using_%29-9kq3t.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`.

### Instance Properties

- [applicationError](networkconnection/applicationerror.md): Conforms when `ApplicationProtocol` is `QUIC`. The QUIC application error code to send for the connection, or received from the peer.
- [currentPath](networkconnection/currentpath.md): Current path for the connection, which can be used to extract interface and effective endpoint information
- [datagrams](networkconnection/datagrams.md): Conforms when `ApplicationProtocol` is `QUIC`. Access connection-wide unreliable datagrams over QUIC. Subsequent accesses to this object will return the same reference. All incoming datagrams for the entire QUIC connection will be received on this `SubConnection` once invoked.
- [keepalive](networkconnection/keepalive.md): Conforms when `ApplicationProtocol` is `QUIC`. Set the QUIC connection keepalive interval.
- [localEndpoint](networkconnection/localendpoint.md)
- [negotiatedALPN](networkconnection/negotiatedalpn.md): Conforms when `ApplicationProtocol` is `QUIC`. Return the negotiated application protocol used when establishing the connection
- [remoteEndpoint](networkconnection/remoteendpoint.md)
- [remoteIdleTimeout](networkconnection/remoteidletimeout.md): Conforms when `ApplicationProtocol` is `QUIC`. Access the idle_timeout value in milliseconds received from the peer in the transport parameters.
- [remoteMaxStreamsBidirectional](networkconnection/remotemaxstreamsbidirectional.md): Conforms when `ApplicationProtocol` is `QUIC`. Get the maximum number of bidirectional streams advertised by peer that an application is allowed to create.
- [remoteMaxStreamsUnidirectional](networkconnection/remotemaxstreamsunidirectional.md): Conforms when `ApplicationProtocol` is `QUIC`. Get the maximum number of unidirectional streams advertised by peer that an application is allowed to create.
- [securityProtocolMetadata](networkconnection/securityprotocolmetadata.md): Conforms when `ApplicationProtocol` is `QUIC`. Access the sec_protocol_metadata_t for the QUIC Connection. See \<Security/SecProtocolMetadata.h\> for functions to further access security metadata.
- [usableDatagramFrameSize](networkconnection/usabledatagramframesize.md): Conforms when `ApplicationProtocol` is `QUIC`. Get the usable size of a datagram frame from a QUIC datagram flow.
- [wifiAware](networkconnection/wifiaware.md): Conforms when `ApplicationProtocol` conforms to `NetworkProtocolOptions`. Get the current connection information for Wi-Fi Aware if the connection is over Wi-Fi Aware, `nil` if it’s not over Wi-Fi Aware.

### Instance Methods

- [inboundStreams(\_:)](networkconnection/inboundstreams%28__%29.md): Conforms when `ApplicationProtocol` is `QUIC`. Handle inbound streams and provide a closure on which callback handlers will be executed. When the `NetworkConnection<QUIC>` state moves to `ready`, the internal listener is registered with the system and can receive incoming streams on the multiplexing instance. `inboundStreams` should only be called once on a `NetworkConnection<QUIC>`, and multiple calls to run will throw an exception.
- [inboundStreams(prepending:\_:)](networkconnection/inboundstreams%28prepending___%29.md): Conforms when `ApplicationProtocol` is `QUIC`. Handle inbound streams and provide a closure on which callback handlers will be executed. When the `NetworkConnection<QUIC>` state moves to `ready`, the internal listener is registered with the system and can receive incoming streams on the multiplexing instance. `inboundStreams` should only be called once on a `NetworkConnection<QUIC>`, and multiple calls to run will throw an exception.
- [onBetterPathUpdate(\_:)](networkconnection/onbetterpathupdate%28__%29-2h2wu.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`. A better path being available indicates that the system thinks there is a preferred path or interface to use, compared to the one this connection is actively using. As an example, the connection is established over an expensive cellular interface and an unmetered Wi-Fi interface is now available.
- [onBetterPathUpdate(\_:)](networkconnection/onbetterpathupdate%28__%29-7b4ue.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. A better path being available indicates that the system thinks there is a preferred path or interface to use, compared to the one this connection is actively using. As an example, the connection is established over an expensive cellular interface and an unmetered Wi-Fi interface is now available.
- [onPathUpdate(\_:)](networkconnection/onpathupdate%28__%29-2uoc8.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`. Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.
- [onPathUpdate(\_:)](networkconnection/onpathupdate%28__%29-6sn1s.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.
- [onStateUpdate(\_:)](networkconnection/onstateupdate%28__%29.md): Set a closure to be called when the connection’s state changes, which may be called multiple times until the connection is cancelled.
- [onViabilityUpdate(\_:)](networkconnection/onviabilityupdate%28__%29-13jwf.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`. Set a closure to be called when the connection’s viability changes, which may be called multiple times until the connection is cancelled.
- [onViabilityUpdate(\_:)](networkconnection/onviabilityupdate%28__%29-70awf.md): Conforms when `ApplicationProtocol` conforms to `OneToOneProtocol`. Set a closure to be called when the connection’s viability changes, which may be called multiple times until the connection is cancelled.
- [openStream(directionality:)](networkconnection/openstream%28directionality_%29.md): Conforms when `ApplicationProtocol` is `QUIC`. Initiate a new data stream over QUIC. When invoked with no parameters, the default stream type will be bidirectional. Unidirectional streams can be initiated by setting the optional `bidirectional` parameter to false.
- [openStream(directionality:\_:)](networkconnection/openstream%28directionality___%29.md): Conforms when `ApplicationProtocol` is `QUIC`. Initiate a new data stream over QUIC. When invoked with no parameters, the default stream type will be bidirectional. Unidirectional streams can be initiated by setting the optional `bidirectional` parameter to false.
- [start()](networkconnection/start%28%29.md): Conforms when `ApplicationProtocol` conforms to `MultiplexProtocol`. Initiate some action to open the connection on the network like making a handshake, initiating a multiplexing session, etc. Starts the connection, which will cause the connection to evaluate its path, do resolution, and try to become ready (connected). `NetworkConnection` establishment is asynchronous. `onStateUpdate` will be called when the state changes. If the connection cannot be established, the state will transition to `waiting` with an associated error describing the reason. If an unrecoverable error is encountered, the state will transition to `failed` with an associated error value. If the connection is established, the state will transition to `ready`.
- [tryNextEndpoint()](networkconnection/trynextendpoint%28%29.md): Cancel the currently connected endpoint, causing the connection to fall through to the next endpoint if available, or to go to the waiting state if no more endpoints are available.

## Relationships

### Inherits From

- [NetworkChannel](networkchannel.md)

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
