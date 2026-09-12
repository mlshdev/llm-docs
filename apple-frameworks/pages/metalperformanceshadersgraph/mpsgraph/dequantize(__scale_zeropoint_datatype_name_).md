> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scale:zeropoint:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/dequantize(_:scale:zeropoint:datatype:name:))

# dequantize(\_:scale:zeroPoint:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates Dequantize operation and returns the result tensor.

## Declaration

```swift
func dequantize(_ tensor: MPSGraphTensor, scale: Double, zeroPoint: Double, dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor to be dequantized
- `scale`: Scale scalar parameter
- `zeroPoint`: Bias scalar parameter (converted to dataType of tensor)
- `dataType`: Float data type of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the quantized `tensor` to a float tensor by applying a scale + bias transform: result = scale \* (tensor - zeroPoint)

Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`. The scale type and `dataType` must match (`MPSDataTypeFloat16`, `MPSDataTypeFloat32`, or `MPSDataTypeBFloat16`).

# dequantizeTensor:scale:zeroPoint:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates Dequantize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) dequantizeTensor:(MPSGraphTensor *) tensor scale:(double) scale zeroPoint:(double) zeroPoint dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor to be dequantized
- `scale`: Scale scalar parameter
- `zeroPoint`: Bias scalar parameter (converted to dataType of tensor)
- `dataType`: Float data type of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the quantized `tensor` to a float tensor by applying a scale + bias transform: result = scale \* (tensor - zeroPoint)

Supported input types: `MPSDataTypeInt4`, `MPSDataTypeUInt4`, `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, `MPSDataTypeFloat8E5M2`. The scale type and `dataType` must match (`MPSDataTypeFloat16`, `MPSDataTypeFloat32`, or `MPSDataTypeBFloat16`).
