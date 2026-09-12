> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken/encode(to:)](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken/encode(to:))

# encode(to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

Writes the token’s data into an encoder.

## Declaration

```swift
final func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

If the value fails to encode anything, `encoder` will encode an empty keyed container. This function throws an [Error](https://developer.apple.com/documentation/swift/error) if any values are invalid for the given encoder’s format.

## See Also

### Serializing tokens

- [init(from:)](init%28from_%29.md): Creates a new instance from a decoder.
