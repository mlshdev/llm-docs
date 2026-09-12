> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sparselayout](https://developer.apple.com/documentation/accelerate/bnns/sparselayout)

# BNNS.SparseLayout

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Constants that specify standardized sparse layouts that BNNS can convert to opaque.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum SparseLayout
```

## Topics

### Enumeration Cases

- [BNNS.SparseLayout.coo(indices:)](sparselayout/coo%28indices_%29.md): Deprecated. The sparse coordinate list (COO) format.
- [BNNS.SparseLayout.csr(columnIndices:rowStarts:)](sparselayout/csr%28columnindices_rowstarts_%29.md): Deprecated. The compressed sparse row (CSR) format.

## See Also

### Sparse layers

- [BNNSNDArrayGetDataSize(\_:)](../bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.
- [BNNS.SparseParameters](sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.
- [BNNS.SparsityType](sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](../bnnssparsitytypeunstructured.md)
