> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/elu(alpha:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/elu(alpha:))

# elu(alpha:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an Exponential Linear Unit (ELU) activation operation to the current graph.

## Declaration

```swift
func elu(alpha: Float) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `alpha`: The `alpha` value.
