> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkchannel](https://developer.apple.com/documentation/network/networkchannel)

# NetworkChannel

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A base class supporting sending and recieving data through an arbitrary network channel.

## Declaration

```swift
class NetworkChannel<ApplicationProtocol> where ApplicationProtocol : NetworkProtocolOptions
```

<a id="overview"></a>

## Overview

The interface exposed by this type (and any derived classes) is dependent on the generic ApplicationProtocol parameter.

## Topics

### Operators

- [==(\_:\_:)](networkchannel/==%28____%29.md): Compare two instances of NetworkChannel for equality

### Instance Properties

- [debugDescription](networkchannel/debugdescription.md): Generate a string representation of NetworkChannel suitable for logging
- [id](networkchannel/id.md): The stable identity of the entity associated with this instance.
- [maximumDatagramSize](networkchannel/maximumdatagramsize.md): Retrieve the maximum datagram size that can be sent on the channel. Any datagrams sent should be less than or equal to this size.
- [messages](networkchannel/messages.md): Conforms when `ApplicationProtocol` conforms to `MessageProtocol`. Receive data from a connection as an async stream.
- [parameters](networkchannel/parameters.md)
- [state](networkchannel/state-swift.property.md): Access the current state of the connection

### Instance Methods

- [close(code:reason:metadata:)](networkchannel/close%28code_reason_metadata_%29.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send a WebSocket close frame on a connection.
- [dataTransferReport()](networkchannel/datatransferreport%28%29.md): Start a data transfer report on a connection. The report begins capturing data when the connection moves to the .ready state, or when the report is created (whichever occurs last). This method will start the connection if it isn’t already started.
- [establishmentReport()](networkchannel/establishmentreport%28%29.md): Asynchronously request the establishment report for this connection. If called prior to the connection being in the .ready state, this method will wait until the connection becomes ready and then deliver the report. This method will start the connection if it isn’t already started.
- [metadata(definition:)](networkchannel/metadata%28definition_%29.md): Access connection-wide protocol metadata on the connection. This allows access to state for protocols like TCP and TLS that have long-term state.
- [onBetterPathUpdate(\_:)](networkchannel/onbetterpathupdate%28__%29.md): Conforms when `ApplicationProtocol` is `QUICStream`. A better path being available indicates that the system thinks there is a preferred path or interface to use, compared to the one this connection is actively using. As an example, the connection is established over an expensive cellular interface and an unmetered Wi-Fi interface is now available.
- [onPathUpdate(\_:)](networkchannel/onpathupdate%28__%29.md): Conforms when `ApplicationProtocol` is `QUICStream`. Set a closure to be called when the connection’s path has changed, which may be called multiple times until the connection is cancelled.
- [onViabilityUpdate(\_:)](networkchannel/onviabilityupdate%28__%29.md): Conforms when `ApplicationProtocol` is `QUICStream`. Set a closure to be called when the connection’s viability changes, which may be called multiple times until the connection is cancelled.
- [ping(\_:metadata:)](networkchannel/ping%28__metadata_%29.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send a ping frame on a connection.
- [pong(\_:metadata:)](networkchannel/pong%28__metadata_%29.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send a pong frame on a connection.
- [receive()](networkchannel/receive%28%29-3a115.md): Conforms when `ApplicationProtocol` conforms to `DatagramProtocol`. Receive data from a connection.
- [receive()](networkchannel/receive%28%29-3atum.md): Conforms when `ApplicationProtocol` is `TLV`. Receive data from a connection.
- [receive()](networkchannel/receive%28%29-5p11z.md): Conforms when `ApplicationProtocol` conforms to `NetworkProtocolOptions`. Receive an object from a connection.
- [receive()](networkchannel/receive%28%29-86md7.md): Conforms when `ApplicationProtocol` is `WebSocket`. Receive data from a connection.
- [receive()](networkchannel/receive%28%29-8jbul.md): Conforms when `ApplicationProtocol` conforms to `NetworkProtocolOptions`. Receive data on a connection.
- [receive(as:)](networkchannel/receive%28as_%29.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Receive data from a connection as a fixed width integer.
- [receive(atLeast:atMost:)](networkchannel/receive%28atleast_atmost_%29.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Receive data from a connection
- [receive(exactly:)](networkchannel/receive%28exactly_%29.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Receive data from a connection.
- [send(\_:endOfStream:metadata:)](networkchannel/send%28__endofstream_metadata_%29-4f2l0.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Send fixed width integer on a connection. This may be called before the connection is ready, in which case the send will be enqueued until the connection is ready to send.
- [send(\_:endOfStream:metadata:)](networkchannel/send%28__endofstream_metadata_%29-79bb6.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Send data on a connection.
- [send(\_:lastMessage:metadata:other:)](networkchannel/send%28__lastmessage_metadata_other_%29.md): Conforms when `ApplicationProtocol` conforms to `NetworkProtocolOptions`. Send data on a connection.
- [send(\_:metadata:)](networkchannel/send%28__metadata_%29-3r1av.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send binary frame on a WebSocket connection.
- [send(\_:metadata:)](networkchannel/send%28__metadata_%29-42nkz.md): Conforms when `ApplicationProtocol` conforms to `DatagramProtocol`. Send data on a UDP connection.
- [send(\_:metadata:)](networkchannel/send%28__metadata_%29-4rxt1.md): Conforms when `ApplicationProtocol` conforms to `NetworkProtocolOptions`. Send data on a connection.
- [send(\_:metadata:)](networkchannel/send%28__metadata_%29-5ec48.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send a text frame on a WebSocket connection.
- [send(\_:type:lastMessage:metadata:)](networkchannel/send%28__type_lastmessage_metadata_%29.md): Conforms when `ApplicationProtocol` is `TLV`. Send data on a connection.
- [sendIdempotent(\_:endOfStream:metadata:)](networkchannel/sendidempotent%28__endofstream_metadata_%29-4bo5u.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Send data idempotently on a connection.
- [sendIdempotent(\_:endOfStream:metadata:)](networkchannel/sendidempotent%28__endofstream_metadata_%29-6cko0.md): Conforms when `ApplicationProtocol` conforms to `StreamProtocol`. Send data idempotently on a connection.
- [sendIdempotent(\_:metadata:)](networkchannel/sendidempotent%28__metadata_%29-37eiq.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send an idempotent text frame on a WebSocket connection.
- [sendIdempotent(\_:metadata:)](networkchannel/sendidempotent%28__metadata_%29-6tubc.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send an idempotent binary frame on a WebSocket connection.
- [sendIdempotent(\_:type:lastMessage:metadata:)](networkchannel/sendidempotent%28__type_lastmessage_metadata_%29.md): Conforms when `ApplicationProtocol` is `TLV`. Send idempotent data on a connection.
- [startReceive(\_:)](networkchannel/startreceive%28__%29.md): Conforms when `ApplicationProtocol` is `WebSocket`. Receive partial data from a connection.
- [startSend(\_:metadata:handler:)](networkchannel/startsend%28__metadata_handler_%29-15tt3.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send partial text on a connection.
- [startSend(\_:metadata:handler:)](networkchannel/startsend%28__metadata_handler_%29-5xhjv.md): Conforms when `ApplicationProtocol` is `WebSocket`. Send partial binary data on a connection.

### Enumerations

- [NetworkChannel.State](networkchannel/state-swift.enum.md)

## Relationships

### Inherited By

- [NetworkConnection](networkconnection.md)
- [QUIC.Datagrams](quic/datagrams.md)
- [QUIC.Stream](quic/stream.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
