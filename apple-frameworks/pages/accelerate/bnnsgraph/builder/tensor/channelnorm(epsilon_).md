> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/channelnorm(epsilon:)

# channelNorm(epsilon:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a channel normalization operation to the current graph.

## Declaration

```swift
func channelNorm(epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `epsilon`: The epsilon value that the function uses to avoid division by zero.

<a id="discussion"></a>

## Discussion

This function performs channel normalization of `self`.`self` must be at least three-dimensional.
