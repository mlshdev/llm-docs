> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/gathering(atindices:)](https://developer.apple.com/documentation/coreml/mltensor/gathering(atindices:))

# gathering(atIndices:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a tensor by gathering slices at the specified indices.

## Declaration

```swift
func gathering(atIndices indices: MLTensor) -> MLTensor
```

## Parameters

- `indices`: A 32-bit integer tensor containing indices to gather at.

<a id="return-value"></a>

## Return Value

The gathered tensor.

<a id="discussion"></a>

## Discussion

The `indices` tensor is interpreted as a `(rank-1)` dimensional set of one-dimensional lookup vectors, for example:

```swift
let x = MLTensor(shape: [2, 2], scalars: [
    0,  1,
    10, 11
], scalarType: Float.self)
let i = MLTensor(shape: [2, 2], scalars: [
    0, 0,
    1, 1
], scalarType: Int32.self)
let y = x.gathering(atIndices: i)
// [ 0, 11]
```

If the one-dimensional lookup vectors do not give a full set of indices, the remaining indices are treated as a slice, for example:

```swift
let x = MLTensor(shape: [3, 3], scalars: [
    0,  1,  2,
    10, 11, 12,
    20, 21, 22
], scalarType: Float.self)
let i = MLTensor(shape: [3, 1], scalars: [
    2,
    1
], scalarType: Int32.self)
let y = x.gathering(atIndices: i)
// [[20 21 22]
//  [10 11 12]]
```

## See Also

### Gathering slices

- [gathering(atIndices:alongAxis:)](gathering%28atindices_alongaxis_%29.md): Returns a tensor by gathering slices along the given axis at the specified indices.
