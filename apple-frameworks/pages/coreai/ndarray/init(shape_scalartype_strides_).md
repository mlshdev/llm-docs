> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/init(shape:scalartype:strides:)](https://developer.apple.com/documentation/coreai/ndarray/init(shape:scalartype:strides:))

# init(shape:scalarType:strides:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an array with the specified shape, scalar type, and strides.

## Declaration

```swift
init(shape: [Int], scalarType: NDArray.ScalarType, strides: [Int])
```

## Parameters

- `shape`: The length of each dimension.
- `scalarType`: The scalar element type.
- `strides`: The distance, in elements, between consecutive values along each dimension.

<a id="discussion"></a>

## Discussion

The `shape` and `strides` arrays must have the same number of elements.

## See Also

### Creating an array

- [init(shape:scalarType:)](init%28shape_scalartype_%29.md): Creates an array with the specified shape and scalar type.
- [init(shape:scalarType:strides:interleaveLayout:)](init%28shape_scalartype_strides_interleavelayout_%29.md): Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.
- [init(scalars:shape:)](init%28scalars_shape_%29.md): Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.
- [init(descriptor:)](init%28descriptor_%29.md): Creates an array with the shape and preferred strides from the specified descriptor.
