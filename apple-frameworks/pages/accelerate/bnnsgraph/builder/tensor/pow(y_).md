> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/pow(y:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pow(y:))

# pow(y:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an element-wise power operation to the current graph.

## Declaration

```swift
func pow(y: some BNNSGraph.Builder.OperationParameter<T>) -> BNNSGraph.Builder.Tensor<T>
```

<a id="discussion"></a>

## Discussion

This function performs the operation `pow(self, y)`.

- Parameter `y`: The  the exponent values.
