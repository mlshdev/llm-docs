> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/options/skiphandshake](https://developer.apple.com/documentation/network/nwprotocolwebsocket/options/skiphandshake)

# skipHandshake

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean indicating whether the WebSocket protocol skips its handshake and begins framing data once the underlying connection is established.

## Declaration

```swift
var skipHandshake: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This option should not be set when communicating with a generic WebSocket server or client. This option allows a custom handshake (or no handshake) to be implemented below the WebSocket layer when both client and server are coordinated.

## See Also

### Configuring Client Handshakes

- [setAdditionalHeaders(\_:)](setadditionalheaders%28__%29.md): Sets additional HTTP header fields to be sent by the client during the WebSocket handshake.
- [setSubprotocols(\_:)](setsubprotocols%28__%29.md): Adds to the list of supported application protocols that will be presented to a WebSocket server during connection establishment.
