> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/websocket/init(_:)-5q53h

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create an instance of the WebSocket protocol.

## Declaration

```swift
init<BelowProtocol>(@ProtocolStackBuilder<BelowProtocol> _ builder: () -> BelowProtocol) where BelowProtocol : MessageProtocol
```

## Parameters

- `builder`: The protocol stack below WebSocket.
