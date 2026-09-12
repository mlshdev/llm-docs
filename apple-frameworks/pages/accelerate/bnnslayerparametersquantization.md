> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersquantization](https://developer.apple.com/documentation/accelerate/bnnslayerparametersquantization)

# BNNSLayerParametersQuantization (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

A structure that contains the parameters of a quantization layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersQuantization
```

## Topics

### Initializers

- [init()](bnnslayerparametersquantization/init%28%29.md): Deprecated. Returns a new quantization layer parameters structure.
- [init(axis_mask:function:i_desc:o_desc:scale:bias:)](bnnslayerparametersquantization/init%28axis_mask_function_i_desc_o_desc_scale_bias_%29.md): Deprecated. Returns a new quantization layer parameters structure using the supplied parameters.

### Instance Properties

- [axis_mask](bnnslayerparametersquantization/axis_mask.md): Deprecated. A bitmask that defines the axis to which the function applies scale and bias.
- [function](bnnslayerparametersquantization/function.md): Deprecated. The quantize function.
- [i_desc](bnnslayerparametersquantization/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersquantization/o_desc.md): Deprecated. The descriptor of the output.
- [scale](bnnslayerparametersquantization/scale.md): Deprecated. The descriptor of the scale.
- [bias](bnnslayerparametersquantization/bias.md): Deprecated. The descriptor of the bias.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Quantization functions

- [quantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/quantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Quantizes the input tensor and writes the result to the output tensor.
- [dequantize(batchSize:input:output:axis:scale:bias:filterParameters:)](bnns/dequantize%28batchsize_input_output_axis_scale_bias_filterparameters_%29.md): Deprecated. Dequantizes the input tensor and writes the result to the output tensor.
- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSDirectApplyQuantizer(\_:\_:\_:\_:\_:)](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.

# BNNSLayerParametersQuantization (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a quantization layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersQuantization;
```

## Topics

### Instance Properties

- [axis_mask](bnnslayerparametersquantization/axis_mask.md): Deprecated. A bitmask that defines the axis to which the function applies scale and bias.
- [function](bnnslayerparametersquantization/function.md): Deprecated. The quantize function.
- [i_desc](bnnslayerparametersquantization/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersquantization/o_desc.md): Deprecated. The descriptor of the output.
- [scale](bnnslayerparametersquantization/scale.md): Deprecated. The descriptor of the scale.
- [bias](bnnslayerparametersquantization/bias.md): Deprecated. The descriptor of the bias.

## See Also

### Quantization functions

- [BNNSQuantizerFunction](bnnsquantizerfunction.md): Constants that describe quantization functions.
- [BNNSDirectApplyQuantizer](bnnsdirectapplyquantizer%28__________%29.md): Deprecated. Applies a quantization layer directly to two input matrices.
