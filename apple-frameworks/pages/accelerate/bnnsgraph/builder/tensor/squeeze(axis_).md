> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/squeeze(axis:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/squeeze(axis:))

# squeeze(axis:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a squeeze operation in the graph.

## Declaration

```swift
func squeeze(axis: Int) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `axis`: The axis at which the operation removes the dimension

<a id="discussion"></a>

## Discussion

This operation deletes a dimension of size 1 at the given index.
