> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/options/maximummessagesize](https://developer.apple.com/documentation/network/nwprotocolwebsocket/options/maximummessagesize)

# maximumMessageSize

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum allowed message size, in bytes, to be received by the WebSocket connection.

## Declaration

```swift
var maximumMessageSize: Int { get set }
```

## See Also

### Configuring WebSocket Options

- [init(\_:)](init%28__%29.md): Initializes a default set of WebSocket connection options.
- [NWProtocolWebSocket.Version](../version.md): Supported versions of the WebSocket protocol.
- [autoReplyPing](autoreplyping.md): A Boolean indicating whether the connection automatically replies to Ping messages instead of delivering them to you.
