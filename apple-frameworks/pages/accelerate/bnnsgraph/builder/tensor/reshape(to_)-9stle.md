> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/reshape(to:)-9stle

# reshape(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a reshape operation to the current graph.

## Declaration

```swift
func reshape(to shape: [Int]) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `shape`: A tensor that specifies the new shape.
