> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/init(shape:scalartype:strides:interleavelayout:)](https://developer.apple.com/documentation/coreai/ndarray/init(shape:scalartype:strides:interleavelayout:))

# init(shape:scalarType:strides:interleaveLayout:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.

## Declaration

```swift
init(shape: [Int], scalarType: NDArray.ScalarType, strides: [Int], interleaveLayout: NDArray.InterleaveLayout)
```

## Parameters

- `shape`: The length of each dimension of the ndArray.
- `scalarType`: The type of elements in the ndArray.
- `strides`: The strides of the ndArray.
- `interleaveLayout`: Which dimension is interleaved and by what factor. See [NDArray.InterleaveLayout](interleavelayout-swift.struct.md).

<a id="discussion"></a>

## Discussion

`shape` and `strides` must have the same number of elements.

## See Also

### Creating an array

- [init(shape:scalarType:)](init%28shape_scalartype_%29.md): Creates an array with the specified shape and scalar type.
- [init(shape:scalarType:strides:)](init%28shape_scalartype_strides_%29.md): Creates an array with the specified shape, scalar type, and strides.
- [init(scalars:shape:)](init%28scalars_shape_%29.md): Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.
- [init(descriptor:)](init%28descriptor_%29.md): Creates an array with the shape and preferred strides from the specified descriptor.
