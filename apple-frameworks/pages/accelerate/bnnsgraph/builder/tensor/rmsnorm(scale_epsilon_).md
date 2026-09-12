> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/rmsnorm(scale:epsilon:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/rmsnorm(scale:epsilon:))

# rmsNorm(scale:epsilon:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an RMS spatial normalization operation to the current graph.

## Declaration

```swift
func rmsNorm(scale: some BNNSGraph.Builder.OperationParameter<T>, epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `scale`: The scale.
- `epsilon`: The epsilon value that the function uses to avoid division by zero.

<a id="discussion"></a>

## Discussion

This function performs `y = x / sqrt(sum_square(x) / size(x) + epsilon) * scale`.
