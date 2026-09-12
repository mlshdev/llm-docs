> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/sparsetensor(sparsetensorwithtype:tensors:shape:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/sparsetensor(sparsetensorwithtype:tensors:shape:datatype:name:))

# sparseTensor(sparseTensorWithType:tensors:shape:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a sparse tensor representation.

## Declaration

```swift
func sparseTensor(sparseTensorWithType sparseStorageType: MPSGraphSparseStorageType, tensors inputTensorArray: [MPSGraphTensor], shape: [NSNumber], dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `sparseStorageType`: A sparseStorageType.
- `inputTensorArray`: An array of input tensors as \[sparseVals, indexTensor0, indexTensor1\].
- `shape`: The shape of the sparse tensor.
- `dataType`: The dataType of the sparse tensor.
- `name`: A name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

sparseVals corresponds to non zero values in matrix. indexTensor0 and indexTensor1 are indices used for indexing into sparse data structure. For COO, indexTensor0 is x index and indexTensor1 is y index. For CSC, indexTensor0 and indexTensor1 correspond to rowIndex and colStarts respectively. For CSR, indexTensor0 and indexTensor1 correspond to colIndex and rowStarts respectively. You must set input tensors appropriately for each sparse storage type.

# sparseTensorWithType:tensors:shape:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a sparse tensor representation.

## Declaration

```objectivec
- (MPSGraphTensor *) sparseTensorWithType:(MPSGraphSparseStorageType) sparseStorageType tensors:(NSArray<MPSGraphTensor *> *) inputTensorArray shape:(MPSShape *) shape dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `sparseStorageType`: A sparseStorageType.
- `inputTensorArray`: An array of input tensors as \[sparseVals, indexTensor0, indexTensor1\].
- `shape`: The shape of the sparse tensor.
- `dataType`: The dataType of the sparse tensor.
- `name`: A name for the operation.

<a id="return-value"></a>

## Return Value

A valid [MPSGraphTensor](../mpsgraphtensor.md) object.

<a id="discussion"></a>

## Discussion

sparseVals corresponds to non zero values in matrix. indexTensor0 and indexTensor1 are indices used for indexing into sparse data structure. For COO, indexTensor0 is x index and indexTensor1 is y index. For CSC, indexTensor0 and indexTensor1 correspond to rowIndex and colStarts respectively. For CSR, indexTensor0 and indexTensor1 correspond to colIndex and rowStarts respectively. You must set input tensors appropriately for each sparse storage type.
