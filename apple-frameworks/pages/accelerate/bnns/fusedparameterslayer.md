> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/fusedparameterslayer](https://developer.apple.com/documentation/accelerate/bnns/fusedparameterslayer)

# BNNS.FusedParametersLayer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

A layer object that wraps a fused layer and manages its deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class FusedParametersLayer
```

<a id="overview"></a>

## Overview

Use a [BNNS.FusedParametersLayer](fusedparameterslayer.md) instance to fuse component layers with the following configurations:

- Convolution → Normalization
- Fully Connected → Normalization
- Transposed Convolution → Normalization
- Convolution → Quantization
- Fully Connected → Quantization
- Transposed Convolution → Quantization
- Arithmetic → Normalization

## Topics

### Creating a Fused Parameters Layer

- [init(input:output:fusedLayerParameters:filterParameters:)](fusedparameterslayer/init%28input_output_fusedlayerparameters_filterparameters_%29.md): Deprecated. Creates a new fused layer from an array of layer parameters.
- [init(inputA:inputB:output:fusedLayerParameters:filterParameters:)](fusedparameterslayer/init%28inputa_inputb_output_fusedlayerparameters_filterparameters_%29.md): Deprecated. Creates a new fused layer from an array of layer parameters, where the first layer accepts two inputs.
- [init(inputA:inputB:inputC:output:fusedLayerParameters:filterParameters:)](fusedparameterslayer/init%28inputa_inputb_inputc_output_fusedlayerparameters_filterparameters_%29.md): Deprecated. Creates a new fused layer from an array of layer parameters, where the first layer accepts three inputs.

### Specifying a Layer Parameter

- [BNNS.FusedUnaryArithmeticParameters](fusedunaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused unary arithmetic layer.
- [BNNS.FusedBinaryArithmeticParameters](fusedbinaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused binary arithmetic layer.
- [BNNS.FusedTernaryArithmeticParameters](fusedternaryarithmeticparameters.md): Deprecated. A structure that contains the parameters for a fused ternary arithmetic layer.
- [BNNS.FusedConvolutionParameters](fusedconvolutionparameters.md): Deprecated. A structure that contains the parameters for a fused convolution layer.
- [BNNS.FusedQuantizationParameters](fusedquantizationparameters.md): Deprecated. A structure that contains the parameters for a fused quantization layer.
- [BNNS.FusedDequantizationParameters](fuseddequantizationparameters.md): Deprecated. A structure that contains the parameters for a fused dequantization layer.
- [BNNS.FusedFullyConnectedParameters](fusedfullyconnectedparameters.md): Deprecated. A structure that contains the parameters for a fused fully connected layer.
- [BNNS.FusedNormalizationParameters](fusednormalizationparameters.md): Deprecated. A structure that contains the parameters for a fused normalization layer.

### Applying a Fused Parameters Layer

- [apply(batchSize:inputA:inputB:output:for:)](fusedparameterslayer/apply%28batchsize_inputa_inputb_output_for_%29.md): Deprecated. Applies the layer to a set of input objects and writes the result to a set of output objects, where the first layer accepts two inputs.
- [apply(batchSize:inputA:inputB:inputC:output:for:)](fusedparameterslayer/apply%28batchsize_inputa_inputb_inputc_output_for_%29.md): Deprecated. Applies the layer to a set of input objects and writes the result to a set of output objects, where the first layer accepts two inputs.
- [applyBackward(batchSize:inputA:inputB:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingParameterGradients:)](fusedparameterslayer/applybackward%28batchsize_inputa_inputb_output_outputgradient_generatinginputagradient_generatinginputbgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients, where the first layer accepts two inputs.
- [applyBackward(batchSize:inputA:inputB:inputC:output:outputGradient:generatingInputAGradient:generatingInputBGradient:generatingInputCGradient:generatingParameterGradients:)](fusedparameterslayer/applybackward%28batchsize_inputa_inputb_inputc_output_outputgradient_generatinginputagradient_generatinginputbgradient_generatinginputcgradient_generatingparametergradients_%29.md): Deprecated. Applies the layer backward to generate input gradients, where the first layer accepts three inputs.

## Relationships

### Inherits From

- [BNNS.FusedLayer](fusedlayer.md)

## See Also

### Fused layers

- [FusableLayerParameters](../fusablelayerparameters.md): Deprecated.
- [BNNS.FusedConvolutionNormalizationLayer](fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](../bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](../bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
