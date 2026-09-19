> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/l2norm(epsilon:)

# l2Norm(epsilon:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an L2 spatial normalization operation to the current graph.

## Declaration

```swift
func l2Norm(epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `epsilon`: The epsilon value that the function uses to avoid division by zero.

<a id="discussion"></a>

## Discussion

This function performs `y = x / sqrt(sum_square(x) + epsilon)`.
