> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/options](https://developer.apple.com/documentation/network/nwprotocolwebsocket/options)

# NWProtocolWebSocket.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container of options for configuring how WebSocket is used on a connection.

## Declaration

```swift
class Options
```

## Topics

### Configuring WebSocket Options

- [init(\_:)](options/init%28__%29.md): Initializes a default set of WebSocket connection options.
- [NWProtocolWebSocket.Version](version.md): Supported versions of the WebSocket protocol.
- [autoReplyPing](options/autoreplyping.md): A Boolean indicating whether the connection automatically replies to Ping messages instead of delivering them to you.
- [maximumMessageSize](options/maximummessagesize.md): The maximum allowed message size, in bytes, to be received by the WebSocket connection.

### Configuring Client Handshakes

- [setAdditionalHeaders(\_:)](options/setadditionalheaders%28__%29.md): Sets additional HTTP header fields to be sent by the client during the WebSocket handshake.
- [setSubprotocols(\_:)](options/setsubprotocols%28__%29.md): Adds to the list of supported application protocols that will be presented to a WebSocket server during connection establishment.
- [skipHandshake](options/skiphandshake.md): A Boolean indicating whether the WebSocket protocol skips its handshake and begins framing data once the underlying connection is established.

### Handling Server Handshakes

- [setClientRequestHandler(\_:handler:)](options/setclientrequesthandler%28__handler_%29.md): Sets a handler to react to as a server to inbound WebSocket client handshakes.
- [NWProtocolWebSocket.Response](response.md): A WebSocket handshake reponse sent from a server to a client.

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating WebSocket Connections

- [definition](definition.md): The system definition of the WebSocket protocol.
