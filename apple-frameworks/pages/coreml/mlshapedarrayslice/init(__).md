> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/init(_:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/init(_:))

# init(\_:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a new MLShapedArraySlice using a `MLMultiArray` as a backing storage.

## Declaration

```swift
init(_ multiArray: MLMultiArray)
```

## Parameters

- `multiArray`: The `MLMultiArray` object.

<a id="discussion"></a>

## Discussion

Use this initializer to access `MLMultiArray` through `MLShapedArray` interface.

Mutating operations trigger copy-on-write. Non-mutating operations access the `MLMultiArray`’s backing storage including the pixel buffer.

## See Also

### Creating a shaped array slice from another type

- [init(concatenating:alongAxis:)](init%28concatenating_alongaxis_%29.md): Merges a sequence of shaped arrays into one shaped array along an axis.
