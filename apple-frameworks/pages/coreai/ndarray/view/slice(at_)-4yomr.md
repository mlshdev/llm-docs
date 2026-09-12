> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/view/slice(at:)-4yomr](https://developer.apple.com/documentation/coreai/ndarray/view/slice(at:)-4yomr)

# slice(at:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

## Declaration

```swift
@export(implementation) func slice<let indexRank : Int>(at ranges: [indexRank of any NDArray.RangeExpression]) -> NDArray.View<Element>
```

## Parameters

- `ranges`: The range expressions describing where to slice along each dimension. `indexRank` must be ≤ `rank`. Unspecified trailing dimensions are assumed to be `.all`.

<a id="discussion"></a>

## Discussion

For example if you have a 2D NDArray and want to compute the sum of a specific row, you can slice that row and then access a span over it (or use `withUnsafePointer` if not contiguous).

```swift
/// Returns the sum of the given row.
func sumOfRow(
  of view: borrowing NDArray.View<Float>,
  row: Int
) -> Float {
  let rowSlice = view.slice(at: [row])
  let elements = rowSlice.contiguousElements! // contiguous row expected in this case

  var sum: Float = 0
  for i in elements.indices {
    sum += elements[i]
  }
  return sum
}
```

## See Also

### Slicing the view

- [slice(at:)](slice%28at_%29-32gsh.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
