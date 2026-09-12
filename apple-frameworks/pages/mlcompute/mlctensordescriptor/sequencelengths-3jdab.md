> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/sequencelengths-3jdab](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/sequencelengths-3jdab)

# sequenceLengths

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

An array that contains the variable lengths of sequences stored in the tensor.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
var sequenceLengths: [Int]? { get }
```

## See Also

### Inspecting Tensor Descriptors

- [dataType](datatype.md): Deprecated. The tensor data type.
- [dimensionCount](dimensioncount.md): Deprecated. The number of dimensions in the tensor.
- [shape](shape-7i1rw.md): Deprecated. An array that contains the size in each dimension.
- [stride](stride-5mzlt.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sortedSequences](sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
- [batchSizePerSequenceStep](batchsizepersequencestep-6iz59.md): Deprecated. The batch size for each sequence.
