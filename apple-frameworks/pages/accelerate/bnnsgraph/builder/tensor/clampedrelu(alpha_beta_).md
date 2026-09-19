> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/clampedrelu(alpha:beta:)

# clampedReLU(alpha:beta:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a Clamped Rectified Linear Unit (ReLU) activation operation to the current graph.

## Declaration

```swift
func clampedReLU(alpha: Float, beta: Float) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `alpha`: The `alpha` value.
- `beta`: The `beta` value.
