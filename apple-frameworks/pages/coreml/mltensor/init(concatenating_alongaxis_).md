> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/init(concatenating:alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/init(concatenating:alongaxis:))

# init(concatenating:alongAxis:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Concatenates `tensors` along the `axis` dimension.

## Declaration

```swift
init(concatenating tensors: some Collection<MLTensor>, alongAxis axis: Int = 0)
```

## Parameters

- `tensors`: The tensors to concatenate. All tensors must have the same rank and all dimensions except `axis` must be equal.
- `axis`: The axis along which to concatenate. Negative values wrap around but must be in the range `[-rank, rank)`, where `rank` is the rank of the provided tensors.

<a id="discussion"></a>

## Discussion

For example:

```swift
// t1 is [[1, 2, 3], [4, 5, 6]]
// t2 is [[7, 8, 9], [10, 11, 12]]
MLTensor(concatenating: [t1, t2]) // is [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
MLTensor(concatenating: [t1, t2], alongAxis: 1) // is [[1, 2, 3, 7, 8, 9], [4, 5, 6, 10, 11, 12]]

// t3 has shape [2, 3]
// t4 has shape [2, 3]
MLTensor(concatenating: [t3, t4]) // has shape [4, 3]
MLTensor(concatenating: [t3, t4], alongAxis: 1) // has shape [2, 6]
```

> **Note**

> If you are concatenating along a new axis consider using `MLTensor(stacking:alongAxis:)`.

## See Also

### Creating a tensor

- [init(\_:)](init%28__%29.md): Creates a one-dimensional tensor from scalars.
- [init(\_:alongAxis:)](init%28__alongaxis_%29.md): Creates a tensor by stacking the given tensors along the specified axis.
- [init(\_:scalarType:)](init%28__scalartype_%29.md): Creates a one-dimensional tensor from scalars.
- [init(bytesNoCopy:shape:scalarType:deallocator:)](init%28bytesnocopy_shape_scalartype_deallocator_%29.md): Creates a tensor with memory content without copying the bytes.
- [init(linearSpaceFrom:through:count:)](init%28linearspacefrom_through_count_%29.md): Creates a one-dimensional tensor representing a sequence from a starting value, up to and including an end value, spaced evenly to generate the number of values specified.
- [init(linearSpaceFrom:through:count:scalarType:)](init%28linearspacefrom_through_count_scalartype_%29.md): Creates a one-dimensional tensor representing a sequence from a starting value, up to and including an end value, spaced evenly to generate the number of values specified.
- [init(ones:scalarType:)](init%28ones_scalartype_%29.md): Creates a tensor with all scalars set to ones.
- [init(randomNormal:mean:standardDeviation:seed:scalarType:)](init%28randomnormal_mean_standarddeviation_seed_scalartype_%29.md): Creates a tensor with the specified shape, randomly sampling scalar values from a normal distribution.
- [init(randomUniform:in:seed:scalarType:)](init%28randomuniform_in_seed_scalartype_%29.md): Creates a tensor with the specified shape, randomly sampling scalar values from a uniform distribution in `bounds`.
- [init(rangeFrom:to:by:)](init%28rangefrom_to_by_%29.md): Creates a one-dimensional tensor representing a sequence from a starting value to, but not including, an end value, stepping by the specified amount.
- [init(rangeFrom:to:by:scalarType:)](init%28rangefrom_to_by_scalartype_%29.md): Creates a one-dimensional tensor representing a sequence from a starting value to, but not including, an end value, stepping by the specified amount.
- [init(repeating:shape:)](init%28repeating_shape_%29.md): Creates a tensor with the specified shape and a single, repeated scalar value.
- [init(repeating:shape:scalarType:)](init%28repeating_shape_scalartype_%29.md): Creates a tensor with the specified shape and a single, repeated scalar value.
- [init(shape:data:scalarType:)](init%28shape_data_scalartype_%29.md): Creates a tensor by copying the given block of data.
- [init(shape:scalars:)](init%28shape_scalars_%29.md): Creates a tensor with the specified shape and contiguous scalars in first-major order.
