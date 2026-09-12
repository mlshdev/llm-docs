> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/channelnorm(weight:bias:epsilon:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/channelnorm(weight:bias:epsilon:))

# channelNorm(weight:bias:epsilon:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a channel normalization operation to the current graph.

## Declaration

```swift
func channelNorm(weight: some BNNSGraph.Builder.OperationParameter<T>, bias: some BNNSGraph.Builder.OperationParameter<T>, epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `weight`: The weight values.
- `bias`: The bias values.
- `epsilon`: The epsilon value that the function uses to avoid division by zero.

<a id="discussion"></a>

## Discussion

This function performs channel normalization of `self` with an affine transform using `weight` and `bias`. `weight` and `bias` must be one-dimensional and have size `self.shape[1]`. `self` must be at least three-dimensional.
