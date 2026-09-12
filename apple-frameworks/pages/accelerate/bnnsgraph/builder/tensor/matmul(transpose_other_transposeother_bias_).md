> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/matmul(transpose:other:transposeother:bias:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/matmul(transpose:other:transposeother:bias:))

# matmul(transpose:other:transposeOther:bias:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a matrix-matrix multiplication operation to the current graph.

## Declaration

```swift
func matmul(transpose: Bool = false, other: some BNNSGraph.Builder.OperationParameter<T>, transposeOther: Bool = false, bias: some BNNSGraph.Builder.OperationParameter<T>) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `transpose`: A Boolean value that specifies whether the operation transposes `self`.
- `other`: The other tensor to be multiplied.
- `transposeOther`: A Boolean value that specifies whether the operation transposes `other`.
- `bias`: The bias.

<a id="discussion"></a>

## Discussion

This function treats `self` as the LHS of the matrix multiply operation.
