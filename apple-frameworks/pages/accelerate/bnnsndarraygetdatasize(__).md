> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarraygetdatasize(_:)](https://developer.apple.com/documentation/accelerate/bnnsndarraygetdatasize(_:))

# BNNSNDArrayGetDataSize(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the size, in bytes, that an array descriptor requires.

## Declaration

```swift
func BNNSNDArrayGetDataSize(_ array: UnsafePointer<BNNSNDArrayDescriptor>) -> Int
```

## Parameters

- `array`: The array descriptor.

<a id="return-value"></a>

## Return Value

The size of the array descriptor.

<a id="Discussion"></a>

## Discussion

Use this function to calcluate the size of the workspace that the [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md) and [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md) require.

## See Also

### Sparse layers

- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](bnns/fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.
- [BNNS.SparseParameters](bnns/sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.
- [BNNS.SparseLayout](bnns/sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](bnns/sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)

# BNNSNDArrayGetDataSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the size, in bytes, that an array descriptor requires.

## Declaration

```objectivec
size_t BNNSNDArrayGetDataSize(const BNNSNDArrayDescriptor *array);
```

## Parameters

- `array`: The array descriptor.

<a id="return-value"></a>

## Return Value

The size of the array descriptor.

<a id="Discussion"></a>

## Discussion

Use this function to calcluate the size of the workspace that the [BNNSNDArrayFullyConnectedSparsifySparseCOO](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md) and [BNNSNDArrayFullyConnectedSparsifySparseCSR](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md) require.

## See Also

### Sparse layers

- [BNNSNDArrayFullyConnectedSparsifySparseCOO](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSNDArrayFullyConnectedSparsifySparseCSR](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md): Deprecated. Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)
