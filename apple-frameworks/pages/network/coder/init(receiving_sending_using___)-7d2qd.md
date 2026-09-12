> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/coder/init(receiving:sending:using:_:)-7d2qd](https://developer.apple.com/documentation/network/coder/init(receiving:sending:using:_:)-7d2qd)

# init(receiving:sending:using:\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Coder protocol

## Declaration

```swift
init<BelowProtocol>(receiving: Receiving.Type, sending: Sending.Type, using: CoderType, @ProtocolStackBuilder<BelowProtocol> _ builder: () -> BelowProtocol) where BelowProtocol : DatagramProtocol
```

## Parameters

- `receiving`: The Codable type that will be received.
- `sending`: The Codable type that will be sent.
- `using`: The NetworkCoder that will be used to encode and decode.
- `builder`: The protocol stack below Coder.
