> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsndarrayfullyconnectedsparsifysparsecsr(_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsndarrayfullyconnectedsparsifysparsecsr(_:_:_:_:_:_:_:_:_:_:))

# BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSNDArrayFullyConnectedSparsifySparseCSR(_ in_dense_shape: UnsafePointer<BNNSNDArrayDescriptor>, _ in_column_indices: UnsafePointer<BNNSNDArrayDescriptor>, _ in_row_starts: UnsafePointer<BNNSNDArrayDescriptor>, _ in_values: UnsafePointer<BNNSNDArrayDescriptor>, _ out: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ sparse_params: UnsafePointer<BNNSSparsityParameters>?, _ batch_size: Int, _ workspace: UnsafeMutableRawPointer?, _ workspace_size: Int, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `in_dense_shape`: An array descriptor that specifies the dense shape (that is, the size and layout) of the input array.
- `in_column_indices`: A 1D array descriptor with the shape `[NNZ]` that contains the column indices of the nonzero values.
- `in_row_starts`: A 1D array descriptor with the shape `[row_size + 1]` that contains pointers to the start of each row. Set location `[0]` to `0`.
- `in_values`: A 1D array descriptor with the shape `[NNZ]` that contains the nonzero input values.
- `out`: On return, an array descriptor that contains device optimized BNNS sparse fully connected weights.
- `sparse_params`: An optional data structure that contains a hint to the sparsity pattern.
- `batch_size`: The expected batch size.
- `workspace`: An optional pointer to scratch memory that’s at least twice the size of the dense input. Set to `nil` to specify that BNNS allocates and frees the scratch memory it requires.
- `workspace_size`: The size, in bytes, of any scratch memory that you pass. If workspace is `nil`, this function ignores the `workspace_size` parameter.
- `filter_params`: The runtime filter parameters.

<a id="Discussion"></a>

## Discussion

The growing energy and performance costs of deep learning are driving its design towards more efficient models to minimize memory footprint and computational overhead. Sparsity is a widely used approach to deliver a significant reduction in model size, and to corresponding gains in computational, storage, and energy efficiency, without significant loss of accuracy.

Pruning is a fundamental technique that’s used to make parameters, such as weights, sparse. Pruning a parameter involves setting some of its values to zero and it’s only the nonzero values that are stored and participate in inference.

Frameworks that sparsify parameters prune values based on their magnitude and location. To gain the greatest improvement in performance, chunk pruned values together, to allow the CPU to skip reading an entire tile.

BNNS doesn’t directly support the standard sparse layouts coordinate list (COO) or compressed sparse row (CSR). Instead, BNNS provides functions that convert COO and CSR data to an optimized, opaque layout that you use with the existing machine learning primitives such as fully connected.

For example, the following diagonal, single-precision matrix requires 1024 bytes of storage:

```swift
 1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  3.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  4.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  5.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  6.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  7.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  8.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  9.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 10.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 12.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 13.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 14.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 15.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 16.0
```

You can represent the same values in CSR format as three arrays: the nonzero format as three arrays: the nonzero values, the column indices, and a third array that specifies where each row starts. In the following example, the zeroth item in the values array starts row `0`, the item at element `1` starts column `1`, and so on:

```swift
let weightsData: [Float] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let columnIndices: [Int32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let rowStarts: [Int32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

Pass the weights data, column indices, and row starts to [BNNSNDArrayFullyConnectedSparsifySparseCSR(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md) to generate the opaque sparse data for [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md).

```swift
let nnz = weightsData.count

var inputDenseShape = BNNSNDArrayDescriptor(dataType: BNNSDataType.float,
                                            shape: .matrixRowMajor(16, 16))
var inputColumnIndices = BNNSNDArrayDescriptor.allocate(initializingFrom: columnIndices,
                                                        shape: .vector(nnz))
var inputRowStarts = BNNSNDArrayDescriptor.allocate(initializingFrom: rowStarts,
                                                    shape: .vector(rowStarts.count))
var inputWeights = BNNSNDArrayDescriptor.allocate(initializingFrom: weightsData,
                                                  shape: .vector(nnz))

var sparsifiedWeights = BNNSNDArrayDescriptor()

var sparseParams = BNNSSparsityParameters()

BNNSNDArrayFullyConnectedSparsifySparseCSR(&inputDenseShape,
                                           &inputColumnIndices,
                                           &inputRowStarts,
                                           &inputWeights,
                                           &sparsifiedWeights,
                                           &sparseParams,
                                           1,
                                           nil, nil)
```

On return, `sparsifiedWeights` contains the weights that you pass to [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md). In this example, the data size of `sparsifiedWeights` is 144 bytes.

## See Also

### Sparse layers

- [BNNSNDArrayGetDataSize(\_:)](bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [sparsify(batchSize:inputLayout:inputDenseShape:inputValues:output:sparseParameters:workspace:filterParameters:)](bnns/fullyconnectedlayer/sparsify%28batchsize_inputlayout_inputdenseshape_inputvalues_output_sparseparameters_workspace_filterparameters_%29.md): Deprecated. Converts a sparse tensor from a standardized sparse layout to a device-specific sparse layout that Fully Connected uses.
- [BNNS.SparseParameters](bnns/sparseparameters.md): Deprecated. A data structure that provides a hint to the sparsity function.
- [BNNS.SparseLayout](bnns/sparselayout.md): Deprecated. Constants that specify standardized sparse layouts that BNNS can convert to opaque.
- [BNNS.SparsityType](bnns/sparsitytype.md): Deprecated. Constants that specify patterns in the sparsity.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)

# BNNSNDArrayFullyConnectedSparsifySparseCSR (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Converts a sparse tensor from the standardized compressed sparse row (CSR) layout to a device-specific sparse layout that BNNS fully connected layers use.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSNDArrayFullyConnectedSparsifySparseCSR(const BNNSNDArrayDescriptor *in_dense_shape, const BNNSNDArrayDescriptor *in_column_indices, const BNNSNDArrayDescriptor *in_row_starts, const BNNSNDArrayDescriptor *in_values, BNNSNDArrayDescriptor *out, const BNNSSparsityParameters *sparse_params, const size_t batch_size, void *workspace, const size_t workspace_size, const BNNSFilterParameters *filter_params);
```

