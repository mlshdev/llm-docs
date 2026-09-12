> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tlv/init(type:length:_:)-7awe](https://developer.apple.com/documentation/network/tlv/init(type:length:_:)-7awe)

# init(type:length:\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create TLV with the specified sizes for the type and length fields.

## Declaration

```swift
init<T, L, BelowProtocol>(type: T.Type, length: L.Type, @ProtocolStackBuilder<BelowProtocol> _ builder: () -> BelowProtocol) where T : Sendable, T : UnsignedInteger, L : Sendable, L : UnsignedInteger, BelowProtocol : MessageProtocol
```

## Parameters

- `type`: The object type to use for the `type` field.
- `length`: The object type to use for the `length` field.
- `builder`: The protocol stack below TLV.
