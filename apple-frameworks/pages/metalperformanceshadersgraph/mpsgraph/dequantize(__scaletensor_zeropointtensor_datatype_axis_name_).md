> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scaletensor:zeropointtensor:datatype:axis:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scaletensor:zeropointtensor:datatype:axis:name:))

# dequantize(\_:scaleTensor:zeroPointTensor:dataType:axis:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates a dequantize operation and returns the result tensor.

## Declaration

```swift
func dequantize(_ tensor: MPSGraphTensor, scaleTensor: MPSGraphTensor, zeroPointTensor: MPSGraphTensor, dataType: MPSDataType, axis: Int, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor to be dequantized
- `scaleTensor`: Scale scalar or 1D Tensor parameter with size == tensor.shape\[axis\]
- `zeroPointTensor`: Bias scalar or 1D Tensor parameter with size == tensor.shape\[axis\]
- `dataType`: Float data type of the result tensor.
- `axis`: Axis on which the scale 1D value is being broadcasted
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the quantized `tensor` to a float tensor by applying a scale + bias transform: result = scaleTensor \* (tensor - zeroPointTensor)

Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`. The `scaleTensor` type and `dataType` must match (`MPSDataTypeFloat16`, `MPSDataTypeFloat32`, or `MPSDataTypeBFloat16`).

# dequantizeTensor:scaleTensor:zeroPointTensor:dataType:axis:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates a dequantize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) dequantizeTensor:(MPSGraphTensor *) tensor scaleTensor:(MPSGraphTensor *) scaleTensor zeroPointTensor:(MPSGraphTensor *) zeroPointTensor dataType:(MPSDataType) dataType axis:(NSInteger) axis name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor to be dequantized
- `scaleTensor`: Scale scalar or 1D Tensor parameter with size == tensor.shape\[axis\]
- `zeroPointTensor`: Bias scalar or 1D Tensor parameter with size == tensor.shape\[axis\]
- `dataType`: Float data type of the result tensor.
- `axis`: Axis on which the scale 1D value is being broadcasted
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the quantized `tensor` to a float tensor by applying a scale + bias transform: result = scaleTensor \* (tensor - zeroPointTensor)

Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`. The `scaleTensor` type and `dataType` must match (`MPSDataTypeFloat16`, `MPSDataTypeFloat32`, or `MPSDataTypeBFloat16`).
