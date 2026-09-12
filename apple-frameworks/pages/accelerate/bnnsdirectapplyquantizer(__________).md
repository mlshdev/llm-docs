> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdirectapplyquantizer(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsdirectapplyquantizer(_:_:_:_:_:))

# BNNSDirectApplyQuantizer(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Applies a quantization layer directly to two input matrices.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSDirectApplyQuantizer(_ layer_params: UnsafePointer<BNNSLayerParametersQuantization>, _ filter_params: UnsafePointer<BNNSFilterParameters>?, _ batch_size: Int, _ input_stride: Int, _ output_stride: Int) -> Int32
```

## Parameters

- `layer_params`: The layer parameters.
- `filter_params`: The filter runtime parameters.
- `batch_size`: The number of input-output pairs.
- `input_stride`: The increment, in values, between inputs.
- `output_stride`: The increment, in values, between outputs.

<a id="Discussion"></a>

## Discussion

Use this function, in conjunction with a [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md), to convert tensors to different precisions. Pass the [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md) quantizer function to convert a higher-precsion tensor to a lower-precision tensor. Pass [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md) to convert a lower-precsion tensor to a higher-precision tensor.

Quantization supports the following conversions:

| Source | Destination |
| --- | --- |
| `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat32` | `BNNSDataTypeInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt32` |

Dequantization supports the following conversions:

| Source | Destination |
| --- | --- |
| `BNNSDataTypeInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt32` | `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat32` |

You can provide optional scale and bias that the function applies during conversion. Quantization returns `y = scale*x + bias`, and dequantization returns `y = (x-bias)/scale`.

If you supply scale and bias descriptors, they must have a vector layout and a size that matches the size of the axis that you specify. If you’re applying scale and bias to the entire tensor, scale and bias descriptors must have a size of 1.

See [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md) and [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md) for examples of using this function.

## See Also

### Quantization functions

- [quantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/quantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Quantizes the input tensor and writes the result to the output tensor.
- [dequantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/dequantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Dequantizes the input tensor and writes the result to the output tensor.
- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.

# BNNSDirectApplyQuantizer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Applies a quantization layer directly to two input matrices.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSDirectApplyQuantizer(const BNNSLayerParametersQuantization *layer_params, const BNNSFilterParameters *filter_params, size_t batch_size, size_t input_stride, size_t output_stride);
```

## Parameters

- `layer_params`: The layer parameters.
- `filter_params`: The filter runtime parameters.
- `batch_size`: The number of input-output pairs.
- `input_stride`: The increment, in values, between inputs.
- `output_stride`: The increment, in values, between outputs.

<a id="Discussion"></a>

## Discussion

Use this function, in conjunction with a [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md), to convert tensors to different precisions. Pass the [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md) quantizer function to convert a higher-precsion tensor to a lower-precision tensor. Pass [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md) to convert a lower-precsion tensor to a higher-precision tensor.

Quantization supports the following conversions:

| Source | Destination |
| --- | --- |
| `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat32` | `BNNSDataTypeInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt32` |

Dequantization supports the following conversions:

| Source | Destination |
| --- | --- |
| `BNNSDataTypeInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt8` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeUInt32` | `BNNSDataTypeInt32` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat16` ![](https://developer.apple.com/images/com.apple.accelerate/spacer.png) `BNNSDataTypeFloat32` |

You can provide optional scale and bias that the function applies during conversion. Quantization returns `y = scale*x + bias`, and dequantization returns `y = (x-bias)/scale`.

If you supply scale and bias descriptors, they must have a vector layout and a size that matches the size of the axis that you specify. If you’re applying scale and bias to the entire tensor, scale and bias descriptors must have a size of 1.

See [BNNSQuantizerFunctionDequantize](bnnsquantizerfunctiondequantize.md) and [BNNSQuantizerFunctionQuantize](bnnsquantizerfunctionquantize.md) for examples of using this function.

## See Also

### Quantization functions

- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSLayerParametersQuantization](bnnslayerparametersquantization.md): Deprecated. A structure that contains the parameters of a quantization layer.
