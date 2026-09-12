> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/sparseparameters](https://developer.apple.com/documentation/accelerate/bnns/sparseparameters)

# BNNS.SparseParameters

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A data structure that provides a hint to the sparsity function.

> Use the BNNSGraph API instead.

## Declaration

```swift
struct SparseParameters
```

## Topics

### Creating a Sparse Parameters Structure

- [init(type:ratio:targetSystem:)](sparseparameters/init%28type_ratio_targetsystem_%29.md): Deprecated. Returns a new sparse parameters structure.

### Inspecting the Properties of a Sparse Parameters Structure

- [ratio](sparseparameters/ratio.md): Deprecated. The sparsity ratio expressed as the numerator and the denominator.
- [targetSystem](sparseparameters/targetsystem.md): Deprecated. The target system.
- [type](sparseparameters/type.md): Deprecated. An enumeration that specifies special patterns, if any, in the sparsity.

## See Also

### Sparse layers

- [BNNSNDArrayGetDataSize(\_:)](../bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.
- [BNNS.SparseLayout](sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](../bnnssparsitytypeunstructured.md)
