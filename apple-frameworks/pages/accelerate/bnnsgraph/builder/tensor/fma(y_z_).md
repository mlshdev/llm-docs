> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/fma(y:z:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/fma(y:z:))

# fma(y:z:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds an element-wise fused multiply-add operation to the current graph.

## Declaration

```swift
func fma(y: some BNNSGraph.Builder.OperationParameter<T>, z: some BNNSGraph.Builder.OperationParameter<T>) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `y`: The `y` in  `x * y + z`.
- `z`: The `z` in  `x * y + z`.

<a id="discussion"></a>

## Discussion

This function treats the current tensor as `x` in `x * y + z`.
