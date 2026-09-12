> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/convolutionlayer](https://developer.apple.com/documentation/accelerate/bnns/convolutionlayer)

# BNNS.ConvolutionLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A layer object that wraps a convolution filter and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class ConvolutionLayer
```

## Topics

### Creating a Convolution Layer

- [init(type:input:weights:output:bias:padding:activation:groupCount:stride:dilationStride:filterParameters:)](convolutionlayer/init%28type_input_weights_output_bias_padding_activation_groupcount_stride_dilationstride_filterparameters_%29.md): Deprecated. Returns a new convolution layer.

### Specifying a Convolution Type

- [BNNS.ConvolutionType](convolutiontype.md): Deprecated. Constants that describe convolution types.

### Specifying Convolution Padding

- [BNNS.ConvolutionPadding](convolutionpadding.md): Deprecated. Constants that describe convolution padding modes.

### Applying a Convolution Layer

- [applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingWeightsGradient:generatingBiasGradient:)](convolutionlayer/applybackward%28batchsize_input_output_outputgradient_generatinginputgradient_generatingweightsgradient_generatingbiasgradient_%29.md): Deprecated. Applies the layer backward to generate input gradients.

## Relationships

### Inherits From

- [BNNS.UnaryLayer](unarylayer.md)

### Inherited By

- [BNNS.FullyConnectedLayer](fullyconnectedlayer.md)

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](../bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:)](../bnnsfiltercreateconvolutionlayer%28________%29.md): Deprecated. Returns a convolution filter, initialized with input, output, layer, and filter parameters.
- [BNNSLayerParametersConvolution](../bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](../bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution(\_:\_:)](../bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.
