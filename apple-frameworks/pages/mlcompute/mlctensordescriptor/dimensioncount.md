> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordescriptor/dimensioncount](https://developer.apple.com/documentation/mlcompute/mlctensordescriptor/dimensioncount)

# dimensionCount (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of dimensions in the tensor.

## Declaration

```swift
var dimensionCount: Int { get }
```

## See Also

### Inspecting Tensor Descriptors

- [dataType](datatype.md): Deprecated. The tensor data type.
- [shape](shape-7i1rw.md): Deprecated. An array that contains the size in each dimension.
- [stride](stride-5mzlt.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](sequencelengths-3jdab.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
- [batchSizePerSequenceStep](batchsizepersequencestep-6iz59.md): Deprecated. The batch size for each sequence.

# dimensionCount (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of dimensions in the tensor.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger dimensionCount;
```

## See Also

### Inspecting Tensor Descriptors

- [dataType](datatype.md): Deprecated. The tensor data type.
- [shape](shape-91vng.md): Deprecated. An array that contains the size in each dimension.
- [stride](stride-3ydik.md): Deprecated. An array that contains the stride, in bytes, in each dimension.
- [tensorAllocationSizeInBytes](tensorallocationsizeinbytes.md): Deprecated. The allocation size, in bytes, for a tensor.
- [sequenceLengths](sequencelengths-3ntsa.md): Deprecated. An array that contains the variable lengths of sequences stored in the tensor.
- [sortedSequences](sortedsequences.md): Deprecated. A Boolean that indicates whether you provided the sequence lengths sorted in descending order.
- [batchSizePerSequenceStep](batchsizepersequencestep-55mp8.md): Deprecated. The batch size for each sequence.
