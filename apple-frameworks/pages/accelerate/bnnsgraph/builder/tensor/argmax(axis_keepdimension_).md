> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/argmax(axis:keepdimension:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/argmax(axis:keepdimension:))

# argMax(axis:keepDimension:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an argmax operation to the current graph.

## Declaration

```swift
func argMax(axis: Int, keepDimension: Bool) -> BNNSGraph.Builder.Tensor<Int32>
```

<a id="discussion"></a>

## Discussion

This function calculates the first index of the maximum value in the tensor.
