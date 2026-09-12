> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fullyconnectedlayer/sparsify(batchsize:inputlayout:inputdenseshape:inputvalues:output:sparseparameters:workspace:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/fullyconnectedlayer/sparsify(batchsize:inputlayout:inputdenseshape:inputvalues:output:sparseparameters:workspace:filterparameters:))

# sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func sparsify(batchSize: Int = 1, inputLayout layout: BNNS.SparseLayout, inputDenseShape: BNNSNDArrayDescriptor, inputValues: BNNSNDArrayDescriptor, output: inout BNNSNDArrayDescriptor, sparseParameters: BNNS.SparseParameters? = nil, workspace: UnsafeMutableRawBufferPointer? = nil, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `batchSize`: The number of input-output pairs to process.
- `layout`: The layout and nonzero indices of the sparse input.
- `inputDenseShape`: The dense shape of the sparse 2D input.
- `inputValues`: A 1D array descriptor that contains the nonzero input values.
- `output`: The destination array descriptor that contains the output-device-optimized BNNS Sparse Fully Connected weights.
- `sparseParameters`: An optional data structure that provides a hint to the sparsity function.
- `workspace`: An optional pointer to a memory region that the function uses as scratch space.
- `filterParameters`: The runtime filter parameters.

## See Also

### Sparse layers

- [BNNSNDArrayGetDataSize(\_:)](../../bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../../bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../../bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNS.SparseParameters](../sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.
- [BNNS.SparseLayout](../sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](../sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](../../bnnssparsitytypeunstructured.md)
