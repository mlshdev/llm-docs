> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/argmin(axis:keepdimension:)

# argMin(axis:keepDimension:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an argmin operation to the current graph.

## Declaration

```swift
func argMin(axis: Int, keepDimension: Bool) -> BNNSGraph.Builder.Tensor<Int32>
```

<a id="discussion"></a>

## Discussion

This function calculates the first index of the minimum value in the tensor.
