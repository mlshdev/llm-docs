> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/init(scalars:shape:)](https://developer.apple.com/documentation/coreai/ndarray/init(scalars:shape:))

# init(scalars:shape:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.

## Declaration

```swift
init<Scalar>(scalars: some Sequence, shape: [Int]) where Scalar : BitwiseCopyable
```

## Parameters

- `scalars`: A sequence of scalars to be copied into the new ndArray. Note that `Scalar` must be a type that corresponds to a scalar type found on the [NDArray.ScalarType](scalartype-swift.enum.md) enum.
- `shape`: The shape of the new ndArray. The ndArray will be stored in row-major order and the scalars will be assigned in row-major order.

<a id="discussion"></a>

## Discussion

This utility will construct an ndArray with a copy of the contents of some sequence. For example to make an int32 ndArray with increasing values:

```swift
var ndArray = NDArray(scalars: (0..<4) as Range<Int32>, shape: [2, 2])
// The resulting NDArray has contents:
[[0, 1], [2, 3]]
```

## See Also

### Creating an array

- [init(shape:scalarType:)](init%28shape_scalartype_%29.md): Creates an array with the specified shape and scalar type.
- [init(shape:scalarType:strides:)](init%28shape_scalartype_strides_%29.md): Creates an array with the specified shape, scalar type, and strides.
- [init(shape:scalarType:strides:interleaveLayout:)](init%28shape_scalartype_strides_interleavelayout_%29.md): Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.
- [init(descriptor:)](init%28descriptor_%29.md): Creates an array with the shape and preferred strides from the specified descriptor.
