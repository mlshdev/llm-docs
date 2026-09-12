> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/coder/init(_:using:_:)-8o8kw](https://developer.apple.com/documentation/network/coder/init(_:using:_:)-8o8kw)

# init(\_:using:\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Coder protocol.

## Declaration

```swift
init<BelowProtocol>(_ type: Sending.Type, using: CoderType, @ProtocolStackBuilder<BelowProtocol> _ builder: () -> BelowProtocol) where BelowProtocol : StreamProtocol
```

## Parameters

- `type`: The Codable type that will be sent and received.
- `builder`: The protocol stack below Coder.
