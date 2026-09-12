> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolwebsocket/version](https://developer.apple.com/documentation/network/nwprotocolwebsocket/version)

# NWProtocolWebSocket.Version

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Supported versions of the WebSocket protocol.

## Declaration

```swift
enum Version
```

## Topics

### Versions

- [NWProtocolWebSocket.Version.version13](version/version13.md): Version 13 of the WebSocket protocol.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring WebSocket Options

- [init(\_:)](options/init%28__%29.md): Initializes a default set of WebSocket connection options.
- [autoReplyPing](options/autoreplyping.md): A Boolean indicating whether the connection automatically replies to Ping messages instead of delivering them to you.
- [maximumMessageSize](options/maximummessagesize.md): The maximum allowed message size, in bytes, to be received by the WebSocket connection.
