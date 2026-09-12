> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/argsort(axis:sortorder:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/argsort(axis:sortorder:))

# argSort(axis:sortOrder:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an argsort operation to the current graph.

## Declaration

```swift
func argSort(axis: Int, sortOrder: BNNSGraph.Builder.SortOrder) -> BNNSGraph.Builder.Tensor<Int32>
```

## Parameters

- `axis`: The axis over which the operation performs the sort.
- `sortOrder`: The sort order, either ascending or descending.

<a id="discussion"></a>

## Discussion

This function returns the indices into `self`ordered by the corresponding values.

For example, if `self` contains the values `[1, 4, 2, 3]`, the ascending indices are `[0, 2, 3, 1]`.
