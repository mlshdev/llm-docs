> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/init(converting:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/init(converting:))

# init(converting:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Initialize by converting a MLMultiArray of different scalar type.

## Declaration

```swift
init(converting multiArray: MLMultiArray)
```

## Parameters

- `multiArray`: MLMultiArray object

<a id="discussion"></a>

## Discussion

Converting a floating number to an integer uses rounding-towards-zero method.

When necessary, the source values are truncated to fit the destination type, but the behavior is undefined if the source value is too large, too small, or otherwise not representable in the destination type.

## See Also

### Creating a shaped array type from another type

- [init(\_:)](init%28__%29.md): Creates a shaped array type from a multiarray.
