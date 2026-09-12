> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/init(descriptor:)](https://developer.apple.com/documentation/coreai/ndarray/init(descriptor:))

# init(descriptor:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an array with the shape and preferred strides from the specified descriptor.

## Declaration

```swift
init(descriptor: consuming NDArrayDescriptor)
```

## Parameters

- `descriptor`: The descriptor that defines the array’s shape and scalar type.

<a id="discussion"></a>

## Discussion

The resulting array may not have a contiguous layout. The strides match the values returned by the descriptor’s preferred strides, so `contiguousElements` on a view of this array may return `nil`. In that case, use `withUnsafePointer` or `withUnsafeMutablePointer` to access the data while respecting the strides.

If the descriptor has an [NDArray.InterleaveLayout](interleavelayout-swift.struct.md), the resulting ndArray will carry that interleave metadata. See [NDArray.InterleaveLayout](interleavelayout-swift.struct.md) for details on how interleaved layouts affect stride semantics.

The descriptor’s [hasDynamicShape](../ndarraydescriptor/hasdynamicshape.md) must be `false`. If the descriptor has dynamic shapes, call [resolvingDynamicDimensions(\_:)](../ndarraydescriptor/resolvingdynamicdimensions%28__%29.md) first.

## See Also

### Creating an array

- [init(shape:scalarType:)](init%28shape_scalartype_%29.md): Creates an array with the specified shape and scalar type.
- [init(shape:scalarType:strides:)](init%28shape_scalartype_strides_%29.md): Creates an array with the specified shape, scalar type, and strides.
- [init(shape:scalarType:strides:interleaveLayout:)](init%28shape_scalartype_strides_interleavelayout_%29.md): Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.
- [init(scalars:shape:)](init%28scalars_shape_%29.md): Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.
