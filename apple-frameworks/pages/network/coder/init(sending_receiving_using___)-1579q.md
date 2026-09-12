> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/coder/init(sending:receiving:using:_:)-1579q](https://developer.apple.com/documentation/network/coder/init(sending:receiving:using:_:)-1579q)

# init(sending:receiving:using:\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a Coder protocol

## Declaration

```swift
init<BelowProtocol>(sending: Sending.Type, receiving: Receiving.Type, using: CoderType, @ProtocolStackBuilder<BelowProtocol> _ builder: () -> BelowProtocol) where BelowProtocol : StreamProtocol
```

## Parameters

- `sending`: The Codable type that will be sent.
- `receiving`: The Codable type that will be received.
- `using`: The NetworkCoder that will be used to encode and decode.
- `builder`: The protocol stack below Coder.
