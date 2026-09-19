> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwprotocolwebsocket/options/autoreplyping

# autoReplyPing

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean indicating whether the connection automatically replies to Ping messages instead of delivering them to you.

## Declaration

```swift
var autoReplyPing: Bool { get set }
```

## See Also

### Configuring WebSocket Options

- [init(\_:)](init%28__%29.md): Initializes a default set of WebSocket connection options.
- [NWProtocolWebSocket.Version](../version.md): Supported versions of the WebSocket protocol.
- [maximumMessageSize](maximummessagesize.md): The maximum allowed message size, in bytes, to be received by the WebSocket connection.
