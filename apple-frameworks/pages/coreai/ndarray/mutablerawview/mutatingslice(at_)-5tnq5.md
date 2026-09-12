> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview/mutatingslice(at:)-5tnq5](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview/mutatingslice(at:)-5tnq5)

# mutatingSlice(at:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

## Declaration

```swift
@export(implementation) mutating func mutatingSlice<let indexRank : Int>(at ranges: [indexRank of any NDArray.RangeExpression]) -> NDArray.MutableRawView
```

## Parameters

- `ranges`: The range expressions describing where to slice along each dimension. `indexRank` must be ≤ `rank`. Unspecified trailing dimensions are assumed to be `.all`.

<a id="discussion"></a>

## Discussion

For example if you have a 3D NDArray and want to increment a specific region, you can slice that region, reintroduce the scalar type, and then access a span over it (or use `withUnsafeMutablePointer` if not contiguous).

```swift
/// Updates the desired channel and range of rows
func incrementRegion(
  of mutableRawView: inout NDArray.MutableRawView,
  channel: Int,
  startRow: Int,
  endRow: Int
) {
  var region = mutableRawView.mutatingSlice(at: [channel, startRow..<endRow, .all]).view(as: Float.self)
  var mutableSpan = region.contiguousElements! // contiguous region expected in this case

  for i in mutableSpan.indices {
    mutableSpan[i] += 1
  }
}
```

## See Also

### Slicing the view

- [slice(at:)](slice%28at_%29-47fbq.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](slice%28at_%29-82sdj.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutatingslice%28at_%29-5ts4w.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
