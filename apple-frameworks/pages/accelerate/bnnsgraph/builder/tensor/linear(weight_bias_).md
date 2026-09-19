> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/linear(weight:bias:)

# linear(weight:bias:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a linear transformation operation to the current graph.

## Declaration

```swift
func linear(weight: some BNNSGraph.Builder.OperationParameter<T>, bias: some BNNSGraph.Builder.OperationParameter<T>) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `weight`: The weight.
- `bias`: The bias.

<a id="discussion"></a>

## Discussion

This function treats `self` as `x` and `weight` as `A` in `y = xA^T + bias`.
