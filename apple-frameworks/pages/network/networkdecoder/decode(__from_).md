> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkdecoder/decode(_:from:)](https://developer.apple.com/documentation/network/networkdecoder/decode(_:from:))

# decode(\_:from:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Decode a decodable object from Data

## Declaration

```swift
func decode<T>(_ type: T.Type, from data: Data) throws -> T where T : Decodable
```

## Parameters

- `type`: The type to decode into.
- `data`: The data to use for decoding

<a id="return-value"></a>

## Return Value

An instance of type T or throws an error if unable to decode.
