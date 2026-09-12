> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/batchsizepersequencestep-6iz59](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/batchsizepersequencestep-6iz59)

# batchSizePerSequenceStep

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

The batch size for each sequence.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var batchSizePerSequenceStep: [Int]? { get }
```

<a id="Discussion"></a>

## Discussion

The framework only populates this value when [sequenceLengths](sequencelengths-3ntsa.md) is valid. The length of this array is equal to the maximum sequence length in `sequenceLengths`; that is, `sequenceLengths[0]` when [sortedSequences](sortedsequences.md) is `true`.

## See Also

### Inspecting Tensor Descriptors

- [dataType](datatype.md): Deprecated. The tensor data type.
- [dimensionCount](dimensioncount.md): Deprecated. The number of dimensions in the tensor.
- [shape](shape-7i1rw.md): Deprecated. An array that contains the size in each dimension.
- [stride](stride-5mzlt.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](sequencelengths-3jdab.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
