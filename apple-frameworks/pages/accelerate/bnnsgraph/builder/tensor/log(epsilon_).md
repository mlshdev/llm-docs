> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/log(epsilon:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/log(epsilon:))

# log(epsilon:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an element-wise log operation to the current graph.

## Declaration

```swift
func log(epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `epsilon`: The epsilon value.

<a id="discussion"></a>

## Discussion

This function calculates `log(self+epsilon)`.
