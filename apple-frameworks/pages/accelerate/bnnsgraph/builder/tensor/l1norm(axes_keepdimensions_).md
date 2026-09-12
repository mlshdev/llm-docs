> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/l1norm(axes:keepdimensions:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/l1norm(axes:keepdimensions:))

# l1Norm(axes:keepDimensions:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a sum-of-absolutes reduction operation along the given axis operation to the current graph.

## Declaration

```swift
func l1Norm(axes: [Int], keepDimensions: Bool) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `keepDimensions`: A Boolean value that specifies that the operation keeps the reduced dimension with a size of `1`.
