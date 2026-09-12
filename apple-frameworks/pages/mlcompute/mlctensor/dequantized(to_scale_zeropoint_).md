> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/dequantized(to:scale:zeropoint:)](https://developer.apple.com/documentation/mlcompute/mlctensor/dequantized(to:scale:zeropoint:))

# dequantized(to:scale:zeroPoint:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Converts a tensor you quantize to a 32-bit floating-point tensor.

## Declaration

```swift
func dequantized(to type: MLCDataType, scale: MLCTensor, zeroPoint bias: MLCTensor) -> MLCTensor?
```

## Parameters

- `type`: The tensor data type.
- `scale`: The scale the system uses when quantizing the data.
- `bias`: The offset value the system uses when quantizing the data.

<a id="return-value"></a>

## Return Value

A tensor the system dequantizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The tensor type must be [MLCDataType.float32](../mlcdatatype/float32.md).

## See Also

### Converting Tensors

- [quantized(to:scale:bias:)](quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [quantized(to:scale:bias:axis:)](quantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [dequantized(to:scale:bias:axis:)](dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.

# tensorByDequantizingToType:scale:bias: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Converts a tensor you quantize to a 32-bit floating-point tensor.

## Declaration

```objectivec
- (MLCTensor *) tensorByDequantizingToType:(MLCDataType) type scale:(MLCTensor *) scale bias:(MLCTensor *) bias;
```

## Parameters

- `type`: The tensor data type.
- `scale`: The scale the system uses when quantizing the data.
- `bias`: The offset value the system uses when quantizing the data.

<a id="return-value"></a>

## Return Value

A tensor the system dequantizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The tensor type must be [MLCDataTypeFloat32](../mlcdatatype/float32.md).

## See Also

### Converting Tensors

- [tensorByQuantizingToType:scale:bias:](quantized%28to_scale_bias_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [tensorByQuantizingToType:scale:bias:axis:](quantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a 32-bit floating-point tensor with the scale and bias you specify.
- [tensorByDequantizingToType:scale:bias:axis:](dequantized%28to_scale_bias_axis_%29.md): Deprecated. Converts a tensor you quantize to a 32-bit floating-point tensor.
