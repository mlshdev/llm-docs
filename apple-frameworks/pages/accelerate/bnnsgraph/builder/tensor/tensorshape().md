> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/tensorshape()](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/tensorshape())

# tensorShape()

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a shape operation to the current graph.

## Declaration

```swift
func tensorShape() -> BNNSGraph.Builder.Tensor<Int32>
```

<a id="discussion"></a>

## Discussion

This function returns a tensor that contains the shape of `self`.
