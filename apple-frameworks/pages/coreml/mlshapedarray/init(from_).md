> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/init(from:)](https://developer.apple.com/documentation/coreml/mlshapedarray/init(from:))

# init(from:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a shaped array from a decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="Discussion"></a>

## Discussion

This initializer throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.

## See Also

### Encoding and decoding

- [encode(to:)](encode%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Encodable`. Encode a shaped array.
