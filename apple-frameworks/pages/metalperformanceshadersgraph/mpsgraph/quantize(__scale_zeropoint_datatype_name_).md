> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/quantize(_:scale:zeropoint:datatype:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/quantize(_:scale:zeropoint:datatype:name:))

# quantize(\_:scale:zeroPoint:dataType:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates a Quantize operation and returns the result tensor.

## Declaration

```swift
func quantize(_ tensor: MPSGraphTensor, scale: Double, zeroPoint: Double, dataType: MPSDataType, name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: Input tensor to be quantized
- `scale`: Scale scalar parameter
- `zeroPoint`: Bias scalar parameter (converted to dataType of resultTensor)
- `dataType`: Data type of the result tensor. Supports `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, and `MPSDataTypeFloat8E5M2`. Float8 output requires symmetric quantization (zeroPoint = 0).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the float `tensor` to a quantized tensor by applying a scale + bias transform: result = round(tensor / scale) + zeroPoint

# quantizeTensor:scale:zeroPoint:dataType:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+

Creates a Quantize operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) quantizeTensor:(MPSGraphTensor *) tensor scale:(double) scale zeroPoint:(double) zeroPoint dataType:(MPSDataType) dataType name:(NSString *) name;
```

## Parameters

- `tensor`: Input tensor to be quantized
- `scale`: Scale scalar parameter
- `zeroPoint`: Bias scalar parameter (converted to dataType of resultTensor)
- `dataType`: Data type of the result tensor. Supports `MPSDataTypeInt8`, `MPSDataTypeUInt8`, `MPSDataTypeFloat8E4M3`, and `MPSDataTypeFloat8E5M2`. Float8 output requires symmetric quantization (zeroPoint = 0).
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array of datatype dataType

<a id="discussion"></a>

## Discussion

Convert the float `tensor` to a quantized tensor by applying a scale + bias transform: result = round(tensor / scale) + zeroPoint
