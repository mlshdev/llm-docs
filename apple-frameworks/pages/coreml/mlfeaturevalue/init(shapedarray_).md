> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(shapedarray:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(shapedarray:))

# init(shapedArray:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a feature value that contains a shaped array.

## Declaration

```swift
convenience init<Scalar>(shapedArray: MLShapedArray<Scalar>) where Scalar : MLShapedArrayScalar
```

## Parameters

- `shapedArray`: An [MLShapedArray](../mlshapedarray.md) instance.

## See Also

### Creating multidimensional feature values

- [init(multiArray:)](init%28multiarray_%29.md): Creates a feature value that contains a multidimensional array.
