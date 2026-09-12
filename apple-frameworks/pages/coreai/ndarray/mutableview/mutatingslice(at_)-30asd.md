> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/mutatingslice(at:)-30asd](https://developer.apple.com/documentation/coreai/ndarray/mutableview/mutatingslice(at:)-30asd)

# mutatingSlice(at:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

## Declaration

```swift
@export(implementation) mutating func mutatingSlice<let indexRank : Int>(at ranges: [indexRank of any NDArray.RangeExpression]) -> NDArray.MutableView<Element>
```

## Parameters

- `ranges`: The range expressions describing where to slice along each dimension. `indexRank` must be ≤ `rank`. Unspecified trailing dimensions are assumed to be `.all`.

<a id="discussion"></a>

## Discussion

For example if you have a 3D NDArray and want to increment a specific region, you can slice that region and then access a span over it (or use `withUnsafeMutablePointer` if not contiguous).

```swift
/// Updates the desired channel and range of rows
func incrementRegion(
  of mutableView: inout NDArray.MutableView<Float>,
  channel: Int,
  startRow: Int,
  endRow: Int
) {
  var region = mutableView.mutatingSlice(at: [channel, startRow..<endRow, .all])
  var mutableSpan = region.contiguousElements! // contiguous region expected in this case

  for i in mutableSpan.indices {
    mutableSpan[i] += 1
  }
}
```

## See Also

### Slicing the view

- [slice(at:)](slice%28at_%29-50cpv.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](slice%28at_%29-qyjq.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutatingslice%28at_%29-9pmi4.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
