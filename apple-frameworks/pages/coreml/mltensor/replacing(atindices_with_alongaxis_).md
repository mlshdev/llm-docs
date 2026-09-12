> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/replacing(atindices:with:alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/replacing(atindices:with:alongaxis:))

# replacing(atIndices:with:alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Replaces slices along the specified indices with the given replacement values.

## Declaration

```swift
func replacing(atIndices indices: MLTensor, with replacement: some MLTensorScalar, alongAxis axis: Int) -> MLTensor
```

## Parameters

- `indices`: A 32-bit integer tensor containing indices to scatter values from `replacement`. `indices` must have the same shape as `self` except at `axis`. Must be in the range `[-rank, rank)`.
- `replacement`: The replacement value.
- `axis`: The axis to scatter to.

<a id="return-value"></a>

## Return Value

The updated tensor.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [2, 3], scalars: [
    10, 30, 20,
    60, 40, 50
], scalarType: Float.self)
let i = MLTensor(shape: [2, 1], scalars: [
    1,
    0
], scalarType: Int32.self)
let y = x.replacing(with: 99, atIndices: i, alongAxis: 1)
// [[10, 99, 20],
//  [99, 40, 50]]
```

## See Also

### Replacing the tensor values

- [replacing(with:atIndices:alongAxis:)](replacing%28with_atindices_alongaxis_%29.md): Replaces slices along the specified indices with the given replacement values.
- [replacing(with:where:)](replacing%28with_where_%29.md): Returns a new tensor replacing values from `other` with the corresponding element in `self` where the associated element in `mask` is `true`.
