> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/quantized(to:scale:bias:axis:)](https://developer.apple.com/documentation/mlcompute/mlctensor/quantized(to:scale:bias:axis:))

# quantized(to:scale:bias:axis:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Converts a 32-bit floating-point tensor with the scale and bias you specify.

## Declaration

```swift
func quantized(to type: MLCDataType, scale: MLCTensor, bias: MLCTensor, axis: Int) -> MLCTensor?
```

## Parameters

- `type`: The tensor data type.
- `scale`: The scale to apply for quantizing.
- `bias`: The offset value that maps to float zero.
- `axis`: The dimension on which to apply per-channel quantization.

<a id="return-value"></a>

## Return Value

A tensor the system quantizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The tensor type must be [MLCDataType.int8](../mlcdatatype/int8.md), [MLCDataType.uint8](../mlcdatatype/uint8.md), or [MLCDataType.int32](../mlcdatatype/int32.md).

## See Also

### Converting Tensors

- [quantized(to:scale:bias:)](quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [dequantized(to:scale:zeroPoint:)](dequantized%28to_scale_zeropoint_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
- [dequantized(to:scale:bias:axis:)](dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.

# tensorByQuantizingToType:scale:bias:axis: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Converts a 32-bit floating-point tensor with the scale and bias you specify.

## Declaration

```objectivec
- (MLCTensor *) tensorByQuantizingToType:(MLCDataType) type scale:(MLCTensor *) scale bias:(MLCTensor *) bias axis:(NSInteger) axis;
```

## Parameters

- `type`: The tensor data type.
- `scale`: The scale to apply for quantizing.
- `bias`: The offset value that maps to float zero.
- `axis`: The dimension on which to apply per-channel quantization.

<a id="return-value"></a>

## Return Value

A tensor the system quantizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The tensor type must be [MLCDataTypeInt8](../mlcdatatype/int8.md), [MLCDataTypeUInt8](../mlcdatatype/uint8.md), or [MLCDataTypeInt32](../mlcdatatype/int32.md).

## See Also

### Converting Tensors

- [tensorByQuantizingToType:scale:bias:](quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [tensorByDequantizingToType:scale:bias:](dequantized%28to_scale_zeropoint_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
- [tensorByDequantizingToType:scale:bias:axis:](dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
