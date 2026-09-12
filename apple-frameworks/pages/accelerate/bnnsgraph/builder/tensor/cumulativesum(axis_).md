> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/cumulativesum(axis:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/cumulativesum(axis:))

# cumulativeSum(axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a cumulative sum operation to the the graph.

## Declaration

```swift
func cumulativeSum(axis: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `axis`: The axis over which the operation performs the cumulative sum.
