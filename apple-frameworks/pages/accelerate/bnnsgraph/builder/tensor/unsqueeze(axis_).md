> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/unsqueeze(axis:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/unsqueeze(axis:))

# unsqueeze(axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an unsqueeze operation in the graph.

## Declaration

```swift
func unsqueeze(axis: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `axis`: The axis at which the operation inserts the dimension.

<a id="discussion"></a>

## Discussion

This operation creates a dimension of size 1 at the given index, i.e. the output tensor will have the new dimension of size 1 at the given index.
