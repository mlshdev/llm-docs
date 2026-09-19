> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/matmul(transpose:other:transposeother:)

# matmul(transpose:other:transposeOther:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a matrix-matrix multiplication operation to the current graph.

## Declaration

```swift
func matmul(transpose: Bool = false, other: some BNNSGraph.Builder.OperationParameter<T>, transposeOther: Bool = false) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `transpose`: A Boolean value that specifies whether the operation transposes `self`.
- `other`: The other tensor to be multiplied.
- `transposeOther`: A Boolean value that specifies whether the operation transposes `other`.

<a id="discussion"></a>

## Discussion

This function treats `self` as the LHS of the matrix multiply operation.
