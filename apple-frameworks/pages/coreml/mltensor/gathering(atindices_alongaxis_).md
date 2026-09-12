> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/gathering(atindices:alongaxis:)](https://developer.apple.com/documentation/coreml/mltensor/gathering(atindices:alongaxis:))

# gathering(atIndices:alongAxis:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a tensor by gathering slices along the given axis at the specified indices.

## Declaration

```swift
func gathering(atIndices indices: MLTensor, alongAxis axis: Int) -> MLTensor
```

## Parameters

- `indices`: A 32-bit integer tensor containing indices to gather at.
- `axis`: The dimension to gather along. Must be in the range `[-rank, rank)`.

<a id="return-value"></a>

## Return Value

The gathered tensor.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [3, 3], scalars: [
     0,  1,  2,
    10, 11, 12,
    20, 21, 22
], scalarType: Float.self)
let i = MLTensor([2, 1], scalarType: Int32.self)
let y0 = x.gathering(atIndices: i)
// [[20, 21, 22],
//  [10, 11, 12]]

let y1 = x.gathering(atIndices: i, alongAxis: 1)
// [[ 2,  1],
//  [12, 11],
//  [22, 21]]
```

## See Also

### Gathering slices

- [gathering(atIndices:)](gathering%28atindices_%29.md): Returns a tensor by gathering slices at the specified indices.
