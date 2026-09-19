> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/minimum(axes:keepdimensions:)

# minimum(axes:keepDimensions:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a minimum reduction operation along the given axis operation to the current graph.

## Declaration

```swift
func minimum(axes: [Int], keepDimensions: Bool) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `axes`: The axis over which the operation computes the minimum.
- `keepDimensions`: A Boolean value that specifies that the operation keeps the reduced dimension with a size of `1`.
