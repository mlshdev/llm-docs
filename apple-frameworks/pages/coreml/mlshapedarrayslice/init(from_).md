> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/init(from:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/init(from:))

# init(from:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an array slice from the passed decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The object that decodes the array slice for initialization.

## See Also

### Encoding and decoding an array slice

- [encode(to:)](encode%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Encodable`. Encodes the array slice.
