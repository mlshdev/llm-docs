> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/topk(_:axis:findlargest:)

# topK(\_:axis:findLargest:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a top-k operation to the current graph.

## Declaration

```swift
func topK(_ k: Int, axis: Int, findLargest: Bool) -> (values: BNNSGraph.Builder.Tensor<T>, indices: BNNSGraph.Builder.Tensor<Int32>)
```

<a id="discussion"></a>

## Discussion

The output of this graph is a pair of tensors `(values, indices)` that contains the top-k values and indices from the tensor from the given dimension. If `largest` is `true`, then output the largest `k` values and their corresponding indices, otherwise output the smallest.
