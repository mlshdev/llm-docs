> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/websocket](https://developer.apple.com/documentation/network/websocket)

# WebSocket

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the WebSocket protocol.

## Declaration

```swift
struct WebSocket
```

<a id="overview"></a>

## Overview

Can be used to add WebSocket to a protocol stack and configure its options.

## Topics

### Initializers

- [init(\_:)](websocket/init%28__%29-5q53h.md): Create an instance of the WebSocket protocol.
- [init(\_:)](websocket/init%28__%29-7xsae.md): Create an instance of the WebSocket protocol.

### Instance Methods

- [additionalHeaders(\_:)](websocket/additionalheaders%28__%29.md): Set additional HTTP header fields to be sent by the client during the WebSocket handshake.
- [autoReplyPing(\_:)](websocket/autoreplyping%28__%29.md): Configure the WebSocket protocol to automatically reply to pings.
- [maximumMessageSize(\_:)](websocket/maximummessagesize%28__%29.md): Set the maximum allowed message size to be received by the WebSocket connection.
- [skipHandshake(\_:)](websocket/skiphandshake%28__%29.md): Configure the WebSocket protocol to skip the opening handshake and begin framing data as soon as the underlying connection is established.
- [subprotocols(\_:)](websocket/subprotocols%28__%29.md): Set the list of supported application protocols that will be presented to a WebSocket server during connection establishment.

## Relationships

### Conforms To

- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
