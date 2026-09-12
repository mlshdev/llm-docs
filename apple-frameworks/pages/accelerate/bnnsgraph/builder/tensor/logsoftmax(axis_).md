> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/logsoftmax(axis:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/logsoftmax(axis:))

# logSoftmax(axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a log-softmax along the given axis operation to the current graph.

## Declaration

```swift
func logSoftmax(axis: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `axis`: The axis over which the operation computes softmax.
