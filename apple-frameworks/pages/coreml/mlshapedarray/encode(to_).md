> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/encode(to:)](https://developer.apple.com/documentation/coreml/mlshapedarray/encode(to:))

# encode(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Encode a shaped array.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The object to encode the shaped array.

## See Also

### Encoding and decoding

- [init(from:)](init%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Decodable`. Creates a shaped array from a decoder.
