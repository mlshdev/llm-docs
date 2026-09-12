> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/hardsigmoid(alpha:beta:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/hardsigmoid(alpha:beta:))

# hardSigmoid(alpha:beta:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a hard sigmoid activation operation to the current graph.

## Declaration

```swift
func hardSigmoid(alpha: Float, beta: Float) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `alpha`: The `alpha` value.
- `beta`: The `beta` value.
