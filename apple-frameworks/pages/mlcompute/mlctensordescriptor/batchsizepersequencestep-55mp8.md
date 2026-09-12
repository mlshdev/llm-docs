> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/batchsizepersequencestep-55mp8](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/batchsizepersequencestep-55mp8)

# batchSizePerSequenceStep

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The batch size for each sequence.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * batchSizePerSequenceStep;
```

<a id="Discussion"></a>

## Discussion

The framework only populates this value when [sequenceLengths](sequencelengths-3ntsa.md) is valid. The length of this array is equal to the maximum sequence length in `sequenceLengths`; that’s `sequenceLengths[0]` when [sortedSequences](sortedsequences.md) is `YES`.

## See Also

### Inspecting Tensor Descriptors

- [dataType](datatype.md): Deprecated. The tensor data type.
- [dimensionCount](dimensioncount.md): Deprecated. The number of dimensions in the tensor.
- [shape](shape-91vng.md): Deprecated. An array that contains the size in each dimension.
- [stride](stride-3ydik.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](sequencelengths-3ntsa.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
