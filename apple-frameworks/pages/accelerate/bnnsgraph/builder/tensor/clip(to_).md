> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/clip(to:)

# clip(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an element-wise clip operation to the current graph.

## Declaration

```swift
func clip(to bounds: ClosedRange<Float>) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `bounds`: The bounds that the operations clips the values to.