## Parameters

- `in_dense_shape`: An array descriptor that specifies the dense shape (that is, the size and layout) of the input array.
- `in_column_indices`: A 1D array descriptor with the shape `[NNZ]` that contains the column indices of the nonzero values.
- `in_row_starts`: A 1D array descriptor with the shape `[row_size + 1]` that contains pointers to the start of each row. Set location `[0]` to `0`.
- `in_values`: A 1D array descriptor with the shape `[NNZ]` that contains the nonzero input values.
- `out`: On return, an array descriptor that contains device optimized BNNS sparse fully connected weights.
- `sparse_params`: An optional data structure that contains a hint to the sparsity pattern.
- `batch_size`: The expected batch size.
- `workspace`: An optional pointer to scratch memory that’s at least twice the size of the dense input. Set to `nil` to specify that BNNS allocates and frees the scratch memory it requires.
- `workspace_size`: The size, in bytes, of any scratch memory that you pass. If workspace is `nil`, this function ignores the `workspace_size` parameter.
- `filter_params`: The runtime filter parameters.

<a id="Discussion"></a>

## Discussion

The growing energy and performance costs of deep learning are driving its design towards more efficient models to minimize memory footprint and computational overhead. Sparsity is a widely used approach to deliver a significant reduction in model size, and to corresponding gains in computational, storage, and energy efficiency, without significant loss of accuracy.

Pruning is a fundamental technique that’s used to make parameters, such as weights, sparse. Pruning a parameter involves setting some of its values to zero and it’s only the nonzero values that are stored and participate in inference.

Frameworks that sparsify parameters prune values based on their magnitude and location. To gain the greatest improvement in performance, chunk pruned values together, to allow the CPU to skip reading an entire tile.

BNNS doesn’t directly support the standard sparse layouts coordinate list (COO) or compressed sparse row (CSR). Instead, BNNS provides functions that convert COO and CSR data to an optimized, opaque layout that you use with the existing machine learning primitives such as fully connected.

For example, the following diagonal, single-precision matrix requires 1024 bytes of storage:

```swift
 1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  3.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  4.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  5.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  6.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  7.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  8.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  9.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 10.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 12.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 13.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 14.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 15.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 16.0
```

You can represent the same values in CSR format as three arrays: the nonzero format as three arrays: the nonzero values, the column indices, and a third array that specifies where each row starts. In the following example, the zeroth item in the values array starts row `0`, the item at element `1` starts column `1`, and so on:

```swift
let weightsData: [Float] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let columnIndices: [Int32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let rowStarts: [Int32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

Pass the weights data, column indices, and row starts to [BNNSNDArrayFullyConnectedSparsifySparseCSR](bnnsndarrayfullyconnectedsparsifysparsecsr%28____________________%29.md) to generate the opaque sparse data for [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md).

```swift
let nnz = weightsData.count

var inputDenseShape = BNNSNDArrayDescriptor(dataType: BNNSDataType.float,
                                            shape: .matrixRowMajor(16, 16))
var inputColumnIndices = BNNSNDArrayDescriptor.allocate(initializingFrom: columnIndices,
                                                        shape: .vector(nnz))
var inputRowStarts = BNNSNDArrayDescriptor.allocate(initializingFrom: rowStarts,
                                                    shape: .vector(rowStarts.count))
var inputWeights = BNNSNDArrayDescriptor.allocate(initializingFrom: weightsData,
                                                  shape: .vector(nnz))

var sparsifiedWeights = BNNSNDArrayDescriptor()

var sparseParams = BNNSSparsityParameters()

BNNSNDArrayFullyConnectedSparsifySparseCSR(&inputDenseShape,
                                           &inputColumnIndices,
                                           &inputRowStarts,
                                           &inputWeights,
                                           &sparsifiedWeights,
                                           &sparseParams,
                                           1,
                                           nil, nil)
```

On return, `sparsifiedWeights` contains the weights that you pass to [BNNSLayerParametersFullyConnected](bnnslayerparametersfullyconnected.md). In this example, the data size of `sparsifiedWeights` is 144 bytes.

## See Also

### Sparse layers

- [BNNSNDArrayGetDataSize](bnnsndarraygetdatasize%28__%29.md): Returns the size, in bytes, that an array descriptor requires.
- [BNNSNDArrayFullyConnectedSparsifySparseCOO](bnnsndarrayfullyconnectedsparsifysparsecoo%28__________________%29.md): Deprecated. Converts a sparse tensor from the standardized coordinate list (COO) layout to a device-specific sparse layout that BNNS fully connected layers use.
- [BNNSSparsityTypeUnstructured](bnnssparsitytypeunstructured.md)
