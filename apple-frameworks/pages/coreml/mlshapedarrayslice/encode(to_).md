> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlshapedarrayslice/encode(to:)

# encode(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Encodes the array slice.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The object that encodes the array slice.

## See Also

### Encoding and decoding an array slice

- [init(from:)](init%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Decodable`. Creates an array slice from the passed decoder.
