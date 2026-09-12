> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/init(shape:scalartype:)](https://developer.apple.com/documentation/coreai/ndarray/init(shape:scalartype:))

# init(shape:scalarType:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an array with the specified shape and scalar type.

## Declaration

```swift
init(shape: [Int], scalarType: NDArray.ScalarType)
```

## Parameters

- `shape`: The length of each dimension.
- `scalarType`: The scalar element type.

<a id="discussion"></a>

## Discussion

This initializer creates an array with contiguous, row-major strides.

## See Also

### Creating an array

- [init(shape:scalarType:strides:)](init%28shape_scalartype_strides_%29.md): Creates an array with the specified shape, scalar type, and strides.
- [init(shape:scalarType:strides:interleaveLayout:)](init%28shape_scalartype_strides_interleavelayout_%29.md): Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.
- [init(scalars:shape:)](init%28scalars_shape_%29.md): Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.
- [init(descriptor:)](init%28descriptor_%29.md): Creates an array with the shape and preferred strides from the specified descriptor.
