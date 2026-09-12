> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/hammingdistance(primary:secondary:resultdatatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/hammingdistance(primary:secondary:resultdatatype:name:))

# HammingDistance(primary:secondary:resultDataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the hamming distance of two input tensors with support for broadcasting.

## Declaration

```swift
func HammingDistance(primary primaryTensor: MPSGraphTensor, secondary secondaryTensor: MPSGraphTensor, resultDataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `primaryTensor`: The first input tensor.
- `secondaryTensor`: The second input tensor.
- `resultDataType`: The datatype of the return MPSGraphTensor. Must be either `MPSDataTypeUInt32` or `MPSDataTypeUInt16`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid tensor containing the hamming distance between the input tensors.

<a id="discussion"></a>

## Discussion

The hamming distance is computed between 2 sets of vectors and the last dimension(s) of each input tensor is considered a vector.

# HammingDistanceWithPrimaryTensor:secondaryTensor:resultDataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Computes the hamming distance of two input tensors with support for broadcasting.

## Declaration

```objectivec
- (MPSGraphTensor *) HammingDistanceWithPrimaryTensor:(MPSGraphTensor *) primaryTensor secondaryTensor:(MPSGraphTensor *) secondaryTensor resultDataType:(MPSDataType) resultDataType name:(NSString *) name;
```

## Parameters

- `primaryTensor`: The first input tensor.
- `secondaryTensor`: The second input tensor.
- `resultDataType`: The datatype of the return MPSGraphTensor. Must be either `MPSDataTypeUInt32` or `MPSDataTypeUInt16`.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid tensor containing the hamming distance between the input tensors.

<a id="discussion"></a>

## Discussion

The hamming distance is computed between 2 sets of vectors and the last dimension(s) of each input tensor is considered a vector.
