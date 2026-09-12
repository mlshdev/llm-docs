> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/reshape(to:)-5oniw](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/reshape(to:)-5oniw)

# reshape(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a dynamic reshape operation to the current graph.

## Declaration

```swift
func reshape(to shape: some BNNSGraph.Builder.OperationParameter<Int32>) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `shape`: A tensor that specifies the new shape.

<a id="discussion"></a>

## Discussion

This function reshapes a tensor based on the values in `shape`.
