> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/gathernd(indices:batchdimensioncount:)

# gatherND(indices:batchDimensionCount:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a gather-nd operation to the current graph.

## Declaration

```swift
func gatherND(indices: some BNNSGraph.Builder.OperationParameter<Int32>, batchDimensionCount: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `indices`: The indices that the operation gathers.
- `batchDimensionCount`: The number of additional leading dimensions.

<a id="discussion"></a>

## Discussion

Register a gather-nd op, which indexes `self` at the coordinates provided in `indices`. In particular, output `y` such that `y[i...] = self[indices[i..., :]]`.

`indices` can be viewed as a `rank(indices)-1`-rank tensor of coordinates into `self`. `batchDimensionCount` specifies the number of additional leading dimensions present in both `selfx` and `indices` which should be only used for a batch processing loop.
